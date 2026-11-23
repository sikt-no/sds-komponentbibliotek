# Tabs — Spec

**Figma:** [SDS Komponenter → Tabs](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26637-5431)
**Component folder:** `packages/design-system/src/Tabs/`
**Replaces:** `@sikt/sds-tabs`
**Last synced:** 2026-11-02

## Overview

A horizontal tab list that lets the user switch between related content panels within the same context.
Reach for Tabs when the alternatives are peers of the surrounding page and the user needs to compare or browse between them without navigating away; prefer in-page navigation or a side nav when the sections are hierarchically distinct.

## Variant axes

Tabs ships without a visual-variant, size, or orientation axis in v1. The design intentionally locks a single appearance (body-lg label, 48px tab height, horizontal underline style).

| Axis   | Values | Default | Figma label mapping | Notes                       |
| ------ | ------ | ------- | ------------------- | --------------------------- |
| (none) | —      | —       | —                   | Single appearance per Figma |

Per-tab symbol variants in `.TabsAtom` (consumed internally, not exposed as props):

| Axis       | Values                 | Default | Notes                                                |
| ---------- | ---------------------- | ------- | ---------------------------------------------------- |
| `selected` | True, False            | —       | Reflects the active tab; controlled by Tabs' `value` |
| `state`    | Default, Hover, Active | Default | Interaction state, not a consumer prop               |

## Interaction states

Enumerated at the Tab (atom) level. Tabs itself has no interaction state separate from its tabs.

