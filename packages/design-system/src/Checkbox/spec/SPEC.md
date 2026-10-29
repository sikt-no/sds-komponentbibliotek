# Checkbox — Spec

**Figma:** [Checkbox](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=5375-21793&t=Zpk2Nn6rJrFHGQ4c-0)
**Component folder:** `packages/design-system/src/Checkbox/`
**Replaces:** `@sikt/sds-checkbox`
**Last synced:** 2026-10-23

## Overview

A single checkbox control with an inline label — one independently-toggleable choice. Pair with `<Fieldset>` when two or more checkboxes belong to the same question; use a native `<input type="checkbox">` fallback is unnecessary.

> **Internal use only.** The Figma page contains both a plain checkbox (`isBorder=False`) and a bordered "card checkbox" (`isBorder=True`). This spec covers the plain variant only. The bordered chrome is deferred to a separate wrapper component that composes around `<Checkbox>`; it is not another prop here. No layout or validation state lives on Checkbox itself — grouping, direction, legend, description, and validation messaging are Fieldset's responsibility (per `project_fieldset-owns-grouping`). Checkbox adds one state Radio doesn't have: `indeterminate` (visually a horizontal bar instead of a checkmark; wired via the DOM `indeterminate` property, not an HTML attribute).

## Variant axes

Checkbox has no consumer-set variant axes. Figma draws no size or visual-variant alternatives for the non-bordered component.

| Axis | Values | Default | Figma label mapping | Notes                                                                                                                                                      |
| ---- | ------ | ------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —    | —      | —       | —                   | Single visual treatment, single size. Figma's `isBorder`, `showFocus`, `showLabelText` are content-derived toggles (slot presence / CSS state), not props. |

## Interaction states

Figma renders a 5 × 3 grid: five visual states (`Default`, `Hover`, `Pressed`, `Critical`, `Disabled`) × three selection states (`Unchecked`, `Checked`, `Indeterminate`). `Focus` is modelled in Figma as a separate `showFocus` boolean on top of any state. All states are CSS-driven and triggered by native user agent behaviour or by an ancestor Fieldset — none are React props on Checkbox.

The outer control is a 24×24 rounded-square (`border-radius: 4px`). When **unchecked**, the box has a border and a surface fill — no mark inside. When **checked** or **indeterminate**, the box has no border; it is fully filled with the state's background colour and renders a 22×22 mark (checkmark or horizontal bar) in `color/icon/on-strong`. The 1→2px border bump between default/disabled (xs=1px) and hover/pressed/critical (md=2px) only applies to the Unchecked column — selected states have no border at all.

- **default (unchecked)** — 24×24 rounded-square, 1px `color/border/strong` border, `color/surface/default-1` fill, no mark, inline label in `color/text/primary`.
- **default (checked)** — 24×24 rounded-square, no border, fill `color/interaction/primary/default`, 22×22 `check` mark in `color/icon/on-strong`; label unchanged.
- **default (indeterminate)** — same as default-checked but with a `minus` mark instead of `check`.
- **hover (unchecked)** — fill swaps to `color/interaction/neutral/hover`, border thickens to 2px (`color/border/strong`); label unchanged. Triggered by `:hover` on the label wrapper (whole row is clickable).
- **hover (checked)** — fill swaps to `color/interaction/primary/hover`; mark + label unchanged.
- **hover (indeterminate)** — same as hover-checked with the `minus` mark.
- **pressed (unchecked)** — fill swaps to `color/interaction/neutral/pressed`, border stays 2px (`color/border/strong`). Triggered by `:active` on the label wrapper.
- **pressed (checked)** — fill swaps to `color/interaction/primary/pressed`; mark + label unchanged.
- **pressed (indeterminate)** — same as pressed-checked with the `minus` mark.
- **focus-visible** — 2px `focus/border` outline on the native `<input>` with 2px outside offset, 4px corner radius (matching the control). Triggered by `:focus-visible` on the input. Modelled in Figma as a `showFocus` boolean — in implementation this is `:focus-visible`, orthogonal to hover/pressed/critical.
- **critical (unchecked)** — border swaps to `color/interaction/critical/default` (2px); fill stays `color/surface/default-1`; label unchanged. Triggered by ancestor `.sd3-fieldset[data-invalid]` cascade or explicit `aria-invalid="true"` on the input.
- **critical (checked)** — fill swaps to `color/interaction/critical/default`; mark stays `color/icon/on-strong`; label unchanged.
- **critical (indeterminate)** — same as critical-checked with the `minus` mark.
- **disabled (unchecked)** — fill `color/interaction/disabled/default` (grey), border `color/border/disabled` (back to 1px), label `color/text/disabled`. Triggered by `:disabled` on the native input, which cascades from `<fieldset disabled>`.
- **disabled (checked)** — fill `color/interaction/disabled/default` (grey), no border, mark swaps to `color/icon/disabled` (grey), label `color/text/disabled`.
- **disabled (indeterminate)** — same as disabled-checked with the `minus` mark.

