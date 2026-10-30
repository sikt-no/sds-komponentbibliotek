# ToggleGroup — Spec

**Figma:** [SDS Komponenter — ToggleGroup](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26666-8280&m=dev)
**Component folder:** `packages/design-system/src/ToggleGroup/`
**Replaces:** none
**Last synced:** 2026-10-29

## Overview

A pill-shaped bar of mutually exclusive options. The consumer passes `ToggleGroup.Item`s; one is selected at a time and swapping selection is a single click or arrow-key press.

Reach for it when a user picks exactly one of a small set of related choices that affect the same surface — e.g. switching between Innboks / Utkast / Arkiv / Sendt. For a longer list, use a Select. For independent on/off toggles, use a Checkbox or Switch.

## Variant axes

| Axis | Values                     | Default  | Figma label mapping | Notes                                                                                                                                                                                                  |
| ---- | -------------------------- | -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| size | `small`, `medium`, `large` | `medium` |                     | Only `large` is drawn in Figma; `medium` and `small` extrapolate from Button's size axis. The group owns the `size` prop and cascades it to each item (e.g. via context) so the consumer sets it once. |

Figma also exposes a top-level variant toggling between **Text** items (label ± icon) and **Icon-only** items. This is content-derived — the consumer decides per `ToggleGroup.Item` whether to pass text, icon, or both — so it is not a prop on `ToggleGroup`. All items in a given group are expected to share the same shape.

## Interaction states

Each item inherits the full state matrix of a Button (unselected = tertiary visuals, selected = primary visuals). States below describe what shows on an individual item.

- **default (unselected)** — tertiary Button visuals: transparent fill, dark text/icon.
- **selected** — primary Button visuals: filled background (`color-button/primary/default`), white text/icon.
- **hover** — unselected items swap to tertiary hover (subtle fill). Selected item swaps to primary hover.
- **pressed / active** — tertiary or primary pressed tokens respectively.
- **focus-visible** — the Button focus ring (2px pill, `inset: -2px`, `color/border/focus`) renders on the focused item. Independent of selection.
- **disabled (item)** — disabled Button visuals: `color/interaction/disabled/default` background, `color/text/disabled` text. The underlying radio input is also `disabled`.
- **disabled (group)** — cascades to every item.

The container itself has only one visual state: the 1px pill border is always present and does not change with hover/focus of its items.

## Slots

| Slot                          | Content                           | Constraint                                                                                                     |
| ----------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ToggleGroup` (children)      | One or more `<ToggleGroup.Item>`s | At least two items for the choice to be meaningful. All items should share the same shape (text or icon-only). |
| `ToggleGroup.Item` (children) | Label text and/or a single icon   | Required. If only an icon is passed, the item **must** also carry `aria-label`.                                |

## Internal composition

| Internal part        | Rendered when                    | Notes                                                                                                                    |
| -------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Hidden radio input   | Always, one per item             | `<input type="radio" name={groupName}>` sits inside each item's `<label>` and provides native keyboard + form semantics. |
| Visual Button layer  | Always, one per item             | The item's `<label>` is styled to look like a `Button` — tertiary when the radio is unchecked, primary when checked.     |
| Focus ring (on item) | Item's radio is `:focus-visible` | Reuses Button's focus-ring treatment; appears around the whole item regardless of selection state.                       |

## Icons used

### Slot icons (consumer supplies)

| Slot                            | Example icon in Figma | Notes                                                                                                                            |
| ------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `ToggleGroup.Item` (icon child) | `confirm`, `save`     | Consumer supplies any icon. Icon size follows the inherited Button `size=large` (24px). Position matches Button DOM-order rules. |

### Internal icons (component renders)

None. The checkmark shown in the Figma example is a consumer-supplied icon in the first item, not something `ToggleGroup` renders on its own.

## Props / API (proposal)

Consumer-facing surface. Types are described in framework-neutral terms — the implementation maps slots to the target framework's node type, adds pass-through attributes, refs, and composition patterns as it sees fit.

A `ToggleGroup` wraps a set of `ToggleGroup.Item`s. Each item represents one radio option; the group owns the shared `name` and the selection state.

```ts
export interface ToggleGroupProps {
  /** The `name` attribute shared by all underlying radio inputs. Required so native radio keyboard navigation and form submission work. */
  name: string;
  /** Item height. Cascades to every `ToggleGroup.Item` (same visual scale as Button). */
  size?: "small" | "medium" | "large";
  /** Controlled selected value. Must match the `value` of exactly one `ToggleGroup.Item`. */
  value?: string;
  /** Uncontrolled initial selection. */
  defaultValue?: string;
  /** Fired when the selected value changes. */
  onChange?: (value: string) => void;
  /** Accessible name for the group. Required. */
  "aria-label": string;
  /** Disables every item in the group. Individual items can still be disabled on their own. */
  disabled?: boolean;
  /** The `ToggleGroup.Item`s. */
  children?: Content;
}

