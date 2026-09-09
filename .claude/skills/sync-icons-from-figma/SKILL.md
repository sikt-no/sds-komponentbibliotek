---
name: sync-icons-from-figma
description: >
  Reconcile @sikt/sds-icons with the "SDS Ikoner" Figma file. Use when the user
  wants to sync icons, audit icons, or add/remove an icon from the catalog.
---

# Sync Icons from Figma

**Figma is the source of truth.** This skill reconciles `packages/icons/src/icons.config.mjs` against the "SDS Ikoner" file. Both sides reference Phosphor icons — **do not fetch or write SVGs**. The Phosphor SVGs come from `@phosphor-icons/core` at build time; only the catalog needs to match.

Source file:
**https://www.figma.com/design/R5mBIZ6yBu96pZUsrqqv3H/SDS-Ikoner?node-id=426-254&p=f&m=dev**

- File key: `R5mBIZ6yBu96pZUsrqqv3H`
- Icon frame node id: `426-254` (API form: `426:254`)

Scope:

- **In scope:** Phosphor-backed entries in `icons.config.mjs` (entries **without** a `source` field).
- **Out of scope:** entries with `source: "sds"` (bespoke SVGs like `law`, `linked-in`) — leave them alone unless the user explicitly asks.
- **Ignore list (code side).** These entries live outside the Figma catalog on purpose. Do not flag them as Remove even though they are not in Figma:
  - `spinner-gap` — used internally by the Spinner component; not part of the public icon catalog.
- **Ignore list (Figma side).** Skip any frame or symbol whose name suggests a work-in-progress placeholder rather than a shipped icon. Do not flag them as Add. Signals to skip:
  - Name contains `UnderConstruction`, `InDevelopment`, `WIP`, `TODO`, or `Draft` (case-insensitive, with or without spaces/dashes).
  - Label text like "Under Construction", "In Development", "Coming soon".
  - The node is a plain `<frame>` where a `<symbol>` is expected in that row.

  When in doubt, skip and mention it in the Step 3 summary so the user can confirm.

## Deprecate-first policy

**Every rename or removal ships with a backward-compatible alias for one major cycle before deletion.** A rename in `icons.config.mjs` alone would break every consumer on import. The alias (Step 5) plus a migration guide (Step 6) turn a breaking release into an additive one: old imports keep working, IDE surfaces the deprecation, consumers migrate at their own pace. Aliases added in one major are removed in the next (v5 aliases → gone in v6).

---

## Step 1 — Build both inventories

**Figma inventory.** Use the Figma MCP tools (`mcp__figma-remote-mcp__*` or `mcp__claude_ai_Figma__*`; authenticate if needed) to list every icon under frame `426:254`. For each icon extract four things:

- **`name`** — the SDS-facing name (what consumers import as `<Name>Icon`), in kebab-case. Take this from the icon's symbol/instance layer name in Figma.
- **`id`** — the Phosphor icon slug it renders (e.g. `magnifying-glass`, `arrow-right`), in kebab-case. Fill-variant Phosphor icons end in `-fill`.
- **`category`** — the name of the **top-level frame** the icon sits under (e.g. `UI`, `Navigation`, `Sorting/filtering`, `Time and date`), normalized to code-side kebab-case.
- **`figmaNodeId`** — the `id` attribute on the `<symbol>` element (e.g. `2243:214`, `5914:215`). Used in Step 7 to regenerate Code Connect mappings. Keep the `:` form — convert to `-` only when writing URLs.

**Category normalization.** Figma frames use display labels; code uses kebab-case. Normalize by lowercasing, replacing `/` and spaces with `-`, and collapsing repeats. Known mappings:

| Figma frame         | Code category           |
| ------------------- | ----------------------- |
| `UI`                | `ui`                    |
| `Navigation`        | `navigation`            |
| `Action`            | `action`                |
| `Communication`     | `communication`         |
| `Time and date`     | `time-and-date`         |
| `Files`             | `files`                 |
| `Sorting/filtering` | `sorting-and-filtering` |
| `Status`            | `status`                |
| `Menu`              | `menu`                  |
| `Map`               | `map`                   |
| `Categorization`    | `categorization`        |
| `Social Media`      | `social-media`          |

If a Figma frame doesn't map cleanly to an existing code category, **stop and ask** — do not invent one.

If you cannot confidently determine a Phosphor `id`, **stop and ask** — a wrong `id` breaks the build.

**Code inventory.** Read `packages/icons/src/icons.config.mjs` and keep only entries **without** a `source` field. Record `{ id, name, category }` for each.

**Completion criterion:** two lists — Figma icons (with `{ id, name, category, figmaNodeId }` quads) and code icons (with `{ id, name, category }` triples).

## Step 2 — Compute the diff

