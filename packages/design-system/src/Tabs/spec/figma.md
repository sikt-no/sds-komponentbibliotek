# Tabs — Figma extraction

**Figma URL:** https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13123-21791&p=f&m=dev
**File key:** 0aelUwbn2Ivir3T2JfhdOo
**NodeId:** 13123:21791
**Captured:** 2026-11-24

## Overview

Horizontal tab bar used to navigate between separate, related views. The page contains a parent `Tabs` composition that lays out tab children in a row, and an inner `.TabsAtom` component set that renders a single tab with `size`, `selected`, and `state` variant axes.

## Documentation text (verbatim)

### Description heading (Meta)

> En kollega nevnte at en del av filene i fellesmappa hadde navnekollisjon. Det betyr at nye filer overskriver eldre. Vi må kanskje innføre en streng navnestandard, slik at ikke alt bare heter 'Dok1', 'Dok2' og så videre. Det skaper jo lett kaos. Kan du, eller noen andre, ta ansvar for å lage en kort retningslinje? Ellers sitter vi med en haug forvirrende kopier om et par måneder.

> PLACEHOLDER — this is lorem/filler copy in the Meta description slot, not real documentation for Tabs.

### Retningslinjer og veiledning

> Tabs kan benyttes for å navigere mellom forskjellig informasjon.

**Passer bra til**

> Navigasjon
> Skille flere grupper med relatert, men uavhengig informasjon/funksjonalitet
> Flere skjemaer som alle lagres ved samme knapp, som f.eks en profilside der informasjon om brukeren ligger i en tab og brukerens organisasjontilhørighet ligger i en annen tab

**Passer mindre bra til**

> Dele opp forskjellige deler av samme skjema, bruk heller ProgressIndicator
> Skjemaer der man kan mellomlagre hver side uavhengig av hverandre
> Situasjoner med automatisk lagring

### Designtips

**Vurder bruken av tabs nøye**

> Ikke bruk tabs for å skille informasjon unødig, da det er mer krevende for brukeren å huske hvilken informasjon som ligger skjult i andre tabs enn den som er åpen. Vurder heller nøye om ikke alt kan ligge på én side? Et godt argument for at det er riktig å skille informasjon med tabs er om noe informasjon eller funksjonalitet er irrelevant for noen brukere, slik at det bør være enkelt å hoppe direkte til den funksjonaliteten som de trenger.

**Tydelighet rundt lagring**

> En av de store utfordringene med tabs er situasjoner der bruk av tabs kombineres med redigering og lagring av informasjon. Det kan veldig fort bli uoversiktlig og vanskelig for brukeren å vite om endringer i én tab blir lagret når man går til én annen tab, eller huske hvilken tab som inneholdt endringer. Om du velger å kombinere tabs og redigering av data kan det ligge tekniske begrensinger for hvordan det håndteres, men det er viktig å løse det på samme måte på tvers av løsningen, og ikke benytte mange forskjellige patterns.

**Priority**

> Siden tabs kan ligge både i hovednavigasjon og inne på siden har vi to prioriteringsnivåer i komponenten: Primary og Neutral, som refererer til hvilke interaction-states de benytter for hover etc. Primary bør kun brukes i hovednavigasjon ikke inne på siden, da den fort blir visuelt tung sammen med andre komponenter og får for høy prioritering. Tilsvarende bør ikke Neutral brukes i hovednavigasjon, der blir den for lite synlig.

### Universell utforming

> –

### WCAG-krav som håndteres av SDS

> –

### WCAG-krav som må håndteres av konsumenten

> –

### Properties table (from Meta frame)

Documented props in the Meta frame's Properties section:

- `selected` (on `.TabsAtom`) — selected vs. unselected visual state
- `Icon` (on `.TabsAtom`) — optional leading icon
- `Slot` (on `.TabsAtom`) — optional trailing content region

## Variant axes

| Axis       | Values                | Default    | Figma label mapping                                      | Notes                                                                                                                                |
| ---------- | --------------------- | ---------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `size`     | `standard \| compact` | `standard` | `size=Standard` → `standard`; `size=Compact` → `compact` | Standard renders at 48px min-height with body-lg text; Compact renders at 40px min-height with body-md text. Applies to `.TabsAtom`. |
| `selected` | `true \| false`       | `false`    | `selected=True` / `selected=False`                       | Boolean on `.TabsAtom`. Selected tab gets brand-subtle fill, primary border, 2px bottom border.                                      |

