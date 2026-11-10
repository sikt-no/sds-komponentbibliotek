# Pagination — Spec

**Figma:** [Pagination](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26150-1262&m=dev), [.PaginationAtom](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26150-945&m=dev)
**Component folder:** `packages/design-system/src/Pagination/`
**Replaces:** `@sikt/sds-pagination`
**Last synced:** 2026-11-03

## Overview

Navigation control for moving between pages of a paged collection. Renders a numbered page list anchored to the first and last page with ellipses for the collapsed middle, plus previous/next controls that wrap around at the ends.

Reach for it when a result set is split across pages the user navigates one at a time; for infinite loading, cursor-based "load more", or step-based wizards use a different pattern.

## Variant axes

| Axis | Values                | Default    | Figma label mapping             | Notes                                                                                                                                 |
| ---- | --------------------- | ---------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| size | `standard`, `compact` | `standard` | `size=Standard`, `size=Compact` | `standard` uses 48 px page atoms with text + icon previous/next; `compact` uses 40 px page atoms with icon-only chevron previous/next |

## Interaction states

Applies to each page button (atom). Previous/next controls inherit their states from the underlying Button / ButtonIcon.

- **Default** — text in `color/text/primary`, transparent background.
- **Hover** — background fades to `color/interaction/neutral/hover` (neutral grey). Text unchanged.
- **Pressed** — background darkens to `color/interaction/neutral/pressed`.
- **Focus-visible** — 2 px outline offset outside the atom (full pill shape). Rendered via a focus overlay inset `-2 px` on all sides.
- **Selected** (`aria-current="page"`) — background set to `color/interaction/subtle/default` (lavender). Non-interactive — hover/pressed suppressed; the atom conveys "you are here".
- **Disabled** — previous control at `currentIndex === 0`; next control at `currentIndex === count - 1`. Non-interactive, no hover/pressed, no focus ring in that direction.
- **Spacer (ellipsis)** — `…` glyph inside a non-interactive 40 / 48 px slot; no hover/pressed/focus.

## Slots

The primary API is monolithic: you pass `count`, `currentIndex`, `onPageChange` and the component renders the full row itself. There are no consumer-facing slots in that mode.

A compound escape hatch is also exported for custom layouts (e.g. rendering pages as `<a>` links instead of buttons). In that mode, the consumer composes:

| Compound part         | Content                                                                                                                       | Constraint                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pagination`          | A single `Pagination.List`                                                                                                    | Renders the `<nav>` landmark. `aria-label` is required.                                                                                                                                                                    |
| `Pagination.List`     | Any number of `Pagination.Item`s in display order                                                                             | Renders the `<ol>`. No other children.                                                                                                                                                                                     |
| `Pagination.Item`     | One `Pagination.Button`, `Pagination.Previous`, `Pagination.Next`, or `Pagination.Ellipsis` — or empty for an ellipsis spacer | Renders an `<li>`. Both `<Pagination.Item><Pagination.Ellipsis /></Pagination.Item>` (preferred) and empty `<Pagination.Item />` render the `…` spacer.                                                                    |
| `Pagination.Ellipsis` | None                                                                                                                          | Renders the `…` glyph. Non-interactive. Preferred over an empty `Pagination.Item` for intent clarity.                                                                                                                      |
| `Pagination.Button`   | Page-number text                                                                                                              | Renders a page-atom `<button>` (48 / 40 px pill). Set `aria-current="page"` on the current page.                                                                                                                           |
| `Pagination.Previous` | Visible label text (e.g. `"Forrige"`)                                                                                         | Renders the previous control: `size=standard` → tertiary Button with `MoveToPreviousIcon` + visible label; `size=compact` → ButtonIcon with `NavigateToPreviousIcon` + the label as the accessible name (visually hidden). |
| `Pagination.Next`     | Visible label text (e.g. `"Neste"`)                                                                                           | Renders the next control: `size=standard` → tertiary Button with visible label + `MoveToNextIcon`; `size=compact` → ButtonIcon with `NavigateToNextIcon` + the label as the accessible name (visually hidden).             |

## Internal composition

In auto mode, the component renders a `<nav>` → `<ol>` with:

- A leading `<li>` holding `Pagination.Previous` — `aria-disabled` when `currentIndex === 0`.
- One `<li>` per page in the computed range (via `usePaginationRange({ count, currentIndex, limit })`), either a `Pagination.Button` with the page number or an empty `Pagination.Item` that renders the `…` spacer.
- A trailing `<li>` holding `Pagination.Next` — `aria-disabled` when `currentIndex === count - 1`.

`aria-current="page"` is set automatically on the button whose index matches `currentIndex`. The page-range math uses `usePaginationRange` under the hood; the helper stays exported for consumers who need it directly inside the compound escape hatch.

## Icons used

### Slot icons (consumer supplies)

N/A — `Pagination.Previous` / `Pagination.Next` render their own icons; `Pagination.Button` is text-only.

### Internal icons (component renders)

| Icon name                                    | Where it appears                          | Notes                                                       |
| -------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------- |
| `MoveToPreviousIcon` (`@sikt/sds-icons`)     | `Pagination.Previous`, `size=standard`    | Icon-left on the tertiary Button, before the visible label. |
| `MoveToNextIcon` (`@sikt/sds-icons`)         | `Pagination.Next`, `size=standard`        | Icon-right on the tertiary Button, after the visible label. |
| `NavigateToPreviousIcon` (`@sikt/sds-icons`) | `Pagination.Previous`, `size=compact`     | Icon-only chevron inside a ButtonIcon.                      |
| `NavigateToNextIcon` (`@sikt/sds-icons`)     | `Pagination.Next`, `size=compact`         | Icon-only chevron inside a ButtonIcon.                      |
| `…` glyph                                    | Empty `Pagination.Item` (ellipsis spacer) | Rendered as text, not an SVG icon. Non-interactive.         |

## Props / API

Primary (auto) mode. The consumer passes page state; the component renders prev/next and the page atoms with the correct ellipsis range.

```ts
export interface PaginationAutoProps {
  /** Accessible label for the <nav> landmark. Required. */
  "aria-label": string;

