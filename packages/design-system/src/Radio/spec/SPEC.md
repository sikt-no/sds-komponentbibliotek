# Radio — Spec

**Figma:** [Radio](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25962-3107&m=dev)
**Component folder:** `packages/design-system/src/Radio/`
**Replaces:** `@sikt/sds-radio-button`
**Last synced:** 2026-10-15

## Overview

A single radio control with an inline label — one option in a mutually exclusive choice. Pair with `<Fieldset>` when two or more Radios belong to the same question; use a native `<input type="radio">` fallback is unnecessary.

> **Internal use only.** The Figma page contains both a plain radio (`isBorder=False`) and a bordered "card radio" (`isBorder=True`). This spec covers the plain variant only. The bordered chrome is deferred to a separate wrapper component that composes around `<Radio>`; it is not another prop here. No layout or validation state lives on Radio itself — grouping, direction, legend, description, and validation messaging are Fieldset's responsibility (per `project_fieldset-owns-grouping`).

## Variant axes

Radio has no consumer-set variant axes. Figma draws no size or visual-variant alternatives for the non-bordered component.

| Axis | Values | Default | Figma label mapping | Notes                                                                                                                                                     |
| ---- | ------ | ------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —    | —      | —       | —                   | Single visual treatment, single size. Size cascading from Fieldset is explicitly out of scope (Fieldset SPEC: "size does not cascade to child controls"). |

## Interaction states

Every state is CSS-driven and triggered by native user agent behaviour or by an ancestor Fieldset — none are React props on Radio.

The selected control is **not** a traditional ring + white band + inner coloured dot — it is a filled 24×24 coloured disc with a centred 12×12 hole (confirmed from the exported SVG for every selected variant). The visible "ring" is `(control − hole) / 2 = 6px` thick, falling out of the geometry. CSS implementation: a 24×24 round box with a background colour swapped per state, and a centred `::after` pseudo-element at 50% diameter (inset 25%) with its own background colour swapped per state.

- **default (unselected)** — 24×24 round box, 1px `color/border/strong` border, `color/surface/default-1` fill, inline label in `color/text/primary`.
- **default (selected)** — 24×24 round box, no border, outer fill `color/interaction/primary/default`, hole fill `color/surface/default-1`; label colour unchanged.
- **hover (unselected)** — fill swaps to `color/interaction/neutral/hover`, border thickens to 2px; label unchanged. Triggered by `:hover` on the label wrapper (whole row is clickable).
- **hover (selected)** — outer fill swaps to `color/interaction/primary/hover`, hole fill swaps to `color/interaction/neutral/hover`; label unchanged.
- **pressed (unselected)** — fill swaps to `color/interaction/neutral/pressed`, border stays 2px; label unchanged. Triggered by `:active` on the label wrapper.
- **pressed (selected)** — outer fill swaps to `color/interaction/primary/pressed`, hole fill swaps to `color/interaction/neutral/pressed`; label unchanged.
- **focus-visible** — 2px `focus/border` outline on the native `<input>` with 2px outside offset, fully round. Triggered by `:focus-visible` on the input. Note: Figma models this as a `showFocus` boolean, not state-coupled — in implementation this is `:focus-visible`, orthogonal to hover/pressed/critical.
- **critical (unselected)** — border swaps to `color/interaction/critical/default` (2px); fill stays `color/surface/default-1`; label unchanged. Triggered by ancestor `.sd3-fieldset[data-invalid]` cascade or explicit `aria-invalid="true"` on the input.
- **critical (selected)** — outer fill swaps to `color/interaction/critical/default`, hole fill stays `color/surface/default-1`; label unchanged.
- **disabled (unselected)** — fill `color/interaction/disabled/default` (grey), border `color/border/disabled` (back to 1px), label `color/text/disabled`. Triggered by `:disabled` on the native input, which cascades from `<fieldset disabled>`.
- **disabled (selected)** — outer fill `color/interaction/disabled/default` (grey), hole fill stays `color/surface/default-1`, label `color/text/disabled`.

## Slots

| Slot       | Content                              | Constraint                                                                                                                                                     |
| ---------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | Inline label text (right of control) | Required for a labelled radio. Rendered inside the `<label>` wrapper, 8px (`space/component/200`) right of the control. The whole row is the click/hit target. |