The `Priority` axis mentioned in the Designtips prose (`Primary` vs. `Neutral`) is **not** represented as a Figma variant property on the component set; the docs describe it conceptually but no variant renders it. Flagged below.

## Interaction states

- `default` — selected and unselected both ship a default state.
- `hover` — only drawn for `selected=false`.
- `pressed` — only drawn for `selected=false`.
- `focus` — rendered via a hidden `Focus` overlay layer inside each variant (two inset positions depending on selected/unselected); toggled on by a `showFocus` boolean on `.TabsAtom`.
- No `disabled` state is drawn in Figma.
- No `hover`/`pressed` variant exists for `selected=true` — the selected tab appears not to change on hover.

## Slots

| Slot                                | Content                                                                                    | Constraint                                                                                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`                             | Tab text (single line)                                                                     | `whitespace-nowrap`; truncation behaviour not drawn.                                                                                                                                             |
| `icon`                              | Leading icon (24×24 for Standard, 20×20 for Compact)                                       | Consumer-supplied; placeholder in Figma shows a dashed 24×24 box.                                                                                                                                |
| `slot` (trailing)                   | Trailing content inside a single tab (e.g. a `TagCustom`) — 72×24 region next to the label | Content region on the right of the label. Example instance in Anatomy shows a Tag.                                                                                                               |
| `slot` (overflow, on `Tabs` parent) | Trailing tab slot at the end of the tab row — one extra tab or an overflow affordance      | The parent `Tabs` composition exposes a single trailing `slot` that renders Tab 4 or any consumer-supplied element (e.g. a "DotsThree" overflow tab per the "5 tabs" example in Retningslinjer). |

## Internal composition

| Internal part   | Rendered when                      | Notes                                                                                                                                                             |
| --------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab row         | Always                             | Parent `Tabs` lays out three fixed tab children + an optional trailing `slot`.                                                                                    |
| Trailing `slot` | `showSlot = true` on parent `Tabs` | In the Anatomy frame the slot renders `Tab 4`. The "5 tabs" example in Retningslinjer uses the slot for a `DotsThree` overflow tab backed by a Combobox list box. |
| Focus overlay   | `showFocus = true` on `.TabsAtom`  | Hidden-by-default 2px border rectangle inside the tab, inset `2px 2px 0 2px` for selected and pressed/hover-unselected, `2px 2px 1px 2px` for unselected-default. |

## Icons

### Slot icons

- Leading icon on each `.TabsAtom`, consumer-supplied. 24×24 in Standard, 20×20 in Compact. Toggled by `showIcon` boolean.

### Internal icons

- None. The Anatomy and "5 tabs" example show a `DotsThree` icon, but it is consumer-supplied through the trailing `slot`, not an icon the component renders itself.

## Design tokens

### Figma-bound

Collected across `.TabsAtom` (`1095:7969`) and `Tabs` parent (`26637:5431`).

| Figma token                               | CSS property                          | Applies to                                                | Current raw value    |
| ----------------------------------------- | ------------------------------------- | --------------------------------------------------------- | -------------------- |
| `color/text/primary`                      | `color`                               | tab label text                                            | `#0a0132`            |
| `color/brand/primary-subtle`              | `background-color`                    | selected tab fill                                         | `#ebe6fe`            |
| `color/interaction/primary/default`       | `border-color` (bottom)               | selected tab bottom border                                | `#7351fb`            |
| `color/border/strong`                     | `border-color` (bottom)               | unselected tab bottom border (default)                    | `#959595`            |
| `color/border/strong-hover`               | `border-color` (bottom)               | unselected tab bottom border (hover)                      | `#767676`            |
| `color/border/strong-pressed`             | `border-color` (bottom)               | unselected tab bottom border (pressed)                    | `#656565`            |
| `color/interaction/neutral/hover`         | `background-color`                    | unselected tab fill (hover)                               | `#e0e0e0`            |
| `color/interaction/neutral/pressed`       | `background-color`                    | unselected tab fill (pressed)                             | `#d6d6d6`            |
| `interaction/neutral/transparent/default` | `background-color`                    | unselected tab fill (default), parent row background      | `#00000000`          |
| `space/component/200`                     | `padding-block` (Standard), `gap`     | Standard tab padding-block; inter-slot gap                | `8px`                |
| `space/component/300`                     | `padding-inline`                      | all tab horizontal padding                                | `12px`               |
| `space/component/100`                     | `padding-block` (Compact)             | Compact tab padding-block                                 | `4px`                |
| `space/border/weight/025`                 | `border-bottom-width`                 | unselected-default + parent row bottom border             | `1px`                |
| `space/border/weight/050`                 | `border-bottom-width`                 | selected tab bottom border                                | `2px`                |
| `space/border/radius/100`                 | `border-top-left/right-radius`        | unselected hover/pressed corners                          | `4px`                |
| `layout/border-weight/regular`            | `border-bottom-width`, `border-width` | unselected hover/pressed bottom border; focus-ring border | `2px`                |
| `typography/size/text/body-lg`            | `font-size`                           | Standard tab label                                        | `18px`               |
| `typography/line-height/text/body-lg`     | `line-height`                         | Standard tab label                                        | `28px`               |
| `typography/size/text/body-md`            | `font-size`                           | Compact tab label                                         | `16px`               |
| `typography/line-height/text/body-md`     | `line-height`                         | Compact tab label                                         | `24px`               |
| `typography/weight/regular`               | `font-weight`                         | all tab labels                                            | `Regular` (400)      |
| `Text/body-lg` (text style)               | shorthand                             | Standard tab label                                        | Haffer Regular 18/28 |
| `Text/body-md` (text style)               | shorthand                             | Compact tab label                                         | Haffer Regular 16/24 |

