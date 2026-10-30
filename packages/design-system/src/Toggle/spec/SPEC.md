# Toggle — Spec

**Figma:** [ToggleSwitch](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=5320-14700&m=dev)
**Component folder:** `packages/design-system/src/Toggle/`
**Replaces:** `@sikt/sds-toggle` (the `ToggleSwitch` export; `ToggleSegment` is unrelated and stays)
**Last synced:** 2026-10-26

## Overview

A binary on/off switch for an immediate, visible setting change.

Reach for it when flipping the control takes effect right away (preferences, feature toggles). For values confirmed on form submission, use a checkbox instead; for a one-of-many selection, use radio.

## Variant axes

None. The component has one appearance; `checked` is state, not a variant.

| Axis | Values | Default | Figma label mapping | Notes |
| ---- | ------ | ------- | ------------------- | ----- |

## Interaction states

- **default / unchecked** — track bordered, handle at the left of the track in `color/component/toggle/handle`.
- **default / checked** — track filled in `color/interaction/primary/default`, handle at the right in `color/surface/default-1` (white).
- **hover / unchecked** — track fill `color/interaction/neutral/hover`; handle shifts ~0.4em toward the track centre.
- **hover / checked** — track fill `color/interaction/primary/hover`; handle shifts ~0.4em toward the track centre.
- **pressed (active) / unchecked** — track fill `color/interaction/neutral/pressed`; handle shifts ~0.75em further toward centre (meets the checked-pressed position).
- **pressed (active) / checked** — track fill `color/interaction/primary/pressed`; handle shifts ~0.75em further toward centre.
- **focus-visible** — a 0.125em ring in `focus/border` sits 0.125em outside the track. Shown only on keyboard focus; the implementer picks the CSS mechanism (outline / box-shadow). Composable with hover and pressed.

## Slots

None. The component renders only the switch itself. Label text is composed outside the component — see **Internal composition** below.

| Slot | Content | Constraint |
| ---- | ------- | ---------- |

## Internal composition

The Toggle renders only the track + handle. Labelling is handled by the consumer using the existing `Label` from `@sikt/sd3-design-system` typography:

```tsx
<Label>
  <Toggle checked={on} onCheckedChange={setOn} />
  Enable notifications
</Label>
```

Label position (left or right of the switch) is controlled by JSX ordering inside `<Label>`. Implementation is expected to add `display: flex` + `align-items: center` + `gap: var(--sd3-space-component-200)` (8px) to the Toggle's hosting label so the two sit on the same baseline with Figma's gap token.

## Icons used

### Slot icons (consumer supplies)

None.

### Internal icons (component renders)

None. The legacy `sds-toggle` rendered `ConfirmIcon`/`CloseIcon` in the thumb via `showIcons`; SD3 drops this — the thumb is a solid circle.

## Props / API (proposal)

Consumer-facing surface. Framework-neutral — the implementation decides HTMLAttributes pass-through, refs, controlled/uncontrolled plumbing.

```ts
export interface ToggleProps {
  /** Controlled checked state. Pair with `onCheckedChange`. */
  checked?: boolean;
  /** Uncontrolled initial checked state. Ignored when `checked` is set. */
  defaultChecked?: boolean;
  /** Called with the next checked state after the user activates the toggle. */
  onCheckedChange?: (checked: boolean) => void;
}
```

## Accessibility

- **Semantic element:** `<input type="checkbox" role="switch">`. Native form submission + implicit `aria-checked` via the checkbox's `checked` state. Matches the legacy `sds-toggle` and the Digdir reference.
- **Keyboard:** `Space` toggles. The browser handles this natively via the checkbox; no custom key handling required.
- **Screen reader / ARIA:** the accessible name comes from the wrapping `<Label>` (`<label>` associates by nesting or `htmlFor` on an `id`). Do not add `aria-label` by default — the API intentionally omits it to force consumers to use the `Label` component for consistent typography.
- **Focus:** must be visibly indicated on keyboard focus (`:focus-visible`). The ring color is `focus/border`; the implementation picks the CSS mechanism.
- **WAI-ARIA pattern:** [Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)

## Design tokens

### Figma-bound tokens

