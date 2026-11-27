# Popover — Best practices

**Component category:** Non-modal anchored overlay. Figma shows a static surface with directional arrow in twelve `arrowPlacement` positions; no modal behaviour, no selection, no listbox semantics. Closest WAI-APG pattern is **Disclosure** (button toggles visibility of related content); if the trigger is iconographic or the overlay surfaces rich interactive content with light-dismiss, treat it as a **non-modal popover** per the HTML Popover API. Tooltip is explicitly out of scope.
**Captured:** 2026-11-24

## WAI-ARIA Authoring Practices

- **Pattern:** Disclosure (Show/Hide) — https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- **Roles:** `button` on the trigger. The disclosed surface itself has no required role; use a semantic container (e.g. `<div>` with a heading inside, or `role="group"`/`role="region"` if a landmark is warranted). Do NOT use `role="dialog"` unless focus is trapped and the surface is modal. Do NOT use `role="menu"` / `role="tooltip"` — those are different patterns with different keyboard contracts.
- **Keyboard:**

| Key       | Action                                                                                                                                             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enter     | Activates the trigger; toggles popover visibility                                                                                                  |
| Space     | Same as Enter (native `<button>` behaviour)                                                                                                        |
| Tab       | Moves focus to next focusable element in DOM order (in or outside the popover) — no trap for non-modal                                             |
| Shift+Tab | Reverse Tab                                                                                                                                        |
| Escape    | Not in APG Disclosure spec, but **required** by the HTML Popover API for `popover="auto"` — dismisses the popover and returns focus to the invoker |

- **ARIA attributes:**

