/**
 * HTML snippet generator for the sds-design-system Claude skill.
 *
 * For each Storybook story, this bundles the story file with esbuild (aliasing
 * every icon import to a placeholder-emitting shim), renders the story to
 * static HTML with react-dom/server, and post-processes the result into a
 * consumer-friendly form.
 *
 * With no arguments, discovers every package under `packages/*` that has a
 * `stories/` directory and regenerates their references/html/<slug>.md files.
 * Pass one or more slugs to regenerate only those.
 *
 * Invoke via:  node --experimental-strip-types --no-warnings ...
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import esbuild from "esbuild";
import * as prettier from "prettier";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const SCRIPT_DIR = import.meta.dirname;
const SKILL_DIR = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = path.resolve(SKILL_DIR, "..", "..", "..", "..");
const PACKAGES_DIR = path.join(REPO_ROOT, "packages");
const REFS_DIR = path.join(SKILL_DIR, "references");
const HTML_DIR = path.join(REFS_DIR, "html");
// Bundles are written inside the workspace so Node's node_modules lookup can
// find `react` when the dynamic import runs.
const TMP_DIR = path.join(
  REPO_ROOT,
  "node_modules",
  ".cache",
  "sds-story-html",
);

// ---------------------------------------------------------------------------
// Icon shim
// ---------------------------------------------------------------------------

/**
 * Collect every icon export name from `@sikt/sds-icons` so the shim can expose
 * a matching named export for anything a story might import.
 */
function collectIconExportNames(): string[] {
  const names = new Set<string>();
  const files = [
    path.join(PACKAGES_DIR, "icons", "index.ts"),
    path.join(PACKAGES_DIR, "icons", "build", "index.ts"),
  ];
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, "utf8");
    // `export { X } from ...`, `export { default as X } from ...`, `export const X = ...`
    const patterns = [
      /export\s+\{\s*default\s+as\s+([A-Za-z_][A-Za-z0-9_]*)\s*\}/g,
      /export\s+\{([^}]+)\}/g,
      /export\s+(?:const|function|class)\s+([A-Za-z_][A-Za-z0-9_]*)/g,
    ];
    for (const [i, re] of patterns.entries()) {
      for (const m of src.matchAll(re)) {
        if (i === 1) {
          // Block export: split by commas, strip `as X`.
          for (const part of m[1].split(",")) {
            const seg = part.trim().split(/\s+as\s+/i);
            const name = seg[seg.length - 1].replace(/^type\s+/i, "").trim();
            if (name) names.add(name);
          }
        } else {
          names.add(m[1]);
        }
      }
    }
  }
  return [...names].sort();
}

function buildIconShimSource(): string {
  const names = collectIconExportNames();
  const lines = [
    `import * as React from 'react';`,
    `const make = (name) => (props) => React.createElement('span', { ...(props || {}), 'data-sds-icon-placeholder': name });`,
  ];
  for (const n of names)
    lines.push(`export const ${n} = make(${JSON.stringify(n)});`);
  return lines.join("\n");
}

// Storybook APIs a few stories reach for (`useArgs`, `action`). At SSR time
// there is no Storybook runtime, so we stub them to no-ops.
const STORYBOOK_SHIM_SOURCE = `
export const useArgs = () => [{}, () => {}, () => {}];
export const action = (name) => () => {};
export default { useArgs, action };
`;

// SVGR normally turns `import Logo from '../Logo.svg'` into a React component.
// We can't run SVGR from Node, so return a placeholder component that renders
// an HTML comment like the icon shim does.
const SVG_SHIM_SOURCE = `
import * as React from 'react';
const SvgPlaceholder = (props) => React.createElement('span', { ...(props || {}), 'data-sds-svg-placeholder': true });
export default SvgPlaceholder;
export const ReactComponent = SvgPlaceholder;
`;

// ---------------------------------------------------------------------------
// Bundling
// ---------------------------------------------------------------------------

/**
 * Bundle a story file to a self-contained ESM string. Icons are redirected to
 * a placeholder shim; CSS imports are ignored; React is external so
 * `renderToStaticMarkup` and the host script share the same React instance.
 */
