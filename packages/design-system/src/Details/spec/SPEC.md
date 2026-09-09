# Details — Spec

**Figma:** [❖ Details](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13122-2440&p=f&m=dev)
**Component folder:** `packages/design-system/src/Details/`
**Replaces:** `@sikt/sds-details`
**Last synced:** 2026-09-01 (content-slot padding-top re-synced 2026-09-01)

## Overview

A single expandable disclosure that reveals additional content on activation. Built on native `<details>` + `<summary>` for full built-in a11y and progressive enhancement.

Reach for `Details` when a page has secondary content that most users can skip (FAQ answers, "read more" bodies, optional form details). Group multiple `Details` via the shared `name` attribute to make them mutually exclusive (accordion). Do **not** use for primary navigation, tabbed content, or dialogs — pick the dedicated components instead.

**Consumer API is compound.** The component surface is intentionally split into three parts: `<Details>` (root), `<Details.Summary>` (trigger label), `<Details.Content>` (revealed body). This makes the call-site self-documenting and gives consumers full control over the label and body markup without leaking `summary`/`children` prop semantics.

```tsx
<Details>
  <Details.Summary>
    Hvem kan registrere seg i Frivillighetsregisteret?
  </Details.Summary>
  <Details.Content>For å kunne bli registrert…</Details.Content>
</Details>
```

## Variant axes

| Axis | Values                | Default    | Figma label mapping                        | Notes                                                                                                                          |
| ---- | --------------------- | ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| size | `standard`, `compact` | `standard` | Standard → `standard`, Compact → `compact` | Legacy `@sikt/sds-details` used `large`/`small` — mapping is `large=standard`, `small=compact`. Confirm before implementation. |

## Interaction states

