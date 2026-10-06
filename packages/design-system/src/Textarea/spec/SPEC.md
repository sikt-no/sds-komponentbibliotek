# Textarea — Spec

**Figma:** [SDS Komponenter → TextArea](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26207-2635&m=dev)
**Component folder:** `packages/design-system/src/Textarea/`
**Replaces:** none
**Last synced:** 2026-09-30

## Overview

A styled wrapper around the native HTML `<textarea>` element that applies SD3 field visuals (background, border, radius, padding, placeholder colour, focus ring).
Reach for it when a plain multi-line text field is needed without any label, helper text, tag, or validation UI — those belong to a higher-level composition (e.g. a future `TextField`). For single-line input use `Input`; for dedicated form controls use `Checkbox`, `Radio`, or `Button`.

> **Internal use only.** Orients readers of this SPEC. Not for direct copy-paste into `README.md` or Astro docs.

## Variant axes

| Axis | Values                     | Default  | Figma label mapping                                                                                       | Notes                                                                                                     |
| ---- | -------------------------- | -------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| size | `large`, `medium`, `small` | `medium` | Figma documents `large` only (body-lg, py 8). `medium` and `small` are derived from the Input size scale. | Controls vertical padding and text scale. Height itself is content-driven; see `min-height` under tokens. |

## Interaction states

Per the TextArea component-set (`26207:2635`). Critical (`aria-invalid`) styling exists in Figma but is deliberately out of scope for this component — validation UI belongs to a higher-level composition, matching the Input SPEC.

- **default** — 1px `color/border/strong` border, `color/surface/default-1` background, placeholder text in `color/text/secondary`.
- **hover** (`:hover`) — border thickens to 2px (`spacing/border/weight/md`), colour and background unchanged.
- **focus** (`:focus`) — border 2px, background `color/surface/default-2`, typed value colour `color/text/primary`. Figma variant name: `state=Active`.
- **focus-visible** (`:focus-visible`) — layers a 2px `focus/border` outline offset ~3px outside the field on top of the focus styling. Rendered in Figma via the `showFocus` toggle on each state (overlay node `27805:15450` inside `state=Default`).
- **disabled** (`[disabled]`) — 1px border in `color/border/disabled`, text in `color/text/disabled`, background unchanged. `cursor: not-allowed` applied by the browser.
- **read-only** (`[readonly]`) — 1px `color/border/strong` border, background `color/surface/default-2`, text `color/text/primary`. Visually distinct from disabled (background tint instead of low-contrast border).

## Slots

| Slot | Content | Constraint                                                                                              |
| ---- | ------- | ------------------------------------------------------------------------------------------------------- |
| —    | —       | The component has no consumer slots. Content is set via the native `value` / `defaultValue` attributes. |

## Internal composition

N/A — the component renders a single `<textarea>` element with no conditional internal parts.

## Icons used

### Slot icons (consumer supplies)

N/A — no icon slot in scope.

### Internal icons (component renders)

N/A — no internal icons. The browser-native resize handle rendered by user agents at the bottom-right corner of a `<textarea>` is not overridden by SD3.

## Props / API (proposal)

Consumer-facing surface. The implementer wires this to `HTMLAttributes<HTMLTextAreaElement>` (or the framework equivalent), decides on `ref` forwarding, and enforces that HTML's native `<textarea>` has no conflicting attribute to omit (unlike `<input>`, `<textarea>` has no `size` HTML attribute — but it does have `rows` and `cols`, which remain native passthrough).

```ts
export interface TextareaProps {
  /** Field text scale and vertical padding. Defaults to `"medium"`. */
  size?: "large" | "medium" | "small";
}
```

Native passthroughs the implementation should preserve: `rows`, `cols`, `placeholder`, `value`, `defaultValue`, `disabled`, `readOnly`, `required`, `maxLength`, `minLength`, `name`, `wrap`, event handlers, `aria-*`.

