# Chip family — Spec

**Figma:** [SDS Komponenter — Chip](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25880-712&p=f&m=dev)
**Component folder:** `packages/design-system/src/Chip/`

Two components live in this folder and share this spec:

- `<InputChip>` — dismissible chip. Consumer removes it in response to a click.
- `<FilterChip>` — toggleable chip. Consumer flips its `pressed` state in response to a click.

**Replaces:** `@sikt/sds-chip`
**Last synced:** 2026-09-25

> **Note.** Shared spec covering **two components**. They share sizing, typography, focus geometry, and most tokens, but differ in variant axes, semantic role, and the trailing icon. Sections that apply to only one component say so in the "Applies to" column or a sub-heading.

## Overview

Small interactive controls used to add, remove, or toggle filters and inputs. Two components with distinct interaction models:

- **`InputChip`** — dismissible. The whole chip is a click target; the trailing `×` is a visual affordance for "remove". Consumer removes the chip from state in response to the click. Reach for it when the chip represents a user-entered value (a tag typed into a field, a selected recipient, a filter added from search).
- **`FilterChip`** — toggleable. The whole chip is a toggle button; the trailing icon swaps between `⊕` (unpressed) and `⊗` (pressed) to reflect the current state. Consumer flips the `pressed` prop in response to the click. Reach for it when the chip represents a filter that can be turned on or off (facet filters, tag pickers).

Neither component is a form control by itself — both are stateless buttons that report clicks. State ownership stays with the consumer.

## Shared variant axes

Applies to both components.

| Axis | Values            | Default  | Figma label mapping                    | Notes                                                                                                                                                                 |
| ---- | ----------------- | -------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size | standard, compact | standard | Standard → standard, Compact → compact | Standard: 12px inline / 8px block padding. Compact: 8px inline / 4px block. Typography and icon size do NOT scale — the label stays at `text/interaction-md` in both. |

## Component-specific variant axes

### `InputChip`

None. The trailing `×` and the "dismiss" behaviour are constant.

### `FilterChip`

| Axis    | Values      | Default | Figma label mapping                                  | Notes                                                                                                                                                                                                                                                                   |
| ------- | ----------- | ------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pressed | true, false | false   | Figma variant `selected`: True → true, False → false | Controls background palette, border colour, and which trailing icon renders (`⊕` unpressed, `⊗` pressed). Consumer-owned; component reads it and reflects it. React API uses `pressed` to match `aria-pressed`; the Figma variant kept its design-side name `selected`. |

## Interaction states

Applies to both components.

| State         | Visible change                                                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default       | 1px border, base background.                                                                                                                                                                              |
| hover         | Border thickens to 2px. Background darkens one step (neutral for `FilterChip` unpressed; primary-hover for `FilterChip` pressed and `InputChip`).                                                         |
| pressed       | Border stays 2px. Background darkens one more step (neutral-pressed / primary-pressed).                                                                                                                   |
| focus-visible | 2px outline in `focus/border` (`#004fcf`) rendered outside the border via negative inset. Overlays any interaction state. The Figma `showFocus` boolean is a design-tool toggle, **not** a consumer prop. |

**Not rendered in Figma and open for design:** disabled, read-only, loading, error. See open questions.

## Slots

| Slot     | Component | Content    | Constraint                                                                                                                                                                                      |
| -------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children | both      | Label text | Required. Center-aligned. Does not wrap (`white-space: nowrap`); the chip grows to fit content. No built-in truncation — consumers who need it apply `max-width` + their own overflow handling. |

Neither component exposes a consumer-facing icon slot. The trailing icon is internal (see below).

## Internal composition

### `InputChip` — locked trailing `×`

Every `InputChip` renders an internal `×` (close) glyph after the label. The consumer cannot override or hide it. Anatomy in Figma labels this slot `X` with `Depends on: X` (not swappable).

### `FilterChip` — pressed-driven trailing icon

Every `FilterChip` renders an internal trailing icon that swaps based on `pressed`:

| pressed | Internal icon (visual in Figma) |
| ------- | ------------------------------- |
| false   | `⊕` (circled plus)              |
| true    | `⊗` (circled cross)             |

The consumer cannot override the icon. See open questions for exact `@sikt/sds-icons` export names.

## Icons used

### Slot icons (consumer supplies)

None. Both components render their own trailing icon internally.

### Internal icons (component renders)

| Component  | Icon (visual in Figma) | `@sikt/sds-icons` export     | Rendered when           | Notes                                                                                                                                                                                                                                                               |
| ---------- | ---------------------- | ---------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InputChip  | `×` (plain cross)      | `CloseIcon` (id `x`)         | Always                  | 1em × 1em, sized via `font-size: var(--sd3-typography-size-text-interaction-md)` (16px). Colour follows `color/icon/primary`. Decorative (`aria-hidden`). Note: old `@sikt/sds-chip` used `SubtractCircleIcon` here; new design is intentionally uncircled.         |
| FilterChip | `⊕` (circled plus)     | `AddCircleIcon`              | `pressed=false`, always | 1em × 1em, sized via `font-size: var(--sd3-typography-size-text-interaction-md)` (16px). Colour follows `color/icon/primary`. Decorative (`aria-hidden`).                                                                                                           |
| FilterChip | `⊗` (circled cross)    | `FailedIcon` (id `x-circle`) | `pressed=true`, always  | 1em × 1em, sized via `font-size: var(--sd3-typography-size-text-interaction-md)` (16px). Colour follows `color/icon/primary`. Decorative (`aria-hidden`). **Semantic mismatch**: the export is named "failed" but visually matches Figma's `⊗`. See open questions. |

## Props / API (proposal)

Consumer-facing surface. Framework-neutral slot types. Implementation-level concerns (`HTMLAttributes<HTMLButtonElement>` passthrough for `onClick`/`type`/`aria-label`, ref forwarding, `className`, `asChild`) are decided by [[implement-component-spec]].

Types reused from `packages/design-system/types`: `SizeDensity`.

### `InputChip`

```ts
export interface InputChipProps {
  /** Size (shared SizeDensity). */
  size?: SizeDensity;
  /** Label text. */
  children: Content;
}
```

### `FilterChip`

```ts
export interface FilterChipProps {
  /** Size (shared SizeDensity). */
  size?: SizeDensity;
  pressed?: boolean;
  children: Content;
}
```

## Accessibility

Applies to both components unless noted.

- **Semantic element:** `<button type="button">`. The whole chip is a single click target — the trailing icon is decorative and not a separate button. Native button semantics give the consumer a real event target and keyboard activation for free.
- **Keyboard:**
  - `Space` / `Enter` — activate (default `<button>` behaviour). Consumer's `onClick` is invoked; the component does nothing else.
  - `Tab` / `Shift+Tab` — focus moves in/out of the chip in DOM order. Chips are not part of a composite widget in Figma; each chip is its own tab stop.
- **Screen reader / ARIA:**
  - `InputChip`: no additional role. The chip's accessible name is its label text. The component does **not** auto-prefix "Remove" — the label plus surrounding context (e.g. a list labelled "Selected cities") is expected to communicate the "removable" nature. Consumers who need an explicit affordance supply `aria-label` at the call site (e.g. `aria-label="Remove Oslo"`) via the underlying `<button>` attribute passthrough.
  - `FilterChip`: expose the toggle state via `aria-pressed={pressed}`. Screen readers announce "pressed" / "not pressed" alongside the label. The component does **not** auto-prefix "Filter:" — same reasoning as above.
  - The internal trailing icons (`×`, `⊕`, `⊗`) are decorative — meaning is carried by the label and (for `FilterChip`) the `aria-pressed` value. Mark them `aria-hidden="true"`.
