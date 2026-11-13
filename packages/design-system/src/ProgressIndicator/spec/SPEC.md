# ProgressIndicator — Spec

**Figma:** [Progress Indicator](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=19757-2539)
**Component folder:** `packages/design-system/src/ProgressIndicator/`
**Replaces:** `@sikt/sds-progress-bar`
**Last synced:** 2026-10-22

## Overview

ProgressIndicator shows the user's position in a multi-step flow, visualising which steps are completed, which one is active, and which are still ahead.

Reach for it in flows of 3–5 steps where the user benefits from seeing what is coming next. For shorter flows (fewer than 3 steps), skip it; for determinate numeric progress (percentages, file uploads) use a dedicated progress bar instead — out of scope here.

## Variant axes

| Axis      | Values                      | Default    | Figma label mapping | Notes                                                                                                                |
| --------- | --------------------------- | ---------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| size      | compact, standard, expanded | standard   |                     | Compact = marker + inline label; Standard = marker + label; Expanded = card chrome with label + optional description |
| direction | horizontal, vertical        | horizontal |                     | No auto-switch at breakpoint — consumer controls                                                                     |

Each `ProgressIndicator.Step` child additionally takes a `status`:

| Axis   | Values                                           | Default  | Figma label mapping                         | Notes                         |
| ------ | ------------------------------------------------ | -------- | ------------------------------------------- | ----------------------------- |
| status | upcoming, current, completed, critical, disabled | upcoming | Unfinished → upcoming, Finished → completed | Exactly one step is `current` |

## Interaction states

- **default** — all statuses render in their resting style.
- **hover** — only on steps the consumer makes interactive (`href` or `onClick`), and only when `status` is `upcoming` or `completed`. Figma does not render hover for `current`, `critical`, or `disabled`.
- **pressed** — same scope as hover.
- **focus-visible** — appears on any interactive step when it receives keyboard focus. The exact ring treatment is unresolved in Figma (designer sticky note: "Er det nok å ha focus state kun rundt sirkelen?"). See Open questions.

## Slots

| Slot                       | Content                                                         | Constraint                                                                                 |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ProgressIndicator children | `ProgressIndicator.Step` elements                               | Required. Order determines flow order. One should have `status="current"`.                 |
| Step `label`               | Short step title                                                | Required. One line; visible on all three sizes.                                            |
| Step `description`         | Secondary line below the label                                  | Optional. Rendered on `size="standard"` and `size="expanded"`; hidden on `size="compact"`. |
| Parent `aria-label`        | Accessible name for the whole indicator (e.g. "Søknadsprosess") | Required when there is no visible heading nearby that already labels the stepper.          |

## Internal composition

| Internal part              | Rendered when                                                                            | Notes                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Step marker (circle)       | `size` is `compact` or `standard`                                                        | Standard: 40×40 circle with step number. Compact: 24×24 pill marker with step number.                                                                                                                                                                                                                                                                                                                                      |
| Step marker (plain number) | `size="expanded"`                                                                        | No circle; just a numeric label next to the card content. Figma: `TEXT` node named `Number`, no surrounding frame.                                                                                                                                                                                                                                                                                                         |
| Card chrome                | `size="expanded"`, every status                                                          | 1 px border + 8 px radius + 16 px padding on every Expanded card. Background and border colours differ per status: `upcoming` → white + subtle grey border; `current` → brand-subtle + brand-strong border; `critical` → critical-subtle; `disabled` → disabled-default. `completed` surfaces padding/radius/border-width tokens but no bg/border colour — ships transparent (bare card) unless design confirms otherwise. |
| Bar segment between steps  | Between every adjacent pair of steps, except when `size="expanded"`                      | 2 px thick, radius 999 px. Filled when the preceding step is `completed`, muted otherwise. Decorative — `aria-hidden`. Expanded has no connector bars — the card chrome stands on its own.                                                                                                                                                                                                                                 |
| Status icon inside marker  | `status` is `completed` or `critical` (Standard & Compact; Expanded uses a plain number) | `completed` → check icon on filled brand disc; `critical` → x icon on tinted critical disc. Replaces the step number. Icon frame: 20×20 at Standard, 14×14 at Compact.                                                                                                                                                                                                                                                     |