## Accessibility

- **Semantic element:** `<textarea>`.
- **Keyboard:** browser default (typing, arrow keys, `Enter` inserts newline, `Tab` moves focus out — a textarea does not trap `Tab`). This component does not intercept key events.
- **Screen reader / ARIA:** the component does not render a label. Consumers must provide an accessible name via `aria-label`, `aria-labelledby`, or an associated `<label>` element in the surrounding composition. When no accessible name is present the textarea is a WCAG 4.1.2 violation — the higher-level composition (future `TextField`) is responsible for enforcing this.
- **Focus:** the field must show a visible focus indicator when it receives keyboard focus. Figma binds a 2px outline in `focus/border` offset ~3px from the border box. Implementation defines the exact CSS (`:focus-visible` is expected).
- **Resize:** browsers render a resize handle by default (`resize: both`). See "Open questions & gaps" — the design does not depict a handle.
- **WAI-ARIA pattern:** none applicable — this is a native form control.

## Design tokens

### Figma-bound tokens — shared across all sizes and states

| Figma token                 | Current value                                                         | CSS property   | Applies to                  |
| --------------------------- | --------------------------------------------------------------------- | -------------- | --------------------------- |
| `spacing/border/radius/sm`  | `4px`                                                                 | border-radius  | field                       |
| `space/component/300`       | `12px`                                                                | padding-inline | field                       |
| `typography/weight/regular` | `400` (normal)                                                        | font-weight    | textarea + placeholder text |
| `focus/border`              | `#004fcf` (Sikt light/gray); `#005AEA` (Sikt dark); `#2B5FBA` (Feide) | outline-color  | focus-visible outline (2px) |
| `layout/radius/02`          | `4px`                                                                 | border-radius  | focus-visible outline       |

### Figma-bound tokens — per size

Figma documents only the `large` row; `medium` and `small` are derived from the Input size scale and must be confirmed with design (see Open questions).

| Size   | padding-block                 | font-size                               | line-height                                    |
| ------ | ----------------------------- | --------------------------------------- | ---------------------------------------------- |
| large  | `space/component/200` (`8px`) | `typography/size/text/body-lg` (`18px`) | `typography/line-height/text/body-lg` (`28px`) |
| medium | `space/component/200` (`8px`) | `typography/size/text/body-md` (`16px`) | `typography/line-height/text/body-md` (`24px`) |
| small  | `space/component/100` (`4px`) | `typography/size/text/body-md` (`16px`) | `typography/line-height/text/body-md` (`24px`) |

### Figma-bound tokens — per state

| State         | background                            | border-color                        | border-width                                      | text colour                                     |
| ------------- | ------------------------------------- | ----------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| default       | `color/surface/default-1` (`#ffffff`) | `color/border/strong` (`#959595`)   | `layout/border-weight/thin` (`1px`)               | placeholder: `color/text/secondary` (`#595959`) |
| hover         | `color/surface/default-1` (`#ffffff`) | `color/border/strong` (`#959595`)   | `spacing/border/weight/md` (`2px`)                | placeholder: `color/text/secondary` (`#595959`) |
| focus         | `color/surface/default-2` (`#f1f1f1`) | `color/border/strong` (`#959595`)   | `spacing/border/weight/md` (`2px`)                | typed value: `color/text/primary` (`#0a0132`)   |
| focus-visible | inherits focus                        | inherits focus                      | inherits focus + outer 2px `focus/border` outline | inherits focus                                  |
| disabled      | `color/surface/default-1` (`#ffffff`) | `color/border/disabled` (`#959595`) | `layout/border-weight/thin` (`1px`)               | `color/text/disabled` (`#959595`)               |
| read-only     | `color/surface/default-2` (`#f1f1f1`) | `color/border/strong` (`#959595`)   | `spacing/border/weight/xs` (`1px`)                | `color/text/primary` (`#0a0132`)                |

