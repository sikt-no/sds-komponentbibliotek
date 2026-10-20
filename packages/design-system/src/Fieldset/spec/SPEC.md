# Fieldset — Spec

**Figma:** [Fieldset](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=30037-617&m=dev)
**Component folder:** `packages/design-system/src/Fieldset/`
**Replaces:** `none`
**Last synced:** 2026-10-14

## Overview

Compound wrapper that groups a set of related form controls — Checkboxes, RadioButtons, or multiple `<Field>`s — under a shared legend, helper text, and validation message so the group reads and announces as one unit.
Reach for it whenever two or more controls answer the same question ("Which options apply?", "Choose one"); for a single input, use `<Field>`.

> **Internal use only.** Fieldset is the group counterpart to `<Field>` and shares its sub-component surface: `Description` and `ValidationMessage` are the same components Field exports, driven by whichever of the two contexts is nearest. Only `Legend` is Fieldset-specific. The child controls (Checkbox, RadioButton, Field, etc.) are separate SPECs — Fieldset does not re-spec their visuals.

## Variant axes

| Axis   | Values        | Default | Figma label mapping                    | Notes                                                                                                                                                                                                                                              |
| ------ | ------------- | ------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size` | medium, large | medium  | `Standard` → large, `Compact` → medium | Per the Figma note "the size property only affects the legend (label) size" — size does **not** cascade to child controls. Fieldset deliberately omits Field's `small` size because Figma doesn't draw one (groups don't appear in dense layouts). |

No `variant` axis — Fieldset has one visual treatment.

## Interaction states

Same model as Field, minus the states that only live on an input box (`hover`, `focus/active`, `readOnly`). Figma only draws size variants for Fieldset; the states below are inherited from Field's spec and the semantics of `<fieldset>`.

- **default** — baseline. Legend + optional Description above the controls; ValidationMessage absent.
- **critical** — a `<ValidationMessage>` is present. ValidationMessage renders below the controls with a `failed-filled` icon and critical text colour. Same WCAG-driven rule as Field: no separate `invalid` prop; critical state is bound to the message so there is always a screen-reader-reachable explanation.
- **disabled** — `disabled=true`. The native `<fieldset>` `disabled` attribute cascades to every form control inside; Legend + Description text do not change colour in Figma, but the child controls render their own disabled styling.

## Slots

Sub-components are the slots. Visual order (top-to-bottom) is Legend → Description → controls → ValidationMessage and is enforced by Fieldset's own layout regardless of JSX order. `Description` and `ValidationMessage` are the same components Field exports.

| Slot                                    | Content                                                                      | Constraint                                                                                                                                                                                                                                                                       |
| --------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Legend` (Fieldset-specific)            | Group label text, optionally followed by a `<Tag>`                           | Required for a labelled fieldset. Wraps in `<legend>` with a flex row (`space/component/200` gap, align end). Consumer composes any inline nodes — placing a `<Tag>` inside is the sanctioned way to render the Figma `TagCustom` slot. Field's `Label` adopts the same pattern. |
| `Description` (reused from Field)       | Helper text                                                                  | Optional. Wired via `aria-describedby` on the fieldset.                                                                                                                                                                                                                          |
| Controls                                | Two or more `<Checkbox>`, `<RadioButton>`, `<Field>`, or other form controls | Required. Fieldset does not generate ids or coordinate state with the children beyond the `disabled` cascade handled natively by `<fieldset>`.                                                                                                                                   |
| `ValidationMessage` (reused from Field) | Validation / error text                                                      | Optional. Presence marks the group critical and appends its id to the fieldset's `aria-describedby`.                                                                                                                                                                             |

## Internal composition

| Internal part                   | Rendered when                               | Notes                                                                      |
| ------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------- |
| Icon inside `ValidationMessage` | Always (whenever ValidationMessage renders) | `failed-filled` icon at 18×18, before the text, `space/component/100` gap. |

## Icons used

### Slot icons (consumer supplies)

None. Fieldset's sub-components do not accept consumer-supplied icons.

### Internal icons (component renders)

| Icon name       | Where it appears                                   | Notes                                                                                          |
| --------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `failed-filled` | Prefix inside `ValidationMessage` (always present) | Rendered at 18×18. Figma component `31679:21547` — doc note _"Kun for bruk i inline message."_ |

## Props / API (proposal)

Consumer-facing surface. Fieldset only adds `Fieldset` and `Legend`; `Description` and `ValidationMessage` are imported from the Field module and work identically when nested in a Fieldset context.

```ts
export interface FieldsetProps {
  /** Visual size. Controls legend typography only; does not cascade to child controls. */
  size?: "medium" | "large";
  /** Disables the group. Propagates as the native `<fieldset disabled>` attribute, which disables every form control inside. */
  disabled?: boolean;
  /** Sub-components: Legend, Description, controls, ValidationMessage — order-flexible. */
  children: Content;
}

export interface LegendProps {
  /** Group label text, optionally followed by a `<Tag>`. Children render in a flex row with `space/component/200` gap. */
  children: Content;
}
```

Exported shape:

```ts
export { Fieldset, Legend };
// Compound access: Fieldset.Legend, Fieldset.Description, Fieldset.ValidationMessage.
// Fieldset.Description and Fieldset.ValidationMessage are aliases for Field's Description / ValidationMessage.
```

Sub-component implementations read the nearest ancestor context (Field or Fieldset), so a `<Description>` or `<ValidationMessage>` works inside either wrapper without a prop change.

## Accessibility

