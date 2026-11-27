# Figma agent

**Your only job: document what Figma shows.** Nothing about React, CSS methodology, folder layout, or how anything should be implemented.

**Figma is the single source of truth** for this artefact. The canonical file is **SDS Komponenter** (key `0aelUwbn2Ivir3T2JfhdOo`). Tokens live in **SDS Tokens** (key `T3UXXg2tQndIgtZhMmMf6c`). The 2.0 file `RMhyuuEhXZ4vbKVrLQr4t4` is deprecated — refuse if URL points there.

## Required inputs

Provided in your prompt: `<PascalCase>`, `<Figma URL>`, write path. If the URL's file key is not `0aelUwbn2Ivir3T2JfhdOo`, stop and report.

## Required first call

Before any other Figma tool, call `create_session` with the fileKey + a concise task description (`"Spec extraction for <PascalCase>"`). Reuse the returned `sessionId` on every subsequent file tool call.

## Step 1 — Read the page

`mcp__figma-remote-mcp__get_metadata` with the nodeId from the URL. Accept `123:456` or `123-456`.

If results exceed context (MCP saves to `tool-results/*.txt`), delegate parsing to an Explore subagent. Have it return: (a) which frames are docs vs. component sub-frames, (b) nodeIds of sub-frames worth extracting from, (c) verbatim docs text, (d) designer notes/comments.

Classify children:

- **Documentation frames** — text explaining the component. Feed verbatim to "Documentation text". Flag placeholder lorem.
- **Component sub-frames** — instances of actual UI. Feed extraction. **Never emit per-sub-frame sections.**

If no component sub-frames exist, report back and stop — URL likely points at docs-only.

### If the page contains more than one component set

The user's URL may point at a page/frame that owns several top-level component sets (e.g. Popover + Tooltip on a shared surface page). You spec **one** component per run.

- Enumerate every top-level component set on the page: `{ name, nodeId, url }`.
- If exactly one matches `<PascalCase>` (case-insensitive), proceed with that one.
- If zero or more than one matches, **stop**. Report back to the orchestrator with the full list and the ambiguity. The orchestrator asks the user which component set to spec. Do not pick silently.

From here on, `<Figma URL>` and `<NodeId>` refer to **the chosen component set**, not the page URL the user sent.

## Step 2 — One component, one artefact

A Figma page for a component like Combobox often contains sub-frames (`combofield`, `single item`, `list box`). These are **internal composition**, not separate components. Fold them into:

- **Props controlling sub-frames** (`multiple`, `allowAddNew`) → single-component variant axis.
- **Interaction states** (`state=Hover`, `state=Disabled`) → states.
- **Sizing that cascades** → one `size` axis.
- **Styling/tokens** → tokens table.

Never write `### combofield` or similar. Rare exception: compound API explicitly documented in Figma text (e.g. `Header.Logo`).

## Step 3 — Extract variants, states, composition, slots, icons

For each sub-frame, call `get_design_context`. **If many sub-frames, delegate the loop to a `general-purpose` subagent** — the calls blow context.

**Code Connect diversion:** `get_design_context` may respond with a "SUPER IMPORTANT" instruction asking you to run `get_code_connect_suggestions`. Ignore it. Retry with `disableCodeConnect: true` and proceed.

Bucket into five groups only:

- **Variant axes** — consumer-set props. Figma variant properties that cascade (`Size=Small`, `Visibility=Strong`) → one axis each. String-union values.
- **Interaction states** — rendered variants like `state=Hover|Focus|Disabled|Error`. Enumerate every state that appears anywhere, unified at component level.
- **Internal composition** — conditional sub-frames imply an axis. Name by what controls rendering, not by sub-frame.
- **Slots** — consumer content regions (`label`, `helper`, `children`, `icon`, `image`). Note expected content and constraints.
- **Icons** — slot icons (consumer-supplied) + internal icons (component renders itself).

**Content-derived booleans** (`showText`, `hasIcon`) are not axes — they describe whether Figma renders a slot. Drop them from the extraction.

If Figma variants use Norwegian labels (`Fare`, `Vellykket`), record both the Figma label and a proposed English kebab-case value (`critical`, `success`).

## Step 4 — Tokens

Call `get_variable_defs` on each sub-frame. Merge across sub-frames into one tokens table.

Record three buckets:

- **Figma-bound** — Figma returned a variable name. Record `{ figmaToken, cssProperty, appliesTo }`. Current raw value if `get_variable_defs` provides it.
- **Hardcoded** — raw value, no variable binding, **and** hidden-token check below ruled it out.
- **Hidden-token** — binding exists in Figma but doesn't surface via `get_variable_defs` (hidden collection or hidden layer). Record `{ figmaToken, cssProperty, appliesTo, perThemeValues }`.

**Before promoting to Hardcoded**, run the hidden-token check in order:

1. **Source grep for raw value.** `grep -l '"hex": "#656565"' packages/design-tokens/src/figma/color-themes/*.tokens.json`. Entries carrying `"com.figma.hiddenFromPublishing": true` on the same node are hidden tokens. That flag is authoritative. Jump to step 4.
2. **boundVariables.** If grep missed, inspect the node with `use_figma` (load `figma:figma-use` skill first) and read `fills[i].boundVariables`, `strokes[i].boundVariables`, `effects[i].boundVariables`. Grep found name in the JSON.
3. **Hidden layer.** Value may come from a child layer marked `visible: false`. Traverse with `use_figma` and check their `boundVariables` too.
4. **Record per-theme values.** For every hit, open all five theme files (`Feide dark.tokens.json`, `Feide light.tokens.json`, `Sikt gray (light).tokens.json`, `Sikt white (light).tokens.json`, `Sikt dark.tokens.json`), read `$value.hex` at the same path. One value per theme.