- **Focus:** must be visibly indicated when the chip receives keyboard focus. Design uses a 2px `focus/border` outline offset outside the chip's own border (inset compensation depends on border width — see tokens). Implementation defines the ring.
- **WAI-ARIA pattern:**
  - `FilterChip` — [Button pattern, toggle button variant](https://www.w3.org/WAI/ARIA/apg/patterns/button/) (`aria-pressed`).
  - `InputChip` — plain [Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/). No dedicated "chip" pattern exists in APG.

## Design tokens

Recorded as Figma binds them. Whether these tokens exist in the SD3 CSS catalog is [[implement-component-spec]]'s call.

### Figma-bound tokens — shared layout, typography

| Figma token                                              | Current value | CSS property          | Applies to                           |
| -------------------------------------------------------- | ------------- | --------------------- | ------------------------------------ |
| `space/border/radius/100`                                | 4px           | border-radius         | Both components, all variants        |
| `space/component/100`                                    | 4px           | gap (label ↔ icon)    | Both components, all sizes           |
| `space/component/300`                                    | 12px          | padding-inline        | Both, `size=standard`                |
| `space/component/200`                                    | 8px           | padding-block         | Both, `size=standard`                |
| `space/component/200`                                    | 8px           | padding-inline        | Both, `size=compact`                 |
| `space/component/100`                                    | 4px           | padding-block         | Both, `size=compact`                 |
| `space/border/weight/025`                                | 1px           | border-width          | Both, `state=default`                |
| `space/border/weight/050`                                | 2px           | border-width          | Both, `state=hover`, `state=pressed` |
| `color/text/primary`                                     | `#0a0132`     | color (label)         | Both, all variants                   |
| `color/icon/primary`                                     | `#0a0132`     | color (internal icon) | Both, all variants                   |
| `typography/size/text/interaction-md`                    | 16px          | font-size             | Both, all sizes                      |
| `typography/weight/regular`                              | 400           | font-weight           | Both                                 |
| Font family "Haffer", line-height 16px, letter-spacing 0 | Haffer 16/16  | font                  | Both                                 |
| `focus/border`                                           | `#004fcf`     | outline-color         | Both, focus-visible                  |

### Figma-bound tokens — `InputChip` colours

| Figma token                         | Current value | CSS property     | Applies to      |
| ----------------------------------- | ------------- | ---------------- | --------------- |
| `color/interaction/subtle/default`  | `#d1cdff`     | background-color | `state=default` |
| `color/interaction/subtle/hover`    | `#c2bcff`     | background-color | `state=hover`   |
| `color/interaction/subtle/pressed`  | `#b4aeff`     | background-color | `state=pressed` |
| `color/interaction/primary/default` | `#7351fb`     | border-color     | `state=default` |
| `color/interaction/primary/hover`   | `#643ffa`     | border-color     | `state=hover`   |
| `color/interaction/primary/pressed` | `#5531e8`     | border-color     | `state=pressed` |

### Figma-bound tokens — `FilterChip` colours

| Figma token                         | Current value | CSS property     | Applies to                                                                                                           |
| ----------------------------------- | ------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| — (transparent)                     | —             | background       | `pressed=false`, `state=default`                                                                                     |
| `color/interaction/neutral/hover`   | `#e0e0e0`     | background-color | `pressed=false`, `state=hover`                                                                                       |
| `color/interaction/neutral/pressed` | `#d6d6d6`     | background-color | `pressed=false`, `state=pressed`                                                                                     |
| `color/border/strong`               | `#959595`     | border-color     | `pressed=false`, all states. (Figma properties-table pill shows a stale `#656565` — trust the resolved token value.) |
| `color/interaction/subtle/default`  | `#d1cdff`     | background-color | `pressed=true`, `state=default`                                                                                      |
| `color/interaction/subtle/hover`    | `#c2bcff`     | background-color | `pressed=true`, `state=hover`                                                                                        |
| `color/interaction/subtle/pressed`  | `#b4aeff`     | background-color | `pressed=true`, `state=pressed`                                                                                      |
| `color/interaction/primary/default` | `#7351fb`     | border-color     | `pressed=true`, `state=default`                                                                                      |
| `color/interaction/primary/hover`   | `#643ffa`     | border-color     | `pressed=true`, `state=hover`                                                                                        |
| `color/interaction/primary/pressed` | `#5531e8`     | border-color     | `pressed=true`, `state=pressed`                                                                                      |

### Hardcoded values

| Raw value | CSS property                | Applies to                                                                                                                       |
| --------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 2px       | outline-width (focus ring)  | Both components, focus-visible. Colour is bound (`focus/border`) but width is not.                                               |
| 6px       | border-radius (focus ring)  | Both components, focus-visible. Distinct from the chip's own 4px radius.                                                         |
| −3px      | outline-offset (focus ring) | Both, focus-visible when `state=default` (1px chip border). Positions the 2px ring outside the border.                           |
| −4px      | outline-offset (focus ring) | Both, focus-visible when `state=hover` / `state=pressed` (2px chip border). Same visual gap; compensates for the thicker border. |

### Dimension-affecting asymmetries

Both components thicken their border from 1px → 1.5px on hover and pressed. Left unhandled, the chip grows 1px on every side when hovered and layout shifts. [[implement-component-spec]] should reserve the max border width (1.5px) at rest via a transparent overlay or `outline` so the box size stays constant across states.

| Property     | Bound in                                            | NOT bound in | Intent (consumer-visible size difference? y/n) |
| ------------ | --------------------------------------------------- | ------------ | ---------------------------------------------- |
| border-width | Both, `state=default` (1px) and hover/pressed (2px) | —            | n — must be equalised across states            |

## Reference screenshots

Captured from Figma into `packages/design-system/src/Chip/spec/screenshots/`. [[review-component-spec]] compares these against Storybook.

- `InputChip.png` — the 6-cell variant grid for `InputChip` (2 sizes × 3 states). Captured from Figma node `25880:755`.
- `FilterChip.png` — the 12-cell variant grid for `FilterChip` (2 sizes × 3 states × 2 selected). Captured from Figma node `25912:3543`.
- `InputChip-anatomy.png` — Figma anatomy diagram with padding/spacing annotations. Node `33913:14753`.
- `FilterChip-anatomy.png` — Figma anatomy diagram with padding/spacing annotations. Node `33913:13515`.

## Open questions & gaps

1. **No disabled, read-only, loading, or error state in Figma.** The property tables do not list them and the variant grids do not render them. Needs design decision:
   - **Disabled** — likely needed for parity with `<Button>`. A disabled `FilterChip` (locked filter) and disabled `InputChip` (locked selection) are both real. Blocks implementation if design confirms.
   - **Read-only / loading / error** — probably out of scope for v1. Chips are stateless triggers; error/loading state lives on the enclosing form. Confirm and drop.
2. **`FilterChip` pressed trailing icon (`⊗`) is using `FailedIcon` as a stopgap.** Visually correct, semantically wrong — the icon is exported under the name "failed" but this chip has nothing to do with failure. Two ways to resolve long-term:
   - Rename / alias `x-circle` in `@sikt/sds-icons` so the semantic export makes sense here (e.g. add a `RemoveCircleIcon` alias for the same SVG).
   - Or update the Figma design to use `⊖` (`SubtractCircleIcon`), matching the icon shape the old `@sikt/sds-chip` package rendered. Continuity with the old package but a visual change from current Figma.
   - Ship on `FailedIcon` now; revisit before wide adoption.
3. **One `FilterChip` cell uses a separate `Remove button` sub-node.** Only `size=Compact, state=Hover, selected=true` (node `29942:229`) renders a distinct sub-component instead of the plain internal `RemoveIcon`. Likely a design-draft artefact — no other cell has this, and the spec's contract says the trailing icon is not swappable. Confirm with designer whether this is intentional (a hover-only affordance on compact) or should be reverted to the same `RemoveIcon` pattern as the other 11 cells.

## Documentation text (verbatim from Figma)

From the Chip page description heading (Norwegian):

> Chip er små, interaktive komponenter som lar brukerne styre hvordan de vil se innhold. For eksempel kan de brukes til å filtrere kategorier i et søkeresultat og vise hvilke filter som er aktive.

The page also carries an "In progress" `TagStatus` (variant=warning) next to the "Chip" title, indicating the component itself is still being finalised in Figma.
