# ApplicationStatus — Spec

**Figma:** [ApplicationStatus](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=18312-969&m=dev)
**Component folder:** `packages/design-system/src/ApplicationStatus/`
**Replaces:** `@sikt/sds-message/ApplicationStatus`
**Last synced:** 2026-11-02

## Overview

A full-width horizontal status bar that announces application-level status (info, warning, success, critical, neutral) with an inline icon, a short message, and an optional dismiss button.

Reach for it when you need to communicate the current system status in-page (typically under the header or at the top of a main region). For inline feedback on a single user action, use `Alert`; for form-level error summaries, use `ErrorSummary`.

> **Internal use only.** This section orients readers of the SPEC file. Consumer-facing documentation uses the Documentation text section at the bottom of this file.

## Variant axes

| Axis    | Values                                    | Default         | Figma label mapping                                                                       | Notes                                                                       |
| ------- | ----------------------------------------- | --------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| variant | info, warning, success, critical, neutral | none (required) | Info → info, Warning → warning, Success → success, Critical → critical, Neutral → neutral | Legacy exposed only info + warning; success/critical/neutral are new in SD3 |

## Interaction states

Only one visual state is rendered per variant in Figma: default. The bar itself has no hover, focus, active, disabled, loading, or error states.

The dismiss button is an internal `DismissButton` (`src/_internal/DismissButton/`) that supplies its own hover / focus-visible / active states. The hover and active backgrounds tint with the per-variant accent colour (`--application-status-accent`), so dismissing a critical bar feels critical rather than neutral. The close glyph itself stays `--sd3-color-icon-primary` for legibility against the subtle backgrounds; variant signalling is carried by the border, status icon, and hover wash.

## Slots

Composed via sub-components (`ApplicationStatus.Message` / `.Description` / `.Dismiss`).

| Slot (sub-component)            | Content                                            | Constraint                                                  |
| ------------------------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| `ApplicationStatus.Message`     | Short status label rendered on the status row      | Required                                                    |
| `ApplicationStatus.Dismiss`     | Dismiss affordance on the status row               | Optional; presence of this sub-component renders the button |
| `ApplicationStatus.Description` | Expanded content rendered in a panel below the bar | Optional; presence of this sub-component renders the panel  |

## Internal composition

| Internal part  | Rendered when             | Notes                                                                                                           |
| -------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Status icon    | always                    | Picked by `variant` (see "Internal icons"); 28×28 in Figma                                                      |
| Dismiss button | `onDismiss` is provided   | Internal `DismissButton` (`src/_internal/DismissButton/`) with the close icon; calls `onDismiss` when activated |
| Expanded panel | `description` is provided | White panel below the status row; shares the top border with the status row; same border color                  |

## Icons used

### Slot icons (consumer supplies)

N/A — the component picks its own status icon based on `variant`. The consumer does not pass an icon.

### Internal icons (component renders)

The info / warning / success / critical variants use the **filled** icon exports from `@sikt/sds-icons`. The filled glyph already carries its own badge shape, so no CSS circle wrapper is needed — the SVG inherits the per-variant accent colour via `currentColor`.

The neutral variant uses the plain `FeedbackIcon` wrapped in a CSS circle badge (`--sd3-color-support-neutral-strong` background, `--sd3-color-icon-on-strong` glyph, `transform: scaleX(-1)`), mirroring the neutral treatment in sibling `StatusMessage`.

| Icon export         | Where it appears             | Notes                                                                                                |
| ------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| `InfoFilledIcon`    | status row, variant=info     | Inherits `--sd3-color-support-info-strong`                                                           |
| `AlertFilledIcon`   | status row, variant=warning  | Inherits `--sd3-color-support-warning-strong`                                                        |
| `SuccessFilledIcon` | status row, variant=success  | Inherits `--sd3-color-support-success-strong`                                                        |
| `FailedFilledIcon`  | status row, variant=critical | Inherits `--sd3-color-support-critical-strong`                                                       |
| `FeedbackIcon`      | status row, variant=neutral  | Megaphone glyph in a CSS circle badge; `transform: scaleX(-1)` + smaller font-size on the glyph span |
| `CloseIcon`         | dismiss button, when shown   | Rendered inside the internal `DismissButton` (`src/_internal/DismissButton/`)                        |

## Props / API (proposal)

```ts
export interface ApplicationStatusProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "role"
> {
  /** Status category. Drives colour and icon. */
  variant: "info" | "warning" | "success" | "critical" | "neutral";
  /** ARIA role on the outer wrapper. Default: `"status"` (polite live region). Set to `"alert"` for assertive announcements. */
  role?: "status" | "alert";
}

export interface ApplicationStatusMessageProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export interface ApplicationStatusDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ApplicationStatusDismissProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "children"
> {
  /** Accessible name for the dismiss button (localised string). Required. */
  label: string;
}
```

Composition — children are the slots:

