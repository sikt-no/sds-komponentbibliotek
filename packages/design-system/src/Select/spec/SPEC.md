# Select — Spec

**Figma:** [SDS Komponenter → Select](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13123-21148&m=dev)
**Component folder:** `packages/design-system/src/Select/`
**Replaces:** `@sikt/sds-select`
**Last synced:** 2026-10-13

## Overview

A styled wrapper around the native HTML `<select>` element that applies SD3 field visuals (background, border, radius, padding, focus ring) and renders an internal caret glyph on the trailing edge.
Reach for it when a form field needs a single-choice picker whose options are a short, fixed list — for an autocomplete, multi-select, or custom-rendered option list, use a future `<Combobox>` instead.

> **Internal use only.** Orients readers of this SPEC. Not for direct copy-paste into `README.md` or Astro docs.

> **Dropdown styling is out of scope for this SPEC.** Only the trigger box (bg, border, padding, typography, caret icon, focus ring) is specified. The option list rendered by the browser when the user opens the control uses the user-agent default. A later spec can add styled picker options via `appearance: base-select` + `::picker(select)`; the old `@sikt/sds-select` has a reference implementation.

## Variant axes

| Axis   | Values                     | Default                                      | Figma label mapping     | Notes                                                                                                                            |
| ------ | -------------------------- | -------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `size` | `large`, `medium`, `small` | inherited from `<Field size>`, else `medium` | size=Large/Medium/Small | Controls field min-height (48 / 40 / 32), vertical padding, text scale (body-lg vs body-md), and caret icon size (24 / 20 / 20). |

No `variant` axis — Select has one visual treatment.

## Interaction states

Per the Select component-set (`25981:3370`) at each size.

- **default** — 1px `color/border/strong` border, `color/surface/default-1` background, placeholder/value text in `color/text/secondary` (empty) / `color/text/primary` (chosen), caret glyph in `color/icon/secondary`.
- **hover** (`:hover`) — border thickens to 2px (`spacing/border/weight/md`); colour and background unchanged.
- **focus** (`:focus`) — border 2px, background `color/surface/default-2`, value text `color/text/primary`. Figma variant name: `state=Active`.
- **focus-visible** (`:focus-visible`) — layers a 2px `focus/border` outline offset ~2px outside the field on top of the focus styling. Figma renders this via a dedicated `focus` overlay toggle on each size variant (e.g. `27845:1930` on Large).
- **disabled** (`[disabled]`) — 1px border in `color/border/disabled`, text and caret glyph in `color/text/disabled` / `color/icon/disabled`, background unchanged. `cursor: not-allowed` applied by the browser.
- **critical** (`[aria-invalid="true"]`) — 1px border in `color/interaction/critical/default`, background `color/support/critical/subtle`. Driven by `aria-invalid` propagated from `<Field>` when a `<Field.ValidationMessage>` is present (same pattern as `<Input>`).

No **read-only** state — native `<select>` does not support the `readonly` attribute. `<Field readOnly>` propagates `readOnly` via `FieldContext`; `<Select>` ignores it. (The parent `<Field>` still renders its lock icon on `<Field.Label>`, so the user gets a visual cue even though the control itself remains interactive.)

## Slots

| Slot       | Content                                | Constraint                                                                                |
| ---------- | -------------------------------------- | ----------------------------------------------------------------------------------------- |
| `children` | Native `<option>` / `<optgroup>` nodes | Required. Rendered inside the `<select>` element and surfaced by the user-agent dropdown. |

No consumer icon slot. The trailing caret is rendered internally and is not configurable.

## Internal composition

| Internal part | Rendered when                           | Notes                                                                                                                                               |
| ------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Caret glyph   | Always, on the trailing edge of the box | Decorative — purely a visual affordance that this is a picker. Not interactive on its own (clicking anywhere on the box opens the native dropdown). |

## Icons used

### Slot icons (consumer supplies)

N/A — no consumer-supplied icons.

### Internal icons (component renders)