## Icons used

### Slot icons (consumer supplies)

N/A — ProgressIndicator does not accept a consumer-supplied icon slot.

### Internal icons (component renders)

| Icon name | Where it appears                                  | Notes                                                                                             |
| --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `check`   | marker, `status="completed"` (Standard & Compact) | White glyph on brand-primary disc. 20×20 inside 40×40 at Standard; 14×14 inside 24×24 at Compact. |
| `x`       | marker, `status="critical"` (Standard & Compact)  | Critical-tinted glyph on critical-subtle disc. 20×20 at Standard; 14×14 at Compact.               |

## Props / API (proposal)

Consumer-facing surface. Compound: `ProgressIndicator` renders the list; `ProgressIndicator.Step` renders each step. Types are framework-neutral — the implementation maps slots to the target framework's node type, adds pass-through attributes, refs, and composition patterns as it sees fit.

```ts
export interface ProgressIndicatorProps {
  /** Visual density. `compact` is marker-only + inline label; `standard` is marker + label; `expanded` adds card chrome and an optional description. */
  size?: "compact" | "standard" | "expanded";
  /** Flow orientation. */
  direction?: "horizontal" | "vertical";
  /** Accessible name for the stepper as a whole. Required unless an adjacent visible heading already labels it. */
  "aria-label"?: string;
  /** Step children. Order defines flow order. */
  children: Content;
}

export interface ProgressIndicatorStepProps {
  /** Step title. */
  label: string;
  /** Secondary line under the label. Hidden on `size="compact"`. */
  description?: string;
  /** Where the step sits in the flow. Exactly one step should be `current`. */
  status: "upcoming" | "current" | "completed" | "critical" | "disabled";
  /** When set, the step renders as a navigable link. Not combined with `onClick`. */
  href?: string;
  /** When set, the step renders as an activatable control. Not combined with `href`. */
  onClick?: () => void;
}
```

## Accessibility

- **Semantic element:** parent is an ordered list (`<ol>`); each step is a list item (`<li>`). Interactive steps wrap their content in a native `<a>` (with `href`) or `<button>` (with `onClick`). Non-interactive steps render static markup.
- **Keyboard:** interactive steps are reachable in document order via `Tab` / `Shift+Tab`. `Enter` activates both links and buttons; `Space` additionally activates buttons. Non-interactive steps are not focusable. No custom roving tabindex — this is a list of independent links/buttons, not a composite widget.
- **Screen reader / ARIA:**
  - Parent list carries `aria-label` from the `aria-label` prop (or `aria-labelledby` if the consumer wires it).
  - The step with `status="current"` carries `aria-current="step"`.
  - Bar segments between steps are decorative and marked `aria-hidden="true"`.
  - Internal `check` / `x` icons are decorative (`aria-hidden="true"`); the step status is conveyed by the label and `aria-current`, not by the glyph.
  - `status="disabled"` steps that are passed `href`/`onClick` render as `<button disabled>` or `<a aria-disabled="true" tabindex="-1">` so the state is announced and removed from the tab order.