  /** Total number of pages. */
  count: number;

  /** Current page, 0-indexed. */
  currentIndex: number;

  /** Fired when the user activates a page / previous / next. */
  onPageChange: (index: number) => void;

  /**
   * Visual size. `standard` is the full width with text labels on
   * previous/next; `compact` is a tighter row with icon-only previous/next.
   * @default "standard"
   */
  size?: "standard" | "compact";

  /**
   * Maximum number of page atoms rendered (including the two edges). The
   * middle collapses to an ellipsis when the range exceeds this.
   * @default 7
   */
  limit?: number;

  /** @default "Forrige" */
  previousLabel?: Content;

  /** @default "Neste" */
  nextLabel?: Content;

  /** @default (index) => `Side ${index + 1}` */
  pageLabel?: (index: number) => string;
}
```

Example:

```tsx
<Pagination
  aria-label="Paginering"
  count={42}
  currentIndex={currentIndex}
  onPageChange={setCurrentIndex}
/>
```

### Compound (escape hatch)

For custom layouts (e.g. page atoms that are `<a>` links, non-numeric atoms, or items spliced into the row), the same root accepts `children` instead of `count`. In that mode the consumer owns the composition:

```ts
export interface PaginationComposedProps {
  "aria-label": string;
  size?: "standard" | "compact";
  children: Content;
}
```

```tsx
<Pagination aria-label="Paginering">
  <Pagination.List>
    <Pagination.Item>
      <Pagination.Previous onClick={goPrev} />
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Button aria-label="Side 1" aria-current="page">
        1
      </Pagination.Button>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Ellipsis />
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Button aria-label="Side 10" onClick={() => goto(9)}>
        10
      </Pagination.Button>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Next onClick={goNext} />
    </Pagination.Item>
  </Pagination.List>
