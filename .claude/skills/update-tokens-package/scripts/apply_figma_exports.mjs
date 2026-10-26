#!/usr/bin/env node
// Scan a source dir for Figma Variables export zips and replace the matching
// subfolders under packages/design-tokens/src/figma/.
//
// Usage:
//   node apply_figma_exports.mjs [--dry-run] [--source <dir>] [--target <dir>]
//
// Defaults:
//   --source  ~/Downloads
//   --target  <cwd>/packages/design-tokens/src/figma

import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

function argValue(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}

const SOURCE = resolve(argValue("--source") ?? join(homedir(), "Downloads"));
const TARGET = resolve(
  argValue("--target") ??
    join(process.cwd(), "packages/design-tokens/src/figma"),
);

function normalize(name) {
  return name
    .toLowerCase()
    .replace(/\.zip$/, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function listTargetFolders() {
  if (!existsSync(TARGET)) {
    console.error(`Target folder not found: ${TARGET}`);
    process.exit(1);
  }
  return readdirSync(TARGET, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function findZips() {
  if (!existsSync(SOURCE)) return [];
  return readdirSync(SOURCE)
    .filter((f) => f.toLowerCase().endsWith(".zip"))
    .map((f) => ({ zip: f, normalized: normalize(f) }));
}

function matchZipsToFolders(zips, folders) {
  const normalizedFolders = folders.map((f) => ({
    folder: f,
    normalized: normalize(f),
  }));
  const matches = [];
  const unmatched = [];
  const seen = new Set();
  for (const z of zips) {
    const m = normalizedFolders.find(
      (f) =>
        z.normalized === f.normalized ||
        z.normalized.includes(f.normalized) ||
        f.normalized.includes(z.normalized),
    );
    if (m && !seen.has(m.folder)) {
      matches.push({ zip: z.zip, folder: m.folder });
      seen.add(m.folder);
    } else {
      unmatched.push(z.zip);
    }
  }
  const missingFolders = folders.filter((f) => !seen.has(f));
  return { matches, unmatched, missingFolders };
}

function walkJson(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walkJson(p, out);
    else if (e.isFile() && e.name.toLowerCase().endsWith(".json")) out.push(p);
  }
  return out;
}

const folders = listTargetFolders();
const zips = findZips();
const { matches, unmatched, missingFolders } = matchZipsToFolders(
  zips,
  folders,
);

console.log(`Source: ${SOURCE}`);
console.log(`Target: ${TARGET}`);
console.log("\nPlan:");
if (matches.length === 0) {
  console.log("  (no matching zips found)");
} else {
  for (const { zip, folder } of matches) {
    console.log(`  ${zip}  →  ${folder}/`);
  }
}
if (unmatched.length) {
  console.log("\nIgnored (no matching target folder):");
  for (const z of unmatched) console.log(`  ${z}`);
}
if (missingFolders.length) {
  console.log("\nWARNING: no zip found for these collection folders:");
  for (const f of missingFolders) console.log(`  ${f}`);
}

if (dryRun) {
  console.log("\n(dry run — no files changed)");
  process.exit(missingFolders.length ? 2 : 0);
}

if (matches.length === 0) {
  console.error("\nNothing to do.");
  process.exit(1);
}

for (const { zip, folder } of matches) {
  const zipPath = join(SOURCE, zip);
  const targetDir = join(TARGET, folder);
  const tmp = mkdtempSync(join(tmpdir(), "figma-tokens-"));
  console.log(`\n→ ${folder}: unzipping ${zip}`);
  try {
    execSync(
      `unzip -q -o ${JSON.stringify(zipPath)} -d ${JSON.stringify(tmp)}`,
    );
  } catch (err) {
    console.error(`  unzip failed: ${err.message}`);
    rmSync(tmp, { recursive: true, force: true });
    process.exit(1);
  }

  for (const f of readdirSync(targetDir)) {
    if (f.endsWith(".tokens.json")) rmSync(join(targetDir, f));
  }

  const jsonFiles = walkJson(tmp);
  if (jsonFiles.length === 0) {
    console.warn(`  WARNING: zip contained no .json files`);
  }
  for (const src of jsonFiles) {
    const name = basename(src);
    const outName = name.toLowerCase().endsWith(".tokens.json")
      ? name
      : name.replace(/\.json$/i, ".tokens.json");
    cpSync(src, join(targetDir, outName));
    console.log(`    ${outName}`);
  }
  rmSync(tmp, { recursive: true, force: true });
}

console.log(
  "\nDone. Next: `npm run build:tokens --workspace=@sikt/sd3-design-tokens`.",
);