- **Focus:** every interactive step must have a visible focus indicator. Implementation defines the exact ring treatment — see Open questions for the designer's unresolved choice between a tight marker-only ring and a larger ellipse.
- **WAI-ARIA pattern:** no canonical APG pattern applies — this is a labelled list with `aria-current="step"`, which is the pattern WAI-ARIA explicitly suggests for breadcrumb- and stepper-like navigation. See [WAI-ARIA `aria-current` guidance](https://www.w3.org/TR/wai-aria-1.2/#aria-current).

## Design tokens

Record of what Figma binds. Whether these tokens exist in the SD3 CSS catalog, and what to do about hardcoded values, is `implement-component-spec`'s call.

### Figma-bound tokens

| Figma token                            | Current value | CSS property                   | Applies to                                                                                                                                                                                               |
| -------------------------------------- | ------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `space/component/300`                  | `12px`        | gap                            | Parent gap — all horizontal variants, and `size="expanded"` vertical; marker↔label gap on Standard & Expanded                                                                                            |
| `space/component/200`                  | `8px`         | gap                            | Parent gap — `size="compact"` and `size="standard"` vertical variants; Compact marker↔label gap                                                                                                          |
| `space/component/400`                  | `16px`        | padding                        | Expanded card padding (all four sides, every status)                                                                                                                                                     |
| `space/component/000`                  | `0px`         | padding                        | BarAtom segment (horizontal + vertical) — no bar padding                                                                                                                                                 |
| `spacing/5`                            | `20px`        | width, height                  | `check` and `x` icon frame — Standard & Expanded sizes (inside completed/critical marker)                                                                                                                |
| `spacing/3.5`                          | `14px`        | width, height                  | `check` and `x` icon frame — Compact size (inside completed/critical marker)                                                                                                                             |
| `size/24`                              | `24px`        | width, height                  | Compact marker frame                                                                                                                                                                                     |
| `spacing/border/radius/full`           | `999px`       | border-radius                  | Bar segment                                                                                                                                                                                              |
| `border/border-radius/rounded-full`    | `9999px`      | border-radius                  | Standard marker frame; completed/critical icon disc (40×40); Compact marker (normalised from Figma's raw `50` to match SD3 conventions)                                                                  |
| `spacing/border/radius/md`             | `8px`         | border-radius                  | Expanded step card (every status)                                                                                                                                                                        |
| `border/border-width/border`           | `1px`         | border-width                   | Standard marker stroke; Expanded card stroke (every status); Compact marker stroke                                                                                                                       |
| `color/text/primary`                   | `#0a0132`     | color                          | Step label and description (upcoming/current/completed, incl. hover/pressed); marker number (upcoming/current/completed)                                                                                 |
| `color/text/critical`                  | `#b60203`     | color                          | Step label and description — `status="critical"`                                                                                                                                                         |
| `color/text/disabled`                  | `#959595`     | color                          | Step label and description — `status="disabled"`; marker number — `status="disabled"`                                                                                                                    |
| `color/surface/default-1`              | `#ffffff`     | background-color               | Marker fill — `status="upcoming"` default (Standard & Compact); Expanded card bg — `status="upcoming"`                                                                                                   |
| `color/border/subtle`                  | `#e0e0e0`     | border-color, background-color | Marker stroke — upcoming (default, hover, pressed) & Compact; Expanded card border — `status="upcoming"`; bar fill — upcoming segment                                                                    |
| `color/brand/primary-subtle`           | `#ebe6fe`     | background-color               | Marker fill — `status="current"` (Standard & Compact); Expanded card bg — current                                                                                                                        |
| `color/brand/primary-strong`           | `#7351fb`     | border-color                   | Marker stroke — `status="current"` (Standard & Compact); Expanded card border — current                                                                                                                  |
| `color/interaction/primary/default`    | `#7351fb`     | background-color               | Icon disc fill — `status="completed"`; bar fill — completed segment                                                                                                                                      |
| `color/interaction/neutral/hover`      | `#e0e0e0`     | background-color               | Marker fill — upcoming, state=hover                                                                                                                                                                      |
| `color/interaction/neutral/pressed`    | `#d6d6d6`     | background-color               | Marker fill — upcoming, state=pressed                                                                                                                                                                    |
| `color/interaction/disabled/default`   | `#e0e0e0`     | background-color               | Marker fill — `status="disabled"` (Standard & Compact); Expanded card bg — disabled                                                                                                                      |
| `color/support/critical/subtle`        | `#ffeae9`     | background-color               | Icon disc fill — `status="critical"` (Standard & Compact); Expanded card bg — critical                                                                                                                   |
| `color/icon/critical`                  | `#b60203`     | color (icon fill)              | `x` glyph — `status="critical"`                                                                                                                                                                          |
| `color/icon/on-strong`                 | `#ffffff`     | color (icon fill)              | `check` glyph — `status="completed"`                                                                                                                                                                     |
| `typography/size/text/body-md`         | `16px`        | font-size                      | Step label (Standard, Expanded, Compact)                                                                                                                                                                 |
| `typography/line-height/text/body-md`  | `24px`        | line-height                    | Step label                                                                                                                                                                                               |
| `typography/weight/semibold`           | Semibold      | font-weight                    | Step label                                                                                                                                                                                               |
| `typography/size/text/body-sm`         | `14px`        | font-size                      | Step description (Expanded only)                                                                                                                                                                         |
| `typography/line-height/text/body-sm`  | `22px`        | line-height                    | Step description                                                                                                                                                                                         |
| `typography/weight/regular`            | Regular       | font-weight                    | Step description                                                                                                                                                                                         |
| `typography/font-size/text-base`       | `16px`        | font-size                      | Marker number (Standard, Expanded)                                                                                                                                                                       |
| `typography/font-size/text-xs`         | `12px`        | font-size                      | Marker number — `status="disabled"`                                                                                                                                                                      |
| `typography/size/text/interaction-sm`  | `14px`        | font-size                      | Marker number (Compact)                                                                                                                                                                                  |
| `typography/font-weight/font-semibold` | Semibold      | font-weight                    | Marker number (all sizes)                                                                                                                                                                                |
| `typography/font-family/font-base`     | Haffer        | font-family                    | Marker number (all sizes) and step label/description. Figma preview renders Inter for Standard/Expanded/Disabled marker digits — treated as a Figma font-registration quirk. Implementation uses Haffer. |

### Hardcoded values

Values Figma is not binding to a variable **and** that the hidden-token check ruled out. Flagged in Open questions so the tokens owner can decide whether to promote.

| Raw value | CSS property  | Applies to                                                      |
| --------- | ------------- | --------------------------------------------------------------- |
| `40px`    | width, height | Standard marker frame; completed/critical icon disc frame       |
| `2px`     | height, width | Bar segment thickness (height on horizontal, width on vertical) |
| `60px`    | height        | Vertical bar segment length between adjacent step markers       |
| `46px`    | height        | Standard step row height                                        |
| `78px`    | height        | Expanded step row/card height                                   |
| `24px`    | height        | Compact step row height                                         |

### Dimension-affecting asymmetries

| Property       | Variants that bind it                                                           | Variants that DON'T                                                      | Intent (consumer-visible size difference? y/n)                                                                                |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `padding`      | `size="expanded"` card                                                          | `size="standard"`, `size="compact"`                                      | n — padding is part of the Expanded card chrome only; Standard/Compact are padding-free by design.                            |
| `border-width` | Expanded cards (every status); Standard & Compact markers                       |                                                                          | n — every Expanded card binds the same 1 px border width; only the colour varies by status. No layout shift between statuses. |
| `gap` (parent) | Horizontal (all sizes) and Expanded-Vertical bind 12 px (`space/component/300`) | Compact-Vertical and Standard-Vertical bind 8 px (`space/component/200`) | n — deliberate: vertical variants compress tighter except Expanded whose card chrome needs breathing room.                    |

## Reference screenshots

User captures the following from Figma and drops them into `./screenshots/` before running `review-component-spec`.

- ![standard-horizontal](./screenshots/size-standard-direction-horizontal.png) — full stepper, 5 steps, mixing upcoming/current/completed/critical/disabled statuses
- ![standard-vertical](./screenshots/size-standard-direction-vertical.png) — same step mix, vertical layout
- ![compact-horizontal](./screenshots/size-compact-direction-horizontal.png) — marker + inline label, horizontal
- ![expanded-horizontal](./screenshots/size-expanded-direction-horizontal.png) — card chrome, with label + description visible on Current
- ![expanded-vertical](./screenshots/size-expanded-direction-vertical.png) — card chrome, vertical
- ![step-states](./screenshots/step-states.png) — a single Standard step rendered in all five statuses plus hover/pressed on upcoming + completed

## Open questions & gaps

1. ~~Focus style is unresolved in Figma.~~ **Resolved 2026-10-22:** use the larger outer ellipse (`27269:1868` + `27269:1875`) that encloses marker + label. Rationale: the whole marker+label is the interactive target, so the focus ring should match the actual hitbox rather than only the marker. Designer sticky note's "kun rundt sirkelen" option is rejected.
2. ~~Haffer vs Inter inconsistency.~~ **Resolved 2026-10-22:** use Haffer for all text (labels, descriptions, marker digits across every size). The Inter rendering in Figma's preview on Standard/Expanded/Disabled marker numbers is a Figma font-registration quirk, not a design intent. Designer out sick — Slack confirmation pending but direction is locked.
3. ~~Critical label colour not applied.~~ **Resolved 2026-10-22:** re-checked Figma — the Critical variant does bind `color/text/critical` on its label (previous audit mistake). Table updated. Also confirmed Disabled binds `color/text/disabled` on its label (not just the marker number).
4. ~~Standard/Vertical gap mismatch.~~ **Resolved 2026-10-22:** my earlier audit missed Compact/Vertical. Re-checked: both Compact-V and Standard-V bind 8 px, while all horizontal variants and Expanded-V bind 12 px. Pattern is deliberate — vertical compresses tighter unless the card chrome needs room. Table updated.
5. ~~Raw dimensions should probably be tokens.~~ **Partially resolved 2026-10-22:** Compact marker radius normalised to `border/border-radius/rounded-full` (zero visual change, matches SD3 conventions). Row heights (`24/46/78px`) are left to compute naturally from content + padding in CSS — no token needed. The `40px` marker frame, `2px` bar thickness, and `60px` vertical bar segment length remain hardcoded; filing a follow-up with the tokens team is a separate task, not blocking.
6. ~~Figma component description is lorem.~~ **Resolved 2026-10-22:** confirmed via the "Retningslinjer og veiledning" screenshot that the real description is the guidelines paragraph (`19757:2979`), already captured verbatim at the bottom of this SPEC. The lorem text on `I27852:1008;27524:210` is unrelated and can be ignored.
7. ~~WCAG rows in Figma are empty.~~ **Resolved 2026-10-22:** the Accessibility section in this SPEC is the authoritative design contract, authored from WCAG + WAI-ARIA guidance for the stepper pattern. The empty Figma rows are documentation debt on the design side; when the designer fills them in, cross-check against this SPEC and reconcile.
8. ~~Non-Current Expanded card chrome was not deep-inspected.~~ **Resolved 2026-10-22:** every Expanded status has card chrome (16 px padding, 8 px radius, 1 px border). Background/border colours differ per status (see tokens table and Internal composition). One minor loose end: `status="completed"` surfaces padding/radius/border-width tokens but no explicit bg/border colour binding — the SPEC assumes transparent card chrome for Completed. Visually verify in the Figma Expanded matrix when design is back.
9. ~~Compact Current/Completed/Critical variants were not deep-inspected.~~ **Resolved 2026-10-22:** Compact mirrors Standard, with icons rendered at 14×14 (via `spacing/3.5`) instead of 20×20. Current uses the same `color/brand/primary-subtle` + `color/brand/primary-strong` as Standard; Completed renders a `check` icon on a brand-primary disc; Critical renders an `x` icon on a critical-subtle disc with a red label; Disabled is numeral-only in grey. Tokens table and Internal composition updated.

## Documentation text (verbatim from Figma)

**Retningslinjer og veiledning**

Progress Indicator brukes for å vise hvor du står i en lengre flyt. Detaljvisningen gir også informasjon til brukeren om hvilke steg som kommer, som kan gjøre det mindre friksjonsfylt å komme gjennom det aktive steget i flyten fordi man er betrygget på hva som kommer.

**Passer bra til**

Flyter som har mellom 3-5 steg

**Passer mindre bra til**

Flyter som er kortere enn 3 steg

**Designtips**

_Navigasjon via detaljvisningen_

Du kan aktivere navigasjon fra detaljvisningen, men dette er noe som bør forbeholdes flyter der brukeren kan navigere frem og tilbake uten validering eller innsending av data mellom stegene.

_Små skjermer_

Det er mulig å bruke den horisontale varianten på små skjermer, men anbefaler å heller bruker den vertikale varianten da den tar mindre plass i bredden og man unngår horisontal scrolling.

**Universell utforming**

_WCAG-krav som håndteres av SDS_ — (empty in Figma)

_WCAG-krav som må håndteres av konsumenten_ — (empty in Figma)