- **Default (unselected):** 2px bottom border in `color/border/strong`, top corners rounded 4px.
- **Default (selected):** 4px bottom border in `color/interaction/primary/default`, top corners rounded 4px.
- **Hover (unselected):** background `interaction/neutral/transparent/hover`, 2px bottom border unchanged.
- **Hover (selected):** background `interaction/neutral/transparent/hover`, 4px bottom border shifts to `color/interaction/primary/hover`.
- **Active (unselected):** background `interaction/neutral/transparent/pressed`, 2px bottom border unchanged.
- **Active (selected):** background `interaction/neutral/transparent/pressed`, 4px bottom border shifts to `color/interaction/primary/pressed`.
- **Focus-visible:** 2px outline in `focus/border` offset outside the tab (Figma inset `-2 -3 -7 -2` on selected, `-2 -3 -5 -2` on unselected — different because the selected tab's bottom border is 2px thicker). Shown on both selected and unselected tabs.

No disabled, loading, or error state. Confirmed by the designer — SD3 Tabs does not support disabling individual tabs.

## Slots

| Slot    | Content                             | Constraint                                           |
| ------- | ----------------------------------- | ---------------------------------------------------- |
| `label` | Tab label text                      | Required                                             |
| `icon`  | Leading icon (consumer-supplied)    | Optional                                             |
| `slot`  | Trailing content (Badge, Tag, etc.) | Optional — generic content; Figma example uses Badge |

Tabs itself takes `children` which is the ordered list of `Tab` elements (and, by convention, their associated panel content — see Props proposal).

## Internal composition

| Internal part   | Rendered when                               | Notes                                                                                                      |
| --------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Tab list        | Always                                      | Horizontal flex row of Tab buttons; container paints the bottom hairline                                   |
| Tab atom        | One per `Tab` child                         | Button with icon slot, label, and trailing slot                                                            |
| Focus indicator | Tab receives keyboard focus (focus-visible) | 2px outline in `focus/border`, offset outside the tab                                                      |
| Tab panel       | Associated with the currently selected tab  | ARIA requires `role="tabpanel"`; the panel container is not drawn in Figma — API shape is an open question |

## Icons used

### Slot icons (consumer supplies)

| Slot   | Example icon in Figma    | Notes                           |
| ------ | ------------------------ | ------------------------------- |
| `icon` | Icon placeholder (24×24) | Consumer supplies any 24px icon |

### Internal icons (component renders)

None.

## Props / API (proposal)

Consumer-facing surface. Framework-neutral types; the implementer picks `ReactNode`/`VNode` etc. for `Content` and decides on pass-through attributes, refs, and composition patterns.

```ts
export interface TabsProps {
  /** Controlled selected tab value. */
  value?: string;
  /** Uncontrolled default selected tab value. */
  defaultValue?: string;
  /** Called when the selected tab changes. */
  onValueChange?(value: string): void;
  /** Tabs and (if composed inline) their panels. */
  children: Content;
}

export interface TabProps {
  /** Identifier matching the associated panel's `value`. */
  value: string;
  /** Tab label text. */
  label: string;
  /** Optional leading icon. */
  icon?: Icon;
  /** Optional trailing slot (Badge, Tag, etc.). */
  slot?: Content;
}

export interface TabPanelProps {
  /** Identifier matching the owning Tab's `value`. */
  value: string;
  /** Panel content. */
  children: Content;
}
```

Rationale:

- `value`/`defaultValue`/`onValueChange` matches the controlled/uncontrolled pattern already used elsewhere in SD3 (see Checkbox / ToggleGroup).
- Manual activation is baked into the implementation; no `activationMode` prop. Confirmed by the designer.
- Trailing `slot` is a generic content region; Figma annotation hints at Badge/Tag but the spec does not constrain the type.
- No `orientation` or `size` prop — single horizontal body-lg appearance.
- Panel composition pattern (`<Tabs>…<Tab/>…<TabPanel/>…</Tabs>` vs. separate `<TabList>`/`<TabPanel>` sections vs. render-prop) is an open question — Figma does not draw the panel container.

## Accessibility

- **Semantic element:** container `<div role="tablist" aria-orientation="horizontal">`; each tab is a `<button role="tab">`; each panel is a `<div role="tabpanel">`.
- **Keyboard:** manual activation. ArrowLeft / ArrowRight move focus between tabs (wrap at ends); Home / End focus the first / last tab; Enter and Space activate the currently focused tab. Tab moves focus from the active tab to its panel; Shift+Tab reverses.
- **Screen reader / ARIA:**
  - Each `<button role="tab">` sets `aria-selected="true"` on the active tab (`false` otherwise), `aria-controls="<panel-id>"`, and `id` matching the panel's `aria-labelledby`.
  - Each `<div role="tabpanel">` sets `aria-labelledby="<tab-id>"`, `id="<panel-id>"`, and `tabindex="0"` so the panel itself can receive focus for scroll regions.
  - Inactive tabs set `tabindex="-1"`; only the active tab is in the Tab sequence.
  - `aria-orientation="horizontal"` on the tablist. The tablist should have an accessible name via `aria-label` or `aria-labelledby` when the surrounding context does not already name it.
- **Focus:** must be visibly indicated when a tab receives keyboard focus. Implementation defines the ring (2px outline, `focus/border`, offset outside the tab per Figma).
- **WAI-ARIA pattern:** [Tabs with Manual Activation](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/).

## Design tokens

### Figma-bound tokens

| Figma token                               | Current value | CSS property        | Applies to                                 |
| ----------------------------------------- | ------------- | ------------------- | ------------------------------------------ |
| `color/text/primary`                      | `#0a0132`     | color               | Tab label (all states)                     |
| `typography/size/text/body-lg`            | `18px`        | font-size           | Tab label                                  |
| `typography/weight/regular`               | 400 (Regular) | font-weight         | Tab label                                  |
| `typography/line-height/text/body-lg`     | `28px`        | line-height         | Tab label                                  |
| `space/component/200`                     | `8px`         | gap                 | Space between icon / label / trailing slot |
| `space/component/300`                     | `12px`        | padding             | Tab padding (all sides)                    |
| `layout/border-weight/regular`            | `2px`         | border-bottom-width | Unselected tab + Tabs container hairline   |
| `layout/border-weight/bold`               | `4px`         | border-bottom-width | Selected tab                               |
| `color/border/strong`                     | `#959595`     | border-color        | Unselected tab bottom + Tabs hairline      |
| `color/interaction/primary/default`       | `#7351fb`     | border-color        | Selected tab bottom, state=default         |
| `color/interaction/primary/hover`         | `#643ffa`     | border-color        | Selected tab bottom, state=hover           |
| `color/interaction/primary/pressed`       | `#5531e8`     | border-color        | Selected tab bottom, state=active          |
| `interaction/neutral/transparent/default` | `#00000000`   | background-color    | Tab background, state=default              |
| `interaction/neutral/transparent/hover`   | `#d6d6d6`     | background-color    | Tab background, state=hover                |
| `interaction/neutral/transparent/pressed` | `#cccccc`     | background-color    | Tab background, state=active               |
| `focus/border`                            | `#004FCF`     | outline-color       | Focus ring on any focused tab              |

### Hardcoded values

Values Figma does not bind to a variable and that the hidden-token check ruled out. Flagged in Open Questions for the tokens owner.

| Raw value | CSS property                        | Applies to                                       |
| --------- | ----------------------------------- | ------------------------------------------------ |
| `4px`     | border-radius (top-left, top-right) | Tab default state only (removed in hover/active) |
| `48px`    | height                              | Tab (fixed height)                               |
| `24px`    | width / height                      | Leading icon placeholder                         |

### Dimension-affecting asymmetries

| Property              | Variants that bind it      | Variants that DON'T             | Intent (consumer-visible size difference? y/n)                                                                                                                                                                                                                                                                  |
| --------------------- | -------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `border-bottom-width` | selected tab (`bold`, 4px) | unselected tab (`regular`, 2px) | y — the thicker underline is the primary selected-state cue. Fixed 48px height absorbs the delta, but the label shifts 2px upward when the border thickens. Implementer should decide whether to reserve a transparent 2px extra on unselected tabs to keep the label baseline stable across selection changes. |

## Reference screenshots

Capture these from Figma into `packages/design-system/src/Tabs/spec/screenshots/` before running [[review-component-spec]].

- `tabs-row.png` — the Tabs frame (26637:5431) showing one selected tab among three unselected
- `tab-selected-states.png` — top row of `.TabsAtom` (1095:7969): selected × {Default, Hover, Active}
- `tab-unselected-states.png` — bottom row of `.TabsAtom` (1095:7969): unselected × {Default, Hover, Active}
- `tab-focus.png` — any focus-visible variant from `.TabsAtom` showing the 2px outside ring

## Open questions & gaps

- **Panel API shape.** Figma does not draw the panel container. Options: inline composition (`<Tabs><Tab/><TabPanel/></Tabs>`), split lists (`<TabList>` + `<TabPanels>`), or a flat items-array API. [[implement-component-spec]] to decide; `Tabs` + `Tab` + `TabPanel` is the current proposal.
- **Hardcoded dimensions.** `border-radius 4px`, `height 48px`, and `icon 24px` are literals in Figma, not bound to tokens. The 4px likely belongs on a `--sd3-radius-small` type token (if it exists), 48px to a tab-specific size token, 24px to an icon-size token. Tokens owner to decide whether to promote.
- **No documentation frame captured.** The current Figma selection contains only the `Tabs` composition and `.TabsAtom` symbols; no explanatory text was pulled. If the Tabs page has docs text (purpose, do/don't guidance, examples), re-sync to capture it under "Documentation text".
- **Label-shift under selection change.** See the asymmetries table above. Implementer picks whether to reserve 2px of transparent border on unselected tabs to keep the label baseline stable, or accept the shift as the intended selected-state cue.
- **Animated underline via CSS Anchor Positioning (progressive enhancement).** Figma specifies a static per-tab underline, which is the baseline. CSS Anchor Positioning (`anchor-name` on the active tab, a `::before` on the tablist tethered via `position-anchor`, transition on `inset` inside `@media (prefers-reduced-motion: no-preference)`) can smoothly slide the underline between tabs on selection change. Browser support is Limited availability (Safari 27 at time of writing; not in Chrome/Edge/Firefox) — guard with `@supports (position-anchor: auto)` so the static border is the fallback. Implementer decides whether to adopt now or defer.

## Documentation text (verbatim from Figma)

_Not captured — the current Figma selection did not include a documentation frame._