Match entries by **`name`** (the SDS-facing name — that is the consumer's contract). For each icon classify into exactly one bucket:

- **Add** — in Figma, not in code.
- **Remove** — in code (no `source`), not in Figma.
- **Rename** — same Phosphor `id` on both sides but different `name` (e.g. Figma renamed `search` → `find`). Only flag when you can confidently pair them; otherwise treat as one Remove + one Add and let the user decide.
- **Retarget** — same `name` on both sides but different Phosphor `id` (Figma swapped which Phosphor icon backs it, e.g. `search: magnifying-glass` → `search: magnifying-glass-plus`).
- **Recategorize** — same `name` and `id`, different `category`.
- **In sync** — `name`, `id`, **and** `category` all match. Skip.

**Verify category on every matched pair.** Do not shortcut this — even icons that match on `name` + `id` must have their `category` compared against Figma. A wrong category is not just cosmetic: the icon shows up under the wrong section in generated docs/sprites, and the entry ends up in the wrong group in `icons.config.mjs`. If `category` differs, the icon is **Recategorize**, not **In sync**.

## Step 3 — Present the plan and get confirmation

Show a compact summary before making any changes:

```
Add          (N): <name> (<id>, <category>)
Remove       (N): <name> (<id>)         [→ becomes deprecated alias]
Rename       (N): <old-name> → <new-name>  (<id>)   [→ becomes deprecated alias]
Retarget     (N): <name>  <old-id> → <new-id>
Recategorize (N): <name>  <old-category> → <new-category>
```

For every **Rename** and **Remove**, note that the old name will remain as a `@deprecated` alias in `packages/icons/index.ts` per the deprecate-first policy — not deleted this release. Actual deletion happens in the following major.

Do not proceed until the user explicitly confirms. If the diff is empty, report "catalog in sync" and skip to Step 7 — Code Connect can still drift from the config even when the catalog matches Figma.

## Step 4 — Apply changes to `icons.config.mjs`

Edit `packages/icons/src/icons.config.mjs` only. Entry shape for a Phosphor-backed icon:

```js
{ id: "<phosphor-slug>", name: "<sds-kebab-name>", category: "<category>" },
```

Rules:

- `id` is the Phosphor slug **exactly** as it appears in `@phosphor-icons/core/assets/regular/` (or `.../fill/` for `-fill` variants). If unsure, verify with:
  ```sh
  ls node_modules/@phosphor-icons/core/assets/regular | grep <slug>
  ```
- `name` is the SDS-facing kebab-case name — this drives the exported component (`<PascalCase>Icon`), sprite id, and asset filename.
- Never add a `source` field to a Phosphor entry.
- Place the entry inside its category group in the file — match the existing grouping. Existing categories: `ui`, `navigation`, `action`, `communication`, `time-and-date`, `files`, `sorting-and-filtering`, `status`, `menu`, `map`, `categorization`, `social-media`. If Figma uses a new category, ask before inventing one.

Apply each bucket:

- **Add** — insert a new entry into the right category group.
- **Remove** — delete the entry. **Add a deprecated alias in Step 5** so old imports keep working for one major cycle.
- **Rename** — change `name`. **Add a deprecated alias in Step 5** pointing old → new.
- **Retarget** — change `id`. No alias needed (`name` unchanged).
- **Recategorize** — change `category` and move the entry into the new group. No alias needed.

## Step 5 — Add deprecation aliases (Rename / Remove only)

For every Rename or Remove, add an entry in `packages/icons/index.ts` under the existing deprecation block. Pattern (copy the shape already used for v5):

```ts
/** @deprecated Renamed to `<NewName>Icon`. Will be removed in v<next-major>. */
export const <OldName>Icon = <NewName>Icon;
```

For a **Remove**, choose an appropriate replacement to alias to (usually the closest surviving icon) and say so in the JSDoc:

```ts
/** @deprecated Removed from Figma. Use `<Replacement>Icon` instead. Will be removed in v<next-major>. */
export const <OldName>Icon = <Replacement>Icon;
```

Also make sure the new component is present in the `import { … } from "./build/index"` block at the top of the deprecation section.

**No alias needed** for pure Adds, Retargets, or Recategorizes — those don't remove any consumer-visible identifier.

## Step 6 — Update the migration guide

Create or update `packages/icons/MIGRATION-v<old>-to-v<new>.md` (e.g. `MIGRATION-v4-to-v5.md`). It targets AI agents, not humans — see the existing v4-to-v5 file for the exact shape. Must include:

- A rename table with `old-kebab` / `new-kebab` / `OldReactName` / `NewReactName` columns.
- A machine-readable JSON `{ "renames": [ { "old": …, "new": … } ] }` block.
- A short "migration recipe" listing the three replacement forms: `<Old>Icon` → `<New>Icon`, `<old>.svg` → `<new>.svg`, and `#<old>` → `#<new>`.
- A false-positive warning for any rename where the old name is a common substring (e.g. `ai` → `artificial-intelligence`).

## Step 7 — Regenerate Code Connect mappings

`packages/icons/figma/icons.figma.batch.json` is a **build artifact** — regenerate from scratch every run; never hand-edit. The shared template lives next to it in `icons.figma.batch.ts` and should almost never change.

**Input:** the Figma inventory from Step 1 (with `figmaNodeId`) and the current state of `icons.config.mjs`.

**For each entry in `icons.config.mjs`, in alphabetical order by PascalCase name:**

1. **Skip if in the code-side ignore list.** Currently only `spinner-gap` (not in Figma catalog).
2. **Derive component name.** `<name>` (kebab) → `<PascalCase>Icon`. Example: `add-circle` → `AddCircleIcon`, `linked-in` → `LinkedInIcon`. Must match an export from `packages/icons/build/index.ts` — verify.
3. **Look up `figmaNodeId`:**
   - Try direct match: find Figma inventory entry where `name` equals config `name`. Works for all Phosphor-backed entries and for `source: "sds"` entries that share the Figma symbol name (e.g. `law` → `law`).
   - If no direct match and entry has `source: "sds"`, consult the **sds-overrides map** below.
   - If still no match, **stop and ask the user** — do not invent a node id.

**sds-overrides map** (code `name` → Figma symbol `name`):

| Code name   | Figma symbol name      |
| ----------- | ---------------------- |
| `linked-in` | `linkedin-logo-filled` |

Add to this table when a new `source: "sds"` icon lands whose code name diverges from the Figma symbol name.

**Output shape.** A batch JSON file with one entry per icon, alphabetical by `name`. Convert `figmaNodeId` from `X:Y` to `X-Y` for the URL. `id` is the kebab-case form of `name`:

```json
{
  "templateFile": "./icons.figma.batch.ts",
  "components": [
    {
      "url": "https://www.figma.com/design/R5mBIZ6yBu96pZUsrqqv3H/SDS-Ikoner?node-id=2243-238",
      "name": "AddCircleIcon",
      "id": "add-circle-icon",
      "importPath": "@sikt/sds-icons"
    }
  ]
}
```

The shared template (`icons.figma.batch.ts`) references `figma.batch.name` and `figma.batch.id` and stays untouched by this skill:

```ts
import figma from "figma";

export default {
  example: figma.code`<${figma.batch.name} />`,
  imports: [`import { ${figma.batch.name} } from "${figma.batch.importPath}"`],
  id: figma.batch.id,
  metadata: {
    nestable: true,
  },
};
```

`nestable: true` ensures that an icon used as a `figma.instance()` prop on a parent (e.g. a Button) renders inline in Dev Mode (`<Button><AddCircleIcon /></Button>`) instead of as a reference.

**Verify:** run a dry-run publish to confirm all mappings parse:

```sh
npx figma connect publish --dry-run
```

Expect a `Files that would be published:` block listing every mapped icon. The `FIGMA_ACCESS_TOKEN` warning at the end is expected in dry-run.

**Completion criterion:** the dry-run lists exactly N mappings, where N = (icons in `icons.config.mjs`) − (code-side ignore list). No parser errors.

## Step 8 — Verify

Build the package:

```sh
npm run build -w packages/icons
```

Check the result matches the plan:

- **Add / Rename / Retarget:** `dist/assets/<new-name>.svg`, `build/<PascalCaseNewName>.tsx`, and an export from `build/index.ts`.
- **Rename / Remove:** the old React name is still exported from `packages/icons/index.ts` (via the deprecation alias) — TypeScript compilation of any consumer that still uses the old name must succeed.

If `build/` still holds stale artifacts from before this run (svgr does not clean), delete `packages/icons/build` and `packages/icons/dist` and rebuild — otherwise the old-named components will linger and hide the effect of your changes.

Most common failure: `id` doesn't match a real Phosphor slug → `cpy` errors with "no files found". Re-verify against `node_modules/@phosphor-icons/core/assets/`.

**Completion criterion:** `npm run build -w packages/icons` succeeds, every planned change is reflected in `build/`, and every deprecated alias from Step 5 still resolves.

## Step 9 — Report back

Summarize:

- Counts per bucket, plus how many deprecation aliases were added.
- Files changed: `packages/icons/src/icons.config.mjs`, `packages/icons/index.ts`, `packages/icons/MIGRATION-v<old>-to-v<new>.md`, `packages/icons/figma/icons.figma.tsx`.
- Suggested Conventional Commit — thanks to the alias layer, renames/removes are additive at the API surface:
  - `feat(icons): sync icons from figma` (mixed changes)
  - `feat(icons): add <name> icon`
  - `feat(icons)!: rename <old> to <new>` — the `!` still signals intent (removal comes in the next major), and gives release tooling a chance to bump appropriately

Do not run the release yourself — that is [[npm-release]].
