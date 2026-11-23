---
name: sd3-builder
description: >
  Build an SD3 component inside `@sikt/sd3-design-system` from a spec folder
  (SPEC.md + screenshots + token tables, usually produced by [[sd3-spec]]).
  Verified by [[review-component-spec]].
  Use when the user wants to build a component from an existing spec folder,
  resume a partial implementation, or align an existing component with an
  updated spec.
  Trigger words: "sd3-builder", "implement spec", "update the component".
---

# SD3 Builder

Target: `packages/design-system/src/<PascalCase>/`. Single root class + `data-*`; `--sd3-*` tokens only.

This skill operationalises the decisions in **[ADR-20260801 Figma 3.0 Migration](../../../docs/architecture/decisions/ADR-20260801-Figma-3-0-Migration.md)**: monopackage, centralised shared types, `@scope` replacing BEM, atomic attribute-based CSS, React 19 only.

**Comments default to none across every artifact** (tsx/JSDoc, CSS, Jest, Storybook, Playwright, Code Connect). Keep one only for a hidden invariant, a workaround for a specific bug, a non-obvious token/Figma binding, or a shared-join radius. One short line, plain register.

## Three principles

1. **Reuse SD3 components.** Buttons are `<Button>`. Text goes through `Typography/` primitives (`Typography.Heading`, `Typography.Paragraph`, `Typography.Label`, `Typography.Link`, `Typography.Span`). Grep `packages/design-system/src/` for the role before reaching for raw `<button>`/`<a>`/`<input>`/`<h*>`/`<p>`.
2. **Use web standards.** `<input type="search">` clears on Esc. `<button>` activates on Enter/Space. `<a>` navigates on click. `<form>` submits on Enter. `disabled` blocks click. `aria-*` passes through `HTMLAttributes` — don't wrap it in custom props. If a handler duplicates native behaviour, delete it.
3. **No invention.** Every line traces to SPEC.md or a rule below.

## Jest vs Playwright — no overlap

Pick the tool that fits the signal; do not assert the same thing twice.

- **Jest (+ RTL + jest-axe)** — contract. What the component _does_ in jsdom: props → `data-*` mapping, conditional rendering, sub-component detection (`hasChildOfType`), handlers firing with the right args, `asChild` delegation, boolean-state attribute presence/absence, DOM-level a11y violations (missing labels, bad roles, broken `aria-*` wiring).
- **Playwright (+ AxeBuilder)** — appearance and real-browser behaviour. What the component _renders_: visual snapshots per variant/size/theme as slices, focus-visible ring, hover state if layout shifts, and axe in a real browser so it catches **colour contrast** and other render-dependent a11y bugs jsdom can't compute.

Overlap rule: **don't assert `data-variant="strong"` in a Playwright test** (Jest covers it) and **don't assert "does it look different" in a Jest test** (Playwright covers it). Axe runs in both deliberately — Jest catches logical a11y, Playwright catches visual a11y; neither replaces the other.

## Reference components

Copy the shape, don't re-derive it.

