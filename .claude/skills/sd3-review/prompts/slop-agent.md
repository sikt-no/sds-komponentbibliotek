# slop + conventions agent

Flag AI-generated prose tells and SD3 convention drift.

Read these files under `packages/design-system/src/<PascalCase>/`:

- `src/<PascalCase>.tsx`
- `src/<kebab>.css`
- `stories/<PascalCase>.stories.tsx`
- `figma/<PascalCase>.figma.ts`
- `index.ts`
- The root barrel: `packages/design-system/index.ts` (grep for the component's re-export)

Report `file:line — <finding>`.

## AI tells (prose)

Scan JSDoc, CSS comments, and Storybook `description.component` / `description.story`:

- **Em-dash sandwich.** Two em-dashes bracketing an aside in one sentence. Count them.
- **"Reach for it when X; for Y, use Z."** Any variant of this construction.
- **"Replaces X."** Story descriptions must not name the legacy `@sikt/sds-*` package they replace.
- **Meta demo text.** Prose about the demo itself ("This story shows…") rather than the component.
- **Norwegian in Storybook descriptions.** Both `description.component` and `description.story` are English; Norwegian bokmål stays in `astro/*.mdx`.
- **Multi-paragraph JSDoc.** One short line per prop. Multi-paragraph is drift.

## Storybook conventions

- **No redundant argTypes.** Grep for `argTypes` entries that only restate information docgen already infers from the TypeScript interface (type, description duplicating JSDoc). Override only what docgen can't see.
- **No default values in args.** Stories' `args` must not restate a prop's own default. Only required or non-default props.
- **`on*` callbacks in no-callback stories.** `argTypesRegex` auto-wraps every `on*` prop with an action handler. Stories demonstrating "no callback" state must set the prop to `undefined` explicitly.
- **Icon selector uses the shared helper.** If the component takes an icon prop, the story imports `iconArgType` and `IconComponent` from `_stories/iconArgType.ts` — not a hand-rolled select.
- **Composition args.** text + text + boolean pattern marked `category: "Composition"` with a shared `render` on the meta. StatusMessage is the reference.
- **Minimal story set.** `Default` + controls is the baseline. Each extra story must demonstrate composition, polymorphism, non-obvious aria, or an interaction — not one-per-prop or one-per-variant.
- **Title uses spaced display name.** e.g. `SD3/Status Message`, not `SD3/StatusMessage`.

## CSS conventions

- **`@scope` wrapper.** File is inside `@scope (.sd3-<kebab>) { :scope { ... } }`. Flat block is a blocker.
- **Single root class.** Exactly one `.sd3-<kebab>` selector. No BEM descendants.
- **Data-attribute variants.** `&[data-variant="…"]`, `&[data-size="…"]` — not `.sd3-<kebab>--strong`.
- **Tokens are `--sd3-*` only.** Grep for `--sds-` in the file. Known exception: shared `--sd3-shadow-*` bridge tokens.
- **No `&` without compounding.** `&` is only for compounding onto the parent (`&[data-x]`, `&:hover`). Descendant/child/sibling selectors drop the `&`.
- **Local CSS vars use full kebab name.** `.sd3-search-field` → `--search-field-*`, never `--sf-*`.
- **No redundant `min-height`.** If padding-block + line-height × font-size already produces the target height, `min-height` is noise.
- **No SPEC-ref comments on every token.** Skip the `/* from SPEC … */` annotations.
- **No `width:` + `font-size:` on the same em-based var on the same element.** sds-icon children need wrapping in a non-`sds-*` span if targeted from component CSS.
- **Typography tokens on icons.** `.sds-icon` is `1em × 1em`; size icons via `font-size: var(--sd3-typography-size-text-interaction-*)`, not raw rem.

(Focus-ring completeness is the a11y agent's beat, not this one.)

## SD3 purity (no legacy sds-\* imports)

Applies to `src/<PascalCase>.tsx`, any colocated hook/helper, **and** `stories/<PascalCase>.stories.tsx`. SD3 components and stories must not depend on legacy SDS packages — the point of the package is a clean slate. A single legacy import is a blocker.

- **No `@sikt/sds-*` imports.** Exception: `@sikt/sds-icons` (icon source for both tracks) and `@sikt/sds-core` if it still ships purely-structural helpers. Everything else — `@sikt/sds-button`, `@sikt/sds-dialog`, `@sikt/sds-badge`, `@sikt/sds-typography`, … — is legacy; grep for `from "@sikt/sds-` and flag each hit.
- **No relative imports into sibling legacy packages.** The repo also ships legacy packages at `packages/<kebab>/` (`packages/button/`, `packages/badge/`, etc.). `import … from "../../../../button"` and friends bypass the npm-package surface but still pull legacy code. Grep for `from "../../../../` or `from "../../../../../` in `.tsx` and reject hits that resolve to `packages/<legacy>/`. Allowed: `packages/design-system/**` (own package) and `packages/design-system/types/index.ts` (shared SD3 types per ADR-20260801).
- **No `@sikt/sds-design-tokens` imports.** SD3 consumes `@sikt/sd3-design-tokens` only.
- **Reach for the SD3 equivalent.** `ButtonGroup` from legacy sds-button → `Button.Group` from `../../Button`. If no SD3 equivalent exists, flag as **missing SD3 primitive** rather than papering over with the legacy import.

(CSS side is already covered under "CSS conventions — Tokens are `--sd3-*` only." If a component's CSS imports `--sds-*` tokens, that's the same rule from the stylesheet angle.)

## Component conventions

- **No custom props wrapping aria attributes.** No invented `announce` / `pressed` / etc. that map to `aria-live` / `aria-pressed`. Expose native via `HTMLAttributes`.
- **Sub-components map 1:1 with Figma slots.** No invented sub-components, no renamed `slot` → `Actions`, no one-Figma-slot split into several.
- **Hoisted static JSX is fine.** Don't flag module-level consts for single-use static JSX subtrees (decorative icon wrappers, etc.).
- **Reuse SD3 components.** A clear/submit affordance inside a SearchField is `<Button size="small" variant="tertiary" />`, not a raw `<button>` with replica CSS.
- **No duplicate native behaviour.** `<input type="search">` already clears on Esc; don't add a handler to re-do it.
- **Shared prop types.** `variant` / `size` / `state` / `iconPosition` / `category` import from `packages/design-system/types/index.ts` — not inline string unions.
- **className spread last** in `clsx(...)`.
- **`...rest` spread on root** after the computed `className`.
- **`displayName` set** on the exported component.
- **No `forwardRef`** — `ref` is a plain prop in React 19.
- **`asChild` from `@radix-ui/react-slot`** on any component with a single semantic root. Mandatory for `<a>` and `<img>` roots.

## Code Connect (`figma/<PascalCase>.figma.ts`)

- **Extension is `.figma.ts`.** A `.figma.tsx` sibling is a blocker — the glob skips it.
- **Directive comments.** File starts with `// url=…` and `// component=…`.
- **Imports `figma` from `"figma"`.** Not `@figma/code-connect`.
- **URL points at SDS Komponenter 3.0** — contains `0aelUwbn2Ivir3T2JfhdOo`, not `RMhyuuEhXZ4vbKVrLQr4t4`. `?node-id=` is populated (not `<node-id>`).
- **DRY `figma.selectedInstance`.** Extract `const instance = figma.selectedInstance;` and call `instance.getX(...)` uniformly.
- **`metadata: { nestable: true }`.** Missing → nested renders skipped.
- **No `links:` field.** 1.0 only.

## Wiring

- **`index.ts` exports both type and value.**
- **Root barrel re-exports the component.** Grep `packages/design-system/index.ts` (or the aggregating `src/index.ts`) for the re-export line.

## Documentation hygiene

- **No per-component `README.md`, `stories/Readme.mdx`, `stories/Changelog.mdx`, or `CHANGELOG.md`.** The shared package owns one changelog.
- **`astro/<kebab>.mdx` filled** (not the empty stub) if present, in Norwegian bokmål.

Report in the shape from `REPORT.md`.