| Figma token                           | Current value                                      | CSS property     | Applies to                                    |
| ------------------------------------- | -------------------------------------------------- | ---------------- | --------------------------------------------- |
| `color/interaction/primary/default`   | `#7351fb`                                          | background-color | track, checked, state=default                 |
| `color/interaction/primary/hover`     | `#643ffa`                                          | background-color | track, checked, state=hover                   |
| `color/interaction/primary/pressed`   | `#5531e8`                                          | background-color | track, checked, state=pressed                 |
| `color/border/strong`                 | `#959595`                                          | border-color     | track, unchecked (all states)                 |
| `color/interaction/neutral/hover`     | `#e0e0e0`                                          | background-color | track, unchecked, state=hover                 |
| `color/interaction/neutral/pressed`   | `#d6d6d6`                                          | background-color | track, unchecked, state=pressed               |
| `color/component/toggle/handle`       | `#656565` (light themes) / `#959595` (dark themes) | background-color | handle, unchecked                             |
| `color/surface/default-1`             | `#ffffff`                                          | background-color | handle, checked                               |
| `spacing/border/radius/full`          | `999px`                                            | border-radius    | track, handle, focus ring                     |
| `space/component/050`                 | `2px`                                              | padding          | track inner padding (handle inset)            |
| `space/component/200`                 | `8px`                                              | gap              | label ↔ track (set on the wrapping `<Label>`) |
| `color/text/primary`                  | `#0a0132`                                          | color            | label text (via `<Label>`)                    |
| `typography/size/text/body-md`        | `16px`                                             | font-size        | label text (via `<Label>`)                    |
| `typography/line-height/text/body-md` | `24px`                                             | line-height      | label text (via `<Label>`)                    |
| `typography/weight/regular`           | `Regular`                                          | font-weight      | label text (via `<Label>`)                    |
| `focus/border`                        | `#004fcf`                                          | border-color     | focus ring (keyboard focus only)              |

### Hidden-token values

None. All color tokens the component binds are published; `color/component/toggle/handle` is per-theme (`#656565` in light themes, `#959595` in dark themes) and the token layer handles the swap.

### Hardcoded values

Dimensional values are intentionally expressed in **`em`** units so the toggle scales with the label's font-size (same approach as `.sds-icon`). No new `component/toggle/*` tokens are introduced.

| Em value  | Pixel equivalent at body-md (16px) | CSS property      | Applies to                                                        |
| --------- | ---------------------------------- | ----------------- | ----------------------------------------------------------------- |
| `3em`     | `48px`                             | width             | track                                                             |
| `1.5em`   | `24px`                             | height            | track                                                             |
| `1.25em`  | `20px`                             | width + height    | handle                                                            |
| `0.125em` | `2px`                              | padding           | track inner padding (equal to `space/component/050` at body-md)   |
| `0.125em` | `2px`                              | border-width      | focus ring                                                        |
| `0.125em` | `2px`                              | inset (all sides) | focus ring offset from track                                      |
| `0.375em` | `6px`                              | translateX        | handle shift on hover (toward track centre)                       |
| `0.75em`  | `12px`                             | translateX        | handle shift on pressed (meets opposite-state position at centre) |

### Dimension-affecting asymmetries

None. The unchecked variant has a 1px border; the checked variant has none. To avoid a 2px size difference between states (which would shift the handle's end-stops), the implementer should reserve a transparent 1px border on the checked state so both tracks measure the same outer box.

| Property       | States that bind it | States that DON'T | Intent (consumer-visible size difference? y/n)     |
| -------------- | ------------------- | ----------------- | -------------------------------------------------- |
| `border-width` | unchecked           | checked           | n — equalise via transparent 1px border on checked |

## Reference screenshots

Capture from Figma and save to `./screenshots/`:

- `component-sheet.png` — the full 6-state matrix from node `5320-14700` (checked × {default, hover, pressed} and unchecked × {default, hover, pressed}).
- `focus-visible.png` — a single state with the Focus overlay toggled on (showFocus=true in Figma), to anchor the focus-ring geometry.

## Open questions & gaps

- **No disabled state in Figma.** Deliberately out of scope for the first implementation (per spec decision 2026-10-26). Revisit when a designer adds the state to Figma.
- **No consumer-facing documentation text on the Figma page.** The "Documentation text" section below is intentionally empty; the Astro docs page is deferred until a designer provides copy. [[implement-component-spec]] should skip the Astro docs page for now.
- **Focus-ring geometry (0.125em border + 0.125em inset) is driven by the hidden `Focus` layer in Figma.** The `focus/border` colour token is confirmed, but the 2px dimensions are not Figma-bound. Treat as design intent; promote to tokens only if Figma exposes them later.
- **Hover/pressed handle shift is a Figma design choice**, not a Digdir Switch behaviour. Preserve as CSS transitions on `translateX` for the handle. If this causes animation-reduction concerns, respect `prefers-reduced-motion` by dropping the transform shift (colour change is enough).
- **Form submission.** The component uses `<input type="checkbox" role="switch">` so it participates in native form submission as the underlying checkbox. Consumers get `name` / `value` via standard checkbox props — the implementer decides whether to spread `InputHTMLAttributes` or allow a specific `name` prop.

## Documentation text (verbatim from Figma)

_No documentation text present on the Figma page as of 2026-10-26._