| Pattern                                                                   | File                                                                                                                                                        |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Minimal variant + size via `data-*`                                       | `Badge/src/Badge.tsx` + `badge.css`                                                                                                                         |
| Compound sub-components (`Object.assign`)                                 | `Details/src/Details.tsx`, `StatusMessage/src/StatusMessage.tsx`                                                                                            |
| `asChild` via Radix `Slot`                                                | `Button/src/Button.tsx`, `Footer/src/Footer.tsx`                                                                                                            |
| Form control over native `<input>`                                        | `Input/src/Input.tsx`                                                                                                                                       |
| Reuses another SD3 component                                              | `Pagination/src/PaginationNext.tsx`, `ToggleGroup/src/ToggleGroupItem.tsx`                                                                                  |
| Typography primitives (text, titles, labels, links)                       | `Typography/src/{Heading,Paragraph,Label,Link,Span}/` — consumed by `Field/src/FieldLabel.tsx`, `Field/src/FieldDescription.tsx`, `Details/src/Details.tsx` |
| Shared CSS layer (reset, globals, visually-hidden, custom-properties)     | `packages/design-system/src/css/{index,reset,custom-properties,font-face,visually-hidden}.css`                                                              |
| `Children.toArray` → `data-*` on root                                     | `Button/src/Button.tsx`                                                                                                                                     |
| Open/closed shared-join radii                                             | `Details/src/details.css`                                                                                                                                   |
| `@scope(...) to (...)` + local `--kebab-*` vars                           | `Badge/src/badge.css`, `Button/src/button.css`                                                                                                              |
| Minimal stories + composition args                                        | `StatusMessage/stories/StatusMessage.stories.tsx`                                                                                                           |
| Jest ordering (a11y → api, dimensions grouped)                            | `Badge/src/Badge.test.tsx`                                                                                                                                  |
| Playwright slice pattern                                                  | `Button/playwright/Button.spec.ts`                                                                                                                          |
| Code Connect 2.0 (`selectedInstance`, `renderProp`)                       | `Button/figma/Button.figma.ts`, `StatusMessage/figma/StatusMessage.figma.ts`                                                                                |
| Astro `.mdx` docs (bokmål)                                                | `StatusMessage/astro/status-message.mdx`                                                                                                                    |
| Shared union types (`Variant`, `Size`, `Category`, `State`)               | `packages/design-system/types/index.ts`                                                                                                                     |
| Shared runtime utilities (child-of-type detection, …)                     | `packages/design-system/utils/` (e.g. `has-child-of-type.ts`)                                                                                               |
| i18n for user-facing strings (`locale \| labels` prop, nb default)        | `Pagination/src/Pagination.tsx` (`resolveI18n`, `PaginationLocale`, `PaginationI18n`)                                                                       |
| Compile-time accessible name (require `aria-label` xor `aria-labelledby`) | `packages/design-system/types/index.ts` (`AriaLabelOrAriaLabelledby`) + `Avatar/src/Avatar.tsx`                                                             |

## Input

PascalCase name. Reads `packages/design-system/src/<PascalCase>/spec/SPEC.md`.

- Missing name → ask.
- Missing `SPEC.md` → stop; suggest `/sd3-spec`.
- Populated directory → update mode (skip Step 3 + Step 4).

## Step 1 — Load SPEC

Read `spec/SPEC.md` and its siblings (`figma.md`, `prior-art.md`, `research.md`, `followups.md`, `screenshots/`).

Verify: all template sections present; `Open questions & gaps` is empty (or only affects non-shipped items); note `Replaces: <sds-* names>`.

## Step 2 — Preflight + resolve tokens

Parallel:

- `ls packages/design-system/src/<PascalCase>/` — populated? → update mode.
- `ls packages/design-tokens/dist/css/tokens.css packages/core/dist/index.css 2>/dev/null` — missing? → `npm run postinstall`.

Load the full catalog: `packages/design-tokens/dist/css/index.css` + every `@import`. **Never `tokens.css` alone** — no colours or typography.

Each SPEC token → bucket:

- **Available** — `--sd3-*` exists. Use it.
- **Hidden** — missing from compiled catalog, present in `packages/design-tokens/src/figma/color-themes/*.tokens.json` with `"com.figma.hiddenFromPublishing": true`. Capture per-theme values for Step 6; follow-up to promote.
- **Missing** — not in either. Blocker.

Discriminator:

```sh
python3 -c "
import json, glob
path = 'interaction/toggle/handle'.split('/')
for f in sorted(glob.glob('packages/design-tokens/src/figma/color-themes/*.tokens.json')):
    d = json.load(open(f)); node = d.get('color', {})
    for k in path: node = node.get(k, {}) if isinstance(node, dict) else {}
    hidden = node.get('\$extensions', {}).get('com.figma.hiddenFromPublishing')
    hex_ = node.get('\$value', {}).get('hex')
    print(f'{f.split(\"/\")[-1]:35}  hidden={hidden}  hex={hex_}')
"
```