### Hidden-token values

The Focus overlay layer in `.TabsAtom` paints with `color/focus/border`, but that binding is not surfaced by `get_variable_defs` on the atom root because the Focus layer is hidden by default. The token itself is published in all five theme files.

| Figma token          | CSS property   | Applies to                                    | Per-theme values                                                                                                                  |
| -------------------- | -------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `color/focus/border` | `border-color` | Focus overlay inside each `.TabsAtom` variant | Sikt white (light): `#004FCF`; Sikt gray (light): `#004FCF`; Sikt dark: `#005AEA`; Feide light: `#2B5FBA`; Feide dark: `#2B5FBA`. |

### Hardcoded values

| Property                                            | Raw value | Applies to                                                                                                       | Notes                                                                                                          |
| --------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `border-top-left-radius`, `border-top-right-radius` | `4px`     | `.TabsAtom` Default state (both selected and unselected) and all three statically-rendered tabs on parent `Tabs` | Hover/Pressed variants bind `space/border/radius/100` (also `4px`) for the same corners — see asymmetry below. |

### Dimension-affecting asymmetries

| Property              | Variants that bind it                                                                                                                                                                | Variants that DON'T                                                                         | Intent                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `border-top-radius`   | `size=*, selected=False, state=Hover`; `size=*, selected=False, state=Pressed` (bind `space/border/radius/100`)                                                                      | `size=*, selected=True, state=Default`; `size=*, selected=False, state=Default` (raw `4px`) | Values match (4px) today, so no visible shift, but a token change would only move Hover/Pressed and visibly desync on interaction. Flagged for the tokens owner.                                                                                       |
| `border-bottom-width` | selected-default binds `space/border/weight/050` (2px); unselected-default binds `space/border/weight/025` (1px); unselected hover/pressed bind `layout/border-weight/regular` (2px) | –                                                                                           | Intentional: selected tab has a thicker 2px bottom accent while unselected-default has a 1px bottom separator. Interaction states bump unselected back to 2px, which causes a 1px vertical shift when hovering an unselected tab — flagged for review. |
| `background-color`    | Hover/Pressed on unselected bind neutral tokens; Default on unselected binds transparent                                                                                             | –                                                                                           | Intentional.                                                                                                                                                                                                                                           |

## Reference screenshots