</Pagination>
```

A discriminated union on `PaginationProps` makes the two modes mutually exclusive — passing `children` together with `count` is a type error, as is passing `count` without `currentIndex` / `onPageChange`.

The sub-components (`Pagination.List`, `.Item`, `.Button`, `.Previous`, `.Next`, `.Ellipsis`) are exported so compound-mode consumers can import them directly. `usePaginationRange({ count, currentIndex, limit })` is also exported so a compound-mode consumer can reuse the same range math the auto mode uses internally.

## Accessibility

- **Semantic element:** `<nav aria-label="…">` wraps an `<ol>` of `<li>` items; each item contains a `<button>`. (Keep the semantic list — screen readers announce "N items" when entering the list, which helps convey the scale of the pagination.)
- **Keyboard:**
  - `Tab` / `Shift+Tab` move focus between buttons in DOM order (previous → first → … → last → next).
  - `Enter` / `Space` activate the focused button.
  - No roving-tabindex / arrow-key navigation — each button is independently tabbable, consistent with the WAI-ARIA button pattern.
- **Screen reader / ARIA:**
  - The `<nav>` landmark name comes from `Pagination`'s `aria-label` (required).
  - Current page is marked via `aria-current="page"` on the active `Pagination.Button`.
  - Previous / next buttons get their accessible name from their visible text (`size=standard`) or from an `aria-label` on `Pagination.Button` (`size=compact`, where the button is icon-only).
  - For numbered page buttons, the consumer sets `aria-label` on each `Pagination.Button` (e.g. `"Side 3"`). The component does not synthesise it.
  - Disabled previous / next buttons use `aria-disabled="true"` (not native `disabled`) so they stay in the tab order; keyboard users can focus them and the screen reader announces them as unavailable. The component suppresses click / Enter / Space activation while `aria-disabled="true"`.
- **Focus:** must be visibly indicated when a button receives keyboard focus. Figma shows a 2 px outline offset outside the atom; implementation defines the ring token.
- **WAI-ARIA pattern:** no dedicated APG "pagination" pattern. Combines the [Navigation landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) with the standard native `<button>` pattern.

## Design tokens

Record what Figma binds. Whether these tokens exist in the SD3 CSS catalog is `implement-component-spec`'s call.

### Figma-bound tokens

| Figma token                           | Current value   | CSS property     | Applies to                                                                     |
| ------------------------------------- | --------------- | ---------------- | ------------------------------------------------------------------------------ |
| `color/text/primary`                  | `#0a0132`       | color            | all page atoms (default, hover, pressed, selected)                             |
| `color/interaction/neutral/hover`     | `#e0e0e0`       | background-color | page atom, state=hover (both sizes, unselected)                                |
| `color/interaction/neutral/pressed`   | `#d6d6d6`       | background-color | page atom, state=pressed (both sizes, unselected)                              |
| `color/interaction/subtle/default`    | `#d1cdff`       | background-color | page atom, selected (both sizes)                                               |
| `layout/radius/16`                    | `999px`         | border-radius    | all page atoms (full pill)                                                     |
| `typography/size/text/interaction-lg` | `18`            | font-size        | page atom text, size=standard                                                  |
| `typography/size/text/interaction-md` | `16`            | font-size        | page atom text, size=compact; also "collapsed" (ellipsis) atom                 |
| `typography/weight/regular`           | `Regular`       | font-weight      | all atom text                                                                  |
| `space/component/100`                 | `4px`           | gap              | between items inside the pagination row (both sizes)                           |
| `color-button/tertiary/default`       | `rgba(0,0,0,0)` | background-color | previous / next tertiary Button, size=standard                                 |
| `color-button/tertiary/text`          | `#0a0132`       | color            | previous / next tertiary Button text, size=standard                            |
| `space/component/400`                 | `16px`          | padding-inline   | previous / next tertiary Button, size=standard                                 |
| `space/component/200`                 | `8px`           | padding-block    | previous / next tertiary Button, size=standard; label-container padding-inline |
| `space/component/050`                 | `2px`           | padding-block    | label container inside tertiary Button, size=standard                          |
| `spacing/border/radius/full`          | `999px`         | border-radius    | previous / next tertiary Button, size=standard                                 |
| `typography/size/text/body-lg`        | `18px`          | font-size        | previous / next tertiary Button label, size=standard                           |
| `typography/line-height/text/body-lg` | `28px`          | line-height      | previous / next tertiary Button label, size=standard                           |

### Hidden-token values

None observed — all surfaced values resolved via `get_variable_defs`.

### Hardcoded values

Values Figma does not bind to a variable. Flagged in "Open questions" so the tokens owner can decide whether to promote.

| Raw value | CSS property  | Applies to                                         |
| --------- | ------------- | -------------------------------------------------- |
| `48px`    | width, height | page atom + collapsed/ellipsis atom, size=standard |
| `40px`    | width, height | page atom + collapsed/ellipsis atom, size=compact  |