```tsx
<ApplicationStatus variant="info">
  <ApplicationStatus.Message>
    Vedlikehold søndag kl. 02:00.
  </ApplicationStatus.Message>
  <ApplicationStatus.Dismiss label="Lukk melding" onClick={() => {}} />
  <ApplicationStatus.Description>
    <Paragraph>…</Paragraph>
  </ApplicationStatus.Description>
</ApplicationStatus>
```

## Accessibility

- **Semantic element:** `<section role="status">` on the outer wrapper by default (mirrors the legacy `@sikt/sds-message/ApplicationStatus` choice). The consumer can override to `role="alert"` via the `role` prop for assertive announcements. The dismiss control is a native `<button type="button">`.
- **Keyboard:** no new keyboard behaviour on the bar itself. The dismiss button follows standard button semantics (Tab to focus, Enter / Space to activate).
- **Screen reader / ARIA:**
  - The outer `role="status"` yields an implicit `aria-live="polite"` so updates to the status row are announced non-intrusively.
  - The status icon is decorative — status is conveyed by the message text and the live region. `@sikt/sds-icons` already ships with `aria-hidden="true"` on the root `<svg>`.
  - The dismiss button is icon-only and MUST carry an accessible name via `aria-label` (fed by the `label` prop on `ApplicationStatus.Dismiss`).
