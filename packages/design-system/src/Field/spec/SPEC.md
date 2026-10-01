# Field — Spec

**Figma:** [TextField](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26132-522&m=dev)
**Component folder:** `packages/design-system/src/Field/`
**Replaces:** `none`
**Last synced:** 2026-10-01

## Overview

Compound wrapper that ties a form control together with its label, helper text, and validation message so they render, associate, and share state as one unit.
Reach for it whenever an input needs any of those three — for a bare, uncomposed input, use `<Input>` directly.

> **Internal use only.** This SPEC scopes the wrapper, `Label`, `Description`, and `ValidationMessage` sub-components. The `<Input>` primitive (folder already carved out at `packages/design-system/src/Input/`) is a separate SPEC — Field composes with it via context and does not re-spec its box/border/focus styling. If Field is used with a different input primitive later (`Textarea`, `Select`, etc.), those primitives read the same context.

## Variant axes

| Axis   | Values               | Default | Figma label mapping | Notes                                                                                              |
| ------ | -------------------- | ------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| `size` | small, medium, large | medium  | 1:1                 | Controls label typography scale + input height. Cascades to the child input primitive via context. |

No `variant` axis — Field has one visual treatment.

## Interaction states

Every state below appears in Figma as `state=X`. Field itself doesn't render most of them directly — hover, focus, active belong to the child Input's box — but Field owns the props that trigger the visual grouping (`disabled`, `readOnly`, `invalid`) and coordinates presentation across the sub-components.

- **default** — baseline. Label + optional Description above the input; ValidationMessage absent.
- **hover** — driven by pointer over the Input box; no Field-level change.
- **focus (Active)** — driven by keyboard focus on the input; no Field-level change.
- **critical** — a `<ValidationMessage>` is present. ValidationMessage renders below the input with a `failed-filled` icon and critical text colour; `aria-invalid` propagates to Input. No separate `invalid` prop: `aria-invalid` without a visible, screen-reader-reachable explanation fails WCAG 3.3.1 (Error Identification), so the invalid state is bound to the message rather than exposed as an independent toggle.
- **readonly** — `readOnly=true`. Adds a `locked` icon before the label text; passes `readOnly` to Input.
- **disabled** — `disabled=true`. Label + Description text switch to `color/text/disabled`; passes `disabled` to Input.

## Slots

Sub-components are the slots. Order in the JSX is flexible in principle, but the intended visual order (top-to-bottom) is Label → Description → Input → ValidationMessage. Rendered visual order is enforced by Field's own layout regardless of JSX order.

| Slot                | Content                                                  | Constraint                                                                                                                                                          |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Label`             | Label text                                               | Required for a labelled field. Wraps in `<label htmlFor={inputId}>`.                                                                                                |
| `Description`       | Helper text                                              | Optional. Wired via `aria-describedby` on the child Input.                                                                                                          |
| Input control       | Native `<input>` or SD3 `<Input>` (on a separate branch) | Required. Field generates the id and propagates state (`disabled`, `readOnly`, `aria-invalid`, `aria-describedby`). Storybook examples use plain `<input>` for now. |
| `ValidationMessage` | Validation / error text                                  | Optional. Presence sets `aria-invalid` on Input and appends id to `aria-describedby`.                                                                               |

## Internal composition

Two conditional internal parts, both rendered by Field's own sub-components (not consumer content):

| Internal part                   | Rendered when                               | Notes                                                                                                        |
| ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Lock icon inside `Label`        | `Field.readOnly === true`                   | Precedes label text, `space/component/200` gap. Aria-hidden — `readOnly` on Input already conveys the state. |
| Icon inside `ValidationMessage` | Always (whenever ValidationMessage renders) | `failed-filled` icon at 18×18, before the text, `space/component/100` gap.                                   |

## Icons used

### Slot icons (consumer supplies)

None. Field's sub-components do not accept consumer-supplied icons.

### Internal icons (component renders)

| Icon name       | Where it appears                                   | Notes                                                                                          |
| --------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `locked`        | Prefix inside `Label` when `readOnly=true`         | Rendered at 22×22 in Figma Large — no size token was bound; see Open Questions.                |
| `failed-filled` | Prefix inside `ValidationMessage` (always present) | Rendered at 18×18. Figma component `31679:21547` — doc note _"Kun for bruk i inline message."_ |

## Props / API (proposal)

Consumer-facing surface. One interface per sub-component. Types are framework-neutral — the implementation adds pass-through HTML attributes, refs, and composition patterns (`asChild`, `forwardRef`) as it sees fit.

```ts
export interface FieldProps {
  /** Visual size. Controls label typography and input height across all sub-components. */
  size?: "small" | "medium" | "large";
  /** Disables the field. Propagates as `disabled` on the child input and greys Label + Description. */
  disabled?: boolean;
  /** Marks the field as read-only. Adds a lock icon before the label and passes `readOnly` to the child input. */
  readOnly?: boolean;
  /** Sub-components: Label, Description, Input, ValidationMessage — order-flexible. */
  children: Content;
}