**Hardcoded values** in SPEC → block unless mapped to an existing token (grep catalog for the raw value) or covered by SPEC's `Documented exception` section.

**Icons:** verify each against `packages/icons/src/icons.config.mjs`. Missing → stop; suggest `/sync-icons-from-figma`.

**Dimension asymmetries:** SPEC's `Dimension-affecting asymmetries` table is a Step 6 action (transparent values reserve width). Un-documented asymmetry in the main tokens table → ask user.

**Spot-check at least one subagent-reported token with `mcp__figma-remote-mcp__get_variable_defs`.**

## Step 3 — Scaffold (new only)

```sh
npx turbo gen init-package --args=<PascalCase>
# fallback (needs real terminal):
npm run init
```

If `--args` fails, ask user to run `!npm run init`. Never scaffold manually.

Generator output under `packages/design-system/src/<PascalCase>/`:

```
astro/<kebab>.mdx
figma/<PascalCase>.figma.ts
playwright/<PascalCase>.spec.ts
src/<PascalCase>.tsx
src/<PascalCase>.test.tsx
src/<kebab>.css
stories/<PascalCase>.stories.tsx
index.ts
```

Delete any `package.json` / `CHANGELOG.md` / `README.md` / `stories/Readme.mdx` the generator regrows — host package owns the changelog, per-component READMEs were removed in `4a023430`.

## Step 4 — Plan + confirm

```
Component:       <PascalCase>   (new | update)
Slug (kebab):    <kebab>
CSS class root:  sd3-<kebab>
Semantic root:   <button | a | div | input | ...>
Props:           <one line per prop + default>
Variants:        <data-variant values>
Sizes:           <data-size values>
States:          hover, focus-visible, active, disabled, ...
Tokens used:     <count — all --sd3-*>
Icons used:      <list>
Sub-components:  <1:1 with SPEC's Slots table>
Stories planned: Default + <composition cases>
E2E planned:     axe per variant + per theme; visual as SLICES, not cartesian
Replaces:        <sds-* names | none>
Reuse check:     <existing SD3 components wired as sub-parts | n/a>
Web-standard check: <native behaviours NOT re-implemented | n/a>
```

Wait for confirmation.

## Step 5 — Fill `src/<PascalCase>.tsx`

Open `Badge/src/Badge.tsx`, `Button/src/Button.tsx`, `Details/src/Details.tsx` first. Apply the three principles to every prop and element.

- Correct `HTMLAttributes` for the semantic element (`ButtonHTMLAttributes<HTMLButtonElement>`, …). SPEC omits this — implementer's call.
- SPEC `Content`/`Icon` → `ReactNode`; `string` stays `string`.
- Reuse shared types from `packages/design-system/types/index.ts` (`Variant`/`Size`/`Category`/`IconPosition`/`State`).
- Reuse shared utilities from `packages/design-system/utils/` — `ls` it before writing any helper. `hasChildOfType(node, Component.Sub)` is already there for compound-sub detection. A new helper goes into `utils/` with a `.test.tsx` neighbour only if another component would plausibly use it; otherwise keep it local.
- JSDoc only on non-trivial props (skip `className?`, `id?`). One short sentence, plain register.
- Variants/states → `data-*` on root. Booleans pass `undefined` when false.
- Defaults via destructuring. `clsx` from `clsx/lite`.
- Add `ref?: Ref<HTMLElement>` only when SPEC's a11y/Props asks for it (React 19 forwards through `Slot`; skip `forwardRef`). Non-interactive containers (badges, tags, alerts, cards) omit it.
- Side-effect CSS import at top: `import "./<kebab>.css";`
- Preserve `displayName`.

**Prop names mirror Figma.** Figma `dismissable` → React `dismissable*` (not `onDismissClicked`). Figma `variant="Critical"` → React `"critical"`. If SPEC diverges, flag it back.

