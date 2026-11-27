# Popover — Prior-art observations

**Replaces:** `@sikt/sds-popover`
**Captured:** 2026-11-24

## Legacy @sikt/sds-* surface

### @sikt/sds-popover

Source: `packages/popover/src/Popover.tsx`, `packages/popover/src/popover.css`, `packages/popover/README.md`, `packages/popover/stories/Popover.stories.tsx`, `packages/popover/src/Popover.test.tsx`.

The legacy package ships **two exports from one implementation**: `Popover` and `Tooltip`. `Tooltip` is `(props) => <Popover {...props} tooltip />`; the shared implementation branches on an internal `tooltip` boolean that the public surface hides behind the `Tooltip` wrapper. The scope-note constraint says tooltip is out of scope for SD3 — the bullets below distinguish popover-specific and tooltip-specific behaviour so the designer can confirm the split.

| Prop                     | Required | Type (as declared)                            | Notes                                                                                                                                                                     |
| ------------------------ | -------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`               | yes      | `ReactNode`                                   | The **trigger** element content. Legacy renders a `<button class="sds-popover">` around it.                                                                               |
| `target`                 | yes      | `ReactNode`                                   | The **content** shown inside the popover. Legacy renders a `<span class="sds-popover__target">` around it. Naming is inverted vs. Figma (Figma calls the content `slot`). |
| `popover`                | no       | `"" \| "auto" \| "manual"` (default `"auto"`) | Pass-through to the native HTML `popover` attribute (auto = light-dismissable; manual = programmatic only).                                                               |
| `anchor`                 | no       | `boolean` (default `true`)                    | Toggles CSS anchor-positioning via `anchor-name` / `position-anchor` / `position-try`. When false, the surface falls back to default `popover` placement.                 |
| `onClick`                | no       | `(e: MouseEvent) => void`                     | Forwarded to the trigger `<button>`.                                                                                                                                      |
| `targetProps`            | no       | `HTMLAttributes<HTMLElement>`                 | Pass-through onto the content `<span>`. Legacy's only way to put e.g. a `data-*` or `aria-*` on the popover surface.                                                      |
| `targetRef`              | no       | `RefObject<HTMLElement \| null>`              | Imperative handle on the content `<span>`.                                                                                                                                |
| `className`              | no       | `string`                                      | Applied to the **trigger button** (not the content span).                                                                                                                 |
| `...rest`                | —        | `HTMLAttributes<HTMLButtonElement>`           | Spread onto the trigger `<button>`.                                                                                                                                       |
| `tooltip` (undocumented) | no       | `boolean` (default `false`)                   | Internal-only; the `Tooltip` export sets this. Changes focus/hover behaviour (see below).                                                                                 |

- Slots: `children` (trigger), `target` (content). No named sub-components; every call site hand-rolls composition.
- Behaviours not visible in figma.md:
  - **Trigger is forced to `<button class="sds-popover">`** with a `text-decoration: underline dotted` style. This matches Figma's "Inline tekst" documentation example but is baked into the component — there is no way to use e.g. a plain `<Button>` or icon-only trigger without opting out of the component. Figma's Properties table lists Button, ButtonIcon and inline-text triggers; the legacy API only supports the last.
  - **Anchor positioning is CSS-native** via `anchor-name: --popover-anchor-${useId()}` on the trigger and `position-anchor` + `position-try: flip-block, flip-inline, flip-block flip-inline` on the content. No Floating UI / Popper dependency. Position hard-codes `top: anchor(bottom); left: anchor(left)` (below the trigger, left-aligned) — the twelve Figma arrow placements are **not** supported by the legacy CSS.
  - **No arrow rendering.** Legacy has no triangle, no `::before`/`::after`, no SVG. Figma 3.0 adds the arrow as mandatory anatomy.
  - **Light dismiss comes free from the native `popover` attribute** (auto). No Esc handler is written in JS. React 19 types for the `popover` attribute are used directly (no polyfill import in the legacy package).
  - **Tooltip branch** adds `onMouseEnter` / `onMouseLeave` on the wrapper `<span>` and uses `react-aria`'s `useFocusWithin` to call `showPopover()` / `hidePopover()` on the content ref — so `Tooltip` opens on hover/focus, and its anchor-position offset is flipped (`bottom: anchor(top)` instead of `top: anchor(bottom)`). This is the hover-trigger / focus-trigger / top-side-default bundle that defines "tooltip" in the legacy package.
  - **`react-aria` dep is tooltip-only.** `packages/popover/package.json` declares `"react-aria": "^3.53.1"` solely for the `useFocusWithin` hook used by Tooltip. If SD3 Popover drops tooltip, it drops this dep too.
  - **Focus / dismiss / trap:** none. The browser's native `popover` API handles open/close/light-dismiss. There is no focus trap (consistent with popover semantics, which are not modal).
  - **Trigger-click wires `popovertarget={id}` + `useId()`.** The id is private to the component; the consumer cannot address the popover from an external button.

What's tooltip-specific vs. popover-specific in the legacy mix (for the SD3 scope split):

- **Tooltip-specific** (leave out of SD3 Popover): hover-open, focus-open, blur-close, `useFocusWithin` from `react-aria`, default placement flipped to above the trigger, the `Tooltip` named export.
- **Popover-specific** (candidate behaviour for SD3 Popover): click-to-open on an anchor, native `popover` attribute (`auto` light-dismiss, `manual`), CSS anchor positioning, `position-try` fallback, imperative ref on the surface, pass-through attrs on the surface.
- **Shared but questionable**: the assumption that Popover **owns** the trigger button. Figma 3.0 shows three different trigger shapes (Button, ButtonIcon, inline-text link) as composition examples, which implies the SD3 trigger should be consumer-supplied, not baked in. Decision belongs to the designer.

## Neighbouring SDS patterns

- **No existing SD3 component opens an overlay anchored to a trigger.** Popover would be the first. Dialog uses the native `<dialog>` top-layer but is centred, not anchored. Source: `packages/design-system/src/Dialog/src/Dialog.tsx`.
- **Dialog already uses the native invoker commands (`command="show-modal"` / `command="close"`) with `commandfor={id}`** via the SD3 `<Button>` passthrough, and conditionally loads `invokers-polyfill` as a side-effect import in the module. This is the house pattern for "consumer-owned id, declaratively opened/closed by any Button." Source: `packages/design-system/src/Dialog/src/Dialog.tsx`, `packages/design-system/src/Dialog/src/DialogClose.tsx`, `packages/design-system/package.json` (`"invokers-polyfill": "^1.0.4"`).
- **Dialog exposes an imperative escape hatch via `ref` on the root element** for cases the declarative command path cannot express (`ref.current.showModal()`, `ref.current.close("value")`). Source: `packages/design-system/src/Dialog/src/Dialog.tsx` lines 27–48.
- **Dialog ships a per-instance Safari fallback for `closedby="any"` light-dismiss** (`useClosedByFallback`) feature-detected via `"closedBy" in HTMLDialogElement.prototype`. The same pattern (feature-detect + per-instance fallback, don't fall back to a big dependency) should apply to CSS anchor-positioning / `position-try` in Safari. Source: `packages/design-system/src/Dialog/src/useClosedByFallback.ts`.
- **SD3 composition root pattern is `Object.assign(Root, { Sub, … })`** (Dialog, Details, Button all follow it). Sub-components read parent state via context when needed (`useDialogContext()` lets `Dialog.Close` pick up the parent id). Source: `packages/design-system/src/Dialog/src/Dialog.tsx`, `packages/design-system/src/Details/src/Details.tsx`, `packages/design-system/src/Button/src/Button.tsx`.
- **SD3 variant data is on a `data-variant` attribute**, size on `data-size`, with a single base class per component — enabling `[data-variant=…]` selectors in CSS. Seen across Button, Badge, InlineMessage, Avatar, List, ApplicationStatus. For Popover the equivalent would be `data-placement` (or whichever axis the designer names).
- **SD3 does not depend on Floating UI, Popper, or `@radix-ui/*` beyond `react-aria-slot`.** `packages/design-system/package.json` lists only `@radix-ui/react-slot` (used for `asChild` polymorphism) alongside `@sikt/sd3-design-tokens`, `@sikt/sd3-sikt-logo`, `@sikt/sds-icons`, `invokers-polyfill`. Any floating-ui adoption for Popover would be a new runtime dep.
- **SD3 `<Button>` passes through native HTML attributes transparently**, including the (not-yet-in-React-19-types) `command` / `commandfor`. The same passthrough covers `popovertarget` / `popovertargetaction` (also native HTML attributes) at zero cost. Source: `packages/design-system/src/Button/src/Button.tsx` (full `ComponentProps<"button">` spread).
- **SD3 Details models native disclosure without any JS state** — pure `<details>` / `<summary>`, same philosophy as Dialog's native `<dialog>` and the legacy Popover's native `popover` attribute. "Lean on the platform primitive" is the house pattern. Source: `packages/design-system/src/Details/src/Details.tsx`.
- **No existing SD3 component exposes a placement/side/alignment axis.** `data-position` exists on `Button.Group` (`"left" | "right" | "split"`) for a different concept (horizontal layout of children), not for popover-to-anchor positioning. Source: `packages/design-system/src/Button/src/Button.tsx` lines 57–90.

## Shared types already in place

Nothing in `packages/design-system/types/index.ts` currently covers placement / side / alignment axes. The Figma `arrowPlacement` value space (`Top start` … `Left end`) does not match any existing union.

Candidate shared types that **do** apply to the smaller surface:

- `AriaLabelOrAriaLabelledby` — if SD3 ships a Popover close affordance analogous to `Dialog.Close`, the same compile-time guarantee would apply. Already used by Avatar and Dialog.Close via Button's accessible-name pattern.

## Divergences from Figma

Observation-only. For each: Figma proposes X, SDS convention is Y, decision for designer.

- **Variant axis is `arrowPlacement`, a 12-value compound of side × alignment.**
  - Figma: single axis named `arrowPlacement` with values `Top start` / `Top center` / `Top end` / `Right start` / … / `Left end`.
  - SDS convention: single-concept axes (`variant`, `size`, `direction`), kebab-case lowercase values. No existing component uses a two-word compound value, and no existing component has a placement axis at all — this would set precedent.
  - Sources: `packages/design-system/src/Button/src/Button.tsx` (`variant`, `size`), `packages/design-system/types/index.ts`, `packages/design-system/src/Popover/spec/figma.md` (axis definition).
  - Note: SDS has no precedent. Shape options for the designer to pick from: one axis (`arrowPlacement` with 12 values, verbatim from Figma — or kebab-cased `top-start`…`left-end`); two axes (`side: "top" | "right" | "bottom" | "left"` × `align: "start" | "center" | "end"`, the Radix / Floating UI convention); a single axis named `placement` to drop the `arrow` noun from the API since the arrow is anatomy, not a prop. Any of the three works — confirm with the designer.

- **Figma's documentation Properties row lists `Button` / `Interaktiv trigger` / `Inline tekst` as anchor examples; the legacy API bakes the trigger into Popover.**
  - Figma: trigger shapes are examples in documentation, not slots of the Popover component set.
  - SDS convention: no existing SD3 component wraps or owns its own trigger (Dialog accepts open/close commands from any Button via `commandfor={id}`; it does not render the trigger itself).
  - Sources: `packages/design-system/src/Dialog/src/Dialog.tsx`, `packages/design-system/src/Popover/spec/figma.md` "Documentation text".
  - Note: Confirm the SD3 trigger is consumer-supplied (any element with `popovertarget={id}` — matching the Dialog + Invoker Commands precedent) rather than baked into the component as in legacy `@sikt/sds-popover`. This is a behaviour decision the Figma proposal does not take a position on, so the designer should confirm before SPEC.md locks it in.

- **Figma defines no open/closed states, no dismiss affordance, no focus model.**
  - Figma: static surface only.
  - SDS convention: Dialog uses the browser primitive end-to-end — `<dialog>` for top-layer + modality, `command` / `commandfor` for open/close, `closedby="any"` for Esc + click-outside, feature-detected Safari fallback. The analogous primitive for anchored overlays is the native `popover` attribute + CSS anchor-positioning (both of which the legacy package already uses).
  - Sources: `packages/design-system/src/Dialog/src/Dialog.tsx`, `packages/design-system/src/Dialog/src/useClosedByFallback.ts`, `packages/popover/src/Popover.tsx`.
  - Note: Decision belongs to the designer/implementer, not the figma extraction. Surface it so SPEC.md records the choice: native `popover` + CSS anchor-positioning (continue legacy, matches Dialog's "lean on the platform" philosophy, needs Safari fallback for `position-try`) vs. Floating UI (new dep, full cross-browser coverage out of the box, less aligned with house patterns).

- **Figma shows no close affordance; legacy has no close affordance; Dialog ships `Dialog.Close`.**
  - Figma: popover surface is a blank slot — closing is a consumer concern.
  - SDS convention: Dialog provides `Dialog.Close` as a pre-wired tertiary icon-only `<Button>` with the `close` icon, reading parent id from context, requiring `aria-label`.
  - Sources: `packages/design-system/src/Dialog/src/DialogClose.tsx`.
  - Note: Popovers are usually dismissed by clicking outside (light-dismiss) or by pressing Esc, so an inline X is less load-bearing than it is on a modal. Confirm whether a `Popover.Close` convenience sub-component is desired; if yes, mirror the Dialog.Close shape (tertiary icon-only, context-driven, required `aria-label`).

- **Twelve `slotOne`…`slotTwelve` slot names.**
  - Figma: one slot per variant (Figma limitation — slots cannot be addressed across variants).
  - SDS convention: single `children`.
  - Sources: `packages/design-system/src/Popover/spec/figma.md` already flags this as Figma-internal and recommends collapsing to one `children` prop. Confirm.

- **Legacy `target` naming vs. Figma `slot` naming vs. SDS `children` convention.**
  - Figma: the content slot is labelled `slot` on the Properties row.
  - Legacy API: `target` for the content, `children` for the trigger — inverse of what React conventions suggest.
  - SDS convention: `children` is always the main content; Dialog/Details sub-components read `children` for their body.
  - Sources: `packages/popover/src/Popover.tsx` lines 13–46, `packages/design-system/src/Dialog/src/Dialog.tsx`.
  - Note: If SD3 Popover drops ownership of the trigger (see divergence above), `children` naturally becomes the popover content and the `target` prop disappears. If SD3 keeps a wrapping trigger, the naming clash with legacy becomes a migration concern.

## Open questions

Blocking — resolve before SPEC.md is considered done.

- **Trigger ownership.** Does SD3 Popover own/render its trigger (legacy shape — forces `<button class="sds-popover">` + `text-decoration: underline dotted`) or does it accept any external trigger via `popovertarget={id}` (Dialog shape — consumer wires `<Button popovertarget="x">` or similar)? This determines whether `children` means trigger or content, whether the `target` prop exists, and whether `text-decoration: underline dotted` ships as a style.
- **Positioning strategy.** Native CSS `anchor-name` / `position-anchor` / `position-try` (continue legacy; limited Safari support for `position-try`, need per-instance JS fallback like Dialog's `useClosedByFallback`) vs. Floating UI (new runtime dep, cross-browser, breaks the "lean on the platform" pattern Dialog established). If the designer picks the CSS path, confirm the Safari fallback scope.
- **How the 12 arrow placements shape the API.** Three plausible shapes, no SDS precedent: one 12-value axis (verbatim or kebab-cased), two axes (`side` × `align`), or a `placement` prefix instead of `arrowPlacement`. Also: if the chosen positioning strategy is CSS `position-try`, the browser picks the actual placement at runtime — the prop then describes the _preferred_ placement, not a guaranteed one.
- **Default placement.** Figma's default variant is `Top start`. Legacy defaults to below-the-trigger. Dialog has no analogous decision. Confirm which Figma-listed value is the SD3 default.
- **Close affordance.** Ship a `Popover.Close` sub-component (parallel to `Dialog.Close`) or expect consumers to wire their own button with `popovertarget={id}` + `popovertargetaction="hide"`? If shipped, confirm the icon (`close`), size (`small`? — matching legacy's small surface), and variant (`tertiary`) match the Dialog.Close conventions.
- **Hover/focus-open behaviour.** The scope note says tooltip is out of scope. Confirm: SD3 Popover opens on click only (no hover-open, no focus-open), and the tooltip-shaped use case lives in a separate future `Tooltip` spec/component.

## Follow-ups

Non-blocking.

- Legacy `@sikt/sds-popover` bundles `Popover` + `Tooltip` behind one file with an internal `tooltip` boolean. Dropping `Tooltip` from `@sikt/sd3-design-system` is a breaking change for any consumer importing `Tooltip` from the legacy package — call it out in the migration doc, point them at a future SD3 Tooltip or (interim) a `title` attribute / `react-aria`'s `useTooltip`.
- Legacy `react-aria` dependency falls away when tooltip is dropped (only `useFocusWithin` is used). No SD3 action needed; just a note for the `@sikt/sds-popover` deprecation.
- Legacy Popover's `className` lands on the trigger, not the popover surface (surface uses `targetProps`). Any CSS-overriding consumer will need rewiring.
- If this is the first SD3 component to adopt CSS anchor-positioning, consider documenting the Safari fallback pattern in a shared place (e.g. alongside `useClosedByFallback`) so a future component with the same need can reuse the hook.
- If the designer picks a `side` + `align` two-axis shape, those could be promoted to `packages/design-system/types/index.ts` as `Side` / `Align` for reuse by any future anchored component (Dropdown, Menu, Tooltip).
- Legacy exposes `popover: "" | "auto" | "manual"` directly. SD3 could either re-expose it 1:1 (lean on the platform) or default to `auto` only and hide the choice (simpler surface, less flexibility for `manual` workflows like non-dismissable onboarding tips).
- Figma's "No shadow / elevation token applied" follow-up from `figma.md` matches Dialog's experience — Dialog hardcoded `0 4px 12px rgba(0, 0, 0, 0.1)` and left a `// TODO: promote to elevation token` note. If the designer later adds a shadow to Popover, the same token gap would apply; worth coordinating.