export interface LabelProps {
  /** Label text. */
  children: Content;
}

export interface DescriptionProps {
  /** Helper text describing the field's expected input. */
  children: Content;
}

export interface ValidationMessageProps {
  /** Validation or error text shown below the input. */
  children: Content;
}
```

Exported shape:

```ts
export { Field, Label, Description, ValidationMessage };
// Compound access: Field.Description is an alias for Description.
```

Note: `Description` is exported under `Field.Description` in addition to being a standalone export, matching the user's target API. `Label` and `ValidationMessage` are standalone exports only (no `Field.Label`, `Field.ValidationMessage`) — they read naturally at the top level and the compound namespace adds no value.

## Accessibility

- **Semantic elements:**
  - `Field` — `<div>`, no role (the label/input association carries semantics).
  - `Label` — `<label htmlFor={inputId}>`.
  - `Description` — `<span>` (or `<p>`), stable id.
  - `ValidationMessage` — `<span>` (or `<p>`) with `role="alert"` for immediate announcement of validation changes; stable id.
- **Keyboard:** No custom key handling at the Field level. All interaction goes through the child input's native behaviour.
- **Screen reader / ARIA:**
  - Field generates a unique id and wires `Label.htmlFor` = `Input.id`.
  - `Input.aria-describedby` combines Description's id and ValidationMessage's id when they render; omitted otherwise.
  - `Input.aria-invalid="true"` when a `<ValidationMessage>` child is present (derived, not consumer-passed — see Interaction states for the WCAG reasoning).
  - `Input.readOnly` and `Input.disabled` are set via context, not consumer-passed.
  - Internal `locked` and `failed-filled` icons are `aria-hidden="true"` — the state is already conveyed by `readOnly` / `aria-invalid` and the accompanying text.
- **Focus:** Focus lives on the child Input; Field itself is not focusable. The focus ring is Input's concern.
- **WAI-ARIA pattern:** No custom pattern — this follows the plain HTML label ↔ input model.

## Design tokens

Record what Figma binds on the composed frame across the sampled sub-frames (Default/Large `26132:607`, Critical/Large `26132:574`, ReadOnly/Large `27437:4255`, Disabled/Large `31035:1500`, Active/Large `27529:3061`). Merged into a single table.

### Figma-bound tokens

| Figma token                            | Current value | CSS property | Applies to                                                                                   |
| -------------------------------------- | ------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `color/text/primary`                   | `#0a0132`     | color        | Label text (default, hover, active, critical, readonly)                                      |
| `color/text/secondary`                 | `#595959`     | color        | Description text                                                                             |
| `color/text/critical`                  | `#b60203`     | color        | ValidationMessage text                                                                       |
| `color/text/disabled`                  | `#959595`     | color        | Label + Description text (disabled)                                                          |
| `icon/primary`                         | `#0a0132`     | color / fill | Locked icon (readonly)                                                                       |
| `color/support/critical/strong`        | `#b60203`     | color        | `failed-filled` icon inside ValidationMessage                                                |
| `space/component/100`                  | `4px`         | gap          | Label → Description; icon → text inside ValidationMessage                                    |
| `space/component/200`                  | `8px`         | gap          | Wrapper vertical gap (Description → Input, Input → ValidationMessage); Label → lock icon gap |
| `typography/size/text/label-lg`        | `18`          | font-size    | Label (size=large)                                                                           |
| `typography/line-height/text/label-lg` | `24`          | line-height  | Label (size=large)                                                                           |
| `typography/size/text/label`           | `16`          | font-size    | Label (size=medium)                                                                          |
| `typography/line-height/text/label`    | `24`          | line-height  | Label (size=medium)                                                                          |
| `typography/size/text/helper`          | `14`          | font-size    | Description, ValidationMessage                                                               |
| `typography/line-height/text/helper`   | `16`          | line-height  | Description, ValidationMessage                                                               |
| `typography/weight/semibold`           | `600`         | font-weight  | Label                                                                                        |
| `typography/weight/regular`            | `400`         | font-weight  | Description, ValidationMessage                                                               |

