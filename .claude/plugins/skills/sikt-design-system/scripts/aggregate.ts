/**
 * Aggregator for the sds-design-system Claude skill.
 *
 * Walks packages/* in this monorepo and emits deterministic markdown reference
 * files under ../references/. Re-running with no source changes produces no
 * git diff.
 *
 * Invoke via:  npm run skill:sync
 * (runs `node --experimental-strip-types ...` under the hood)
 */

import fs from "node:fs";
import path from "node:path";

import docgenModule from "react-docgen-typescript";

// react-docgen-typescript ships as CJS; pick up the named exports via the
// default-interop shim.
const docgen = docgenModule;

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const SCRIPT_DIR = import.meta.dirname;
const SKILL_DIR = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = path.resolve(SKILL_DIR, "..", "..", "..", "..");
const PACKAGES_DIR = path.join(REPO_ROOT, "packages");
const TSCONFIG = path.join(REPO_ROOT, "tsconfig.json");
const REFS_DIR = path.join(SKILL_DIR, "references");
const COMPONENTS_DIR = path.join(REFS_DIR, "components");
const TOKENS_REFS_DIR = path.join(REFS_DIR, "tokens");

// ---------------------------------------------------------------------------
// Classification
// ---------------------------------------------------------------------------

// Config-only packages. They publish lint configs etc., not runtime APIs.
const SKIP_PACKAGES = new Set([
  "browserslist-config",
  "eslint-config",
  "prettier-config",
  "stylelint-config",
]);

// Packages handled with bespoke writers.
const SPECIAL_PACKAGES = new Set(["tokens", "icons", "hooks"]);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PackageJson {
  name: string;
  version: string;
  description?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

interface ParsedProp {
  name: string;
  type: string;
  required: boolean | string; // string allows "yes*" for discriminated-union props
  defaultValue: string | null;
  description: string;
}

interface ParsedComponent {
  displayName: string;
  description: string;
  filePath: string;
  props: ParsedProp[];
  inheritsFrom: string[];
}

interface StoryFile {
  file: string; // e.g. "Button.stories" — without extension
  stories: string[]; // story export names
}

interface ComponentPackageMeta {
  slug: string;
  packageName: string;
  version: string;
  description: string;
  dependencies: Record<string, string>;
  readme: string | null;
  exports: string[];
  components: ParsedComponent[];
  cssClasses: string[];
  storyFiles: StoryFile[];
}

interface IndexEntry {
  slug: string;
  packageName: string;
  version: string;
  exports: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

function readFileOrNull(p: string): string | null {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

function readJson(p: string): unknown {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function walk(dir: string, predicate: (p: string) => boolean): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true, recursive: true });
  const files: string[] = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    const full = path.join(e.parentPath, e.name);
    if (predicate(full)) files.push(full);
  }
  return files.sort();
}

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFileIfChanged(p: string, content: string) {
  // Always end with single trailing newline for deterministic diffs.
  const normalized = content.endsWith("\n") ? content : content + "\n";
  const existing = readFileOrNull(p);
  if (existing === normalized) return false;
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, normalized, "utf8");
  return true;
}

function clearGeneratedDir() {
  // Only clear the auto-generated subdirectories and top-level files.
  // The guides/ directory is manually maintained and must not be deleted.
  for (const name of ["components", "tokens"]) {
    const p = path.join(REFS_DIR, name);
    if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
  }
  for (const name of ["icons.md", "index.md"]) {
    const p = path.join(REFS_DIR, name);
    if (fs.existsSync(p)) fs.rmSync(p);
  }
  ensureDir(REFS_DIR);
  ensureDir(COMPONENTS_DIR);
  ensureDir(TOKENS_REFS_DIR);
}

// ---------------------------------------------------------------------------
// react-docgen-typescript setup
// ---------------------------------------------------------------------------

const docgenParser = docgen.withCustomConfig(TSCONFIG, {
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  savePropValueAsString: true,
  propFilter: (prop) => {
    // Drop props inherited from third-party packages (React's massive HTML
    // attribute lists are not useful to spell out in every component table).
    if (prop.parent) {
      return !prop.parent.fileName.includes("node_modules");
    }
    return true;
  },
});