async function bundleStoryFile(storyPath: string): Promise<string> {
  const shim = buildIconShimSource();
  const result = await esbuild.build({
    entryPoints: [storyPath],
    bundle: true,
    format: "esm",
    platform: "node",
    write: false,
    external: [
      "react",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom",
      "react-dom/server",
    ],
    loader: {
      ".css": "empty",
      // Story assets — components never render binary data, they just take the
      // string that the bundler would normally produce.
      ".jpg": "dataurl",
      ".jpeg": "dataurl",
      ".png": "dataurl",
      ".gif": "dataurl",
      ".webp": "dataurl",
    },
    jsx: "automatic",
    banner: {
      // Some transitive workspace packages ship as CJS (`dist/index.cjs`). When
      // esbuild bundles their `require('react')` into an ESM output, `require`
      // needs to exist at runtime — provide it via `createRequire`.
      js: `import { createRequire as __sdsCreateRequire } from 'node:module';\nconst require = __sdsCreateRequire(import.meta.url);`,
    },
    plugins: [
      {
        name: "sds-icon-shim",
        setup(build) {
          // Bare-specifier import: `@sikt/sds-icons` or subpaths.
          build.onResolve({ filter: /^@sikt\/sds-icons(\/.*)?$/ }, () => ({
            path: "virtual:icons-shim",
            namespace: "shim",
          }));
          // Workspace-relative import used by monorepo stories:
          //   `../../icons/index` or `../../icons`
          build.onResolve(
            { filter: /\/icons(?:\/index(?:\.tsx?)?)?$/ },
            (args) => {
              // Only redirect if it actually points at the icons package.
              const resolvedGuess = path.resolve(args.resolveDir, args.path);
              if (resolvedGuess.startsWith(path.join(PACKAGES_DIR, "icons"))) {
                return { path: "virtual:icons-shim", namespace: "shim" };
              }
              return null;
            },
          );
          build.onLoad({ filter: /.*/, namespace: "shim" }, () => ({
            contents: shim,
            loader: "tsx",
            resolveDir: REPO_ROOT,
          }));
        },
      },
      {
        name: "storybook-shim",
        setup(build) {
          build.onResolve({ filter: /^storybook\// }, () => ({
            path: "virtual:storybook-shim",
            namespace: "sbshim",
          }));
          build.onLoad({ filter: /.*/, namespace: "sbshim" }, () => ({
            contents: STORYBOOK_SHIM_SOURCE,
            loader: "js",
            resolveDir: REPO_ROOT,
          }));
        },
      },
      {
        name: "svg-shim",
        setup(build) {
          build.onResolve({ filter: /\.svg$/ }, () => ({
            path: "virtual:svg-shim",
            namespace: "svgshim",
          }));
          build.onLoad({ filter: /.*/, namespace: "svgshim" }, () => ({
            contents: SVG_SHIM_SOURCE,
            loader: "js",
            resolveDir: REPO_ROOT,
          }));
        },
      },
    ],
  });
  if (result.errors.length > 0) {
    throw new Error(
      "esbuild failed:\n" + JSON.stringify(result.errors, null, 2),
    );
  }
  return result.outputFiles[0].text;
}

// ---------------------------------------------------------------------------
// Story rendering
// ---------------------------------------------------------------------------

interface RenderedStory {
  name: string;
  html: string;
}

function isStoryObject(v: unknown): v is { args?: unknown; render?: unknown } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return "args" in o || "render" in o || "play" in o;
}

async function renderStoryFile(storyPath: string): Promise<RenderedStory[]> {
  const bundled = await bundleStoryFile(storyPath);
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const tmp = path.join(
    TMP_DIR,
    `${process.pid}-${Date.now()}-${path.basename(storyPath, ".tsx")}.mjs`,
  );
  fs.writeFileSync(tmp, bundled);
  let mod: Record<string, unknown>;
  try {
    mod = (await import(pathToFileURL(tmp).href)) as Record<string, unknown>;
  } finally {
    fs.unlinkSync(tmp);
  }

  const meta = mod.default as { component?: React.ComponentType } | undefined;
  const Component = meta?.component;

  const rendered: RenderedStory[] = [];
  for (const [name, value] of Object.entries(mod)) {
    if (name === "default") continue;
    if (!isStoryObject(value)) continue;
    const story = value as {
      args?: Record<string, unknown>;
      render?: (args: unknown, ctx: unknown) => React.ReactElement;
    };
    const args = story.args ?? {};
    const render = story.render;
    let element: React.ReactElement;
    if (typeof render === "function") {
      // Wrap in a component so hooks inside `render` have a proper React ctx.
      const RenderWrapper: React.FC = () => render(args, {});
      element = React.createElement(RenderWrapper);
    } else if (Component) {
      element = React.createElement(Component, args);
    } else {
      continue;
    }
    const raw = renderToStaticMarkup(element);
    const html = await formatHtml(postProcess(raw));
    rendered.push({ name, html });
  }
  return rendered;
}

function postProcess(html: string): string {
  const withoutIcons = html
    .replace(
      /<span\b[^>]*\bdata-sds-icon-placeholder="([^"]+)"[^>]*><\/span>/g,
      "<!-- icon: $1 -->",
    )
    .replace(
      /<span\b[^>]*\bdata-sds-svg-placeholder(?:="[^"]*")?[^>]*><\/span>/g,
      "<!-- svg -->",
    )
    // Some SVGs slip past the shim: when a story pulls in a Logo/icon through
    // another SDS package's built output (`dist/index.mjs`), SVGR has already
    // inlined the SVG as JSX, so esbuild never sees a `.svg` import to
    // intercept. Collapse any remaining `<svg>...</svg>` to a placeholder for
    // consistency with the shimmed ones.
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/g, "<!-- svg -->")
    // Image imports in stories get inlined as base64 data URLs by the esbuild
    // `dataurl` loader — huge blobs that don't belong in docs. Truncate to
    // just the mime type so the shape stays recognizable.
    .replace(
      /data:(image\/[a-z0-9+.-]+);base64,[^"')\s]+/g,
      "data:$1;base64,...",
    );
  // React's `useId` emits opaque tokens like `_R_2_` that also appear inside
  // composite IDs (e.g. `panel-_R_2_-0`, `--popover-anchor-_R_2_`). Rewrite
  // each unique token to a stable, obviously-a-placeholder name so consumers
  // can find-and-replace them.
  const idMap = new Map<string, string>();
  return withoutIcons.replace(/_R_[0-9]+_/g, (match) => {
    let replacement = idMap.get(match);
    if (replacement === undefined) {
      replacement = `REPLACE_ME_${idMap.size}`;
      idMap.set(match, replacement);
    }
    return replacement;
  });
}