| Icon name        | Where it appears                       | Notes                                                                                                                                                        |
| ---------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ExpandShowIcon` | Trailing edge of the field, all states | From `@sikt/sds-icons`. Figma labels the glyph `CaretDown`; `ExpandShowIcon` is the SDS equivalent (plain triangle). `aria-hidden` ships on the icon itself. |

## Props / API (proposal)

Consumer-facing surface. The implementer wires this to the native `<select>` passthrough (`SelectHTMLAttributes<HTMLSelectElement>` minus `size`, since HTML's native `size` attribute conflicts with our size prop), reads `id` / `aria-describedby` / `aria-errormessage` / `aria-invalid` / `disabled` from `FieldContext`, and decides on ref forwarding and class merging — all out of scope for this spec.

```ts
export interface SelectProps {
  /** Field height, text scale, and caret size. Defaults to the enclosing `<Field size>`, else `"medium"`. */
  size?: "large" | "medium" | "small";
  /** Native `<option>` / `<optgroup>` nodes. */
  children: Content;
}
```

## Accessibility

- **Semantic element:** `<select>`.
- **Keyboard:** browser default. On most platforms: `Space` / `Enter` / `Alt+ArrowDown` opens the dropdown; `ArrowUp` / `ArrowDown` move the selection; typing a character jumps to the first matching option; `Esc` closes. This component does not intercept key events.
- **Screen reader / ARIA:** the component does not render a label. Consumers compose it inside `<Field>`, which provides the label via `<Field.Label>` and wires `id` / `aria-describedby` / `aria-errormessage` / `aria-invalid` via `FieldContext`. Used outside `<Field>`, consumers must provide an accessible name themselves (`aria-label`, `aria-labelledby`, or a surrounding `<label>`).
- **Focus:** the field must show a visible focus indicator when it receives keyboard focus. Figma binds a 2px outline in `focus/border` offset ~2px outside the border box. Implementation defines the exact CSS (`:focus-visible` is expected).
- **WAI-ARIA pattern:** none applicable — this is a native form control.

## Design tokens

Record what Figma binds on the Field frame across the sampled variants (Large/Default `25981:3464`, Large/Hover `25981:3371`, Large/Active `27620:3658`, Large/Disabled `31060:2167`, Large/Critical `25981:3428`, Medium/Default `26202:1516`, Small/Default `26202:1535`). Merged into a single component-level view.

### Figma-bound tokens — shared across all sizes and states

| Figma token                 | Current value                                                         | CSS property                            | Applies to                          |
| --------------------------- | --------------------------------------------------------------------- | --------------------------------------- | ----------------------------------- |
| `spacing/border/radius/sm`  | `4px`                                                                 | border-radius                           | field                               |
| `space/component/300`       | `12px`                                                                | padding-inline-start                    | field                               |
| `space/component/200`       | `8px`                                                                 | padding-inline-end + gap (text ↔ caret) | field                               |
| `color/icon/secondary`      | `#595959`                                                             | color                                   | caret glyph (default, hover, focus) |
| `typography/weight/regular` | `400` (normal)                                                        | font-weight                             | value / placeholder text            |
| `focus/border`              | `#004fcf` (Sikt light/gray); `#005AEA` (Sikt dark); `#2B5FBA` (Feide) | outline-color                           | focus-visible outline (2px)         |
| `layout/radius/02`          | `4px`                                                                 | border-radius                           | focus-visible outline               |

### Figma-bound tokens — per size

Caret icon is sized by `font-size` on a wrapper (so the `.sds-icon` 1em × 1em default picks it up), matching the Button convention (`--button-icon-size: 1.5rem` / `1.25rem`). No Figma token binds the icon size — rem values are component-local.

| Size   | padding-block                 | font-size                               | line-height                                    | min-height | caret icon size (`font-size` on wrapper) |
| ------ | ----------------------------- | --------------------------------------- | ---------------------------------------------- | ---------- | ---------------------------------------- |
| large  | `space/component/200` (`8px`) | `typography/size/text/body-lg` (`18px`) | `typography/line-height/text/body-lg` (`28px`) | `48px`     | `1.5rem` (`24px`)                        |
| medium | `space/component/200` (`8px`) | `typography/size/text/body-md` (`16px`) | `typography/line-height/text/body-md` (`24px`) | `40px`     | `1.25rem` (`20px`)                       |
| small  | `space/component/100` (`4px`) | `typography/size/text/body-md` (`16px`) | `typography/line-height/text/body-md` (`24px`) | `32px`     | `1.25rem` (`20px`)                       |

### Figma-bound tokens — per state

