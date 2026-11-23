# SearchField — Spec

**Figma:** [SDS Komponenter → SearchField](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25981-5313&m=dev)
**Component folder:** `packages/design-system/src/SearchField/`
**Replaces:** none
**Last synced:** 2026-11-13

## Overview

A single-line search input: a styled field wrapping a native `<input type="search">` with a trailing search button, and a trailing clear button that appears whenever the input has a value.
Reach for it when the consumer needs a dedicated search affordance with an explicit submit action and a one-click clear. For plain text entry use `Input`.

> **Internal use only.** This section orients readers of the SPEC file. It is NOT consumer-facing docs — those come from the `Documentation text (verbatim from Figma)` section at the bottom of this file.

## Variant axes

| Axis | Values                     | Default  | Figma label mapping     | Notes                                                                                                                         |
| ---- | -------------------------- | -------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| size | `large`, `medium`, `small` | `medium` | size=Large/Medium/Small | Controls field height, vertical padding, and placeholder/value text scale. Trailing button-icon size is constant (20px icon). |

The Figma file also enumerates `state=Default/Hover/Active/Critical/Disabled` as a variant axis — those are interaction states, not consumer-set props. See "Interaction states".

## Interaction states

Label/helper text, inline error message, and the critical/invalid visual are deliberately **out of scope** for this component. Figma renders `state=Critical` with a surrounding label, helper, and `InlineMessage` child, and the user confirmed this split: label/helper/validation UI belong to the `Field` wrapper (same split as `Input`). SearchField only owns the field box itself.

- **default** — 1px `color/border/strong` border, `color/surface/default-1` background, placeholder text in `color/text/secondary`, trailing search button only.
- **hover** (`:hover`) — border thickens to 2px (`spacing/border/weight/md`); colour and background unchanged.
- **focus** (`:focus`) — border 2px, background `color/surface/default-2`, typed value in `color/text/primary`. Figma variant name: `state=Active`. Figma only renders this state with a non-empty value; when focused and value is non-empty, the clear button + divider appear before the search button.
- **focus-visible** (`:focus-visible`) — layers a 2px `color/focus/border` outline offset ~3–4px outside the field (with a 2px `color/focus/background` ring inside it) on top of the focus styling. Rendered in Figma via the `showFocus` toggle.
- **disabled** (`[disabled]`) — identical box styling to default (1px border, white background); placeholder and search glyph tint to `color/text/disabled`. Clear button is never rendered in disabled.
- **non-empty value (regardless of focus)** — clear button + divider appear before the search button. Figma only shows this combined with the Active/Critical states, but the intent is: "clear affordance = there is something to clear".

## Slots

| Slot | Content | Constraint                                                                                                                                                                   |
| ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —    | —       | No consumer slots. Value is set via the native `value` / `defaultValue` attributes. The search and clear glyphs are internal (see "Internal icons") — not consumer-supplied. |

## Internal composition

| Internal part                  | Rendered when            | Notes                                                                                                          |
| ------------------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Native `<input type="search">` | always                   | The text-entry surface. Browser's native clear glyph suppressed by SD3 CSS (duplicates our clear button).      |
| Trailing search button         | always                   | ButtonIcon rendering the `search` icon. Activates `onSearch`.                                                  |
| Trailing clear button          | input value is non-empty | ButtonIcon rendering the `close`/`x` icon. Activates `onClear`.                                                |
| Divider                        | clear button is rendered | 1px vertical rule, 24px tall, `color/border/subtle` (currently unbound — flagged). Decorative — `aria-hidden`. |

## Icons used

### Slot icons (consumer supplies)

N/A — no icon slot.

### Internal icons (component renders)

| Icon name | Where it appears                 | Notes                                                                  |
| --------- | -------------------------------- | ---------------------------------------------------------------------- |
| `search`  | trailing search button, always   | 20×20 (`icon/interaction-md`).                                         |
| `close`   | clear button, when value present | 20×20 (`icon/interaction-md`). In Figma the `Remove` instance is used. |

## Props / API (proposal)