## Slots

| Slot       | Content                              | Constraint                                                                                                                                                        |
| ---------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | Inline label text (right of control) | Required for a labelled checkbox. Rendered inside the `<label>` wrapper, 8px (`space/component/200`) right of the control. The whole row is the click/hit target. |

No helper text, no description, no validation message on Checkbox itself — those live on the enclosing `<Fieldset>`.

## Internal composition

| Internal part       | Rendered when                          | Notes                                                                                                                                                                                                                                                                                                     |
| ------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Checkmark (`check`) | `checked=true` and NOT `indeterminate` | 22×22 mark inside the 24×24 control (1px padding). Fill colour swaps with state: `color/icon/on-strong` for default/hover/pressed/critical, `color/icon/disabled` for disabled. Source — see Icons used; whether to pull from `@sikt/sds-icons` or inline as SVG is an open question for the implementer. |
| Minus (`minus`)     | `indeterminate=true`                   | Same 22×22 geometry and colour behaviour as the checkmark. Indeterminate takes precedence over checked — the DOM `indeterminate=true` renders a minus regardless of `checked`.                                                                                                                            |
| Focus ring          | `:focus-visible` on the input          | `outline` + `outline-offset` on the control, both using `spacing/border/weight/md` (2px); outline colour `focus/border`, corner radius matches the control (`4px`, Figma binds `Border/Radius/border-radius-minimal`).                                                                                    |

## Icons used

### Slot icons (consumer supplies)

None. Checkbox does not accept consumer-supplied icons.

### Internal icons (component renders)

| Icon name | Where it appears                                       | Notes                                                                                               |
| --------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `check`   | 22×22 mark inside the control, selection=Checked       | Figma layer name `Check`. Colour swaps per state (`color/icon/on-strong` or `color/icon/disabled`). |
| `minus`   | 22×22 mark inside the control, selection=Indeterminate | Figma layer name `Minus`. Same colour behaviour as `check`.                                         |

Source for the SVGs is unresolved — `@sikt/sds-icons` ships both names (per `project_sds-icons-aria-hidden`) and is the obvious reach, but inline SVG keeps the component self-contained and avoids the icon-sizing dance (1em vs. 22px). Flagged in Open questions.

## Props / API (proposal)

Consumer-facing surface. Native HTML checkbox behaviour (name, value, checked, defaultChecked, onChange, disabled, required, aria-invalid, aria-describedby, etc.) is inherited from `InputHTMLAttributes<HTMLInputElement>` — do not re-wrap native attributes as custom props (per `feedback_no-aria-wrappers`).

```ts
export interface CheckboxProps {
  /** Inline label text, rendered to the right of the control. */
  children: Content;
  /** Indeterminate ("mixed") selection — visually a horizontal bar instead of a checkmark. Takes precedence over `checked` when both are true. Wired to the DOM `indeterminate` property (which is a property, not an HTML attribute). */
  indeterminate?: boolean;
}
// Plus all native <input type="checkbox"> attributes:
// name, value, checked, defaultChecked, onChange, disabled, required,
// aria-invalid, aria-describedby, aria-labelledby, id, ref, etc.
```

Not on Checkbox (deliberately):

- No `size` prop — Figma draws one size; Fieldset's `size` is legend-only and does not cascade.
- No `variant` prop — Figma shows one visual treatment.
- No `invalid` / `error` prop — consumer sets native `aria-invalid` directly, or the critical visual is driven by ancestor `.sd3-fieldset[data-invalid]`.
- No `label` prop — the label is `children`.
- No `name` / `value` custom types — the HTML attributes work as-is.
- No `onCheckedChange` custom callback — use native `onChange`.

