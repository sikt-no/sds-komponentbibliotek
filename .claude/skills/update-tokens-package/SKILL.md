---
name: update-tokens-package
description: >
  Sync @sikt/sd3-design-tokens with the "SDS Tokens" Figma file and rebuild
  the package. Use when the user wants to update design tokens, pull new
  tokens from Figma, sync tokens, rebuild the tokens package, refresh colors
  or sizes, or regenerate the token CSS. Trigger words: "update tokens",
  "sync tokens", "rebuild tokens", "new tokens from Figma", "refresh tokens",
  "pull tokens".
---

# Update design tokens from Figma

Figma is the source of truth for all design tokens in `@sikt/sd3-design-tokens`. The JSON mirror in `packages/design-tokens/src/figma/` is regenerated whenever a designer updates variables in the SDS Tokens file.

## Why some steps are manual

Figma's Dev Mode "Export" button on the Variables panel is the only supported way to get the current variable collections out as JSON. It cannot be triggered via the Figma MCP or any API — the user has to click through it. Everything after the download **is** scripted (unzip, replace, rebuild, diff), so the skill guides the user through the clicks and then takes over.

## Source file

**https://www.figma.com/design/T3UXXg2tQndIgtZhMmMf6c/SDS-Tokens?node-id=25-490&p=f&m=dev**

- File key: `T3UXXg2tQndIgtZhMmMf6c`
- Target folder: `packages/design-tokens/src/figma/`
- Collections (one subfolder each):
  - `button-themes`
  - `color-themes`
  - `foundation`
  - `size-responsive`
  - `size-static`
  - `typography`

---

## Step 1 — User exports from Figma

Walk the user through this verbatim — the clicks matter:

1. Open the Figma file at the URL above.
2. Toggle **Dev Mode** (switch in the top bar, or press `Shift + D`).
3. Open the **Variables** panel from the right sidebar.
4. For **every** collection listed in the sidebar (there should be six — one per folder listed above):
   - Click the collection to select it.
   - Click the collection's **Export** button → a zip saves to `~/Downloads`.
5. Repeat until all six collections are exported.

Confirm with the user that every collection has been exported before continuing. If a collection is renamed or added in Figma, flag it — the folder list above may need to grow.

## Step 2 — Preview the import plan

Dry-run the helper to show which zip will replace which folder:

```sh
node .claude/skills/update-tokens-package/scripts/apply_figma_exports.mjs --dry-run
```

Default source is `~/Downloads`; override with `--source <dir>` if the user keeps exports elsewhere.

Show the plan to the user. If any collection folder has no matching zip, stop and ask the user to re-export the missing one — a partial sync will delete tokens that are still valid.

## Step 3 — Apply the exports

Once the user approves the plan:

```sh
node .claude/skills/update-tokens-package/scripts/apply_figma_exports.mjs
```

The script:

- Unzips each matched zip to a temp directory.
- Removes existing `*.tokens.json` files from the target subfolder.
- Copies the extracted JSON files in, adding `.tokens.json` if Figma exported them as plain `.json`.

The processed zips are left in place — the user can decide when to clean up `~/Downloads`.

## Step 4 — Rebuild the tokens package

```sh
npm run build:tokens --workspace=@sikt/sd3-design-tokens
```

This runs Style Dictionary and refreshes `packages/design-tokens/dist/` (CSS, JS, Tailwind).

## Step 5 — Review the diff

```sh
git status packages/design-tokens
git diff --stat packages/design-tokens
```

Summarize for the user:

- Which collection folders changed.
- Any added or removed mode files (a new mode in Figma, or a removed one).
- Notable `dist/` changes (new CSS custom properties, removed ones).

Do not commit — let the user choose scope and message. Suggested conventional-commit form: `chore(design-tokens): sync <collection(s)> from Figma`.

---

## Notes

- `dist/` is gitignored (built on install/publish). Only `src/figma/` changes will show in the diff — but still rebuild locally so the user can verify the build succeeds and emits all expected files.
- Watch the build output for warnings like `No tokens for css/<name>.css. File not created.` — that usually means Figma restructured a top-level key (e.g. `color.button.*` → `color-button.*`) and `bin/build.mjs` needs updating. Flag to the user; don't fix silently.
- The script won't create new folders. If Figma gained a collection, add the matching subfolder under `src/figma/` first — an unexpected zip is more often a mis-named export than a legitimate new collection.
- The script won't touch non-`.tokens.json` files already in the target folders.