Consumer-facing surface. The implementer wires this to `InputHTMLAttributes<HTMLInputElement>` (minus `type` and `size`, which SD3 controls), decides on `ref` forwarding, and threads `onChange` for value tracking. Standard aria passthroughs (`aria-label`, `aria-labelledby`, `aria-invalid`, etc.) are not re-declared here — per project convention they ride on the HTML passthrough.

```ts
export interface SearchFieldProps {
  /** Field height and text scale. Defaults to "medium". */
  size?: "large" | "medium" | "small";
  /**
   * Accessible label for the trailing search button.
   * Required so the button has an accessible name — there is no visible text.
   */
  searchLabel: string;
  /**
   * Accessible label for the clear button. The clear button only renders
   * when the input has a value, so this is required for the same reason as `searchLabel`.
   */
  clearLabel: string;
  /** Fires when the user activates search (clicks the search button or presses Enter inside the input). */
  onSearch?: (value: string) => void;
  /** Fires when the user activates clear (clicks the clear button or presses Escape inside the input). */
  onClear?: () => void;
}
```

Consumers control the value via native `value` / `defaultValue` / `onChange`. `disabled`, `required`, `name`, `placeholder`, `aria-invalid`, `aria-describedby`, etc. ride on the passthrough.

## Accessibility

- **Semantic element:** `<input type="search">` wrapped in a styled container. Trailing affordances are `<button type="button">` (never `type="submit"` — this component does not assume a `<form>`; consumers wanting submit-on-enter can wrap it in one, and `onSearch` already fires on Enter).
- **Keyboard:**
  - `Enter` inside the input → fires `onSearch(currentValue)`.
  - `Escape` inside the input → fires `onClear()` (and the consumer typically clears the value in response). This matches the common search-field convention.
  - `Tab` moves focus into the input, then to the clear button (if rendered), then to the search button.
  - Clear and search buttons activate with `Space` / `Enter` (native `<button>`).