Note: `layout/border-weight/thin` (default, disabled) and `spacing/border/weight/xs` (read-only) both resolve to `1px` but are different Figma tokens. Whether the implementation collapses them to one CSS declaration is [[implement-component-spec]]'s call.

### Hidden-token values

None — every token above is published and resolves via the shipped `--sd3-*` catalog. (No hidden-token search hits for the raw values used in this component.)

### Hardcoded values

| Raw value | CSS property | Applies to | Notes                                                                           |
| --------- | ------------ | ---------- | ------------------------------------------------------------------------------- |
| `100px`   | min-height   | field      | No matching token in `packages/design-tokens/src/figma/**`. Flagged for design. |

### Dimension-affecting asymmetries

Hover and focus render a **2px** border; default, disabled, and read-only render a **1px** border. On hover-in or focus-in the field grows 1px in every direction unless the implementation reserves the extra pixel — e.g. by giving the base state a `border: 2px solid transparent` and only colouring it, or by using `outline` for the extra thickness. Without that fix the surrounding layout will shift.

| Property       | States that bind 2px          | States that bind 1px                   | Intent (consumer-visible size difference? y/n) |
| -------------- | ----------------------------- | -------------------------------------- | ---------------------------------------------- |
| `border-width` | hover, focus (Figma "Active") | default, disabled, read-only, critical | n — must be equalised so the box stays put     |

The focus-visible outline (2px, drawn ~3px outside the field) does not affect layout because it is rendered via `outline` / an outer ring, not the border.

## Reference screenshots

Capture the **Field** frame only (not the composed variant with label/helper) and save to the paths listed. Figma documents a single size (matching `large`); capture `medium` and `small` from Storybook once implemented.

- Default: `26207:2720` → `./screenshots/default.png`
- Hover: `26207:2636` → `./screenshots/hover.png`
- Focus (typed): `27529:3115` → `./screenshots/focus.png`
- Focus-visible (blue outline overlay): `26207:2720` with `showFocus=true` → `./screenshots/focus-visible.png`
- Disabled: `31040:1578` → `./screenshots/disabled.png`
- Read-only: `27467:2400` → `./screenshots/readonly.png`

## Open questions & gaps

1. **Size axis is design-derived.** Figma only ships `TextArea` at a single visual size (matching Input's `large`: `body-lg`, padding-block `space/component/200`). The `medium` and `small` rows in the token table were derived from Input's size scale to give consumers parity with `<Input>`. Design should confirm the per-size padding/font mapping, or drop the axis if Textarea is intentionally single-size.
2. **`min-height: 100px` is hardcoded.** No token in `packages/design-tokens/src/figma/**` resolves to `100`. Tokens owner should decide: (a) promote to a variable, (b) treat as arbitrary and leave hardcoded, or (c) tie to `rows` × line-height so the min-height varies per size.
3. **Resize handle behaviour.** Figma shows no resize handle in any variant. Browsers default to `resize: both`. Pick one: `resize: none` (match Figma render), `resize: vertical` (allow user to grow the field), or `resize: both` (native default). Recommend `vertical` unless design explicitly rules it out.
4. **Border-width token inconsistency for 1px.** Default and disabled bind `layout/border-weight/thin`; read-only binds `spacing/border/weight/xs`. Both resolve to `1px`. Not blocking, but worth flagging to the tokens owner.

## Documentation text (verbatim from Figma)

The Textarea component-set (`26207:2635`) has no dedicated Meta / documentation page in Figma — it lives as one of the type variants under the Input Meta page (`13122:19655`), which lists `Type: Text / Password / Textarea` in its properties table. No paragraph-level documentation for Textarea specifically was found on the page.

Note: this SPEC scopes `<Textarea>` to the **Field** portion of the composed TextArea variant. Label, helper, tag, and validation UI are documented in Figma as part of the composed variant but are out of scope for this component, matching the Input SPEC.