| NodeId     | Target path                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| 26637:5431 | packages/design-system/src/Tabs/spec/screenshots/composition-default.png      |
| 19743:1800 | packages/design-system/src/Tabs/spec/screenshots/atom-standard-selected.png   |
| 19743:1796 | packages/design-system/src/Tabs/spec/screenshots/atom-standard-unselected.png |
| 35769:1386 | packages/design-system/src/Tabs/spec/screenshots/atom-compact-selected.png    |
| 35769:1391 | packages/design-system/src/Tabs/spec/screenshots/atom-compact-unselected.png  |

## Code Connect inputs

### Tabs

- **NodeId:** 26637:5431
- **URL:** https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26637-5431
- **Variant properties:**

| Figma name                                   | Values |
| -------------------------------------------- | ------ |
| _(none — single component, no variant axes)_ |        |

- **Boolean properties:** `showSlot` (controls whether the trailing `slot` renders).
- **Instance-swap slots:** none captured from design_context; the trailing `slot` accepts arbitrary children, defaulting to a `Tab 4` instance.
- **Text properties:** none at the parent level; each inline Tab child has its own `Label` text property inherited from `.TabsAtom`.

### .TabsAtom

- **NodeId:** 1095:7969
- **URL:** https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=1095-7969
- **Variant properties:**

| Figma name | Values                        |
| ---------- | ----------------------------- |
| `size`     | `Standard \| Compact`         |
| `selected` | `True \| False`               |
| `state`    | `Default \| Hover \| Pressed` |

Note: Figma only ships the subset `{Standard, Compact} × ({selected=True, state=Default} ∪ {selected=False, state=Default|Hover|Pressed})` — selected variants have only `state=Default`.

- **Boolean properties:** `showIcon`, `showFocus`, `showSlot`.
- **Instance-swap slots:** `icon` — example: `Icon placeholder` (dashed 24×24/20×20 box).
- **Text properties:** `label` (default: `"Label"`).

## Open questions

Blocking items — SPEC.md should not be considered done while these are unanswered.

- The Meta description for Tabs is placeholder lorem text ("En kollega nevnte at en del av filene i fellesmappa …"). Needs real copy from the designer before SPEC.md can quote a one-liner.
- Designtips mentions a `Priority` axis with values `Primary` / `Neutral` and says it controls which interaction-states (hover etc.) are used, but no `Priority` variant exists on either `Tabs` or `.TabsAtom`. Is this axis planned but not yet drawn, or has the design been deprecated? If planned, which hover/pressed tokens change per Priority value?
- Border-radius on selected tabs is hardcoded `4px` while the hover/pressed states bind `space/border/radius/100`. Promote the Default states to the token, or intentional?
- Unselected tab changes bottom-border width from `space/border/weight/025` (1px) in Default to `layout/border-weight/regular` (2px) in Hover/Pressed — this shifts the label up by 1px on hover. Intentional or should both values collapse to one token?
- `color/focus/border` is a hidden token (bound on a hidden Focus layer, not surfaced by `get_variable_defs` on the atom root). Should it be promoted to a surfaced binding?
- Universell utforming and WCAG sections in Retningslinjer contain only `–` placeholders. Any WCAG requirements that SDS handles vs. the consumer? (Keyboard navigation between tabs, `role="tab"`/`role="tablist"`, `aria-selected`, `aria-controls` — none drawn, but typically required.)
- No `disabled` state is drawn. Is a disabled tab a supported state for v1, or deliberately out of scope?
- No panel / tabpanel is drawn in Figma — only the tab bar. Is the panel a separate component, or will consumers wire their own `role="tabpanel"`?

## Follow-ups

Non-blocking. Things worth remembering but not worth holding up SPEC.md on. Triage into issues later.

- Selected tabs have no Hover/Pressed variants. If a consumer re-hovers the selected tab there is no visual acknowledgement — likely intentional ("you're already there") but worth confirming.
- The "5 tabs" example in Retningslinjer combines Tabs with a Combobox list box as an overflow menu; this is a usage pattern, not a Tabs API concern, but worth capturing as a Storybook example.
- Icon placeholder in Figma is a 24×24 dashed box (`#ed9200` warning colour). Consumers must supply real icons; placeholder should not ship.
- The Meta Properties table lists only three props (`selected`, `Icon`, `Slot`) — it does not call out `size` or `state`, even though they're variant axes on `.TabsAtom`. Properties table may be out of date; defer to the component set as source of truth.