No helper text, no description, no validation message on Radio itself — those live on the enclosing `<Fieldset>`.

## Internal composition

| Internal part | Rendered when                                                       | Notes                                                                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Centred hole  | `checked=true` (controlled) or `defaultChecked=true` (uncontrolled) | A 50%-diameter centred circle drawn via `::after`, inset 25% on all sides. Its background colour swaps with state (see Interaction states). The "ring" the user sees is the uncovered portion of the outer disc — it is not drawn as a border. |
| Focus ring    | `:focus-visible` on the input                                       | `outline` + `outline-offset` on the control, both using `spacing/border/weight/md` (2px); outline colour `focus/border`, fully round.                                                                                                          |

## Icons used

### Slot icons (consumer supplies)

None. Radio does not accept consumer-supplied icons.

### Internal icons (component renders)

None. The selected state is a filled dot drawn in CSS (or a pseudo-element), not an icon from `@sikt/sds-icons`.

## Props / API (proposal)

Consumer-facing surface. Native HTML radio behaviour (name, value, checked, defaultChecked, onChange, disabled, required, aria-invalid, aria-describedby, etc.) is inherited from `InputHTMLAttributes<HTMLInputElement>` — do not re-wrap native attributes as custom props (per `feedback_no-aria-wrappers`).

```ts
export interface RadioProps {
  /** Inline label text, rendered to the right of the control. */
  children: Content;
}
// Plus all native <input type="radio"> attributes:
// name, value, checked, defaultChecked, onChange, disabled, required,
// aria-invalid, aria-describedby, aria-labelledby, id, ref, etc.
```

Not on Radio (deliberately):

- No `size` prop — Figma draws one size; Fieldset's `size` is legend-only and does not cascade.
- No `variant` prop — Figma shows one visual treatment.
- No `invalid` / `error` prop — consumer sets native `aria-invalid` directly, or the critical visual is driven by ancestor `.sd3-fieldset[data-invalid]`.
- No `label` prop — the label is `children`.
- No `name` / `value` custom types — the HTML attributes work as-is.

Exported shape:

```ts
export { Radio };
```

## Accessibility

- **Semantic element:** `<label class="sd3-radio"><input type="radio" /> {children}</label>`. The label wraps the input so the entire row (control + text) is a click target; no `htmlFor` plumbing needed. Grouping is the shared `name` attribute on each radio (consumer-controlled; also how form libraries bind).
- **Keyboard:** Native user-agent behaviour. `Tab` moves focus into the group onto the currently selected radio (or the first one if none is selected); arrow keys (`↑ ↓ ← →`) move between radios in the group and move the selection; `Space` activates when none is selected. No custom key handling.
- **Screen reader / ARIA:** Native radio semantics. The label text is the accessible name via the enclosing `<label>`. When wrapped in `<Fieldset>`, the `<legend>` announces as the group name before each radio. The critical state is announced via `aria-invalid="true"` on the input — set this when the group has a validation message. For dependent helper text, use `aria-describedby` to point at a stable id supplied by the consumer or Fieldset's description/validation ids.
- **Focus:** `:focus-visible` on the native input renders the 28×28 ring. Pointer click (`:focus:not(:focus-visible)`) does not render the ring, matching browser conventions. Implementation decides the ring technique.
- **WAI-ARIA pattern:** [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/). The pattern lives on the group (Fieldset); Radio itself is just the native `<input type="radio">` participating via a shared `name`.

## Design tokens

Recorded from `get_variable_defs` on all 10 non-bordered variants.

### Figma-bound tokens