| Attribute                         | On element         | Value / state                                                                                                                            |
| --------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-expanded`                   | trigger `<button>` | `"true"` when popover is open, `"false"` when closed. Required by the Disclosure pattern.                                                |
| `aria-controls`                   | trigger `<button>` | ID of the popover surface. Optional per APG, but recommended so AT can jump between trigger and content.                                 |
| `aria-labelledby` or `aria-label` | popover surface    | Required only if the surface is given a landmark role or `role="group"`. Omit otherwise; the surface's heading/content provides context. |

- **Name computation:** Trigger follows standard button name computation — visible text content is the name; `aria-label` overrides; `aria-labelledby` overrides both. For icon-only triggers (the Figma "Interaktiv trigger" ButtonIcon example) an explicit `aria-label` is mandatory.

**Gap:** APG has no dedicated "popover" pattern. Disclosure covers the trigger contract but says nothing about light-dismiss, top-layer rendering, focus restoration, or arrow positioning — the HTML Popover API fills that gap. If the SD3 popover ever gains a focus trap and a modal backdrop, re-scope to the Dialog (Modal) pattern instead.

## Inclusive Components notes

Heydon Pickering's "Popovers" article returned 404 at the expected URL (`inclusive-components.design/popovers/`). No substitute article consulted within the five-call budget — flagged as a follow-up if the orchestrator wants a second-pass research call targeting a different Inclusive Components entry (e.g. "Menus & Menu Buttons", which overlaps on light-dismiss).

## Modern web platform notes

- **Use the native Popover API for visibility.** `<div popover="auto">` places the surface in the top layer above all stacking contexts, provides light-dismiss (outside click + Escape) for free, and closes any other open `popover="auto"` when a new one opens. — `viewport-aware-dropdowns` guide, `position-aware-tooltips` guide.
- **`popovertarget` establishes an implicit anchor.** `<button popovertarget="my-popover">` on a trigger + `<div id="my-popover" popover="auto">` creates both the show/hide wiring AND an implicit CSS anchor connection, so `position-area` can position the popover relative to the trigger without declaring `anchor-name` / `position-anchor` manually. — `viewport-aware-dropdowns`.
- **`position-area` + `position-try-fallbacks` replaces Floating UI's collision logic.** Declare the preferred side (`block-start`, `inline-end`, …) and the browser will flip when the popover would clip: `position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;`. Prefer logical keywords for RTL. — `viewport-aware-dropdowns`.
- **Anchored container queries re-orient the arrow on flip.** `container-type: anchored` on the popover + `@container anchored(fallback: flip-block) { … }` lets the arrow pseudo-element flip side without JS. Limited availability (Chrome/Edge 143+, no Firefox/Safari yet); treat as pure progressive enhancement. — `position-aware-tooltips`.
- **Browser-support baseline (end of 2026):**
  - Popover API — Baseline Newly Available since 2025-01-27 (Chrome 116, Edge 116, Firefox 125, Safari 17). Polyfill: `@oddbird/popover-polyfill`, feature-detect with `Object.hasOwn(HTMLElement.prototype, "popover")`, load conditionally.
  - CSS Anchor Positioning — **Limited availability**. Chrome 157 / Edge 157 (Nov 2026), Safari 27 (Sep 2026), **unsupported in Firefox**. Polyfill: `@oddbird/css-anchor-positioning`, feature-detect with `CSS.supports("anchor-name: --a")`. Caveat: polyfill does NOT support `position-area` + `position-try-fallbacks` — must use `anchor()` on inset properties instead. Caveat: polyfill does NOT support implicit anchors — must set explicit `anchor-name` / `position-anchor` pairs.
  - If using `@supports (position-area: …)` without a polyfill, DO NOT unconditionally set `inset: auto` on the popover — unsupported browsers will strand it at `(0,0)` instead of the UA-default centred placement.
- **`:popover-open` pseudo-class** targets the surface only while open — use it for open-state styling and `@starting-style` entry transitions. Polyfill emulates with `.\:popover-open`; combine via `:is(:popover-open, .\:popover-open)` or browsers without native support discard the rule.

## MDN — browser-native behaviour

- **`popover="auto"` gives light-dismiss, Escape handling, and top-layer stacking for free** — no outside-click listener, no Escape key handler, no z-index wars. — https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
- **Escape dismisses the topmost `auto` popover** natively. Don't add your own Escape handler for the popover itself — doing so risks double-dismissal and interferes with nested-popover semantics.
- **Opening a new `popover="auto"` closes any other open `auto` popover** at the same or lower nesting level. Nested popovers (popover opened from inside another popover) stack correctly as long as both are `auto`.
- **`beforetoggle` is cancelable**, `toggle` is not. Use `beforetoggle` to veto opening (e.g. if the trigger is in a transient "loading" state); use `toggle` to sync state into React/consumer code.
- **`popover="manual"`** disables light-dismiss and Escape — use only when the surface needs explicit programmatic open/close (e.g. a persistent coachmark). SD3's generic Popover should default to `auto`.
- **`popover="hint"`** is for non-interactive transient content (tooltips) — out of scope for this component per the brief.
- **Popovers rendered via the Popover API are always non-modal.** They do NOT trap focus. For a modal overlay with focus trap and inert background, use `<dialog>` with `showModal()` instead. The Figma popover is clearly non-modal (no backdrop, no trap implied).
- **No automatic focus movement on open.** Unlike `<dialog showModal()>`, opening a popover does not move focus into it. If the content needs focus (e.g. a button inside should be reachable), the consumer either places the popover's content such that the next Tab reaches it, or moves focus explicitly. Return-focus on close is handled by the browser **only** when the popover was opened via `popovertarget` and dismissed via Escape / outside click — otherwise, restore focus to the trigger manually.
- **`::backdrop` is available on popovers** as well as dialogs. The Figma spec draws no backdrop, so leave it unstyled (fully transparent by default).

## GOV.UK Design System notes

GOV.UK does not ship a Popover component. The closest patterns are **Details** (`/components/details/`) for progressive disclosure of in-flow text and **Dialog**-style patterns for modal confirmation. Neither maps cleanly to an anchored, light-dismissible floating surface. No content/copy guidance to lift.

## Focus management

- **Trigger focus ring:** inherited from the host trigger component (Button / ButtonIcon / inline link), not the popover's concern.
- **Focus trap:** **none**. This is a non-modal popover. Tab exits the popover following DOM order; that is the correct behaviour per the HTML Popover API and the Disclosure pattern.
- **Focus on open:** do NOT move focus into the popover automatically. Consumers who need autofocus (e.g. a popover containing a text input) can opt in by placing an `autofocus` attribute on the control inside, or by moving focus in a `toggle` event handler.
- **Focus return on close:** when dismissed via Escape or outside-click on a `popover="auto"`, the browser restores focus to the invoker element (the element that opened it via `popovertarget` or `showPopover({ source })`). When dismissed programmatically by consumer code, the implementer must restore focus to the trigger manually — ref the trigger, call `.focus()` after `hidePopover()`.
- **Focus-obscured risk (WCAG 2.4.11):** an anchored popover can overlap the next focusable control after the trigger. Mitigation is positional (`position-try-fallbacks` moves it out of the way) or dismissal on focus-moving-outside. Flag as a known trade-off, not a blocker.

## Implementation approach: native vs library

### Option A — Native: HTML Popover API + CSS Anchor Positioning

Build the overlay with `<div popover="auto">` and position it with `position-area` + `position-try-fallbacks`. Trigger wiring via `popovertarget`.

**Pros**

- Zero runtime JS for open/close/light-dismiss/Escape/top-layer/stacking.
- Correct non-modal semantics by construction; impossible to accidentally build a focus trap.
- Anchor positioning is declarative and framework-agnostic — SSR-safe, no layout-effect flashing.
- Arrow re-orientation via anchored container queries is CSS-only (progressive enhancement).
- Aligns with SD3's "lean on platform" posture; no new dependency on `@radix-ui/*` or Floating UI.

**Cons**

- CSS Anchor Positioning is **limited availability** at end of 2026: Chrome/Edge 157 (Nov 2026), Safari 27 (Sep 2026), no Firefox. Firefox and older Safari/Chrome will not position the popover without a polyfill. This is the single biggest risk.
- The `@oddbird/css-anchor-positioning` polyfill ships ~30 KB gzip and does not support `position-area` + `position-try-fallbacks` — collision flipping would need to be rewritten with `anchor()` on inset properties, doubling the code paths.
- No implicit anchors under the polyfill — would require explicit `anchor-name` on every trigger, generated per instance with `useId()`.
- `popover` attribute requires a React escape hatch (`{...({ popover: 'auto' } as any)}`) until `@types/react` catches up; same for `popovertarget` on the trigger.
- Browser handles focus restore only on Escape / outside-click dismiss; programmatic hides still need manual restore.
- Arrow re-flip via `@container anchored()` works in Chrome/Edge only — Firefox/Safari arrow stays on default side even if the popover flips.

### Option B — React Aria Components (`react-aria-components` Popover + Dialog)

Adobe's react-aria-components exposes `<Popover>` + `<Dialog>` primitives with built-in positioning (via a Floating UI-style engine), focus management, light-dismiss, and ARIA wiring.

**Pros**

- Full ARIA and keyboard contracts shipped and tested across AT.
- Uniform cross-browser positioning today — no anchor-positioning gap in Firefox.
- Already used elsewhere in SD3 (Pagination, I18nProvider), so no new vendor.
- Handles portaling, focus return, Escape, outside-click out of the box.

**Cons**

- The `<Dialog>` name is misleading — it is a focus-managed region that is appropriate for popover content, but reviewers may mistake it for modal semantics. Needs careful configuration (`isDismissable`, `isNonModal`).
- Positioning is done in JS (measure → position in layout effect) → brief flash on mount, worse perceived perf than CSS Anchor Positioning.
- Bundle cost: pulling `Popover` from `react-aria-components` drags in the overlay/positioning subtree. Bearable but not zero.
- Arrow positioning is DIY — library provides placement callbacks but not an arrow primitive; the component still has to math out arrow offsets per side.

### Option C — Radix UI (`@radix-ui/react-popover`)

Pros: battle-tested, good ARIA defaults, built-in `Portal`, `Arrow` primitive, `collisionBoundary` option. Cons: new dependency, Radix is in maintenance-ish mode under Vercel/WorkOS stewardship (ongoing but slower cadence), and it duplicates behaviour SD3 can increasingly get from the platform. Style primitives are unopinionated; we'd restyle everything anyway.

### Option D — Floating UI (`@floating-ui/react`) as a positioning engine only

Pros: narrowest scope — just positioning + collision, no ARIA / focus / lifecycle opinions. Pairs well with native `<div popover="auto">` for a hybrid "platform semantics + JS positioning" build (Option E). Cons: still a JS-positioned surface (no CSS-anchor declarative goodness), still a dependency.

### Option E — Hybrid: `<div popover="auto">` + Floating UI for positioning

Use the native Popover API for top-layer, light-dismiss, Escape, and focus-restore (all for free, cross-browser), and use Floating UI (`@floating-ui/react`) only for positioning (works everywhere today, including Firefox).

**Pros**

- Gets 90% of the platform benefits of Option A without the Firefox / anchor-positioning risk.
- Floating UI is the de-facto positioning engine (what Radix / React Aria use internally); well-maintained; small core.
- Arrow via `@floating-ui/react`'s `arrow` middleware is a solved problem.
- Easy to swap out: when CSS Anchor Positioning ships in Firefox (and SD3's supported-browser baseline allows it) migrate to Option A by dropping Floating UI and adding CSS rules — no API change.

**Cons**

- Two moving parts (platform + lib). Needs ~5 lines of JS to sync Floating UI's computed `x/y` onto the popover during `beforetoggle`/`toggle` and on scroll/resize.
- Still carries Floating UI's bundle cost (~4 KB gzip core + arrow middleware).

### Recommendation (framed as options, not a decision)

For SD3's current browser matrix, **Option E (hybrid: native Popover API + Floating UI)** is the lowest-regret path:

- Non-modal semantics, Escape, light-dismiss, top-layer, focus-restore all delegated to the platform — can't get wrong.
- Positioning works everywhere today, including Firefox, with a library we can delete later.
- When CSS Anchor Positioning reaches the SD3 browser floor (post-Firefox shipping it), migration to Option A is additive-then-subtractive, not a redesign.

Second choice: **Option B (react-aria-components)** if the team prefers a single vendor providing the full behaviour envelope and is comfortable with JS-measured positioning. Avoids the "pick a positioning lib" bikeshed.

Avoid pure Option A until Firefox ships anchor positioning — the polyfill's lack of `position-area` + `position-try-fallbacks` means we'd write two positioning code paths.

## Conflicts between sources

- **"Should Escape close the popover?"** — APG Disclosure pattern does not list Escape at all (its Enter/Space contract is for toggle via the trigger). HTML Popover API mandates Escape dismissal for `popover="auto"`. Lean: **Escape must close** — the APG omission reflects the generic Disclosure pattern (where disclosed content may be in-flow, not floating); for an anchored overlay in the top layer, platform behaviour wins and users expect it.
- **"Should focus move into the popover on open?"** — Inclusive Components article not reachable. APG Disclosure is silent (focus stays on trigger). HTML Popover API does not move focus. Lean: **do not move focus on open**; opt-in only (consumer sets `autofocus` on an interactive child, or moves focus from a `toggle` handler). This matches Figma, where the popover shows informational content; auto-focusing would surprise screen-reader users on a non-modal surface.

## Open questions

Blocking — resolve before SPEC.md is considered done.

- **Is the popover ever modal?** Figma shows no backdrop and no focus trap, which maps cleanly to "non-modal + light-dismiss". Confirm with design that there is no intended modal variant; if there is, the component needs a separate `isModal` axis with `<dialog showModal()>` semantics and the APG Dialog (Modal) pattern applies.
- **Should Escape restore focus to the trigger even when the popover was opened programmatically** (not via `popovertarget`)? Browsers only restore focus for `popovertarget`-invoked popovers; if consumers open the popover via `.showPopover()`, SD3 must restore focus itself. Confirm expected behaviour.

## Follow-ups

Non-blocking.

- Inclusive Components "Popovers" article was 404 during research; second-pass research could try `inclusive-components.design/menus-menu-buttons/` for overlapping light-dismiss / arrow guidance.
- WCAG 2.4.11 Focus Not Obscured (AA) — if the popover sits over the next focusable control, the control that gains focus on Tab can be obscured. Document as a known positioning concern; mitigation is `position-try-fallbacks` moving the popover out of the way or dismissal-on-focus-leaves.
- If SD3 later adds an `interestfor` / hover-triggered tooltip variant, that's the `popover="hint"` branch — different research needed, don't retrofit this component.
- Arrow re-orientation via anchored container queries is Chrome-only today. If adopted, Firefox/Safari users will see the popover flip but the arrow stay on the original side. Could gate the arrow behind `@supports (container-type: anchored)`.