**Render on slot presence**, not `showX`/`hasX` booleans: `{icon && <span>{icon}</span>}`.

**SPEC's `slot: Content` → `Component.Slot` sub-component**, not a `ReactNode` prop. Scalar-typed (`alt`, string title) stays a prop.

### Branches

Read `.claude/skills/sd3-builder/tsx-branches.md` for the subsection matching SPEC:

- SPEC has a **Slots** table → `Compound sub-components`.
- SPEC asks for **element-swap** or semantic root is `<a>`/`<img>` with framework-link consumers → `asChild`.
- SPEC has **user-facing strings** → `i18n`.
- SPEC has a variant with **no path to visible text** (Avatar initials, icon-only, modal) → `Accessible name`.

## Step 6 — Fill `src/<kebab>.css`

Open `Badge/src/badge.css`, `Button/src/button.css`, `Details/src/details.css` first.

Opener is verbatim from the generator:

```css
@scope(.sd3-<kebab>) to ([class^="sds-"], [class^="sd3-"]) {
  :scope { … }
}
```

Never rewrite to `@scope (.sd3-<kebab>) { … }` — the `to (...)` limit stops descent at nested SD3/SDS.

- Single `.sd3-<kebab>` root class. No BEM `__`. Child elements → `[data-part="label"]` or nested element selector.
- Zero hard-coded values. Every value is `var(--sd3-*)`. Exceptions: `0`; SPEC's `Hidden-token values` rows; SPEC's `Documented exception` section.
- Hidden tokens: one block per theme root (`:root` / `[data-color-theme="gray"]` / `["white"]` / `["feide"]`), `light-dark(light, dark)`, assigned into a `--<kebab>-*` local. Comment: `/* hidden token: color/brand/accent-01 */`.
- Local-var prefix is the full kebab (`.sd3-search-field` → `--search-field-*`, NOT `--sf-*`).
- Hover inside `@media (pointer: fine)`.
- Focus ring: `outline: var(--sd3-focus-outline)` + `outline-offset: var(--sd3-focus-outline-offset)` + `box-shadow: var(--sds-focus-box-shadow)` on `:focus-visible`. The `sds-` on box-shadow is legacy — use as-is.
- Variants reserve width. If any variant has a `border`, every other variant has the same width with `transparent`. Never gate `border-width` on variant.
- Icon sizes: `font-size` on the parent. Never `width`/`height` on `.sds-icon` or `[data-part="icon"] > *`. Prefer `--sd3-typography-size-text-interaction-{sm|md|lg}`.
- **Inherit from the shared CSS layer at `packages/design-system/src/css/`.** Open those five files before the first rule — `index.css` (`:root` font + colour globals), `reset.css` (margins zeroed on heading/paragraph/list/table/fieldset; native controls inherit `font`/`color`; universal reduced-motion zero; `::placeholder` opacity; cursor rules on aria-* states), `visually-hidden.css` (use `.sd3-visually-hidden`, with `&.focusable` for skip-links), `custom-properties.css` (focus-ring vars), `font-face.css` (Haffer). The hygiene greps below catch redeclarations.
- Skip `min-height` when padding + line-height already produces the target height.
- Group state selectors by state. All `:hover` rules adjacent/nested together; same for `:active`, `:focus-visible`, `:disabled`.
- Shared-state tokens → hoist to component-local `--<kebab>-*` on a common ancestor (via `:has()` or state selector).
- Component-locals are assigned from `--sd3-*`, never from raw values.
- Don't `@import` `@sikt/sd3-design-tokens` from component CSS.
- `&` only for compounding (`&[data-x]`, `&:hover`).

Hygiene grep before green-gate:

```sh
grep -E '#[0-9a-fA-F]{3,8}|[0-9]+(px|rem|em|%)' packages/design-system/src/<PascalCase>/src/*.css
grep -oE 'var\(--sd3-[a-z-]+\)' packages/design-system/src/<PascalCase>/src/*.css | sort | uniq -c | sort -rn
grep -E '^\s*(font-family|-webkit-font-smoothing|-moz-osx-font-smoothing|interpolate-size)\s*:' packages/design-system/src/<PascalCase>/src/*.css
grep -nE 'position:\s*absolute.*\n[^}]*clip-path' packages/design-system/src/<PascalCase>/src/*.css # bespoke visually-hidden recipe — use .sd3-visually-hidden instead
grep -nE '@media.*prefers-reduced-motion' packages/design-system/src/<PascalCase>/src/*.css # already handled globally; only legitimate if the component has motion worth tuning separately
grep -nE '^\s*margin:\s*0\s*;' packages/design-system/src/<PascalCase>/src/*.css # redundant on h1-h6/p/dl/ol/ul/fieldset/table — reset already zeros these
grep -nE '\.(sds-icon)|\[data-part(\*)?="icon' packages/design-system/src/<PascalCase>/src/*.css
```

Every hit must be `0`, a hidden-token block, or a documented exception. Tokens with 3+ occurrences across related states → candidate for a local var.

## Step 7 — Fan out (parallel after interface frozen)

Once tsx + CSS are stable, dispatch the four artifacts below as parallel sub-agents in one message. Each sub-agent reads **only** its sub-file plus the frozen interface shape passed in the prompt.

| Artifact          | File                               | Sub-file                                     |
| ----------------- | ---------------------------------- | -------------------------------------------- |
| Jest tests        | `src/<PascalCase>.test.tsx`        | `.claude/skills/sd3-builder/tests.md`        |
| Storybook stories | `stories/<PascalCase>.stories.tsx` | `.claude/skills/sd3-builder/stories.md`      |
| Playwright e2e    | `playwright/<PascalCase>.spec.ts`  | `.claude/skills/sd3-builder/playwright.md`   |
| Code Connect 2.0  | `figma/<PascalCase>.figma.ts`      | `.claude/skills/sd3-builder/code-connect.md` |

**`astro/<kebab>.mdx` is left empty for now** — populated by a separate pass. Don't touch it here.

Sub-agent prompt shape:

```
Read .claude/skills/sd3-builder/<sub-file>.md and follow it exactly.

Component:    <PascalCase>
Slug (kebab): <kebab>
Interface:    <tsx interface shape — props, variants, sizes, states, data-attrs, sub-components>
Replaces:     <sds-* list | none>

Report back: path written + a 3-line summary of what it covers.
```

## Step 8 — Wire the export

Confirm `packages/design-system/index.ts` (or the aggregating file — grep) re-exports: `export * from "./src/<PascalCase>";`.

Missing this is the #1 reason `import { <PascalCase> } from "@sikt/sd3-design-system"` fails in Storybook / consumer apps.

## Step 9 — Green gate loop

```sh
npm run lint
npm run test:unit -- -- packages/design-system/src/<PascalCase>/**/*.test.tsx
npm run build --workspace=@sikt/sd3-design-system
```

- Lint fail → fix code, not config.
- Test fail → add tests for missing branches, never lower coverage.
- Build fail → re-check barrel export + token resolution.
- Build complains about missing `@sikt/sd3-design-tokens` artefacts → `npm run postinstall`.
- Never run `npm run test:e2e` (needs Storybook; generates platform-specific screenshots). That's `/review-component-spec`'s job.

## Step 10 — Report

- Paths written or modified.
- SPEC variants → `data-*` → story name (one line each).
- Any SPEC `Open questions & gaps` still unresolved.
- Callouts:
  - "Playwright baselines NOT generated. Regenerate via CI Docker / GitLab `test-e2e-update-snapshots`."
  - "SPEC `Replaces: <sds-*>` — plan deprecation separately; this skill does not touch the old packages."
- Suggested next: `/review-component-spec`, then `/npm-release` when ready.
