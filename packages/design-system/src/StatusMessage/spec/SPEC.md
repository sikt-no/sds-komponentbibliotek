# StatusMessage — Spec

**Figma:** [Status Message](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=31360-594&p=f&m=dev)
**Component folder:** `packages/design-system/src/StatusMessage/`
**Replaces:** `@sikt/sds-alert`, `@sikt/sds-application-status`, `@sikt/sds-error-summary`, `@sikt/sds-guide-panel`
**Last synced:** 2026-09-15

## Overview

A boxed message that highlights important information (feedback on an action, a form-error summary, or persistent guidance) in a visually contained region separated from the surrounding page content.

Reach for it when a message needs its own container and a semantic tone (success, failure, warning, info, neutral). It is the single component behind the previously separate Alert, Application Status, Error Summary and Guide Panel patterns — consumers compose those experiences by choosing a `variant` and, when needed, adding a `Body` region for buttons, forms or link lists that span the full width.

> **Internal use only.** This section orients readers of the SPEC file (implementers, reviewers). Consumer-facing docs come from the "Documentation text (verbatim from Figma)" section at the bottom.

## Variant axes

| Axis      | Values                                             | Default    | Figma label mapping                                                      | Notes                                                             |
| --------- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `variant` | `success`, `failure`, `warning`, `info`, `neutral` | `info`     | Success / Failure / Warning / Info / Neutral (labels already in English) | Drives background, border and icon color + which icon is rendered |
| `size`    | `standard`, `compact`                              | `standard` | Standard / Compact                                                       | Changes body typography and icon-container top padding            |

## Interaction states

The container itself has a single visual state — there is no hover, focus, active or disabled rendering on the StatusMessage root in Figma. Internal parts carry their own states:

- **Links or interactive content inside `Description` or `Body`:** consumer-supplied; the surrounding element inherits normal document focus behaviour.

## Slots

| Slot          | Content                                       | Constraint                                                                      |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------------- |
| `Title`       | Short heading text                            | Optional. Semibold, rendered in the text column next to the icon                |
| `Description` | Descriptive prose                             | Optional. Regular weight, rendered in the text column directly under the Title  |
| `Body`        | Buttons, forms, link lists, arbitrary content | Optional. Full-width row below the message block — starts at the container edge |

At least one of `Title` or `Description` should be provided so the message has content. `Body` is a container for interactive/slot content and does not have to align with the text column.

## Internal composition

| Internal part  | Rendered when | Notes                                                                                                 |
| -------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| Icon container | Always        | Circular pill; background = variant "strong" color; contains the variant-specific icon                |
| Message block  | Always        | Horizontal row: icon + text column                                                                    |
| Text column    | Always        | Vertical stack of Title + Description                                                                 |
| Body region    | `Body` used   | Full-width row below the message block. Starts at the container's inline padding, not the text column |

## Icons used

### Slot icons (consumer supplies)

None. The icon is always chosen by the component from `variant`; consumers do not supply icons for the message itself. Icons inside a consumer-authored `Body` or `Description` are the consumer's responsibility.

### Internal icons (component renders)

| Icon name      | Where it appears                  | Notes                                                                                                                  |
| -------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `check-circle` | Icon container, `variant=success` | Glyph color = white (`color/icon/on-strong`)                                                                           |
| `x-circle`     | Icon container, `variant=failure` | Glyph color = white                                                                                                    |
| `warning`      | Icon container, `variant=warning` | Glyph color = dark (`color/icon/primary`) for contrast on the yellow "strong" fill                                     |
| `info`         | Icon container, `variant=info`    | Glyph color = white                                                                                                    |
| `megaphone`    | Icon container, `variant=neutral` | Glyph color = white; component applies a horizontal mirror transform (Figma renders it with `-scale-y-100 rotate-180`) |

## Props / API (proposal)

