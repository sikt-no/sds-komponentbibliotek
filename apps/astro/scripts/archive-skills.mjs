/**
 * Creates a .tar.gz archive for each skill directory so they can be served
 * as `type: "archive"` entries in /.well-known/agent-skills/index.json.
 *
 * Run via: node scripts/archive-skills.mjs
 * (wired up as copy:skills-archive in package.json)
 */

import { gzipSync } from "node:zlib";
import { readdir, mkdir } from "node:fs/promises";
import { readFileSync, statSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SKILLS_SRC = join(ROOT, "../../../.claude/plugins/skills");
const SKILLS_OUT = join(ROOT, "../public/.well-known/agent-skills");

function createTarHeader(name, size, mtime, mode, typeflag) {
  const header = Buffer.alloc(512, 0);
  const writeStr = (offset, str, len) =>
    Buffer.from(str).copy(header, offset, 0, len);
  const writeOctal = (offset, value, len) =>
    Buffer.from(value.toString(8).padStart(len - 1, "0") + "\0").copy(
      header,
      offset,
    );

  writeStr(0, name, 100);
  writeOctal(100, mode, 8);
  writeOctal(108, 0, 8);
  writeOctal(116, 0, 8);
  writeOctal(124, size, 12);
  writeOctal(136, mtime, 12);
  header.fill(0x20, 148, 156); // checksum placeholder
  header[156] = typeflag.charCodeAt(0);
  Buffer.from("ustar\0").copy(header, 257);
  Buffer.from("00").copy(header, 263);

  let checksum = 0;
  for (let i = 0; i < 512; i++) checksum += header[i];
  Buffer.from(checksum.toString(8).padStart(6, "0") + "\0 ").copy(header, 148);

  return header;
}

function buildTar(dirPath, excludeTopDirs = []) {
  const chunks = [];

  function walk(currentPath, prefix) {
    for (const entry of readdirSync(currentPath, { withFileTypes: true })) {
      if (prefix === "" && excludeTopDirs.includes(entry.name)) continue;
      const fullPath = join(currentPath, entry.name);
      const tarPath = prefix + entry.name;
      const mtime = Math.floor(statSync(fullPath).mtimeMs / 1000);

      if (entry.isDirectory()) {
        chunks.push(createTarHeader(tarPath + "/", 0, mtime, 0o755, "5"));
        walk(fullPath, tarPath + "/");
      } else if (entry.isFile()) {
        const data = readFileSync(fullPath);
        chunks.push(createTarHeader(tarPath, data.length, mtime, 0o644, "0"));
        const padLen = Math.ceil(data.length / 512) * 512;
        if (padLen > 0) {
          const padded = Buffer.alloc(padLen, 0);
          data.copy(padded);
          chunks.push(padded);
        }
      }
    }
  }

  walk(dirPath, "");
  chunks.push(Buffer.alloc(1024, 0)); // two 512-byte end-of-archive blocks
  return Buffer.concat(chunks);
}

await mkdir(SKILLS_OUT, { recursive: true });

const entries = await readdir(SKILLS_SRC, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const skillDir = join(SKILLS_SRC, entry.name);
  const archivePath = join(SKILLS_OUT, `${entry.name}.tar.gz`);
  writeFileSync(archivePath, gzipSync(buildTar(skillDir, ["scripts"])));
  console.log(`Archived ${entry.name} → ${archivePath}`);
}