**React quirk — `indeterminate` cannot be set via spread.** The DOM `indeterminate` is a property, not an attribute, so `<input indeterminate={true}>` does nothing. The implementer must either (a) accept it as a React prop and apply it via `useEffect` + `ref.current.indeterminate = value`, or (b) require consumers to use a ref. Option (a) is strongly preferred so consumers never see the quirk.

Exported shape:

```ts
export { Checkbox };
```

## Accessibility

- **Semantic element:** `<label class="sd3-checkbox"><input type="checkbox" /> {children}</label>`. The label wraps the input so the entire row (control + text) is a click target; no `htmlFor` plumbing needed. Grouping is Fieldset's responsibility — same `name` attribute is NOT required (unlike radio, checkboxes don't share a `name` to be exclusive).
- **Keyboard:** Native user-agent behaviour. `Tab` moves focus to each checkbox (each is independently tabbable, unlike radio where arrow keys move within a group). `Space` toggles the checked state. No custom key handling. Note: WAI-ARIA defines a tri-state checkbox cycle (unchecked → checked → mixed → unchecked); the native `<input type="checkbox">` only cycles unchecked↔checked and the `indeterminate` property resets to `false` on first user interaction. If a consumer needs tri-state keyboard cycling, they wire it in `onChange`.
- **Screen reader / ARIA:** Native checkbox semantics. The label text is the accessible name via the enclosing `<label>`. When wrapped in `<Fieldset>`, the `<legend>` announces as the group name. The critical state is announced via `aria-invalid="true"` on the input — set this when the group has a validation message. For the mixed state, native `indeterminate=true` on the input is announced as "mixed" by screen readers; no `aria-checked="mixed"` is needed on a native checkbox. For dependent helper text, use `aria-describedby` to point at a stable id supplied by the consumer or Fieldset's description/validation ids.
- **Focus:** `:focus-visible` on the native input renders the 28×28 ring. Pointer click (`:focus:not(:focus-visible)`) does not render the ring, matching browser conventions. Implementation decides the ring technique.
- **WAI-ARIA pattern:** [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) (both the dual-state and tri-state subpatterns apply — the native element implements dual-state; indeterminate is cosmetic unless the consumer wires the tri-state cycle in `onChange`).

## Design tokens

Recorded from `get_variable_defs` on all 15 non-bordered variants (5 states × 3 selections).

### Figma-bound tokens

| Figma token                           | Current value | CSS property                              | Applies to                                                                                                                                                   |
| ------------------------------------- | ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `space/component/200`                 | `8px`         | gap (label row)                           | all variants — control-to-label gap                                                                                                                          |
| `Border/Radius/border-radius-minimal` | `4px`         | border-radius (control + focus overlay)   | all variants. See Open questions — this exact name has no literal match in the published CSS catalog; closest is `--sd3-space-border-radius-100` (same 4px). |
| `spacing/border/weight/xs`            | `1px`         | border-width (control)                    | unchecked default, unchecked disabled                                                                                                                        |
| `spacing/border/weight/md`            | `2px`         | border-width (control)                    | unchecked hover, unchecked pressed, unchecked critical                                                                                                       |
| `color/surface/default-1`             | `#ffffff`     | background-color (control)                | unchecked default, unchecked critical                                                                                                                        |
| `color/interaction/neutral/hover`     | `#e0e0e0`     | background-color (control)                | unchecked hover                                                                                                                                              |
| `color/interaction/neutral/pressed`   | `#d6d6d6`     | background-color (control)                | unchecked pressed                                                                                                                                            |
| `color/interaction/disabled/default`  | `#e0e0e0`     | background-color (control)                | disabled (any selection — unchecked, checked, indeterminate)                                                                                                 |
| `color/border/strong`                 | `#959595`     | border-color (control)                    | unchecked default, unchecked hover, unchecked pressed                                                                                                        |
| `color/border/disabled`               | `#959595`     | border-color (control)                    | unchecked disabled. Same hex as `border/strong` but a semantically distinct token.                                                                           |
| `color/interaction/critical/default`  | `#b60203`     | border-color / background-color (control) | unchecked critical (border); checked critical + indeterminate critical (fill)                                                                                |
| `color/interaction/primary/default`   | `#7351fb`     | background-color (control)                | checked default, indeterminate default                                                                                                                       |
| `color/interaction/primary/hover`     | `#643ffa`     | background-color (control)                | checked hover, indeterminate hover                                                                                                                           |
| `color/interaction/primary/pressed`   | `#5531e8`     | background-color (control)                | checked pressed, indeterminate pressed                                                                                                                       |
| `color/icon/on-strong`                | `#ffffff`     | fill (check / minus mark)                 | checked + indeterminate for default, hover, pressed, critical                                                                                                |
| `color/icon/disabled`                 | `#959595`     | fill (check / minus mark)                 | disabled checked, disabled indeterminate                                                                                                                     |
| `color/text/primary`                  | `#0a0132`     | color (label)                             | all non-disabled                                                                                                                                             |
| `color/text/disabled`                 | `#959595`     | color (label)                             | disabled (any selection)                                                                                                                                     |
| `typography/size/text/body-md`        | `16px`        | font-size (label)                         | all variants                                                                                                                                                 |
| `typography/line-height/text/body-md` | `24px`        | line-height (label)                       | all variants — matches control height so label visually centres on `items: start`                                                                            |
| `typography/weight/regular`           | `400`         | font-weight (label)                       | all variants                                                                                                                                                 |
| `focus/border`                        | `#004fcf`     | outline-color (focus ring)                | focus-visible overlay                                                                                                                                        |

