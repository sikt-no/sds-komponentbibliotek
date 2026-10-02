# Input — Spec

**Figma:** [SDS Komponenter → Input](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13122-19655&m=dev)
**Component folder:** `packages/design-system/src/Input/`
**Replaces:** none
**Last synced:** 2026-09-29

## Overview

A styled wrapper around the native HTML `<input>` element that applies SD3 field visuals (background, border, radius, padding, placeholder colour, focus ring).
Reach for it when a plain form field is needed without any label, helper text, tag, or validation UI — those belong to a higher-level composition (e.g. a future `TextField`). For dedicated form controls use `Checkbox`, `Radio`, or `Button`.

> **Internal use only.** Orients readers of this SPEC. Not for direct copy-paste into `README.md` or Astro docs.

## Variant axes

| Axis | Values                     | Default  | Figma label mapping     | Notes                                                                                        |
| ---- | -------------------------- | -------- | ----------------------- | -------------------------------------------------------------------------------------------- |
| size | `large`, `medium`, `small` | `medium` | size=Large/Medium/Small | Controls field height (48 / 40 / 32), vertical padding, and text scale (body-lg vs body-md). |

`type` is a passthrough HTML attribute that changes the browser-native widget inside the field but does not change SD3 styling. See "Props / API".

## Interaction states

Per the TextField component-set (`26132:522`) at each size. Critical (`aria-invalid`) styling exists in Figma but is deliberately out of scope for this component — validation UI belongs to a higher-level composition.

- **default** — 1px `color/border/strong` border, `color/surface/default-1` background, placeholder text in `color/text/secondary`.
- **hover** (`:hover`) — border thickens to 2px (`spacing/border/weight/md`), colour and background unchanged.
- **focus** (`:focus`) — border 2px, background `color/surface/default-2`, typed value colour `color/text/primary`. Figma variant name: `state=Active`.
- **focus-visible** (`:focus-visible`) — layers a 2px `focus/border` outline offset ~2px outside the field on top of the focus styling. Rendered via the "Focus" toggle on the Meta page (`31043:2194`).
- **disabled** (`[disabled]`) — 1px border in `color/border/disabled`, text in `color/text/disabled`, background unchanged. `cursor: not-allowed` applied by the browser.
- **read-only** (`[readonly]`) — 1px `color/border/strong` border, background `color/background/default`, text `color/text/primary`. Visually distinct from disabled (background tint instead of low-contrast border).

## Slots

| Slot | Content | Constraint                                                                                              |
| ---- | ------- | ------------------------------------------------------------------------------------------------------- |
| —    | —       | The component has no consumer slots. Content is set via the native `value` / `defaultValue` attributes. |

## Internal composition

N/A — the component renders a single `<input>` element with no conditional internal parts.

## Icons used

### Slot icons (consumer supplies)

N/A — no icon slot in scope. Password reveal, search glyph, and calendar affordances shown in the wider Figma Meta page belong to composed field components, not to `<Input>`.

### Internal icons (component renders)

N/A — no internal icons. Browser-native widgets for `type="date"`, `type="color"`, `type="file"`, `type="range"`, etc. are rendered by the user agent, unaltered. SD3 only styles the outer field frame.

## Props / API (proposal)