- **Semantic elements:**
  - `Fieldset` — `<fieldset>`. Native grouping semantics; `disabled` cascades to all form controls inside.
  - `Legend` — `<legend>`. Must be the first child of `<fieldset>` in the DOM to be announced as the group label.
  - `Description` — `<span>` (or `<p>`), stable id.
  - `ValidationMessage` — `<span>` (or `<p>`) with `role="alert"` for immediate announcement; stable id.
- **Keyboard:** No custom key handling. All interaction goes through the child controls' native behaviour (Tab through checkboxes; arrow keys inside a radio group — the radio-group semantics come from the children, not from Fieldset).
- **Screen reader / ARIA:**
  - The `<legend>` is announced before each child control's own name, naming the group.
  - `Fieldset.aria-describedby` combines Description's id and ValidationMessage's id when they render; omitted otherwise. Known limitation: screen reader support for `aria-describedby` on `<fieldset>` is uneven — some SRs only read the `<legend>`. The `role="alert"` on ValidationMessage covers the error path reliably; plain Description announcement is accepted as best-effort.
  - `Fieldset.disabled` sets the native `disabled` attribute on `<fieldset>`; no `aria-disabled` needed.
  - Internal `failed-filled` icon is `aria-hidden="true"` — the state is already conveyed by the critical colour and the accompanying text.
- **Focus:** Fieldset itself is not focusable. Focus lives on the child controls.
- **WAI-ARIA pattern:** No custom pattern — this follows the plain HTML `<fieldset>` + `<legend>` grouping model. For a RadioButton child group, the children follow the [WAI-ARIA Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern on their own.

## Design tokens

Recorded from `get_variable_defs` on the Fieldset component set (`31845:217`, variants `29803:1298` = Standard, `31845:216` = Compact) and the InlineMessage pattern already captured in the Field SPEC.

### Figma-bound tokens

| Figma token                            | Current value | CSS property | Applies to                                                                         |
| -------------------------------------- | ------------- | ------------ | ---------------------------------------------------------------------------------- |
| `color/text/primary`                   | `#0a0132`     | color        | Legend text                                                                        |
| `color/text/secondary`                 | `#595959`     | color        | Description text                                                                   |
| `color/text/critical`                  | `#b60203`     | color        | ValidationMessage text                                                             |
| `color/support/critical/strong`        | `#b60203`     | color / fill | `failed-filled` icon inside ValidationMessage                                      |
| `space/component/100`                  | `4px`         | gap          | Legend row → Description (meta vertical gap); icon → text inside ValidationMessage |
| `space/component/200`                  | `8px`         | gap          | Legend → optional Tag (horizontal, inside the legend row)                          |
| `space/component/300`                  | `12px`        | gap          | Fieldset wrapper vertical gap (meta → controls → ValidationMessage)                |
| `typography/size/text/label-lg`        | `18`          | font-size    | Legend (size=large)                                                                |
| `typography/line-height/text/label-lg` | `24`          | line-height  | Legend (size=large)                                                                |
| `typography/size/text/label`           | `16`          | font-size    | Legend (size=medium)                                                               |
| `typography/line-height/text/label`    | `24`          | line-height  | Legend (size=medium)                                                               |
| `typography/size/text/helper`          | `14`          | font-size    | Description, ValidationMessage                                                     |
| `typography/line-height/text/helper`   | `16`          | line-height  | Description, ValidationMessage                                                     |
| `typography/weight/semibold`           | `600`         | font-weight  | Legend                                                                             |
| `typography/weight/regular`            | `400`         | font-weight  | Description, ValidationMessage                                                     |

### Hardcoded values

Values Figma is not binding to a variable. The hex colours above are all bound; what remains unbound are the Haffer font-family (inherited from the design-system global CSS, per the existing Field SPEC finding) and the `failed-filled` icon dimensions.

| Raw value  | CSS property   | Applies to                                                                                                                                             |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `18px`     | width, height  | `failed-filled` icon inside ValidationMessage — unbound in Figma (same gap as Field SPEC)                                                              |
| `"Haffer"` | font-family    | All text — no `font-family` variable exists in the token catalog; inherited from a global CSS baseline in the design system. Verify at implement time. |
| `0`        | letter-spacing | All text — no `letter-spacing` variable exists                                                                                                         |

### Dimension-affecting asymmetries

None. Size changes only legend typography; no border, padding, or outline differences across sizes.

## Reference screenshots

Drop PNGs into `./screenshots/` from these Figma frames before running `review-component-spec`:

- `29803:1298` → `./screenshots/size-large-default.png` (Figma Standard)
- `31845:216` → `./screenshots/size-medium-default.png` (Figma Compact)
- `30037:633` → `./screenshots/with-checkbox-group.png`
- `30037:641` → `./screenshots/with-radiobutton-group-critical.png` (also shows ValidationMessage)

## Open questions & gaps

None — all resolved. Field's SPEC was updated in the same session to add the matching Tag slot on `Label`.

## Documentation text (verbatim from Figma)

Component description on the `Fieldset` set (`31845:217`):

> Brukes for å lage en radio button group eller checkbox group.

Inline note between the Standard and Compact size examples:

> Size — The size property only effects the legend (label) size.

Icon note on `failed-filled` (`31679:21547`), inherited from the Field SPEC:

> Kun for bruk i inline message.
> failed, removed, failure, error

The documentation heading at the top of the Fieldset page (`30037:619`) contained unrelated placeholder lorem text about file-naming collisions in a shared folder — not real component documentation. Flagged in Open Questions.