| State         | background                                  | border-color                                     | border-width                                      | text / icon colour                                                                                           |
| ------------- | ------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| default       | `color/surface/default-1` (`#ffffff`)       | `color/border/strong` (`#959595`)                | `layout/border-weight/thin` (`1px`)               | placeholder: `color/text/secondary` (`#595959`); caret: `color/icon/secondary`                               |
| hover         | `color/surface/default-1` (`#ffffff`)       | `color/border/strong` (`#959595`)                | `spacing/border/weight/md` (`2px`)                | unchanged                                                                                                    |
| focus         | `color/surface/default-2` (`#f1f1f1`)       | `color/border/strong` (`#959595`)                | `spacing/border/weight/md` (`2px`)                | value: `color/text/primary` (`#0a0132`); caret: `color/icon/secondary`                                       |
| focus-visible | inherits focus                              | inherits focus                                   | inherits focus + outer 2px `focus/border` outline | inherits focus                                                                                               |
| disabled      | `color/surface/default-1` (`#ffffff`)       | `color/border/disabled` (`#959595`)              | `layout/border-weight/thin` (`1px`)               | text: `color/text/disabled` (`#959595`); caret: `color/icon/disabled` (`#959595`)                            |
| critical      | `color/support/critical/subtle` (`#ffeae9`) | `color/interaction/critical/default` (`#b60203`) | `layout/border-weight/thin` (`1px`)               | caret colour unchanged (`color/icon/secondary`); invalid message text comes from `<Field.ValidationMessage>` |

### Hidden-token values

None — every token above is published and resolves via the shipped `--sd3-*` catalog.

### Hardcoded values

Values Figma is not binding to a variable, verified via source-file grep against `packages/design-tokens/src/figma/**/*.tokens.json` and `boundVariables` inspection on the Field frame.

| Raw value | CSS property                            | Applies to                                            |
| --------- | --------------------------------------- | ----------------------------------------------------- |
| `1.5rem`  | font-size (on caret wrapper) → 1em icon | caret icon (size=large) — matches Button convention   |
| `1.25rem` | font-size (on caret wrapper) → 1em icon | caret icon (size=medium, size=small) — matches Button |

### Dimension-affecting asymmetries

Hover and focus render a **2px** border; default, disabled, and critical render a **1px** border. On hover-in or focus-in the field grows 1px in every direction unless the implementation reserves the extra pixel — e.g. by giving the base state a `border: 2px solid transparent` and only colouring it, or by using `outline` for the extra thickness. Without that fix the surrounding layout will shift. (Same fix as `<Input>`.)

| Property       | States that bind 2px          | States that bind 1px        | Intent (consumer-visible size difference? y/n) |
| -------------- | ----------------------------- | --------------------------- | ---------------------------------------------- |
| `border-width` | hover, focus (Figma "Active") | default, disabled, critical | n — must be equalised so the box stays put     |

The focus-visible outline (2px, drawn ~2px outside the field) does not affect layout because it is rendered via `outline` / an outer ring, not the border.

## Reference screenshots

Capture the **Field** frame only (not the composed Container/Label/Helper, which belong to `<Field>`) and save to the paths listed.

- Large default: `25981:3464` → `./screenshots/size-large-default.png`
- Large hover: `25981:3371` → `./screenshots/size-large-hover.png`
- Large focus (Active): `27620:3658` → `./screenshots/size-large-focus.png`
- Large focus-visible (blue outline overlay): toggle `focus` on `25981:3464` → `./screenshots/size-large-focus-visible.png`
- Large disabled: `31060:2167` → `./screenshots/size-large-disabled.png`
- Large critical: `25981:3428` → `./screenshots/size-large-critical.png`
- Medium default: `26202:1516` → `./screenshots/size-medium-default.png`
- Small default: `26202:1535` → `./screenshots/size-small-default.png`

## Open questions & gaps

1. **Dropdown picker styling is deferred.** Only the trigger box is specified here. When option-list styling is in scope, revisit: `appearance: base-select`, `::picker(select)`, `option` hover/focus/checked states — see `@sikt/sds-select`'s `select.css` for the pattern (background, elevation shadow, radius, `::checkmark` suppression).

_Historical note on decisions taken during spec-out:_

- **`readOnly` on native `<select>`**: ignored. HTML `<select>` has no `readonly`; falling back to `disabled` would mis-announce the control and strip the value from form submission. `<Field readOnly>` still renders its lock icon on the label, which carries the visual cue.
- **Caret icon size**: `font-size`-driven via `--select-icon-size` on a wrapper, with `.sds-icon`'s 1em × 1em default picking it up. Rem values (`1.5rem` / `1.25rem`) are component-local — same convention as `@sikt/sds-sd3-design-system` Button, no Figma token binds the icon size.
- **Caret icon**: `ExpandShowIcon` from `@sikt/sds-icons`. The current `@sikt/sds-select` uses `ExpandShowCircleIcon`; the plain triangle is the chosen SDS equivalent of Figma's `CaretDown`.

## Documentation text (verbatim from Figma)

From the Meta page (`13123:21149`):

- Title: **Select**
- Properties table sections: `Label` (True / False), `Helper` (True / False).
- Placeholder description block on the page contains lorem-style copy about file-naming conventions (shared across several component Meta pages); it is not real component documentation and has been ignored.