- **Screen reader / ARIA:**
  - The input needs an accessible name — the higher-level `Field` wrapper provides it via `<label for>` or `aria-labelledby`. When used standalone the consumer must supply `aria-label`.
  - Clear and search buttons each take an `aria-label` from `clearLabel` / `searchLabel`.
  - Decorative divider carries `aria-hidden="true"`.
  - `aria-invalid` on the input is set by the consumer or `Field` wrapper; SearchField itself does not style off it (see "Interaction states" — critical visual is Field's job).
- **Focus:** keyboard focus must be visibly indicated on each focusable element — the input and both trailing buttons. The input's focus-visible outline is drawn ~3–4px outside the field (Figma shows it as a double ring: 2px `color/focus/border` outer, 2px `color/focus/background` inner); the ButtonIcon buttons use their own focus ring from the ButtonIcon component.
- **Browser-native clear glyph:** `<input type="search">` in WebKit/Blink renders its own `×` inside the field. SD3 CSS must suppress it (`::-webkit-search-cancel-button { display: none; }`) so it doesn't duplicate our clear button.
- **WAI-ARIA pattern:** no dedicated "search field" pattern — this is a native form control with a conventional submit button. See [WAI-ARIA APG — Text Inputs](https://www.w3.org/WAI/ARIA/apg/patterns/) as general reference.

## Design tokens

### Figma-bound tokens — shared across all sizes and states

| Figma token                  | Current value | CSS property         | Applies to                                                            |
| ---------------------------- | ------------- | -------------------- | --------------------------------------------------------------------- |
| `layout/radius/02`           | `4px`         | border-radius        | field container                                                       |
| `space/component/300`        | `12px`        | padding-inline-start | field container (leading)                                             |
| `space/component/100`        | `4px`         | padding-inline-end   | field container (trailing — ButtonIcons sit flush to the 4px padding) |
| `color/surface/default-1`    | `#ffffff`     | background-color     | field container, default/hover/disabled                               |
| `color/border/strong`        | `#959595`     | border-color         | field container, default/hover/focus/disabled                         |
| `color/text/primary`         | `#0a0132`     | color                | typed value                                                           |
| `color/text/secondary`       | `#595959`     | color                | placeholder                                                           |
| `color/text/disabled`        | `#959595`     | color                | placeholder + search glyph when disabled                              |
| `color/focus/border`         | `#004fcf`     | border-color         | focus-visible outer ring (2px)                                        |
| `color/focus/background`     | `#ffffff`     | border-color         | focus-visible inner ring (2px)                                        |
| `typography/weight/regular`  | `400`         | font-weight          | input value + placeholder                                             |
| `icon/interaction-md`        | `20px`        | icon size            | both trailing ButtonIcon glyphs                                       |
| `spacing/border/radius/full` | `999px`       | border-radius        | ButtonIcon hit area                                                   |

### Figma-bound tokens — per size

| Size   | padding-block                 | font-size (value + placeholder)                | line-height                                    |
| ------ | ----------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| large  | `space/component/200` (`8px`) | `typography/size/text/interaction-lg` (`18px`) | `18px` hardcoded (see Hardcoded values)        |
| medium | `space/component/100` (`4px`) | `typography/size/text/body-md` (`16px`)        | `typography/line-height/text/body-md` (`24px`) |
| small  | none (0)                      | `typography/size/text/body-md` (`16px`)        | `typography/line-height/text/body-md` (`24px`) |

### Figma-bound tokens — per state

| State         | background                            | border-color                      | border-width                                                                                      |
| ------------- | ------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------- |
| default       | `color/surface/default-1` (`#ffffff`) | `color/border/strong` (`#959595`) | `layout/border-weight/thin` (`1px`)                                                               |
| hover         | `color/surface/default-1` (`#ffffff`) | `color/border/strong` (`#959595`) | `spacing/border/weight/md` (`2px`)                                                                |
| focus         | `color/surface/default-2` (`#f1f1f1`) | `color/border/strong` (`#959595`) | `spacing/border/weight/md` (`2px`)                                                                |
| focus-visible | inherits focus                        | inherits focus                    | inherits focus + outer 2px `color/focus/border` ring (with 2px `color/focus/background` gap ring) |
| disabled      | `color/surface/default-1` (`#ffffff`) | `color/border/strong` (`#959595`) | `layout/border-weight/thin` (`1px`)                                                               |

### Hidden-token values

None — checked the token sources under `packages/design-tokens/src/figma/` for every raw value flagged below; none carry a `hiddenFromPublishing: true` marker.

### Hardcoded values

Values Figma does not bind to a variable, with the hidden-token check ruled out. Flagged in "Open questions" so the tokens owner can decide whether to promote.

| Raw value     | CSS property                                | Applies to                                                                                                                                            |
| ------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `8px`         | gap                                         | Row gap between placeholder/value and the trailing button group. Same numeric value as `space/component/200` but Figma is not binding it.             |
| `6px`         | padding (all sides)                         | Inner padding of each trailing ButtonIcon hit area                                                                                                    |
| `18px`        | line-height                                 | Input value + placeholder text at `size=large` (`body-md` line-height isn't used; the field uses a hardcoded 18px line-height matching the font size) |
| `2px`         | border-width                                | Focus-visible outer + inner rings (not currently emitted as a token)                                                                                  |
| `3px` / `4px` | outline-offset (via `inset: -3px` / `-4px`) | Focus-visible outer ring offset outside the field box — 3px on 1px-border states, 4px on 2px-border states                                            |
| `6px`         | border-radius                               | Focus-visible outer ring (field radius is 4px → outer ring 6px to remain concentric)                                                                  |
| `24px × 1px`  | divider dimensions                          | Vertical rule separating the clear and search buttons. Colour is also a raw asset (`Line 5` SVG).                                                     |

### Dimension-affecting asymmetries

Hover and focus render a **2px** border; default and disabled render a **1px** border. On hover-in or focus-in the field grows 1px in every direction unless the implementation reserves the extra pixel (e.g. by giving the base state a `border: 2px solid transparent` and only colouring it, or by rendering the extra thickness as an inset shadow). Without that fix the surrounding layout shifts.

This is the same asymmetry as `Input` — see its SPEC for prior art.

| Property       | States that bind 2px          | States that bind 1px | Intent (consumer-visible size difference? y/n) |
| -------------- | ----------------------------- | -------------------- | ---------------------------------------------- |
| `border-width` | hover, focus (Figma "Active") | default, disabled    | n — must be equalised so the box stays put     |

## Reference screenshots

Capture the **Field** frame of each variant (not the composed version with label/helper/inline message). Save to the paths listed.

- Large default: `25981:5480` → `./screenshots/size-large-default.png`
- Large hover: `25981:5330` → `./screenshots/size-large-hover.png`
- Large focus (typed + clear button): `27816:4174` → `./screenshots/size-large-focus.png`
- Large disabled: `31049:5390` → `./screenshots/size-large-disabled.png`
- Medium default: `25981:5503` → `./screenshots/size-medium-default.png`
- Medium focus: `27816:4181` → `./screenshots/size-medium-focus.png`
- Small default: `25981:5526` → `./screenshots/size-small-default.png`
- Small focus: `27816:4188` → `./screenshots/size-small-focus.png`

## Open questions & gaps

- **Escape-to-clear semantics.** The SPEC proposes `Escape → onClear()`, matching common search-field UX (e.g. GitHub, Linear). Confirm this is the desired behaviour; some SD3 contexts dismiss a surrounding popover on Escape first, in which case SearchField should not swallow it.
- **Default labels / i18n.** `searchLabel` and `clearLabel` are required strings in the proposal. If the catalog adopts an `lang`-based default dictionary (Norwegian: "Søk" / "Tøm"; English: "Search" / "Clear") they could be optional. Flag for the i18n owner.
- **Row gap `8px`.** Numerically equal to `space/component/200` — ask the tokens owner whether to promote the Figma binding.
- **ButtonIcon inner padding `6px`.** Inside each trailing ButtonIcon. Candidate for a `space/component/050` token or a ButtonIcon-internal token.
- **Focus-visible ring tokens.** The ring widths (`2px`), offsets (`3–4px`), and outer radius (`6px`) are all raw numbers in Figma. If a shared focus-ring token set is planned, SearchField should consume it. For now matches `Input`'s hardcoded approach.
- **Large size line-height.** Figma hardcodes `18px` for both the placeholder and typed value at `size=large`, overriding what `typography/line-height/text/interaction-lg` would otherwise resolve to. Confirm this is intentional; it does make the large field visually tighter than Medium/Small (which do use the standard body-md line-height of 24px).
- **Native WebKit cancel button.** Must be suppressed via `::-webkit-search-cancel-button { display: none; }` so it doesn't double with our clear button. Flagged as an implementation reminder, not a design question.
- **Clear button visibility rule.** SPEC assumes the clear button renders iff the input has a non-empty value. Figma only shows it combined with `state=Active` — confirm with designers that it should also render in `state=Default` + non-empty value (e.g. a search field prefilled from a query param).
- **Divider colour.** The divider SVG asset (`Line 5`) in Figma carries no bound colour variable. Likely intent is `color/border/subtle` or a neutral low-contrast rule — ask the designer.
- **`state=Critical` and `InlineMessage`.** Scoped out of this component per the same split as `Input`. Confirm `Field` will emit the critical container styling (`color/support/critical/subtle` background, `color/interaction/critical/border` border) when it detects `aria-invalid` on a SearchField child.

## Documentation text (verbatim from Figma)

The SearchField page in Figma (node `25981:5313`) contains no standalone descriptive text block — only the component-set frames. The one inline annotation present is on the `ButtonIcon` instance used for the trailing glyph:

> **ButtonIcon**: ButtonIcon har tema "**main**" som default. Dette kan endres til "neutral" eller "critical" ved å gå til Apperance i høyre menyen og trykke "**Apply variable mode**". Ikonet kan byttes ut, eneste unntaket er "loading" state.

That note is about the ButtonIcon primitive, not SearchField usage, and is left here verbatim only for traceability. Consumer-facing documentation (Norwegian bokmål) will be authored under `astro/search-field.mdx` and should describe the component in terms of this SPEC, not the Figma page text.