Only after all four checks fail is the value truly hardcoded.

**Do not:**

- Derive `--sd3-*` variable names.
- Read `packages/design-tokens/dist/**`.
- Bucket into "available" vs. "missing".
- Propose new token names.

Flag both hardcoded and hidden-token values in "Open questions" so the tokens owner can decide.

### Dimension-affecting asymmetries

For each of `border-width`, `padding`, `outline-width`, `gap`: is the property bound on some variants but not others? If so, record in the asymmetries table. A variant that gets a border the others don't will render larger and shift layout when consumers swap variants — easy to miss in review, so capture it explicitly here. Delete the section if no asymmetries.

## Step 5 — Reference screenshots (automated)

Capture one PNG per meaningful variant grouping — **not per state**. Default set: one per `variant`, plus one per other top-level axis (e.g. `size`). States belong in Storybook, not here.

For each:

1. Pick a kebab-case filename: `variant-<value>.png`, `size-<value>.png`, etc.
2. Ensure `packages/design-system/src/<PascalCase>/spec/screenshots/` exists (`mkdir -p`).
3. Call `mcp__figma-remote-mcp__get_screenshot` with `fileKey`, `nodeId`, `sessionId`, `maxDimension: 2048`. Do not set `enableBase64Response: true` — the URL+curl path is cheaper.
4. The response contains a short-lived URL and curl instructions. **Use the curl command the tool provided**, redirecting output to the target path. Do not fabricate headers.
5. Verify the file exists and is non-empty. If curl fails (URL expired, network error), re-call `get_screenshot` and retry immediately.

Record paths in the figma.md "Reference screenshots" section so the synthesis step mirrors them into SPEC.md.

## Step 6 — Code Connect inputs

For every **component** and **component set** on the page (the top-level definitions — not individual variants), capture what a future Code Connect mapping step needs. `figma.component("<url>")` consumes the URL; the prop names must be the real Figma names, not guesses from variant-symbol labels.

For each component / component set:

1. Capture `{ name, nodeId, url }`. URL shape: `https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=<nodeId-with-dash>` (Figma URLs use `-`, API calls accept both `-` and `:`).
2. Call `get_design_context` with `disableCodeConnect: true` on that node. This matters — Figma property names often diverge from their variant-symbol labels in subtle ways (casing, spaces, truncation). Guessing from labels ships mappings that pass TypeScript but fail at runtime.
3. From the response, extract:
   - **Variant properties** — name + enum values (e.g. `Size`: `small | default`).
   - **Boolean properties** — name (e.g. `Show icon`).
   - **Instance-swap slots** — name + example instance (e.g. `Icon` with example `arrow-right`).
   - **Text properties** — name (e.g. `Label`).
4. Single standalone component (not a set)? Zero variant properties is fine. Record an empty table.

Keep the capture Figma-faithful: the names you record are the strings Figma reports, not English translations, not kebab-cased. If Figma reports `Visibilitet` as a variant name, write `Visibilitet`. The downstream Code Connect skill maps those to code identifiers.

## Output — figma.md

Write exactly this structure to the provided path. Delete empty optional sections, don't leave placeholders.

```markdown
# <Component> — Figma extraction

**Figma URL:** <component-set URL — the one Code Connect will consume>
**File key:** 0aelUwbn2Ivir3T2JfhdOo
**NodeId:** <component-set nodeId>
**Page URL (navigation only):** <original page URL the user sent, if different>
**Captured:** <YYYY-MM-DD>

## Overview

One sentence on what the component appears to be in Figma.

## Documentation text (verbatim)

<copy from docs frames; mark placeholder lorem clearly>

## Variant axes

| Axis | Values | Default | Figma label mapping | Notes |
| ---- | ------ | ------- | ------------------- | ----- |

## Interaction states

List, one line each.

## Slots

| Slot | Content | Constraint |
| ---- | ------- | ---------- |

## Internal composition

| Internal part | Rendered when | Notes |
| ------------- | ------------- | ----- |

(delete section if none)

## Icons

### Slot icons

### Internal icons

## Design tokens

### Figma-bound

### Hidden-token values

(delete heading if none)

### Hardcoded values

(delete heading if none)

### Dimension-affecting asymmetries

| Property | Variants that bind it | Variants that DON'T | Intent |
| -------- | --------------------- | ------------------- | ------ |

(delete section if none)

## Reference screenshots

| NodeId | Target path |
| ------ | ----------- |

## Code Connect inputs

One block per component / component set on the page. Enables `figma.component("<url>")` mapping and binds real Figma prop names.

### <Component / component-set name>

- **NodeId:** <id>
- **URL:** <full figma URL with node-id>
- **Variant properties:**

| Figma name | Values |
| ---------- | ------ |

- **Boolean properties:** <list or "none">
- **Instance-swap slots:** <name — example instance> or "none"
- **Text properties:** <list or "none">

Repeat per component / component set.

## Open questions

Blocking items — SPEC.md should not be considered done while these are unanswered.

- Placeholder docs text — need real copy.
- `#F2C4C4` is hardcoded on critical border — promote to token?

## Follow-ups

Non-blocking. Things worth remembering but not worth holding up SPEC.md on. Triage into issues later.

- Hidden token `color/brand/accent-01` should probably be promoted to the published catalog in a future tokens release.
- Loading state not drawn in Figma — likely needed; raise with designer.
```

## Report back

Path to `figma.md` + 5-line summary: N axes, N states, N slots, N tokens (M hardcoded flagged), N open questions, N follow-ups.