export interface ToggleGroupItemProps {
  /** The value this item represents in the group. Must be unique within the group. */
  value: string;
  /** Label text and/or a single icon. Icon-only items must also set `aria-label`. */
  children?: Content;
  /** Disables this one item. */
  disabled?: boolean;
  /** Required for icon-only items; otherwise optional. */
  "aria-label"?: string;
}
```

## Accessibility

- **Semantic element:** `<fieldset>` for the group. Each item is a `<label>` wrapping a native `<input type="radio">`.
- **Keyboard:** native browser radio-group behavior — Tab enters the group (lands on the checked radio, or the first if none checked), arrow keys move both focus and selection, Space is a no-op on an already-checked radio. No `focusgroup` attribute and no custom key handling are needed for the single-select case.
- **Screen reader / ARIA:** group gets its accessible name from the required `aria-label` on the fieldset. Each radio inherits its label from the surrounding `<label>` element's text content; icon-only items **must** add `aria-label` since there is no text content. Visual Button styling is purely CSS — the radio remains the perceivable element.
- **Focus:** must be visibly indicated on the item whose radio is focused. Implementation reuses the Button focus ring. The native radio input itself is visually hidden (via `clip-path`/sr-only, not `display:none`, so it stays operable).
- **WAI-ARIA pattern:** [Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) — satisfied natively by the browser; the `role="radiogroup"` is implicit via `<fieldset>` + grouped radios.

## Design tokens

Record what Figma binds. Whether these tokens exist in the SD3 CSS catalog, and what to do about hardcoded values, is `implement-component-spec`'s call.

### Figma-bound tokens

| Figma token                           | Current value | CSS property     | Applies to                |
| ------------------------------------- | ------------- | ---------------- | ------------------------- |
| `color/border/strong`                 | `#959595`     | border-color     | container                 |
| `layout/border-weight/thin`           | `1px`         | border-width     | container                 |
| `layout/radius/16`                    | `999px`       | border-radius    | container (pill)          |
| `space/component/100`                 | `4px`         | padding          | container                 |
| `space/component/050`                 | `2px`         | gap              | container (between items) |
| `spacing/border/radius/full`          | `999px`       | border-radius    | each item (pill)          |
| `space/component/400`                 | `16px`        | padding-inline   | each item                 |
| `space/component/200`                 | `8px`         | padding-block    | each item                 |
| `color-button/primary/default`        | `#7351fb`     | background-color | item (selected)           |
| `color-button/primary/text`           | `#ffffff`     | color            | item label (selected)     |
| `color-button/primary/icon`           | `#ffffff`     | color (icon)     | item icon (selected)      |
| `color-button/tertiary/default`       | `#00000000`   | background-color | item (unselected)         |
| `color-button/tertiary/text`          | `#0a0132`     | color            | item label (unselected)   |
| `color-button/tertiary/icon`          | `#0a0132`     | color (icon)     | item icon (unselected)    |
| `typography/size/text/body-lg`        | `18px`        | font-size        | item label                |
| `typography/line-height/text/body-lg` | `28px`        | line-height      | item label                |
| `typography/weight/regular`           | `400`         | font-weight      | item label                |

All item-level tokens are inherited from Button (`main` theme) — the ToggleGroup does not define its own color tokens. Hover/pressed/focus/disabled state tokens all come through Button and are not re-listed here.

### Dimension-affecting asymmetries

N/A — all items use the same token set (Button `tertiary` by default, Button `primary` when selected). Both tertiary and primary have `border-width: 0`, so the selected ↔ unselected swap does not change item dimensions.

## Reference screenshots

Capture from Figma and save to `./screenshots/` — reviewer diffs these against Storybook.

- `variant-text.png` — node `26666:7814` (Text variant with checkmark icons; first item selected)
- `variant-icon.png` — node `26666:8279` (Icon-only variant; first item selected)

## Open questions & gaps

- ~~**Multi-select mode?**~~ **Resolved 2026-10-29:** single-select only in v1 (radios). A multi-select mode would need roving-tabindex orchestration or a `focusgroup` polyfill; revisit in v2 only if a concrete use case appears.
- ~~**Size variants.**~~ **Resolved 2026-10-29:** expose `small` / `medium` / `large` on the group. The group owns the prop and cascades it to items (e.g. via React context) so items inherit it automatically. `medium` and `small` are extrapolated from Button — ask the designer to validate before shipping.
- ~~**Hover on the selected item.**~~ **Resolved 2026-10-29:** inherit Button's primary hover (`#643ffa`). No special-casing for the selected item — matches Button behavior exactly.
- ~~**Legend vs. `aria-label`.**~~ **Resolved 2026-10-29:** `aria-label` only (invisible, required). No visible group heading; consumer renders their own heading above the group if they want one. No `<legend>` plumbing in v1.
- ~~**"Fill" sizing.**~~ **Resolved 2026-10-29:** no prop. Items shrink-wrap by default; a consumer who wants equal-width items styles the item class themselves (`flex: 1`). Keep the surface tight.
- ~~**Disabled-group visual.**~~ **Resolved 2026-10-29:** only the items dim (via Button's disabled tokens). Container border stays `color/border/strong`. Not drawn in Figma — flag for designer review during the next sync.

## Documentation text (verbatim from Figma)

> **variant=Text** — Knappene er satt til **Hug** for at størrelsen på knappen skal tilpasse seg teksten. Hvis du trenger å gjøre den bredere så er det anbefalt å først endre teksten i knappene, deretter sette bredden på knappene til **Fill.**