The old `@sikt/sds-pagination` sidestepped this by sizing the button to `var(--sds-typography-fontsize-1200)` square (so font-size tokens drove the atom size). The SD3 implementation should pick an equivalent sizing token for each `size` rather than hardcoding 48 / 40 px.

## Reference screenshots

Capture these node IDs from Figma and save under `packages/design-system/src/Pagination/spec/screenshots/`.

- `26150:979` → `size-standard.png` (full composition, standard)
- `26150:1261` → `size-compact.png` (full composition, compact)
- `26150:945` → `atom-states-grid.png` (all 8 atom variants: 2 sizes × selected/not × default/hover/pressed, as laid out in the .PaginationAtom frame)

## Open questions & gaps

1. **Atom sizing — resolved.** Decision: size the atom square via `font-size`, matching the old `@sikt/sds-pagination` pattern and the `sds-icon` sizing idiom. Standard atoms use `--sd3-typography-size-text-interaction-lg` on `font-size` and derive width/height from it; compact atoms use `--sd3-typography-size-text-interaction-md`. The hardcoded 48 / 40 px rows in the "Hardcoded values" table are therefore implemented as em-based squares driven by typography-size tokens — no new tokens needed.
2. **Compact previous / next icon — resolved.** Decision: `NavigateToPreviousIcon` / `NavigateToNextIcon` from `@sikt/sds-icons` for the compact chevrons. `MoveToPreviousIcon` / `MoveToNextIcon` continue to apply for the `size=standard` text buttons. Storybook examples and docs reflect these names.
3. **Selected button interactivity — resolved.** Decision: the current page button stays in the tab order and is focusable. `aria-current="page"` suppresses hover / pressed styling (atom stays in its selected lavender background) and the component suppresses `onClick` for the current page — clicking the page you are on is a no-op. Keyboard users can land on the current-page button to discover where they are. This is a deliberate a11y improvement over `@sikt/sds-pagination`, which added native `disabled`.
4. **Missing disabled / focus visuals — resolved.** Decision: reuse existing SD3 state patterns rather than wait for a Figma pass.
   - Previous / next controls inherit disabled + focus-visible styling from the shipped SD3 `Button` (standard) and `ButtonIcon` (compact).
   - The page atom's focus-visible uses the shared SD3 focus-ring token with `outline-offset` (matches Figma's 2 px overlay). Disabled atom state is not reachable in the public API — only prev/next can be disabled.
5. **Previous / next shape — resolved.** Decision: add dedicated `Pagination.Previous` and `Pagination.Next` sub-components (shadcn pattern). `size=standard` renders them as the SD3 tertiary Button with icon + visible label; `size=compact` renders them as the SD3 ButtonIcon with the chevron icon, label visually hidden but still used as the accessible name. `Pagination.Button` is only for numbered page atoms, which simplifies its styling.
6. **Ellipsis API — resolved.** Decision: `Pagination.Ellipsis` is the recommended, explicit API; empty `<Pagination.Item />` continues to render the `…` spacer as a quiet convenience. Storybook and docs use the explicit form.
7. **`size` cascading — resolved.** Decision: `size` lives only on `Pagination` and cascades to all sub-components via context. No per-sub-component override.
8. **Range helper — resolved.** Decision: port `usePaginationRange` from `@sikt/sds-pagination` into `@sikt/sd3-design-system` and re-export it alongside the compound components. Signature stays `(count, currentIndex, limit) → PaginationItem[]`; consumers use it to drive the compound API in a short map. Minimal-churn migration path for the old pagination's users.
9. **Edge disabled behaviour — resolved.** Decision: `Pagination.Previous` / `Pagination.Next` apply `aria-disabled="true"` (not native `disabled`) when the consumer sets the `disabled` prop. The button remains in the tab order, and the component suppresses click / Enter / Space activation. Deliberate a11y improvement over the native-`disabled` behaviour in `@sikt/sds-pagination`.
10. **`aria-current` value — resolved.** Decision: `Pagination.Button`'s `aria-current` is typed as `"page"` only — the WAI-ARIA value defined for the current page in a set of related pages. Already reflected in the Props / API block.

## Documentation text (verbatim from Figma)

No documentation text was present on the Figma frames `26150:1262` or `26150:945` beyond the component descriptions attached to referenced primitives (Button and ButtonIcon), which belong to those components' own SPECs and are not reproduced here.
