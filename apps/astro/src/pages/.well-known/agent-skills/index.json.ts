/**
 * Specification for Agent Skills Discovery https://github.com/cloudflare/agent-skills-discovery-rfc/
 *
 * Astro API route that generates /.well-known/agent-skills/index.json.
 * Runs at build time (static) or request time (SSR) depending on your Astro config.
 *
 * Scans ../../.claude/plugins/skills/ for skill directories, parses YAML frontmatter
 * from each SKILL.md, and outputs a JSON index per the Agent Skills Discovery spec (v0.2.0).
 *
 * Prefers `type: "archive"` when a .tar.gz exists in public/.well-known/agent-skills/
 * (built by scripts/archive-skills.mjs). Falls back to `type: "skill-md"` otherwise.
 *
 * Usage: Place this file at src/pages/.well-known/agent-skills/index.json.ts
 * Skills: Place skill directories at ../../.claude/plugins/skills/{name}/
 */
import { createHash } from "crypto";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";

interface Skill {
  name: string;
  type: "skill-md" | "archive";
  description: string;
  url: string;
  digest: string;
}

const SCHEMA_URI = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";

function sha256(data: Buffer): string {
  return `sha256:${createHash("sha256").update(data).digest("hex")}`;
}

export async function GET() {
  const skillsDir = join(process.cwd(), "../../.claude/plugins/skills");
  const publicSkillsDir = join(
    process.cwd(),
    "public/.well-known/agent-skills",
  );

  let entries;
  try {
    entries = await readdir(skillsDir, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return Response.json({ $schema: SCHEMA_URI, skills: [] });
    }
    throw error;
  }

  const skillDirs = entries.filter((e) => e.isDirectory());
  const skills: Skill[] = [];

  for (const dir of skillDirs) {
    const skillMdPath = join(skillsDir, dir.name, "SKILL.md");

    try {
      const skillMdContent = await readFile(skillMdPath);
      const { data } = matter(skillMdContent.toString("utf-8"));

      if (!data.name || !data.description) {
        console.warn(
          `Skill ${dir.name} missing required frontmatter (name/description)`,
        );
        continue;
      }

      const archivePath = join(publicSkillsDir, `${dir.name}.tar.gz`);
      let archiveContent: Buffer | null = null;
      try {
        archiveContent = await readFile(archivePath);
      } catch {
        // no archive built yet — fall back to skill-md
      }

      if (archiveContent) {
        skills.push({
          name: `${data.name}`,
          type: "archive",
          description: `${data.description}`,
          url: `/.well-known/agent-skills/${dir.name}.tar.gz`,
          digest: sha256(archiveContent),
        });
      } else {
        skills.push({
          name: `${data.name}`,
          type: "skill-md",
          description: `${data.description}`,
          url: `/.well-known/agent-skills/${dir.name}/SKILL.md`,
          digest: sha256(skillMdContent),
        });
      }
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        console.warn(`Failed to parse skill ${dir.name}:`, error);
      }
    }
  }

  skills.sort((a, b) => a.name.localeCompare(b.name));

  return Response.json({ $schema: SCHEMA_URI, skills });
}