### Hardcoded values

| Raw value                        | CSS property                            | Applies to                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`28px`~~                       | ~~width + height (focus ring overlay)~~ | ~~focus-visible overlay~~ — **resolved** (same as Radio): no 28px in CSS. Draw the ring with `outline` + `outline-offset` on the control; the 28×28 in Figma is a side-effect of 24 + 2×outline-offset.                                                                                                                                                                                        |
| ~~`2px`~~                        | ~~border-width (focus ring overlay)~~   | ~~focus-visible overlay~~ — **resolved**: reuse `spacing/border/weight/md` (`--sd3-spacing-border-weight-md`). Same token used for the hover/pressed/critical control border.                                                                                                                                                                                                                  |
| ~~`-2px`~~                       | ~~offset (focus ring overlay)~~         | ~~focus-visible overlay~~ — **resolved**: reuse `spacing/border/weight/md` (`--sd3-spacing-border-weight-md`) for `outline-offset`. Matches the ring's stroke width — equal gap and stroke.                                                                                                                                                                                                    |
| `22px` (check / minus mark size) | width + height (mark SVG)               | checked + indeterminate — the mark is drawn 22×22 inside the 24×24 container (1px padding on all sides, via `p-px` in the Figma output). Not Figma-bound. See Open questions — if the implementer uses `@sikt/sds-icons`, the icon is 1em × 1em (`font-size` driven); the 1px padding may fall out naturally if `font-size: 22px` is set, or be irrelevant if the mark is drawn as inline SVG. |

Font-family `Haffer` and `letter-spacing: 0` are inherited from the design-system global CSS baseline per `feedback_hardcoded-vs-inherited`; not flagged here.

### Dimension-affecting asymmetries

| Property       | Variants that bind it                             | Variants that DON'T                                                                                                          | Intent (consumer-visible size difference? y/n)                                                                                                                                                   |
| -------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `border-width` | unchecked hover / pressed / critical (`md` = 2px) | unchecked default + disabled (`xs` = 1px); all checked + indeterminate states (no border — rendered via fill + mark instead) | n — the outer 24×24 box stays the same because `box-sizing: border-box` keeps the outer dimension constant. The 1→2px shift happens inside the box (the fillable area shrinks); no layout shift. |

Same analysis as Radio: no transparent-border compensation needed. The box stays 24×24 across every state and selection, so swapping between checked and unchecked (or hovering a row) does not cause the inline flow to jump.

## Reference screenshots

Drop PNGs into `./screenshots/` from these Figma frames before running `review-component-spec`:

- `104:801` → `./screenshots/unchecked-default.png`
- `5375:24127` → `./screenshots/unchecked-hover.png`
- `5375:24167` → `./screenshots/unchecked-pressed.png`
- `5375:24187` → `./screenshots/unchecked-critical.png`
- `30989:1042` → `./screenshots/unchecked-disabled.png`
- `5375:24251` → `./screenshots/checked-default.png`
- `5375:24260` → `./screenshots/checked-hover.png`
- `5375:24278` → `./screenshots/checked-pressed.png`
- `5375:24287` → `./screenshots/checked-critical.png`
- `30989:1048` → `./screenshots/checked-disabled.png`
- `5375:24376` → `./screenshots/indeterminate-default.png`
- `5375:24385` → `./screenshots/indeterminate-hover.png`
- `5375:24403` → `./screenshots/indeterminate-pressed.png`
- `5375:24412` → `./screenshots/indeterminate-critical.png`
- `30989:1056` → `./screenshots/indeterminate-disabled.png`