| Figma token                           | Current value | CSS property                                 | Applies to                                                                                     |
| ------------------------------------- | ------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `space/component/200`                 | `8px`         | gap (label row)                              | all variants — control-to-label gap                                                            |
| `spacing/border/weight/xs`            | `1px`         | border-width (control)                       | default (unselected), disabled (unselected)                                                    |
| `spacing/border/weight/md`            | `2px`         | border-width (control)                       | hover, pressed, critical (unselected)                                                          |
| `color/surface/default-1`             | `#ffffff`     | background-color (outer disc / hole)         | unselected default + critical (outer fill); selected default + critical + disabled (hole fill) |
| `color/interaction/neutral/hover`     | `#e0e0e0`     | background-color (outer disc / hole)         | unselected hover (outer fill); selected hover (hole fill)                                      |
| `color/interaction/neutral/pressed`   | `#d6d6d6`     | background-color (outer disc / hole)         | unselected pressed (outer fill); selected pressed (hole fill)                                  |
| `color/interaction/disabled/default`  | `#e0e0e0`     | background-color (outer disc)                | unselected disabled, selected disabled                                                         |
| `color/border/strong`                 | `#959595`     | border-color (control)                       | unselected default, hover, pressed                                                             |
| `color/border/disabled`               | `#959595`     | border-color (control)                       | unselected disabled. Same hex as `border/strong` but a semantically distinct token.            |
| `color/interaction/critical/default`  | `#b60203`     | border-color / background-color (outer disc) | unselected critical (border); selected critical (outer fill)                                   |
| `color/interaction/primary/default`   | `#7351fb`     | background-color (outer disc)                | selected default                                                                               |
| `color/interaction/primary/hover`     | `#643ffa`     | background-color (outer disc)                | selected hover                                                                                 |
| `color/interaction/primary/pressed`   | `#5531e8`     | background-color (outer disc)                | selected pressed                                                                               |
| `color/text/primary`                  | `#0a0132`     | color (label)                                | all non-disabled                                                                               |
| `color/text/disabled`                 | `#959595`     | color (label)                                | disabled (both selected states)                                                                |
| `typography/size/text/body-md`        | `16px`        | font-size (label)                            | all variants                                                                                   |
| `typography/line-height/text/body-md` | `24px`        | line-height (label)                          | all variants — matches control height so label visually centres on `items: start`              |
| `typography/weight/regular`           | `400`         | font-weight (label)                          | all variants                                                                                   |
| `focus/border`                        | `#004fcf`     | border-color (focus ring)                    | focus-visible overlay                                                                          |
| `size/999`                            | `999px`       | border-radius (focus ring)                   | focus-visible overlay                                                                          |

### Hardcoded values

| Raw value              | CSS property                            | Applies to                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ~~`12px`~~             | ~~border-radius (control)~~             | ~~all variants~~ — **resolved**: reuse `size/999` (same token Figma binds for the focus ring). Implementer wires `--sd3-size-999`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ~~`28px`~~             | ~~width + height (focus ring overlay)~~ | ~~focus-visible overlay~~ — **resolved**: no 28px in CSS. Draw the ring with `outline` + `outline-offset` on the control; the 28×28 in Figma is a side-effect of 24 + 2×outline-offset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ~~`2px`~~              | ~~border-width (focus ring overlay)~~   | ~~focus-visible overlay~~ — **resolved**: reuse `spacing/border/weight/md` (`--sd3-spacing-border-weight-md`). Same token Radio uses for the hover/pressed/critical control border.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ~~`-2px`~~             | ~~offset (focus ring overlay)~~         | ~~focus-visible overlay~~ — **resolved**: reuse `spacing/border/weight/md` (`--sd3-spacing-border-weight-md`) for `outline-offset`. Matches the ring's stroke width — equal gap and stroke.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ~~inner dot geometry~~ | ~~width / height of selected dot~~      | ~~selected states~~ — **resolved** by reading the exported SVG XML for all selected variants (`85a5c553…`, `44baf7b8…`, `bf046d74…`, `27ce48f6…`, `7d2a6bcb…`). The Figma design is **not** a traditional ring + white band + inner coloured dot. It is a filled coloured disc with a centred white hole: `rect 24×24 rx=12 fill=<state colour>` + `circle cx=12 cy=12 r=6 fill=<color/surface/default-1 or color/interaction/neutral/*>`. Derivable from the control size: **hole diameter = 50% of control** (12px on a 24px control), **ring thickness = 25% of control** (6px). Implement with one `::after` pseudo-element inset to 25% on all sides, background set per state. |

Font-family `Haffer` and `letter-spacing: 0` are inherited from the design-system global CSS baseline per `feedback_hardcoded-vs-inherited`; not flagged here.

### Dimension-affecting asymmetries