- **Focus:** focus must be visibly indicated on the dismiss button. The `Button` component supplies the focus ring; `ApplicationStatus` adds nothing.
- **WAI-ARIA pattern:** [Status role](https://w3c.github.io/aria/#status).

## Design tokens

### Figma-bound tokens

| Figma token                           | Current value (light render) | CSS property       | Applies to                                                   |
| ------------------------------------- | ---------------------------- | ------------------ | ------------------------------------------------------------ |
| `color/support/info/subtle`           | `#e6f0ff`                    | background-color   | variant=info, status row                                     |
| `color/support/info/strong`           | `#004fcf`                    | border-color       | variant=info, status row + expanded panel borders            |
| `color/support/warning/subtle`        | `#fff8eb`                    | background-color   | variant=warning, status row                                  |
| `color/support/warning/strong`        | `#946200`                    | border-color       | variant=warning, status row + expanded panel borders         |
| `color/support/success/subtle`        | `#cff7e2`                    | background-color   | variant=success, status row                                  |
| `color/support/success/strong`        | `#096638`                    | border-color       | variant=success, status row + expanded panel borders         |
| `color/support/critical/subtle`       | `#ffeae9`                    | background-color   | variant=critical, status row                                 |
| `color/support/critical/strong`       | `#b60203`                    | border-color       | variant=critical, status row + expanded panel borders        |
| `color/support/neutral/subtle`        | `#e5e5e5`                    | background-color   | variant=neutral, status row                                  |
| `color/support/neutral/strong`        | `#4d4d4d`                    | border-color       | variant=neutral, status row + expanded panel borders         |
| `color/surface/default-1`             | `#ffffff`                    | background-color   | expanded panel                                               |
| `color/text/primary`                  | `#0a0132`                    | color              | message text (all variants)                                  |
| `space/component/300`                 | `12px`                       | gap, padding-block | status row                                                   |
| `space/component/600`                 | `24px`                       | padding-inline     | status row                                                   |
| `space/component/1200`                | `48px`                       | padding-inline     | expanded panel                                               |
| `space/border/weight/025`             | `1px`                        | border-width       | status row borders, expanded panel bottom/left/right borders |
| `Text/body-md-semibold` (composite)   | Haffer Semibold 16 / 24      | font               | message text                                                 |
| `typography/size/text/body-md`        | `16px`                       | font-size          | message text                                                 |
| `typography/weight/semibold`          | `semibold`                   | font-weight        | message text                                                 |
| `typography/line-height/text/body-md` | `24px`                       | line-height        | message text                                                 |

### Hidden-token values

No hidden-token bindings were discovered during the hidden-token check. All colour values resolve through the published `color/support/*/strong` and `color/support/*/subtle` tokens (per-theme values live in `packages/design-tokens/src/figma/color-themes/*.tokens.json`).

### Hardcoded values

Values Figma does not bind to a variable and that the hidden-token check ruled out.

| Raw value | CSS property  | Applies to                                                                                                    |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| `28px`    | width, height | status icon badge (all variants). No matching `icon/*` or `space/*` size token found in the catalog           |
| `116px`   | height        | expanded panel. Appears to be a Figma mock-up constraint — real content should drive panel height             |
| `16px`    | padding-block | expanded panel. Matches `space/component/400 = 16` but Figma did not bind it                                  |
| `594px`   | width         | outer wrapper. Showcase width in Figma — the real component should be fluid / full-width                      |
| `0px`     | border-width  | outer wrapper (`mode-dependent/dynamic-border-weight-01`). Effectively unused; borders live on inner elements |

### Dimension-affecting asymmetries

No cross-variant asymmetries in `border-width`, `padding`, `outline`, or `gap` — every variant renders the status row with the same 1px border, 12px/24px padding, and 12px gap.

Minor Figma inconsistencies to be aware of (not expected to affect layout but worth noting):

- The `success`, `critical`, and `neutral` variants carry `min-height: 32px` on the inner Content block; `info` and `warning` do not. Likely a Figma oversight — the implementer can equalise.
- The `critical` variant's outer wrapper border token is `color/border/critical` while every other variant uses `color/support/<variant>/strong`. Both resolve to the same hex (`#b60203`) in the light render but refer to different tokens — the implementer should normalise to `color/support/critical/strong` for consistency.

## Reference screenshots

- ![variant-info](./screenshots/variant-info.png) — node `18312:970`
- ![variant-warning](./screenshots/variant-warning.png) — node `18312:976`
- ![variant-success](./screenshots/variant-success.png) — node `31508:636`
- ![variant-critical](./screenshots/variant-critical.png) — node `31508:644`
- ![variant-neutral](./screenshots/variant-neutral.png) — node `31508:652`
- ![all-variants](./screenshots/all-variants.png) — node `18312:969` (full page)

## Open questions & gaps

1. ~~**`role` for the `critical` variant.**~~ **Resolved 2026-11-02:** expose a `role` prop (`"status" | "alert"`) with default `"status"`. Consumer picks per instance; no automatic escalation based on `variant`.
2. ~~**Dismiss button theme per variant.**~~ **Resolved 2026-11-02:** keep `<Button variant="tertiary">` main theme for all variants. No per-variant theme switching.
3. ~~**Neutral variant icon name.**~~ **Resolved 2026-11-02:** use `FeedbackIcon` from `@sikt/sds-icons`, matching sibling SD3 `StatusMessage`. The circle badge is rendered in CSS (background + border-radius), not baked into the SVG, so the plain unfilled icon exports (`InfoIcon`, `AlertIcon`, `SuccessIcon`, `FailedIcon`, `FeedbackIcon`) are used. See "Internal icons" above.
4. ~~**Expanded panel UX.**~~ **Resolved 2026-11-02:** always-visible when `description` is provided. No built-in disclosure control; no `isOpen` state.
5. ~~**Expanded panel height (`116px`).**~~ **Resolved 2026-11-02:** content-driven, no `min-height` or `max-height`. Panel grows with its content.
6. ~~**Outer wrapper width (`594px`).**~~ **Resolved 2026-11-02:** full width of parent (`width: 100%`). The `594px` in Figma is a showcase constraint only.
7. ~~**Dismiss button padding (`6px`).**~~ **Resolved 2026-11-02:** use an internal `DismissButton` (`src/_internal/DismissButton/`), not `Button`. Two reasons: (a) the dismiss affordance is a shared pattern that other dismissable components (toasts, banners, future `StatusMessage`/dialog work) will consume, so it lives in `_internal` rather than being inlined per component; (b) the per-variant accent-aware hover/active is a design intent that `<Button variant="tertiary">` cannot express without overrides. 32×32 (`--sd3-space-component-800`), icon-only, consumer supplies the accessible name via `dismissLabel`.
8. ~~**Alert icon badge size (`28px`).**~~ **Resolved 2026-11-02:** use the `*FilledIcon` exports (badge baked into the SVG) sized at `1em × 1em` with `font-size: var(--sd3-typography-size-application-lg)`. Scales with text, no raw px. Neutral is the exception and uses a CSS circle badge around `FeedbackIcon`.
9. ~~**Expanded panel padding-block (`16px`).**~~ **Resolved 2026-11-02:** use `--sd3-space-component-400` in CSS. Figma file should re-bind the token on the Notification Banner frame — follow-up for the designer; implementation uses the published token in the meantime.
10. ~~**Surface-area delta vs. legacy.**~~ **Resolved 2026-11-02:** drop `callToAction`. Follow Figma strictly. Migration path for legacy consumers is to move the action into `description` or use the dismiss affordance.

## Documentation text (verbatim from Figma)

The Figma page does not carry explanatory prose for the component itself. The three internal/related component descriptions it does expose are:

> **info-filled** (node 31680:10410) — Kun for bruk i inline message.
>
> info, information

> **alert-filled** (node 31680:10272) — Kun for bruk i inline message.
>
> alert, warning

> **success-filled** (node 31680:10181) — Kun for bruk i inline message.
>
> success, check, checkmark

> **failed-filled** (node 31679:21547) — Kun for bruk i inline message.
>
> failed, removed, failure, error

> **ButtonIcon** (node 25870:6071) — ButtonIcon har tema "main" som default. Dette kan endres til "neutral" eller "critical" ved å gå til Apperance i høyre menyen og trykke "Apply variable mode". Ikonet kan byttes ut, eneste unntaket er "loading" state.

> **close** (node 31680:9998) — close, cancel, x