If a composed Fieldset example exists for checkboxes, capture it alongside Radio's `in-fieldset-critical.png`:

- Fieldset page frame (TBD — check the Fieldset Figma page for a composed Checkbox group with `ValidationMessage`) → `./screenshots/in-fieldset-critical.png`

## Open questions & gaps

- **Bordered variant (`isBorder=True`) deferred.** Figma also draws a 15-variant bordered "card checkbox" that is explicitly out of this component. The intended composition is a separate wrapper (likely `<CheckboxCard>` or `<Checkbox.Card>`) that renders the Figma border + 16px padding + optional secondary text and places `<Checkbox>` inside. Not blocking this SPEC; call it out when the wrapper is scoped. Same approach Radio takes.
- **`Border/Radius/border-radius-minimal` token name quirk.** `get_variable_defs` returns this exact Figma variable name with raw value `4px`, but it does not appear in the published token source files or the `--sd3-*` CSS catalog by that name. The published equivalent is `--sd3-space-border-radius-100` (also `4px`). The tokens owner should decide whether to rename the Figma variable to match the published namespace (`space/border/radius/100`) or publish a `space/border/radius/minimal` alias. Implementer wires `--sd3-space-border-radius-100` for now.
- **Check / minus mark source — `@sikt/sds-icons` vs. inline SVG.** The mark is a 22×22 SVG inside the 24×24 control (1px padding). Two options:
  - `@sikt/sds-icons` ships both `check` and `minus` as components. Pros: single source of truth for iconography; already aria-hidden (per `project_sds-icons-aria-hidden`). Cons: the icon is sized by `font-size` (1em), so hitting 22px needs `font-size: 22px` on the slot; icon package becomes a hard dependency of a form primitive.
  - Inline SVG baked into the component. Pros: self-contained, no icon-sizing dance, no cross-package dependency. Cons: two places where `check` / `minus` paths live.
    Decide before implement.
- **Fieldset grouping — reuse without a CheckboxGroup wrapper.** Per `project_fieldset-owns-grouping`, no `<CheckboxGroup>` is planned; direction, inter-control gap, legend, description, and validation cascade live on `<Fieldset>`. Consumers wrap `<Fieldset>` around N `<Checkbox>` children. Unlike radio, checkboxes do not share a `name` attribute to form a group — each has its own `name` (or shares one if the consumer wants array-style form payloads).
- **Critical state has no explicit Checkbox prop.** Same mechanism as Radio: ancestor `.sd3-fieldset[data-invalid]` CSS cascade (set by Fieldset when a `ValidationMessage` renders), or native `aria-invalid="true"` on the input (consumer-set). This matches `feedback_no-aria-wrappers` — don't invent an `invalid` prop that proxies `aria-invalid`. If a consumer wants a standalone critical Checkbox outside a Fieldset, they set `aria-invalid` directly.
- **Reuse Typography.Label for the inline label? — TBD.** Figma says `body-md` + weight `regular` (400) but Field.Label and Fieldset.Legend both render as `label` + weight `semibold` (600). Same three paths as Radio: (a) match Figma inline tokens in `checkbox.css` (lighter label, drifts from other form components), (b) reuse Typography.Label CSS class (semibold, matches other form components, drifts from Figma), (c) reuse Typography.Paragraph (regular, matches Figma via a Typography component). Decide before implement; should match whatever Radio ends up doing.
- **Tri-state keyboard cycle.** WAI-ARIA defines unchecked → checked → mixed → unchecked for tri-state checkboxes, but the native `<input type="checkbox">` only cycles unchecked↔checked and resets `indeterminate` to `false` on the first user `change`. The spec records this as native behaviour; if a consumer explicitly wants the three-way keyboard cycle, they wire it in `onChange`. No work for the implementer here, but worth documenting in the Storybook `Indeterminate` story.

## Documentation text (verbatim from Figma)

No human-written documentation text was found on the Figma page (`5375:21793 — Checkbox`). The component set has no sibling description frames; the only text present is the placeholder label `"Checkbox"` inside each variant. Downstream docs for this component will need to be written from scratch when the Astro `checkbox.mdx` is produced by `implement-component-spec`.