async function formatHtml(html: string): Promise<string> {
  try {
    return (
      await prettier.format(html, {
        parser: "html",
        printWidth: 100,
        // Format inline elements as block-level for readable snippets. Without
        // this, prettier splits `></span>` across lines to preserve inline
        // whitespace semantics.
        htmlWhitespaceSensitivity: "ignore",
      })
    ).trim();
  } catch {
    return html;
  }
}

// ---------------------------------------------------------------------------
// Markdown writer
// ---------------------------------------------------------------------------

interface StoryFileResult {
  file: string; // e.g. "Button.stories"
  stories: RenderedStory[];
}

function renderHtmlMd(
  slug: string,
  packageName: string,
  files: StoryFileResult[],
): string {
  const parts: string[] = [];
  parts.push(`# ${packageName} — HTML snippets`);
  parts.push("");
  parts.push(
    `Rendered HTML for every Storybook story in \`packages/${slug}\`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: \`<!-- icon: XxxIcon -->\` (icon name matches \`references/icons.md\`) and \`<!-- svg -->\` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.`,
  );
  parts.push("");
  parts.push(
    `Import \`@sikt/sds-${slug}/dist/index.css\` (and its transitive SDS dependencies, listed in \`references/components/${slug}.md\`) to pick up the visual styles for these classes.`,
  );
  parts.push("");
  for (const f of files) {
    parts.push(`## ${f.file}`);
    parts.push("");
    for (const s of f.stories) {
      parts.push(`### ${s.name}`);
      parts.push("");
      parts.push("```html");
      parts.push(s.html);
      parts.push("```");
      parts.push("");
    }
  }
  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function processSlug(slug: string) {
  const pkgPath = path.join(PACKAGES_DIR, slug, "package.json");
  if (!fs.existsSync(pkgPath)) {
    console.error(`  skip ${slug}: no package.json`);
    return;
  }
  const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")) as {
    name: string;
  };
  const storiesDir = path.join(PACKAGES_DIR, slug, "stories");
  if (!fs.existsSync(storiesDir)) {
    console.error(`  skip ${slug}: no stories/`);
    return;
  }
  const storyFiles = fs
    .readdirSync(storiesDir)
    .filter((f) => f.endsWith(".stories.tsx"))
    .sort();

  const results: StoryFileResult[] = [];
  for (const f of storyFiles) {
    const p = path.join(storiesDir, f);
    process.stdout.write(`  ${slug}/${f}…`);
    try {
      const stories = await renderStoryFile(p);
      process.stdout.write(` ${stories.length} stories\n`);
      results.push({ file: f.replace(/\.tsx$/, ""), stories });
    } catch (err) {
      process.stdout.write(
        ` FAILED: ${(err as Error).message.split("\n")[0]}\n`,
      );
    }
  }

  fs.mkdirSync(HTML_DIR, { recursive: true });
  const outPath = path.join(HTML_DIR, `${slug}.md`);
  const content = renderHtmlMd(slug, packageJson.name, results);
  fs.writeFileSync(
    outPath,
    content.endsWith("\n") ? content : content + "\n",
    "utf8",
  );
  console.log(`  wrote ${path.relative(REPO_ROOT, outPath)}`);
}

function discoverSlugsWithStories(): string[] {
  return fs
    .readdirSync(PACKAGES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((slug) => {
      const storiesDir = path.join(PACKAGES_DIR, slug, "stories");
      if (!fs.existsSync(storiesDir)) return false;
      return fs.readdirSync(storiesDir).some((f) => f.endsWith(".stories.tsx"));
    })
    .sort();
}

async function main() {
  const argv = process.argv.slice(2);
  const slugs = argv.length > 0 ? argv : discoverSlugsWithStories();
  if (argv.length === 0) {
    // Full run: clear the html/ directory so removed packages don't linger.
    if (fs.existsSync(HTML_DIR)) fs.rmSync(HTML_DIR, { recursive: true });
  }
  fs.mkdirSync(HTML_DIR, { recursive: true });
  for (const slug of slugs) {
    await processSlug(slug);
  }
  // Clean up temp bundles.
  if (fs.existsSync(TMP_DIR))
    fs.rmSync(TMP_DIR, { recursive: true, force: true });
}

await main();
