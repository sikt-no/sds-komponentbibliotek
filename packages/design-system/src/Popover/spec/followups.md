# Popover — Follow-ups

Non-blocking items raised by the pipeline. Triage into issues when picked up.

## From figma.md

- **Tooltip is explicitly out of scope** and should be tracked as a separate spec; no tooltip variants / shared pieces exist on this Figma page.
- **Trigger examples in the Properties table are documentation-only** (Button / ButtonIcon / inline dashed-underline text). Place in Storybook as composition stories, not in the component API.
- **Twelve `slotOne` … `slotTwelve` slot names** in Figma collapse to one `children` prop in code; make the collapse non-ambiguous in the Code Connect mapping.
- **No open/closed states in Figma.** Visibility, dismissal, focus model, and anchor-positioning are implementation concerns not drawn in Figma.
- **No shadow / elevation token applied.** If product review wants elevation, raise with designer and coordinate with Dialog (which also hardcoded a shadow pending an elevation token).

## Designer follow-ups from decision pass (2026-11-24)

Raised while resolving the 11 blocking open questions. Not implementation-blocking (code trusts live bindings and the house token catalog), but worth cleaning up on the Figma side so the design source and the implementation stay in sync.

- **Q1 — Anatomy annotation text is stale.** The Specs frame documents `Border color: #D6D6D6` and `Border radius: 12`, but the live variable bindings resolve to `color/border/subtle` (`#E0E0E0` light / `#4D4D4D` dark) and `spacing/border/radius/md` (`8px`). Code trusts the live bindings; update the anatomy annotation to match, or re-bind the variables if `#D6D6D6` / `12` is the real design intent.
- **Q2 — Border stroke is not bound to a variable.** The popover surface renders a `1px solid` border but no Figma variable is reported for the stroke weight. Bind the Figma stroke to the matching `space/border/weight` variable (code binds to `--sd3-space-border-weight-025`).
- **Q3 — Arrow is exported as a flattened SVG.** The arrow triangle currently appears as a single flattened shape in `get_variable_defs` output. Re-draw it in Figma as two tokenised shapes (`arrow-fill` using `color/surface/default-1`, `arrow-border` using `color/border/subtle`, 1px larger than the fill) so the Figma source mirrors the implementation and theme-switch preview works in Figma too.

## From research.md

- **Inclusive Components "Popovers" article returned 404** during research. Second-pass research could try `inclusive-components.design/menus-menu-buttons/` for overlapping light-dismiss / arrow guidance.
- **WCAG 2.4.11 (Focus Not Obscured, AA)** — document the risk that an anchored popover may obscure the next focusable control after the trigger; mitigation is positional (collision flipping) or dismissal on focus leaving the popover.
- **`popover="hint"` branch** — if SD3 later adds a hover-triggered tooltip variant, that's the hint branch; different research needed, don't retrofit this component.
- **Anchored container queries re-orient the arrow on flip** (Chrome/Edge 143+ only) — if adopted, Firefox/Safari users will see the popover flip but the arrow stay on the original side. Could be gated behind `@supports (container-type: anchored)`.

## From prior-art.md

- **Legacy `@sikt/sds-popover` bundles `Popover` + `Tooltip`.** Dropping `Tooltip` from `@sikt/sd3-design-system` is a breaking change for consumers importing `Tooltip` from the legacy package — call out in the migration doc and point them at a future SD3 Tooltip or (interim) a `title` attribute / `react-aria`'s `useTooltip`.
- **Legacy `react-aria` dep falls away** when tooltip is dropped (only `useFocusWithin` is used). No SD3 action; note for the `@sikt/sds-popover` deprecation.
- **Legacy `className` lands on the trigger**, not the popover surface (surface uses `targetProps`). CSS-overriding consumers will need rewiring.
- **If this is the first SD3 component to adopt CSS anchor-positioning,** document the Safari fallback pattern in a shared place (alongside `useClosedByFallback`) so a future component with the same need can reuse the hook.
- **If the implementation picks a two-axis API (`side` + `align`),** promote those as shared types in `packages/design-system/types/index.ts` for reuse by future anchored components (Dropdown, Menu, Tooltip).
- **Legacy exposes `popover: "" | "auto" | "manual"` directly.** SD3 could either re-expose it 1:1 (lean on the platform) or default to `auto` only and hide the choice (simpler surface, less flexibility for `manual` workflows like non-dismissable onboarding tips).
- **No elevation token available** — matches Dialog's experience (hardcoded `0 4px 12px rgba(0, 0, 0, 0.1)` with a TODO). If Popover gains a shadow later, coordinate the token request with Dialog's gap.