| Property       | Variants that bind it                          | Variants that DON'T                                                                                                | Intent (consumer-visible size difference? y/n)                                                                     |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `border-width` | unselected hover/pressed/critical (`md` = 2px) | unselected default + disabled (`xs` = 1px); all selected states (no border — rendered via background/ring instead) | n — the outer 24×24 box stays the same; the 1→2px shift happens inside the circle, not around it. No layout shift. |

The 1→2px bump is a visual-only inset: the control's outer box is still 24×24 in every state because selected states have no border (the ring is drawn inside the circle). So no transparent-border compensation is needed on Radio. Flagged for the implementation reviewer so they don't try to equalise it.

## Reference screenshots

Drop PNGs into `./screenshots/` from these Figma frames before running `review-component-spec`:

- `25962:3108` → `./screenshots/unselected-default.png`
- `25962:3134` → `./screenshots/selected-default.png`
- `25962:3113` → `./screenshots/unselected-hover.png`
- `25962:3140` → `./screenshots/selected-hover.png`
- `25962:3124` → `./screenshots/unselected-pressed.png`
- `25962:3153` → `./screenshots/selected-pressed.png`
- `25962:3129` → `./screenshots/unselected-critical.png`
- `25962:3159` → `./screenshots/selected-critical.png`
- `30989:4006` → `./screenshots/unselected-disabled.png`
- `30989:4012` → `./screenshots/selected-disabled.png`

Also capture a composed example from the Fieldset page:

- `30037:641` → `./screenshots/in-fieldset-critical.png` (RadioButton group with Fieldset legend + ValidationMessage)

## Open questions & gaps

- **Bordered variant (`isBorder=True`) deferred.** Figma also draws a 10-variant bordered "card radio" that is explicitly out of this component. The intended composition is a separate wrapper (likely `<RadioCard>` or `<Radio.Card>`) that renders the Figma border + 16px padding + optional secondary text and places `<Radio>` inside. Not blocking this SPEC; call it out when the wrapper is scoped.
- **No separate `name` cascading from Fieldset.** Fieldset deliberately does not provide `name` via context — consumers supply `name="plan"` on each `<Radio>` in a group (same pattern as the current Fieldset `WithRadioButtons` story using plain `<input type="radio">`). This is confirmed by `project_fieldset-owns-grouping`; noted here so an implementer doesn't try to invent a Fieldset `name` prop.
- **Critical state has no explicit Radio prop.** The design uses two mechanisms: ancestor `.sd3-fieldset[data-invalid]` CSS cascade (set by Fieldset when a `ValidationMessage` renders), and native `aria-invalid="true"` on the input (consumer-set). This matches `feedback_no-aria-wrappers` — don't invent an `invalid` prop that proxies `aria-invalid`. If a consumer wants a standalone critical Radio outside a Fieldset, they set `aria-invalid` directly.
- **Reuse Typography.Label for the inline label? — TBD.** Figma says `body-md` + weight `regular` (400) but Field.Label and Fieldset.Legend both render as `label` + weight `semibold` (600). Three paths: (a) match Figma inline tokens in `radio.css` (lighter label, drifts from other form components), (b) reuse Typography.Label CSS class (semibold, matches other form components, drifts from Figma), (c) reuse Typography.Paragraph (regular, matches Figma via a Typography component). Decide before implement.

### Resolved during spec session (2026-10-15)

- ~~Four hardcoded values to review~~ — all four resolved in SPEC session: control `border-radius` reuses `size/999`; focus-ring `width/height: 28px` is derived (no explicit size in CSS, use `outline` + `outline-offset`); focus-ring `outline-width: 2px` reuses `spacing/border/weight/md`; focus-ring `outline-offset: 2px` reuses the same token.
- ~~Inner-dot geometry baked into SVGs~~ — resolved by reading the exported SVG XML directly. The design is a filled coloured disc with a centred 12-wide hole, not a traditional ring + white band + dot. Hole = 50% of control, "ring" is the uncovered portion of the disc (25% thick). See Interaction states and Hardcoded values table for details.

## Documentation text (verbatim from Figma)

No human-written documentation text was found on the Figma page (`25962:3107 — RadioButton`). The component set has no sibling description frames; the only text present is the placeholder label `"Radio button"` inside each variant. Downstream docs for this component will need to be written from scratch when the Astro `radio.mdx` is produced by `implement-component-spec`.