```ts
export interface StatusMessageProps {
  /** Semantic tone of the message. Chooses colors and the internal icon. */
  variant?: "success" | "failure" | "warning" | "info" | "neutral";
  /** Density. `compact` uses smaller body text and tighter icon alignment. */
  size?: "standard" | "compact";
  /** Optional short heading rendered above the body. */
  title?: string;
  /**
   * Compose the message from `StatusMessage.Title`, `StatusMessage.Description`
   * (text column) and `StatusMessage.Body` (full-width slot).
   */
  children?: Content;
}
```

Defaults: `variant="info"`, `size="standard"`. The component does not set `role` or `aria-live` — consumers pass them via `HTMLAttributes` spread when they want a live region.

## Accessibility

- **Semantic element:** a plain container (`<div>`). The component sets no `role` and no `aria-live` — those attributes are the consumer's decision and flow through `...rest`. Guidance for consumers:
  - `role="alert"` for failure/warning messages that must be announced immediately (implies `aria-live="assertive"`).
  - `role="status"` for success/info/neutral messages that can wait until the user is idle (implies `aria-live="polite"`).
  - Neither for persistent page furniture like a static Guide Panel that should not announce on mount or navigation.
- **Keyboard:** no keyboard interaction on the container itself.
- **Screen reader / ARIA:** the icon is decorative and must be hidden from AT (`aria-hidden="true"` on the icon, or use icons that already ship with the attribute — see [[sds-icons-aria-hidden]]). The variant tone is conveyed by the accompanying text, not by the icon.
- **WAI-ARIA pattern:** [Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) when the consumer opts in with `role="alert"`; otherwise the [live region](https://www.w3.org/WAI/ARIA/apg/practices/live-regions/) practice.

## Design tokens

### Figma-bound tokens

| Figma token                               | Current value | CSS property                   | Applies to                                                 |
| ----------------------------------------- | ------------- | ------------------------------ | ---------------------------------------------------------- |
| `color/support/success/subtle`            | `#cff7e2`     | background-color               | root, `variant=success`                                    |
| `color/support/success/strong`            | `#096638`     | border-color, background-color | root border + icon container, `variant=success`            |
| `color/support/critical/subtle`           | `#ffeae9`     | background-color               | root, `variant=failure`                                    |
| `color/support/critical/strong`           | `#b60203`     | border-color, background-color | root border + icon container, `variant=failure`            |
| `color/support/warning/subtle`            | `#fceed2`     | background-color               | root, `variant=warning`                                    |
| `color/support/warning/strong`            | `#ffb700`     | border-color, background-color | root border + icon container, `variant=warning`            |
| `color/support/info/subtle`               | `#e6f0ff`     | background-color               | root, `variant=info`                                       |
| `color/support/info/strong`               | `#004fcf`     | border-color, background-color | root border + icon container, `variant=info`               |
| `color/interaction/neutral/default`       | `#e5e5e5`     | background-color               | root, `variant=neutral`                                    |
| `color/icon/secondary`                    | `#595959`     | border-color, background-color | root border + icon container, `variant=neutral`            |
| `color/text/primary`                      | `#0a0132`     | color                          | title, body                                                |
| `color/icon/on-strong`                    | `#ffffff`     | color                          | icon glyph, all variants except `warning`                  |
| `color/icon/primary`                      | `#0a0132`     | color                          | icon glyph, `variant=warning`                              |
| `space/component/400`                     | `16px`        | padding-inline                 | root                                                       |
| `space/component/300`                     | `12px`        | padding-block                  | root                                                       |
| `space/component/200`                     | `8px`         | gap                            | root (between message block and Body slot), message block  |
| `space/component/100`                     | `4px`         | padding-top                    | icon container, `size=compact`                             |
| `space/component/050`                     | `2px`         | padding-top, gap               | icon container `size=standard`; text column (title → body) |
| `layout/padding/01`                       | `2px`         | padding                        | icon container inner (`.Alert-Icon`)                       |
| `spacing/border/radius/md`                | `8px`         | border-radius                  | root                                                       |
| `layout/radius/16`                        | `999px`       | border-radius                  | icon container (pill)                                      |
| `mode-dependent/dynamic-border-weight-01` | `0` (light)   | border-width                   | root — resolves non-zero in high-contrast mode (see Q6)    |
| `typography/size/text/body-lg`            | `18px`        | font-size                      | title, body, `size=standard`                               |
| `typography/line-height/text/body-lg`     | `28px`        | line-height                    | title, body, `size=standard`                               |
| `typography/size/text/body-md`            | `16px`        | font-size                      | title, body, `size=compact`                                |
| `typography/line-height/text/body-md`     | `24px`        | line-height                    | title, body, `size=compact`                                |
| `typography/weight/semibold`              | `600`         | font-weight                    | title                                                      |

### Hardcoded values

| Raw value          | CSS property | Applies to                                                              |
| ------------------ | ------------ | ----------------------------------------------------------------------- |
| `pt: 1px, pb: 3px` | padding      | Warning icon inner padding (asymmetric to visually center the triangle) |

### Dimension-affecting asymmetries

| Property           | Variants that bind it                                                              | Variants that DON'T                     | Intent (consumer-visible size difference? y/n)                              |
| ------------------ | ---------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------- |
| `border-width`     | all (via `mode-dependent/dynamic-border-weight-01`, resolves to `0` in light mode) | none                                    | n — token resolves uniformly; borders appear in HC mode across all variants |
| Icon-inner padding | `success`, `failure`, `info`, `neutral` (`layout/padding/01` = 2px all sides)      | `warning` (asymmetric `pt:1 pb:3 px:2`) | n intended — visual centering only. Should not change layout box            |

## Reference screenshots

Capture from Figma into `packages/design-system/src/StatusMessage/spec/screenshots/`:

- ![variant-success-standard](./screenshots/variant-success-standard.png) — node `25912:1617`
- ![variant-failure-standard](./screenshots/variant-failure-standard.png) — node `25912:1626`
- ![variant-warning-standard](./screenshots/variant-warning-standard.png) — node `31360:1142`
- ![variant-info-standard](./screenshots/variant-info-standard.png) — node `31360:1156`
- ![variant-neutral-standard](./screenshots/variant-neutral-standard.png) — node `31406:1571`
- ![size-compact-success](./screenshots/size-compact-success.png) — node `31442:543`
- ![example-error-summary](./screenshots/example-error-summary.png) — node `31377:387`
- ![example-alert](./screenshots/example-alert.png) — node `31377:907`
- ![example-guide-panel](./screenshots/example-guide-panel.png) — node `31377:1060`

## Open questions & gaps

1. **Border-width in high-contrast mode.** `mode-dependent/dynamic-border-weight-01` resolves to `0` in the current mode, so the border is invisible and only the subtle background carries the semantic color. In HC mode it resolves non-zero. Worth double-checking with the tokens owner that this is the intended fallback behaviour for all five variants — and that `border-color` should always be declared so HC mode picks up the correct stroke automatically.

### Resolved during spec review (2026-09-15)

- Title rendering: presence of the `title` prop controls it — no explicit `showTitle` toggle.
- Neutral variant: keep the `neutral` name; the "Information" body copy in the swatch is placeholder.
- Neutral icon container: use the same intrinsic sizing as the other variants (24px inner icon + `layout/padding/01`).
- Neutral megaphone: StatusMessage applies the horizontal mirror transform itself; `@sikt/sds-icons` unchanged.
- Content contract: at least one of `Title` or `Description` should be provided.
- Sub-component set (2026-09-17): three compound sub-components — `Title` and `Description` render in the text column next to the icon; `Body` renders as a full-width row below the message block. `Description` carries the descriptive prose that used to live in `children`/`Body`; `Body` now hosts the Figma slot region for buttons, forms and link lists. `Body` intentionally does NOT inherit the text-column indent — it spans `grid-column: 1 / -1` so that CTAs and forms use the full width available inside the container.
- Compact size: keep — product surfaces will consume it.
- Body font weight: Haffer Regular (400) accepted as default; no explicit token binding required.
- Live-region role: dropped as a component-owned concern during MR review (2026-09-17). The reviewer flagged `announce` as a wrapper around `aria-live` with a home-baked `announce→role` mapping. Consumers now pass `role` and/or `aria-live` directly via the `HTMLAttributes` spread; the component sets neither.
- Icon glyph size: driven by `font-size` on the pill (`[data-part="icon"]`), not `width`/`height` on the SVG. Default variants use `--sd3-typography-size-application-lg` (24px, matches Figma's 24px icon); `neutral` overrides to `--sd3-typography-size-text-interaction-lg` (18px). The pill itself keeps explicit `width`/`height` for a stable shape across variants. See [[typography-tokens-on-icons]] and MR review (2026-09-17).

## Documentation text (verbatim from Figma)

**Status message — introduksjon (fra `content`-rammen 31363:1725):**

> Dette komponentet fremhever viktig informasjon i en tydelig avgrenset boks som skiller seg ut fra resten av innholdet. Den kan gi tilbakemelding på handlinger brukeren har utført, oppsummere feil i et skjema, eller vise veiledning og retningslinjer som er en fast del av siden.

**Slot-veiledning (fra `Show slot`-seksjonen):**

> Det er 36px padding på venstre side av slot for å sikre at innholdet kommer på linje med tittel og tekst. Juster ved behov.

**Error summary (fra eksempel 31377:387):**

> ErrorSummary brukes for å gi tilbakemeldinger på formelle feil.
>
> Det vanligste er å validere hvert enkelt felt i skjemaet når man går videre, og flagge eventuelle feil underveis med feilmeldinger på den enkelte komponenten. Man kan enten trigge ErrorSummary allerede når første feil oppstår, eller man kan holde tilbake bruken av denne komponenten inntil brukeren forsøker å fullføre oppgaven, for eksempel sende inn et skjema, lagre endringer eller gå videre til neste side.

Passer bra til: _Hjelpe brukeren med å korrigere flere formelle feil i et skjema._
Passer mindre bra til: _Situasjoner der man har kun ett skjemafelt som kan ha formelle feil — her bør man i stedet gi gjeldende felt fokus direkte, slik at brukeren får kortest mulig vei til å rette feilen._

**Alert (fra eksempel 31377:907):**

> Alerts brukes for å gi umiddelbar tilbakemelding på brukerens handlinger. De bør plasseres i kontekst av handlingen som utføres, og ikke legge seg oppå annet innhold.

> Det finnes 2 typer Alerts, Success og Failure. Success brukes for å gi tilbakemelding om at en handling har blitt utført. Failure brukes for å gi tilbakemelding om at en handling ikke har blitt utført. Den brukes ikke for å gi tilbakemelding om formelle feil.

**Guide panel (fra eksempel 31377:1060):**

> Denne komponenten brukes for å betrygge eller gi tilleggsinformasjon til en oppgave eller flyt. Dette kan være nyttig i tilfeller der brukertesting viser at det oppstår problemer i en arbeidsflyt, i situasjoner der man kan gjøre permanente endringer, der det finnes mulige feilkilder som f.eks automatisert henting av data, eller der det kreves manuell validering. Husk at skriftlig veiledning ikke er et alternativ til gode, forståelige brukeropplevelser.

> Det finnes to nivåer av denne komponenten, info og warning.

> Det finnes ikke en Critical-versjon av infoboksen, da vi kun ønsker å benytte det nivået/den fargen når vi vet at det har oppstått feil.

**Alle tre eksempler bærer notatet:** _"Bygget på Status Message komponentet"_ — Error summary, Alert og Guide panel er alle sammensatt fra StatusMessage.