- **default (closed):** trigger has transparent background, `border-radius: 8px` on all corners.
- **default (open):** trigger fills with `--sd3-color-interaction-subtle-default` (#d1cdff), only top corners rounded 4px; content slot inherits same fill, only bottom corners rounded 4px.
- **hover (closed):** trigger fills `--sd3-color-interaction-subtle-hover` (#c2bcff), all corners 4px.
- **hover (open):** trigger + content both fill `--sd3-color-interaction-subtle-hover`; trigger tops rounded, content bottoms rounded.
- **pressed (closed):** trigger fills `--sd3-color-interaction-subtle-pressed` (#b4aeff), all corners 4px.
- **pressed (open):** same fill as pressed-closed; corner-radius split between trigger (top) and content (bottom).
- **focus-visible:** not designed in Figma. Adopt the shared SD3 focus token `--sd3-color-focus-border` (optionally with `--sd3-color-focus-background`) on the `<summary>` element. Ring thickness/offset should follow whichever pattern other SD3 components settle on.
- **disabled:** **missing in Figma.** Native `<details>` has no disabled state. See Open questions.

The whole component has a 1px `--sd3-color-border-subtle` (#e0e0e0) divider on both top and bottom edges in every state, acting as a group separator when multiple Details are stacked.

## Sub-components (compound API)

| Sub-component     | Renders                 | Required | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Details`         | Native `<details>`      | Yes      | Root element. Must contain exactly one `Details.Summary` (first child) and one `Details.Content`.                                                                                                                                                                                                                                                                                                                                                         |
| `Details.Summary` | Native `<summary>`      | Yes      | Trigger label. Becomes the accessible name of the disclosure. **Do NOT pass interactive elements** (`<button>`, `<a>`, form controls) — nesting them inside `<summary>` breaks its native activation and focus. **Avoid heading elements** (`<h1>`–`<h6>`); screen readers may exclude them from the document's heading outline. Plain text or inline formatting only. Renders the leading expand/collapse caret internally — consumers do not supply it. |
| `Details.Content` | `<div>` content wrapper | Yes      | Content revealed when the disclosure is open. Any React children.                                                                                                                                                                                                                                                                                                                                                                                         |

There is no dedicated `icon` slot — the leading expand/collapse icon is rendered inside `Details.Summary` and controlled by the open state via CSS (see Internal composition).

## Internal composition

| Internal part             | Rendered when                                             | Notes                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Leading icon              | Always                                                    | Rendered inside `Details.Summary`. Two icons from `@sikt/sds-icons` — `ExpandShowIcon` (closed) and `CollapseHideIcon` (open) — are both present in the DOM; CSS hides the inactive one based on the `[open]` attribute on the root. Matches Figma's icon pair 1:1.                                                                                                                                                          |
| Content wrapper (`<div>`) | Always (visibility follows native `<details>` open state) | `Details.Content` renders as a `<div>` wrapping consumer children, so the expanded background/padding applies to the content region rather than to raw children. On browsers that support the `::details-content` pseudo-element (Baseline Newly available, Chromium 131+), the wrapper is functionally redundant — the pseudo-element can style the content directly. Keep the wrapper as a cross-browser fallback for now. |

## Icons used

### Slot icons (consumer supplies)

_N/A — Details does not expose an icon slot to consumers._

### Internal icons (component renders)

| Icon name          | Where it appears | Notes                                                                                                                                                                                                                         |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ExpandShowIcon`   | Leading, closed  | From `@sikt/sds-icons`. Rendered inside `Details.Summary`, size 24×24, color `--sd3-color-icon-primary`. Hidden via CSS when the root `<details>` is `[open]`.                                                                |
| `CollapseHideIcon` | Leading, open    | From `@sikt/sds-icons`. Rendered inside `Details.Summary`, size 24×24, color `--sd3-color-icon-primary`. Hidden via CSS when the root `<details>` is not `[open]`. Both icons are always in the DOM; only visibility toggles. |

## Props / API

Compound component. From the consumer's perspective the surface is three parts: a root and two sub-parts accessed as `Details.Summary` and `Details.Content`.

```tsx
<Details size="standard" name="faq">
  <Details.Summary>Hvem kan registrere seg?</Details.Summary>
  <Details.Content>For å kunne bli registrert…</Details.Content>
</Details>
```

**Root — `Details`** — semantic `<details>` element. Accepts every standard `<details>` attribute (`open`, `defaultOpen`, `onToggle`, etc.) plus:

| Prop     | Type          | Default      | Description                                                                                                                                                                                                        |
| -------- | ------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `size`   | `SizeDensity` | `"standard"` | Trigger row height/padding. `"standard"` = 48px row, 8px vertical padding. `"compact"` = 40px row, 4px vertical padding. Uses the shared `SizeDensity` type. Typography and icon size are unchanged between sizes. |
| `name`   | `string`      | —            | Groups multiple `Details` into an exclusive accordion via the native HTML `name` attribute. Only one Details in the group can be open at a time. Baseline Widely available (2024).                                 |
| children | `ReactNode`   | (required)   | Must contain exactly one `Details.Summary` (first) and one `Details.Content`.                                                                                                                                      |

**Sub-part — `Details.Summary`** — semantic `<summary>` element. Accepts standard HTML attributes.

| Prop     | Type        | Default    | Description                                                                                                                                                                                                                 |
| -------- | ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children | `ReactNode` | (required) | Trigger label. Plain text or inline formatting only — see the Sub-components section for constraints on interactive/heading children. The expand caret is rendered internally by the component; consumers do not supply it. |

**Sub-part — `Details.Content`** — content wrapper. Accepts standard HTML attributes.

| Prop     | Type        | Default    | Description                                     |
| -------- | ----------- | ---------- | ----------------------------------------------- |
| children | `ReactNode` | (required) | Any content revealed when the disclosure opens. |

How the compound is wired internally (namespace vs. static properties vs. separate exports) is an implementation choice — SPEC only fixes the consumer-visible shape.

## Accessibility

- **Semantic element:** native `<details>` + `<summary>`. Do **not** replace with a `<div role="button" aria-expanded>` pattern — the native pair provides built-in keyboard support, focus management, and correct AT semantics.
- **Keyboard:** browser default — `Space` and `Enter` on a focused `<summary>` toggle the disclosure. `Tab` moves focus in/out.
- **Screen reader / ARIA:** `aria-expanded` is exposed and maintained by the browser on the `<summary>`; no manual ARIA needed. The accessible name is computed from the `summary` slot content — if `summary` is a non-text `ReactNode`, the caller must ensure it contains readable text (or supply `aria-label` via `DetailsHTMLAttributes`).
- **Focus:** the `<summary>` receives focus. Apply a visible focus-visible ring using `--sd3-color-focus-border` (already in the SD3 catalog); ring thickness and offset should match whatever the rest of SD3 converges on.
- **WAI-ARIA pattern:** [Disclosure (Show/Hide)](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/). Native `<details>`/`<summary>` implements this pattern by default.
- **Contrast:** background/foreground pairs from `--sd3-color-interaction-subtle-*` must meet WCAG 1.4.3 (4.5:1 for text-body-md/lg). Verify once colour tokens compile.
- **Reduced motion:** any transition on background-colour, corner-radius, or expand/collapse height must be gated on `@media (prefers-reduced-motion: no-preference)` (or explicitly disabled inside `prefers-reduced-motion: reduce`).

## Animation

The component ships **without open/close animation**. Content reveals/hides instantly, matching Figma (which does not specify motion). A future enhancement using native `interpolate-size` (Chromium 129+ today, Baseline widening as Firefox/Safari catch up) can be layered on without breaking the API — leave a hook for it in the content-wrapper class.

Any transitions elsewhere (e.g. background-colour on hover) must be gated on `@media (prefers-reduced-motion: no-preference)`.

## Design tokens

All tokens this component needs are already in the `--sd3-*` catalog (`packages/design-tokens/dist/css/{tokens,color,space,typography}.css`), imported via `packages/design-tokens/dist/css/index.css`. Grouped by category.

### Space, radius, border-weight (from `tokens.css`)

| Token                                 | CSS property                    | Applies to                                                                                                                      |
| ------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `--sd3-space-component-050` (2px)     | padding-top                     | content slot, compact size                                                                                                      |
| `--sd3-space-component-100` (4px)     | gap; padding-block; padding-top | content slot flex-gap; compact trigger vertical padding; content slot padding-top (standard size)                               |
| `--sd3-space-component-200`           | gap; padding-block              | trigger row gap; standard trigger vertical padding; component vertical padding (gap between top/bottom border and trigger fill) |
| `--sd3-space-component-300`           | padding-left; padding-bottom    | trigger padding-left; content slot padding-bottom                                                                               |
| `--sd3-space-component-400`           | padding-right                   | trigger and content padding-right                                                                                               |
| `--sd3-space-component-600` (24px)    | width / height                  | trigger icon container                                                                                                          |
| `--sd3-space-component-1000` (40px)   | height / min-height             | compact trigger row                                                                                                             |
| `--sd3-space-component-1200` (48px)   | height / min-height             | standard trigger row                                                                                                            |
| `--sd3-space-border-radius-100` (4px) | border-radius                   | trigger and content in open/hover/pressed states                                                                                |
| `--sd3-space-border-radius-200` (8px) | border-radius                   | trigger in default closed state                                                                                                 |
| `--sd3-space-border-weight-025` (1px) | border-width                    | top/bottom component dividers                                                                                                   |

### Colours (from `color.css`)

| Token                                         | CSS property     | Applies to                              |
| --------------------------------------------- | ---------------- | --------------------------------------- |
| `--sd3-color-border-subtle`                   | border-color     | component top/bottom dividers           |
| `--sd3-color-interaction-neutral-transparent` | background-color | trigger, default (closed) state         |
| `--sd3-color-interaction-subtle-default`      | background-color | trigger + content, open (default state) |
| `--sd3-color-interaction-subtle-hover`        | background-color | trigger + content, hover state          |
| `--sd3-color-interaction-subtle-pressed`      | background-color | trigger + content, pressed state        |
| `--sd3-color-text-primary`                    | color            | label; body                             |
| `--sd3-color-icon-primary`                    | color / fill     | trigger icon                            |
| `--sd3-color-focus-border`                    | outline-color    | `<summary>` focus-visible ring          |
| `--sd3-color-focus-background`                | background-color | (optional) focus-visible ring backdrop  |

### Typography (from `typography.css`)

| Token                                       | CSS property | Applies to  |
| ------------------------------------------- | ------------ | ----------- |
| `--sd3-font-family`                         | font-family  | label; body |
| `--sd3-typography-size-text-body-lg`        | font-size    | label       |
| `--sd3-typography-line-height-text-body-lg` | line-height  | label       |
| `--sd3-typography-size-text-body-md`        | font-size    | body        |
| `--sd3-typography-line-height-text-body-md` | line-height  | body        |
| `--sd3-typography-weight-regular`           | font-weight  | label; body |

### Hardcoded (no Figma variable)

Figma renders `padding-left: 46px` on the content slot, but the calculated indent is `pad(12) + icon(24) + gap(8) = 44px`. This spec treats the 46px as a Figma bug and prescribes 44px. The implementation must include an inline comment on the affected CSS rule explaining the deviation.

| Value                                                                                                             | CSS property | Applies to          |
| ----------------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| `calc(var(--sd3-space-component-300) + var(--sd3-space-component-600) + var(--sd3-space-component-200))` (= 44px) | padding-left | content slot indent |

## Reference screenshots

Capture the following node IDs from Figma and save under `packages/design-system/src/Details/spec/screenshots/`. [[review-component-spec]] compares these against the shipped Storybook rendering.

- Node `27292:17163` → `standard-closed-default.png`
- Node `27292:17151` → `standard-open-default.png`
- Node `27292:17167` → `compact-closed-default.png`
- Node `27292:17157` → `compact-open-default.png`
- Node `27292:17135` → `standard-closed-hover.png`
- Node `27306:7574` → `standard-open-hover.png`
- Node `27292:17143` → `standard-closed-pressed.png`
- Node `27306:7591` → `standard-open-pressed.png`

## Open questions & gaps

Decisions already made (kept here as a record):

- **Focus-visible:** use `--sd3-color-focus-border` (shared SD3 focus token). Resolved.
- **Disabled state:** not supported. Native `<details>` semantics are preserved. Resolved.
- **`padding-left: 46px` in content slot:** treated as Figma bug; corrected to 44px via `calc()` of existing tokens. Implementation must carry an inline comment noting the deviation. Resolved.
- **Size naming:** `size: "standard" | "compact"` using the shared `SizeDensity` type from `packages/design-system/types/index.ts`. Breaking change vs. legacy `@sikt/sds-details` (`large`/`small`). Resolved.
- **Icon rendering:** use `ExpandShowIcon` + `CollapseHideIcon` from `@sikt/sds-icons`; both are rendered and CSS toggles visibility based on `[open]`. Matches Figma's icon pair 1:1 at the cost of an SD3 → sds-icons runtime dep. Resolved (originally single-caret-rotation; revised 2026-09-01 to align with the shared catalog).
- **Documentation copy:** placeholder Norwegian text drafted in § "Documentation text". May be refined by docs owner. Resolved.
- **`name` attribute:** exposed via `DetailsProps.name` so consumers can build native exclusive accordions (`<details name>`). Baseline Widely available (2024). Resolved.
- **Open/close animation:** none in v1. § "Animation" documents a `interpolate-size` hook for a future enhancement. Resolved.

No open questions remain — spec is ready for [[implement-component-spec]].

**2026-09-01 update:** designer added a small top gap between trigger and content — content slot padding-top is now `--sd3-space-component-100` (4px) on standard and `--sd3-space-component-050` (2px) on compact. Previously both were 0 (`--sd3-space-component-000`).

## Documentation text

Placeholder copy written for this spec (Figma's text was lorem/empty). Docs owner may replace verbatim if the wording should be refined.

**Beskrivelse**

Details er en innsyns-komponent som lar brukeren vise eller skjule sekundært innhold ved å aktivere en overskriftsrad. Komponenten bygger på nettleserens `<details>` og `<summary>`-elementer, og får dermed full tastaturstøtte og skjermleser-semantikk gratis. Flere Details kan grupperes til en trekkspilliste ved å dele `name`-attributt — da holdes bare én åpen om gangen.

**Passer bra til**

- Ofte stilte spørsmål (FAQ) der svaret er sekundært for de fleste brukere.
- "Les mer"-utvidelser av oppsummeringstekst eller lange beskrivelser.
- Valgfrie eller avanserte skjemafelter som ikke er relevante for alle.
- Grupper av valgfrie detaljer der brukeren kan åpne én om gangen (via `name`-gruppering).

**Passer mindre bra til**

- Primærnavigasjon — bruk `Menu` eller tilsvarende navigasjonskomponent.
- Modale dialoger som krever brukerhandling — bruk `Dialog`.
- Kritisk informasjon som må være synlig for alle brukere — hold den utenfor Details.
- Faneinnhold der brukeren forventer å se flere seksjoner samtidig — bruk `Tabs`.