Not listed here: tokens that bind on the Input box itself (borders, background, focus outline, input padding, input typography). Those belong to the Input SPEC; the values captured during subagent extraction are `color/surface/default-1`, `color/surface/default-2`, `color/background/default`, `color/support/critical/subtle`, `color/border/strong`, `color/border/disabled`, `color/interaction/critical/default`, `focus/border`, `spacing/border/radius/sm`, `spacing/border/weight/xs`, `spacing/border/weight/md`, `layout/border-weight/thin`, `layout/radius/02`, `space/component/300`, `typography/size/text/body-lg`, `typography/line-height/text/body-lg` — recorded here so they aren't lost when the Input SPEC is authored.

### Hardcoded values

Values Figma is not binding to a variable, verified against `packages/design-tokens/src/figma/**/*.tokens.json`.

| Raw value  | CSS property   | Applies to                                                                                                                                                    |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `22px`     | width, height  | Locked icon (readonly), size=large — unbound; other sizes not sampled                                                                                         |
| `18px`     | width, height  | `failed-filled` icon inside ValidationMessage — unbound                                                                                                       |
| `"Haffer"` | font-family    | All text — no `font-family` variable exists in the token catalog; likely inherited from a global CSS baseline in the design system. Verify at implement time. |
| `0`        | letter-spacing | All text — no `letter-spacing` variable exists                                                                                                                |

### Dimension-affecting asymmetries

None affecting Field's own layout. The Input box has a border-weight difference across states (default = 1px, hover/active = 2px) — captured in the Input SPEC, not here.

## Reference screenshots

Drop PNGs into `./screenshots/` from these Figma frames before running `review-component-spec`:

- `26132:607` → `./screenshots/size-large-default.png`
- `26132:615` → `./screenshots/size-medium-default.png`
- `26132:623` → `./screenshots/size-small-default.png`
- `26132:574` → `./screenshots/state-critical.png`
- `27437:4255` → `./screenshots/state-readonly.png`
- `31035:1500` → `./screenshots/state-disabled.png`
- `27529:3061` → `./screenshots/state-active.png`

## Open questions & gaps

1. **Field height is unbound in Figma.** Small = 32, Medium = 40, Large = 48. These values exist as `space/component/800`/`1000`/`1200` in `size-static/Mode 1.tokens.json` (also as `space/layout/*` in the responsive namespace), but Figma isn't binding them to the Input box's `min-height`. Belongs to Input SPEC, but flagging here since the size cascade originates from Field. Tokens owner: promote to a bound variable or accept the hardcoded ladder?
2. **Duplicate hexes across semantically-distinct tokens.** `color/border/strong` and `color/border/disabled` both = `#959595`. `color/surface/default-2` and `color/background/default` both = `#f1f1f1`. `color/text/critical`, `color/support/critical/strong`, and `color/interaction/critical/default` all = `#b60203`. Confirm this is intentional (semantic separation so future themes can diverge them) rather than an oversight.
3. **Focus overlay uses asymmetric inset.** Figma renders the Active-state focus ring as an absolutely-positioned overlay with inset `-3px -2.8px -3px -3.2px`. Belongs to Input SPEC; noted here so it isn't lost. Likely rendering artifact from Figma's stroke geometry, not intentional.
4. **Icon sizes on internal icons are unbound.** Locked icon at 22×22 (readonly, Large), `failed-filled` at 18×18 (critical). No `icon/size/*` variable was surfaced. Are icon sizes meant to be bound tokens, or is 1em sizing (via the `.sds-icon` `font-size` pattern) the intended approach?
5. **Sibling audit couldn't complete.** Whether `Textarea`, `Select`, `Combobox`, `NumberField` sit on the same Figma page and are meant to compose inside `<Field>` was not verified — the metadata tool couldn't walk up from the selected node. If they do, Field's context and Label/Description/ValidationMessage sub-components should carry over unchanged.
6. **Input primitive is on a separate branch.** The SD3 `<Input>` component is being built elsewhere and is not a blocker for this SPEC. Storybook examples for Field will use a plain HTML `<input>` in the meantime; consumers will eventually swap in `<Input>`, which is expected to read Field's context (id, `disabled`, `readOnly`, `aria-invalid`, `aria-describedby`) via the same context Field exposes.

## Documentation text (verbatim from Figma)

The only inline documentation surfaced from any sub-frame was on the `failed-filled` icon component (`31679:21547`):

> Kun for bruk i inline message.
> failed, removed, failure, error

No documentation frames were discovered near the TextField frame itself (the sibling audit was blocked — see Open Questions #5).