Consumer-facing surface. The implementer wires this to `HTMLAttributes<HTMLInputElement>` (or the framework equivalent), decides on `ref` forwarding, and enforces the `type` restriction via `Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">` intersected with the union below (note: `size` is also omitted because HTML's native `size` attribute conflicts with our size prop).

```ts
/**
 * Native <input type> values supported by SD3 Input. Excluded:
 * `button` / `submit` / `reset` (use `Button`), `checkbox` / `radio` (dedicated components),
 * `hidden` (renders nothing — use raw `<input type="hidden">`), `image` (submit-button variant),
 * and `range` (slider control with a distinct visual model — not styled by this component).
 */
export type InputType =
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps {
  /** HTML input type. Defaults to `"text"`. */
  type?: InputType;
  /** Field height and text scale. Defaults to `"medium"`. */
  size?: "large" | "medium" | "small";
}
```

## Accessibility

- **Semantic element:** `<input>`.
- **Keyboard:** browser default for the given `type`. This component does not intercept key events.
- **Screen reader / ARIA:** the component does not render a label. Consumers must provide an accessible name via `aria-label`, `aria-labelledby`, or an associated `<label>` element in the surrounding composition. When no accessible name is present the input is a WCAG 4.1.2 violation — the higher-level composition (future `TextField`) is responsible for enforcing this.
- **Focus:** the field must show a visible focus indicator when it receives keyboard focus. Figma binds a 2px outline in `focus/border` offset ~2px from the border box. Implementation defines the exact CSS (`:focus-visible` is expected).
- **Browser-native widgets:** `type="color"`, `type="date"`, `type="datetime-local"`, `type="file"`, `type="month"`, `type="range"`, `type="time"`, `type="week"` render their own affordances inside the field. SD3 does not override them.
- **WAI-ARIA pattern:** none applicable — this is a native form control.

## Design tokens

### Figma-bound tokens — shared across all sizes and states

| Figma token                 | Current value                                                         | CSS property   | Applies to                  |
| --------------------------- | --------------------------------------------------------------------- | -------------- | --------------------------- |
| `spacing/border/radius/sm`  | `4px`                                                                 | border-radius  | field                       |
| `space/component/300`       | `12px`                                                                | padding-inline | field                       |
| `typography/weight/regular` | `400` (normal)                                                        | font-weight    | input + placeholder text    |
| `focus/border`              | `#004fcf` (Sikt light/gray); `#005AEA` (Sikt dark); `#2B5FBA` (Feide) | outline-color  | focus-visible outline (2px) |
| `layout/radius/02`          | `4px`                                                                 | border-radius  | focus-visible outline       |

### Figma-bound tokens — per size

| Size   | padding-block                 | font-size                               | line-height                                    |
| ------ | ----------------------------- | --------------------------------------- | ---------------------------------------------- |
| large  | `space/component/200` (`8px`) | `typography/size/text/body-lg` (`18px`) | `typography/line-height/text/body-lg` (`28px`) |
| medium | `space/component/200` (`8px`) | `typography/size/text/body-md` (`16px`) | `typography/line-height/text/body-md` (`24px`) |
| small  | `space/component/100` (`4px`) | `typography/size/text/body-md` (`16px`) | `typography/line-height/text/body-md` (`24px`) |

### Figma-bound tokens — per state

| State         | background                             | border-color                        | border-width                                      | text colour                                     |
| ------------- | -------------------------------------- | ----------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| default       | `color/surface/default-1` (`#ffffff`)  | `color/border/strong` (`#959595`)   | `layout/border-weight/thin` (`1px`)               | placeholder: `color/text/secondary` (`#595959`) |
| hover         | `color/surface/default-1` (`#ffffff`)  | `color/border/strong` (`#959595`)   | `spacing/border/weight/md` (`2px`)                | placeholder: `color/text/secondary` (`#595959`) |
| focus         | `color/surface/default-2` (`#f1f1f1`)  | `color/border/strong` (`#959595`)   | `spacing/border/weight/md` (`2px`)                | typed value: `color/text/primary` (`#0a0132`)   |
| focus-visible | inherits focus                         | inherits focus                      | inherits focus + outer 2px `focus/border` outline | inherits focus                                  |
| disabled      | `color/surface/default-1` (`#ffffff`)  | `color/border/disabled` (`#959595`) | `layout/border-weight/thin` (`1px`)               | `color/text/disabled` (`#959595`)               |
| read-only     | `color/background/default` (`#f1f1f1`) | `color/border/strong` (`#959595`)   | `layout/border-weight/thin` (`1px`)               | `color/text/primary` (`#0a0132`)                |

### Hidden-token values

None — every token above is published and resolves via the shipped `--sd3-*` catalog.

### Hardcoded values

None — every value visible in Figma resolves to a bound variable.

### Dimension-affecting asymmetries

Hover and focus render a **2px** border; default, disabled, and read-only render a **1px** border. On hover-in or focus-in the field grows 1px in every direction unless the implementation reserves the extra pixel — e.g. by giving the base state a `border: 2px solid transparent` and only colouring it, or by using `outline` for the extra thickness. Without that fix the surrounding layout will shift.

| Property       | States that bind 2px          | States that bind 1px                   | Intent (consumer-visible size difference? y/n) |
| -------------- | ----------------------------- | -------------------------------------- | ---------------------------------------------- |
| `border-width` | hover, focus (Figma "Active") | default, disabled, read-only, critical | n — must be equalised so the box stays put     |

The focus-visible outline (2px, drawn ~2px outside the field) does not affect layout because it is rendered via `outline` / an outer ring, not the border.

## Reference screenshots

Capture the **Field** frame only (not the composed TextField with label/helper) and save to the paths listed.

- Large default: `26132:607` → `./screenshots/size-large-default.png`
- Large hover: `26132:523` → `./screenshots/size-large-hover.png`
- Large focus (typed): `27529:3061` → `./screenshots/size-large-focus.png`
- Large focus-visible (blue outline overlay): `31043:2194` (Meta page instance) → `./screenshots/size-large-focus-visible.png`
- Large disabled: `31035:1500` → `./screenshots/size-large-disabled.png`
- Large read-only: `27437:4255` → `./screenshots/size-large-readonly.png`
- Medium default: `26132:615` → `./screenshots/size-medium-default.png`
- Small default: `26132:623` → `./screenshots/size-small-default.png`

## Open questions & gaps

None — all initial open questions were resolved.

_Historical note on decisions taken during spec-out:_

- **Sizes**: three (large / medium / small), confirmed via the TextField component-set (`26132:522`).
- **States**: six exist in Figma (Default, Hover, Active, Disabled, ReadOnly, Critical). Critical is out of scope for this component; validation UI belongs to a future higher-level composition.
- **Filled text colour**: `color/text/primary` (`#0a0132`), confirmed via the Active and ReadOnly variants.
- **`type="hidden"`** and **`type="image"`**: dropped from the `InputType` union — the former renders nothing so styling is dead code, the latter is a submit-button variant that belongs with `button` / `submit` / `reset`.
- **Browser-native widgets** (`color`, `date`, `datetime-local`, `file`, `month`, `range`, `time`, `week`): SD3 styles only the outer field frame; the browser's default widget is rendered inside unaltered.

## Documentation text (verbatim from Figma)

From the Meta page (`13122:19655`):

- Title: **Input**
- Properties table sections: `Type` (Text / Password / Textarea), `Label` (True / False), `Helper` (True / False), `Focus` (True / False), `Icon`, `Show password` (annotated: "Dette er ikke en property men et eksempel på hvordan ikonet reflekterer handlingen."), `Obligatoriske felter` (annotated: "Løsningen for obligatoriske felter er fortsatt under arbeid, så endringer kan skje.").
- Placeholder description block on the page contains lorem-style copy about file-naming conventions; it is not real component documentation and has been ignored.

Note: this SPEC scopes `<Input>` to the **Field** portion of the composed `TextField` / `TextPassword` / `TextArea` shown on the Meta page. Label, helper, tag, password-toggle icon, and validation UI are documented in Figma but out of scope for this component.