function parseComponentsForPackage(slug: string): ParsedComponent[] {
  const srcDir = path.join(PACKAGES_DIR, slug, "src");
  const files = walk(
    srcDir,
    (f) =>
      f.endsWith(".tsx") &&
      !f.endsWith(".test.tsx") &&
      !f.endsWith(".stories.tsx"),
  );
  if (files.length === 0) return [];

  const docs = docgenParser.parse(files);

  return docs
    .map<ParsedComponent>((doc) => {
      const exclusionMap = findExclusiveRequiredPropPairs(doc.filePath);
      const props = Object.entries(doc.props)
        .map<ParsedProp>(([name, p]) => {
          const exclusiveWith = exclusionMap.get(name) ?? [];
          const partnerList = exclusiveWith.map((x) => `\`${x}\``).join(" or ");
          const constraint = exclusiveWith.length
            ? `Required unless ${partnerList} is set. Mutually exclusive with ${partnerList}.`
            : "";
          const baseDescription = p.description.trim();
          return {
            name,
            type: formatPropType(p),
            required: exclusiveWith.length ? "yes*" : p.required,
            defaultValue: extractDefaultValue(p.defaultValue),
            description: constraint
              ? constraint + (baseDescription ? " " + baseDescription : "")
              : baseDescription,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      const inheritsFrom = collectInheritsFrom(doc.filePath, doc.displayName);

      return {
        displayName: doc.displayName,
        description: doc.description.trim(),
        filePath: path.relative(REPO_ROOT, doc.filePath),
        props,
        inheritsFrom,
      };
    })
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
}

function extractDefaultValue(dv: unknown): string | null {
  if (dv && typeof dv === "object" && "value" in dv) {
    const v = dv.value;
    if (typeof v === "string") return v;
  }
  return null;
}

function normalizeType(t: string): string {
  // Collapse whitespace and tidy union ordering-noise from docgen.
  return t.replace(/\s+/g, " ").trim();
}

function formatPropType(p: {
  type?: { name?: string; value?: unknown };
}): string {
  const rawName = p.type?.name ?? "unknown";
  // For enum-style unions docgen sets name === "enum" and puts the literal
  // values on .value as an array of { value: '"strong"' }.
  const rawValue = p.type?.value;
  if (rawName === "enum" && Array.isArray(rawValue)) {
    const values = (rawValue as { value?: unknown }[])
      .map((v) => (typeof v.value === "string" ? v.value : String(v.value)))
      .filter(Boolean);
    if (values.length > 0) return values.join(" | ");
  }
  return normalizeType(rawName);
}

// Split a string on commas that are not inside angle brackets (generics).
// E.g. `Omit<A, B>, C` → ["Omit<A, B>", "C"]
function splitAtTopLevelCommas(s: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "<") depth++;
    else if (s[i] === ">") depth--;
    else if (s[i] === "," && depth === 0) {
      parts.push(s.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(s.slice(start).trim());
  return parts.filter(Boolean);
}

function collectInheritsFrom(filePath: string, displayName: string): string[] {
  // Lightweight regex over the source to surface `interface XProps extends Y, Z`
  // so the component md notes which native HTML props are inherited.
  const src = readFileOrNull(filePath);
  if (!src) return [];
  const propsName = `${displayName}Props`;
  const patterns = [
    new RegExp(`interface\\s+${propsName}\\b[^{]*extends\\s+([^{]+){`, "m"),
    new RegExp(
      `interface\\s+[A-Za-z0-9_]*${displayName}BaseProps\\b[^{]*extends\\s+([^{]+){`,
      "m",
    ),
  ];
  for (const pat of patterns) {
    const m = src.match(pat);
    if (m) {
      return splitAtTopLevelCommas(m[1])
        .map((s) =>
          s.replace(/\s+/g, " ").replace(/< /g, "<").replace(/ >/g, ">").trim(),
        )
        .filter(Boolean)
        .sort();
    }
  }
  return [];
}

// Detects props that are mutually exclusive via `?: never` discriminated unions.
// Returns a map of propName → [sibling props it cannot coexist with].
// A prop qualifies when it appears as `?: never` in at least one branch AND as
// a required prop in at least one other branch of the same union type.
function findExclusiveRequiredPropPairs(
  filePath: string,
): Map<string, string[]> {
  const src = readFileOrNull(filePath);
  if (!src) return new Map();

  // Extract the contents of every top-level { … } block in the file.
  const blocks: string[] = [];
  let depth = 0;
  let blockStart = -1;
  for (let i = 0; i < src.length; i++) {
    if (src[i] === "{") {
      if (!depth) blockStart = i;
      depth++;
    } else if (src[i] === "}") {
      depth--;
      if (!depth && blockStart !== -1) {
        blocks.push(src.slice(blockStart + 1, i));
        blockStart = -1;
      }
    }
  }

  // For each block, collect `?: never` props and strictly-required props.
  // Parse line-by-line to reliably distinguish `prop:` from `prop?:`.
  const blockInfos = blocks.map((block) => {
    const neverProps = new Set<string>();
    const strictRequired = new Set<string>();
    for (const line of block.split(/[\n;]/)) {
      const t = line.trim();
      if (!t || t.startsWith("//")) continue;
      const neverMatch = /^["']?([\w-]+)["']?\s*\?:\s*never\b/.exec(t);
      if (neverMatch) {
        neverProps.add(neverMatch[1]);
        continue;
      }
      if (/["']?[\w-]+["']?\s*\?:/.test(t)) continue; // optional, not never
      const reqMatch = /^["']?([\w-]+)["']?\s*:\s*\S/.exec(t);
      if (reqMatch) strictRequired.add(reqMatch[1]);
    }
    return { neverProps, strictRequired };
  });

  // Props that appear as required in some block AND as `?: never` in another.
  const neverAnywhere = new Set<string>();
  const requiredAnywhere = new Set<string>();
  for (const b of blockInfos) {
    for (const p of b.neverProps) neverAnywhere.add(p);
    for (const p of b.strictRequired) requiredAnywhere.add(p);
  }
  const exclusiveProps = new Set(
    [...neverAnywhere].filter((p) => requiredAnywhere.has(p)),
  );
  if (!exclusiveProps.size) return new Map();

  // For each exclusive prop, find the sibling props it cannot coexist with:
  // look at blocks where this prop is `?: never` and note which other exclusive
  // props are strictly required there.
  const result = new Map<string, string[]>();
  for (const propA of exclusiveProps) {
    const exclusiveWith: string[] = [];
    for (const block of blockInfos) {
      if (!block.neverProps.has(propA)) continue;
      for (const propB of exclusiveProps) {
        if (
          propB !== propA &&
          block.strictRequired.has(propB) &&
          !exclusiveWith.includes(propB)
        ) {
          exclusiveWith.push(propB);
        }
      }
    }
    if (exclusiveWith.length) result.set(propA, exclusiveWith);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Package scanning
// ---------------------------------------------------------------------------

function listComponentPackageSlugs(): string[] {
  return fs
    .readdirSync(PACKAGES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((slug) => {
      if (SKIP_PACKAGES.has(slug)) return false;
      if (SPECIAL_PACKAGES.has(slug)) return false;
      const pkgPath = path.join(PACKAGES_DIR, slug, "package.json");
      return fs.existsSync(pkgPath);
    })
    .sort();
}

function readPackageJson(slug: string): PackageJson {
  return readJson(path.join(PACKAGES_DIR, slug, "package.json")) as PackageJson;
}

function readReadme(slug: string): string | null {
  return readFileOrNull(path.join(PACKAGES_DIR, slug, "README.md"));
}

function cleanExportName(part: string): string | null {
  // Handles "Foo", "type Foo", "Foo as Bar", "type Foo as Bar"
  const segments = part.trim().split(/\s+as\s+/i);
  const afterAs = segments[segments.length - 1].trim();
  const cleaned = afterAs.replace(/^type\s+/i, "").trim();
  return cleaned || null;
}

function parseNamedExports(src: string): string[] {
  const names = new Set<string>();
  // `export { Foo, Bar }` and `export type { Foo }`
  const blockRe = /export\s+(?:type\s+)?\{([^}]+)\}/g;
  for (const m of src.matchAll(blockRe)) {
    for (const part of m[1].split(",")) {
      const cleaned = cleanExportName(part);
      if (cleaned) names.add(cleaned);
    }
  }
  // `export const Foo`, `export function Bar`, `export class Baz`
  const declRe =
    /export\s+(?:type\s+|interface\s+|const\s+|function\s+|class\s+|let\s+)([A-Za-z_][A-Za-z0-9_]*)/g;
  for (const m of src.matchAll(declRe)) {
    names.add(m[1]);
  }
  return [...names];
}

function extractExports(slug: string): string[] {
  const indexPath = path.join(PACKAGES_DIR, slug, "index.ts");
  const src = readFileOrNull(indexPath);
  if (!src) return [];
  return parseNamedExports(src).sort();
}

function extractCssClasses(slug: string): string[] {
  const classes = new Set<string>();
  const re = /\.(sds-[a-zA-Z0-9_-]+)/g;

  // Prefer the compiled CSS — it has modifiers expanded from `&--xxx` nesting.
  const distCss = path.join(PACKAGES_DIR, slug, "dist", "index.css");
  if (fs.existsSync(distCss)) {
    const content = fs.readFileSync(distCss, "utf8");
    for (const m of content.matchAll(re)) classes.add(m[1]);
    return [...classes].sort();
  }

  // Fallback: scan source pcss files (will miss `&--modifier` patterns).
  const srcDir = path.join(PACKAGES_DIR, slug, "src");
  const files = walk(srcDir, (f) => f.endsWith(".pcss") || f.endsWith(".css"));
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    for (const m of content.matchAll(re)) classes.add(m[1]);
  }
  return [...classes].sort();
}

function extractStories(slug: string): StoryFile[] {
  const storiesDir = path.join(PACKAGES_DIR, slug, "stories");
  if (!fs.existsSync(storiesDir)) return [];
  const files = fs
    .readdirSync(storiesDir)
    .filter((f) => f.endsWith(".stories.tsx"))
    .sort();
  const out: StoryFile[] = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(storiesDir, file), "utf8");
    const stories = new Set<string>();
    const re = /export\s+const\s+([A-Z][A-Za-z0-9_]*)\s*:\s*Story\b/g;
    for (const m of content.matchAll(re)) {
      stories.add(m[1]);
    }
    if (stories.size > 0) {
      out.push({
        file: file.replace(/\.stories\.tsx$/, ""),
        stories: [...stories].sort(),
      });
    }
  }
  return out;
}

function scanComponentPackage(slug: string): ComponentPackageMeta {
  const pkg = readPackageJson(slug);
  const components = parseComponentsForPackage(slug);
  return {
    slug,
    packageName: pkg.name,
    version: pkg.version,
    description: pkg.description ?? "",
    dependencies: pkg.dependencies ?? {},
    readme: readReadme(slug),
    exports: extractExports(slug),
    components,
    cssClasses: extractCssClasses(slug),
    storyFiles: extractStories(slug),
  };
}

// ---------------------------------------------------------------------------
// Component markdown writer
// ---------------------------------------------------------------------------

function exportsList(meta: ComponentPackageMeta): string {
  const componentNames = meta.components.map((c) => c.displayName);
  const names =
    componentNames.length > 0
      ? componentNames
      : meta.exports.filter((n) => !n.endsWith("Props"));
  if (names.length === 0) return "—";
  return names
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((n) => `\`${n}\``)
    .join(", ");
}

function md_escape(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function renderPropsTable(props: ParsedProp[]): string {
  if (props.length === 0) return "_No declared props._\n";
  const lines: string[] = [];
  lines.push("| Prop | Type | Required | Default | Description |");
  lines.push("| --- | --- | --- | --- | --- |");
  for (const p of props) {
    const reqCell =
      typeof p.required === "string" ? p.required : p.required ? "yes" : "no";
    lines.push(
      `| \`${p.name}\` | \`${md_escape(p.type)}\` | ${reqCell} | ${p.defaultValue ? `\`${md_escape(p.defaultValue)}\`` : "—"} | ${md_escape(p.description) || "—"} |`,
    );
  }
  return lines.join("\n") + "\n";
}

function renderComponentMd(meta: ComponentPackageMeta): string {
  const parts: string[] = [];
  parts.push(`# ${meta.packageName}`);
  parts.push("");
  parts.push(`Version: \`${meta.version}\`  `);
  parts.push(
    `Package slug: \`${meta.slug}\` (under \`packages/${meta.slug}\`)`,
  );
  parts.push("");

  if (meta.description) {
    parts.push(meta.description);
    parts.push("");
  }

  parts.push("## Install");
  parts.push("");
  parts.push("```sh");
  parts.push(`npm i -s ${meta.packageName}`);
  parts.push("```");
  parts.push("");
  parts.push("```ts");
  if (meta.components.length > 0) {
    const sample = meta.components[0].displayName;
    parts.push(`import { ${sample} } from "${meta.packageName}";`);
  } else if (meta.exports.length > 0) {
    parts.push(`import { ${meta.exports[0]} } from "${meta.packageName}";`);
  } else {
    parts.push(`import "${meta.packageName}";`);
  }
  parts.push("```");
  parts.push("");
  parts.push(
    `Add \`@import "${meta.packageName}/dist/index.css";\` to your app's \`globals.css\` — never import component CSS inside component files.`,
  );
  parts.push("");

  const NO_CSS_PKGS = new Set([
    "@sikt/sds-core",
    "@sikt/sds-tokens",
    "@sikt/sds-hooks",
  ]);
  const transitiveCssDeps = Object.keys(meta.dependencies)
    .filter((d) => d.startsWith("@sikt/sds-") && !NO_CSS_PKGS.has(d))
    .sort();
  if (transitiveCssDeps.length > 0) {
    parts.push(
      `Also import CSS for transitive SDS dependencies (they render components from these packages internally):`,
    );
    parts.push("");
    for (const dep of transitiveCssDeps) {
      parts.push(`- \`@import "${dep}/dist/index.css";\``);
    }
    parts.push("");
  }

  if (meta.exports.length > 0) {
    parts.push("## Exports");
    parts.push("");
    for (const name of meta.exports) {
      parts.push(`- \`${name}\``);
    }
    parts.push("");
  }

  if (meta.components.length > 0) {
    parts.push("## Components");
    parts.push("");
    for (const c of meta.components) {
      parts.push(`### ${c.displayName}`);
      parts.push("");
      parts.push(`Source: \`${c.filePath}\``);
      parts.push("");
      if (c.description) {
        parts.push(c.description);
        parts.push("");
      }
      if (c.inheritsFrom.length > 0) {
        parts.push(
          `Extends: ${c.inheritsFrom.map((s) => `\`${s}\``).join(", ")}`,
        );
        parts.push("");
      }
      parts.push("**Props**");
      parts.push("");
      parts.push(renderPropsTable(c.props));
    }
  }

  if (meta.cssClasses.length > 0) {
    parts.push("## CSS class names");
    parts.push("");
    parts.push(
      "Available when `" + meta.packageName + "/dist/index.css` is imported.",
    );
    parts.push("");
    for (const cls of meta.cssClasses) {
      parts.push(`- \`.${cls}\``);
    }
    parts.push("");
  }

  if (meta.storyFiles.length > 0) {
    parts.push("## Storybook examples");
    parts.push("");
    parts.push(
      "Examples are visible at https://designsystem.sikt.no/ under the corresponding component.",
    );
    parts.push("");
    for (const sf of meta.storyFiles) {
      parts.push(`- **${sf.file}**: ${sf.stories.join(", ")}`);
    }
    parts.push("");
  }

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Token writers
// ---------------------------------------------------------------------------

interface TokenVar {
  name: string;
  value: string;
}

const TOKEN_CSS_DIR = path.join(PACKAGES_DIR, "tokens", "dist", "css");

function parseCssVarBlock(content: string): TokenVar[] {
  const out: TokenVar[] = [];
  const re = /(--sds-[a-z0-9-]+)\s*:\s*([^;]+);/g;
  for (const m of content.matchAll(re)) {
    out.push({ name: m[1], value: m[2].trim() });
  }
  return out;
}

function readBaseTokens(): TokenVar[] {
  const src = readFileOrNull(path.join(TOKEN_CSS_DIR, "tokens.css"));
  return src ? parseCssVarBlock(src) : [];
}

function readTabletOverrides(): TokenVar[] {
  const src = readFileOrNull(path.join(TOKEN_CSS_DIR, "tokens.tablet.css"));
  return src ? parseCssVarBlock(src) : [];
}

function readDesktopOverrides(): TokenVar[] {
  const src = readFileOrNull(path.join(TOKEN_CSS_DIR, "tokens.desktop.css"));
  return src ? parseCssVarBlock(src) : [];
}

function readColorTokens(): TokenVar[] {
  const src = readFileOrNull(path.join(TOKEN_CSS_DIR, "color.css"));
  return src ? parseCssVarBlock(src) : [];
}

function groupByPrefix(vars: TokenVar[], prefix: string): TokenVar[] {
  return vars
    .filter((v) => v.name.startsWith(prefix))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function groupBySecondLevel(vars: TokenVar[]): Record<string, TokenVar[]> {
  // For `--sds-color-brand-...` group key is `brand`. Assumes prefix is
  // `--sds-<category>-<group>-...`.
  const out: Record<string, TokenVar[]> = {};
  for (const v of vars) {
    const parts = v.name.split("-"); // ["", "", "sds", "color", "brand", ...]
    const group = parts[4] ?? "other";
    (out[group] ??= []).push(v);
  }
  for (const k of Object.keys(out)) {
    out[k].sort((a, b) => a.name.localeCompare(b.name));
  }
  return out;
}

function renderTokensTable(vars: TokenVar[]): string {
  if (vars.length === 0) return "_(none)_\n";
  const lines = ["| Token | Value |", "| --- | --- |"];
  for (const v of vars) {
    lines.push(`| \`${v.name}\` | \`${md_escape(v.value)}\` |`);
  }
  return lines.join("\n") + "\n";
}

function renderColorsMd(): string {
  const colors = readColorTokens();
  const grouped = groupBySecondLevel(colors);
  const parts: string[] = [];
  parts.push("# Color tokens");
  parts.push("");
  parts.push(
    "Provided by `@sikt/sds-tokens` and automatically included when you import `@sikt/sds-core` — no separate import needed for normal apps.",
  );
  parts.push("");
  parts.push(
    "Values use the CSS `light-dark()` function — first value is light mode, second is dark mode. Switch with `color-scheme: light` or `color-scheme: dark` on a containing element.",
  );
  parts.push("");

  const groupOrder = Object.keys(grouped).sort();
  for (const group of groupOrder) {
    parts.push(`## ${group.charAt(0).toUpperCase() + group.slice(1)}`);
    parts.push("");
    parts.push(renderTokensTable(grouped[group]));
  }
  return parts.join("\n");
}

function renderTokenCategoryMd(opts: {
  title: string;
  blurb: string;
  prefix: string;
  base: TokenVar[];
  tablet: TokenVar[];
  desktop: TokenVar[];
  groupKey?: (name: string) => string;
}): string {
  const parts: string[] = [];
  parts.push(`# ${opts.title}`);
  parts.push("");
  parts.push(opts.blurb);
  parts.push("");
  parts.push(
    "Automatically included when you import `@sikt/sds-core` — no separate import needed for normal apps.",
  );
  parts.push("");

  const base = groupByPrefix(opts.base, opts.prefix);
  const tablet = groupByPrefix(opts.tablet, opts.prefix);
  const desktop = groupByPrefix(opts.desktop, opts.prefix);

  if (opts.groupKey) {
    const groups: Record<string, TokenVar[]> = {};
    for (const v of base) {
      const g = opts.groupKey(v.name);
      (groups[g] ??= []).push(v);
    }
    for (const g of Object.keys(groups).sort()) {
      parts.push(`## ${g}`);
      parts.push("");
      parts.push(renderTokensTable(groups[g]));
    }
  } else {
    parts.push("## Base values");
    parts.push("");
    parts.push(renderTokensTable(base));
  }

  if (tablet.length > 0) {
    parts.push("## Tablet overrides (≥ 720px)");
    parts.push("");
    parts.push(renderTokensTable(tablet));
  }
  if (desktop.length > 0) {
    parts.push("## Desktop overrides (≥ 1024px)");
    parts.push("");
    parts.push(renderTokensTable(desktop));
  }
  return parts.join("\n");
}

function writeTokenRefs() {
  const base = readBaseTokens();
  const tablet = readTabletOverrides();
  const desktop = readDesktopOverrides();

  writeFileIfChanged(path.join(TOKENS_REFS_DIR, "colors.md"), renderColorsMd());

  writeFileIfChanged(
    path.join(TOKENS_REFS_DIR, "spacing.md"),
    renderTokenCategoryMd({
      title: "Spacing tokens",
      blurb:
        "Border, gap, grid and padding tokens. Tablet/desktop overrides redefine the medium/large/huge padding scale and the grid max-width.",
      prefix: "--sds-space-",
      base,
      tablet,
      desktop,
      groupKey: (n) => n.split("-")[4] ?? "other", // border / gap / grid / padding
    }),
  );

  writeFileIfChanged(
    path.join(TOKENS_REFS_DIR, "typography.md"),
    renderTokenCategoryMd({
      title: "Typography tokens",
      blurb:
        "Font size, weight, line height tokens, grouped by usage (application, editorial, body, label, overline). Tablet/desktop overrides bump headline sizes responsively.",
      prefix: "--sds-typography-",
      base,
      tablet,
      desktop,
      groupKey: (n) => n.split("-")[4] ?? "other",
    }),
  );

  writeFileIfChanged(
    path.join(TOKENS_REFS_DIR, "effects.md"),
    renderTokenCategoryMd({
      title: "Effect tokens",
      blurb:
        "Animation duration/easing and shadow effects. Shadows reference `--sds-color-shadow-*` tokens so they automatically follow light/dark mode.",
      prefix: "--sds-effect-",
      base,
      tablet,
      desktop,
      groupKey: (n) => n.split("-")[4] ?? "other",
    }),
  );

  writeFileIfChanged(
    path.join(TOKENS_REFS_DIR, "base.md"),
    renderTokenCategoryMd({
      title: "Base tokens",
      blurb:
        "Breakpoints, raw size scale (xxxs → xxl) and z-index layering. These are referenced by other token categories — prefer the semantic tokens (spacing/typography/etc.) in component CSS.",
      prefix: "--sds-base-",
      base,
      tablet,
      desktop,
      groupKey: (n) => n.split("-")[4] ?? "other",
    }),
  );
}

// ---------------------------------------------------------------------------
// Icon writer
// ---------------------------------------------------------------------------

function renderIconsMd(): string {
  const indexPath = path.join(PACKAGES_DIR, "icons", "build", "index.ts");
  const src = readFileOrNull(indexPath);
  const pkg = readPackageJson("icons");
  const parts: string[] = [];
  parts.push(`# @sikt/sds-icons`);
  parts.push("");
  parts.push(`Version: \`${pkg.version}\``);
  parts.push("");
  parts.push("## Install");
  parts.push("");
  parts.push("```sh");
  parts.push("npm i -s @sikt/sds-icons");
  parts.push("```");
  parts.push("");
  parts.push("```ts");
  parts.push(`import { AddIcon } from "@sikt/sds-icons";`);
  parts.push("```");
  parts.push("");
  parts.push("## Icon catalogue");
  parts.push("");

  if (!src) {
    parts.push(
      "_Icons build directory not found. Run `npm run build --workspace=@sikt/sds-icons` first._",
    );
    return parts.join("\n");
  }

  const re =
    /export\s+\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}\s+from\s+"\.\/([A-Za-z0-9_]+)"/g;
  const rows: { exportName: string; svgName: string }[] = [];
  for (const m of src.matchAll(re)) {
    rows.push({ exportName: m[1], svgName: m[2] });
  }
  rows.sort((a, b) => a.exportName.localeCompare(b.exportName));

  parts.push(`${rows.length} icons exported.`);
  parts.push("");
  parts.push("| Import name | Source file |");
  parts.push("| --- | --- |");
  for (const r of rows) {
    parts.push(
      `| \`${r.exportName}\` | \`packages/icons/build/${r.svgName}.tsx\` |`,
    );
  }
  parts.push("");

  // Also list extra exports (LogoIcons, SpinnerIcon, IconProps)
  const indexTsPath = path.join(PACKAGES_DIR, "icons", "index.ts");
  const indexTsSrc = readFileOrNull(indexTsPath);
  if (indexTsSrc) {
    const extras = parseNamedExports(indexTsSrc).sort();
    if (extras.length > 0) {
      parts.push("## Additional exports");
      parts.push("");
      for (const name of extras) {
        parts.push(`- \`${name}\``);
      }
      parts.push("");
    }
  }

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Hooks writer (special-case)
// ---------------------------------------------------------------------------

function collectHookNames(): string[] {
  const names = new Set<string>();
  const indexTs = readFileOrNull(path.join(PACKAGES_DIR, "hooks", "index.ts"));
  if (indexTs) {
    for (const name of parseNamedExports(indexTs)) {
      if (!name.endsWith("Props")) names.add(name);
    }
  }
  const srcDir = path.join(PACKAGES_DIR, "hooks", "src");
  if (fs.existsSync(srcDir)) {
    for (const d of fs.readdirSync(srcDir, { withFileTypes: true })) {
      if (d.isDirectory()) names.add(d.name);
    }
  }
  return [...names].sort();
}

function hooksExportsList(): string {
  const names = collectHookNames();
  if (names.length === 0) return "—";
  return names.map((n) => `\`${n}\``).join(", ");
}

function renderHooksMd(): string {
  const pkg = readPackageJson("hooks");
  const names = collectHookNames();

  const parts: string[] = [];
  parts.push(`# ${pkg.name}`);
  parts.push("");
  parts.push(`Version: \`${pkg.version}\``);
  parts.push("");
  if (pkg.description) {
    parts.push(pkg.description);
    parts.push("");
  }
  parts.push("## Install");
  parts.push("");
  parts.push("```sh");
  parts.push(`npm i -s ${pkg.name}`);
  parts.push("```");
  parts.push("");
  parts.push("## Hooks");
  parts.push("");
  for (const name of names) {
    parts.push(`- \`${name}\``);
  }
  parts.push("");
  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Index writer
// ---------------------------------------------------------------------------

function renderIndexMd(entries: IndexEntry[]): string {
  const parts: string[] = [];
  parts.push("# Sikt design system reference");
  parts.push("");
  parts.push(
    "Auto-generated index for the `sds-design-system` skill. Re-generate with `npm run skill:sync` after any design-system change.",
  );
  parts.push("");
  parts.push("## Components");
  parts.push("");
  parts.push("| Slug | Package | Version | Exports |");
  parts.push("| --- | --- | --- | --- |");
  for (const e of entries) {
    parts.push(
      `| [\`${e.slug}\`](${e.href}) | \`${e.packageName}\` | \`${e.version}\` | ${e.exports} |`,
    );
  }
  parts.push("");

  parts.push("## Design tokens");
  parts.push("");
  parts.push(
    "- [Colors](tokens/colors.md) — brand, text, interaction, layout, support, shadow",
  );
  parts.push("- [Spacing](tokens/spacing.md) — gap, padding, border, grid");
  parts.push(
    "- [Typography](tokens/typography.md) — font sizes, weights, line heights",
  );
  parts.push("- [Effects](tokens/effects.md) — animation, shadows");
  parts.push("- [Base](tokens/base.md) — breakpoints, raw sizes, z-index");
  parts.push("");

  parts.push("## Icons");
  parts.push("");
  parts.push("- [Icon catalogue](icons.md)");
  parts.push("");

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log("Clearing references/");
  clearGeneratedDir();

  const slugs = listComponentPackageSlugs();
  console.log(`Scanning ${slugs.length} component packages…`);

  const indexEntries: IndexEntry[] = [];

  for (const slug of slugs) {
    process.stdout.write(`  ${slug}…`);
    const meta = scanComponentPackage(slug);
    writeFileIfChanged(
      path.join(COMPONENTS_DIR, `${slug}.md`),
      renderComponentMd(meta),
    );
    indexEntries.push({
      slug,
      packageName: meta.packageName,
      version: meta.version,
      exports: exportsList(meta),
      href: `components/${slug}.md`,
    });
    process.stdout.write(" ok\n");
  }

  // Special: hooks
  if (fs.existsSync(path.join(PACKAGES_DIR, "hooks", "package.json"))) {
    process.stdout.write("  hooks (special)…");
    const hooksPkg = readPackageJson("hooks");
    writeFileIfChanged(path.join(COMPONENTS_DIR, "hooks.md"), renderHooksMd());
    indexEntries.push({
      slug: "hooks",
      packageName: hooksPkg.name,
      version: hooksPkg.version,
      exports: hooksExportsList(),
      href: "components/hooks.md",
    });
    process.stdout.write(" ok\n");
  }

  console.log("Writing token references…");
  writeTokenRefs();

  console.log("Writing icon catalogue…");
  writeFileIfChanged(path.join(REFS_DIR, "icons.md"), renderIconsMd());

  console.log("Writing index…");
  indexEntries.sort((a, b) => a.slug.localeCompare(b.slug));
  writeFileIfChanged(
    path.join(REFS_DIR, "index.md"),
    renderIndexMd(indexEntries),
  );

  console.log("Done.");
}

main();
