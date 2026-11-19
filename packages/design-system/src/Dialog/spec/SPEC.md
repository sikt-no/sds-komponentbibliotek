# Dialog — Spec

**Figma:** [Dialog (27506:652)](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27506-652&m=dev), [.Content (31003:700)](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=31003-700&m=dev), [.Footer (31008:2993)](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=31008-2993&m=dev)
**Component folder:** `packages/design-system/src/Dialog/`
**Replaces:** `@sikt/sds-dialog`
**Last synced:** 2026-11-06

## Overview

A centred modal dialog built on the native `<dialog>` element with a composition-based API. Use it to interrupt the page for a confirmation, a focused form, or a destructive-action gate. For non-blocking panels (find bars, inspectors, compose panes) reach for the Popover / non-modal escape hatch instead — this spec covers the modal case.

Opened and closed declaratively through native Invoker Commands (`command="show-modal"` / `command="close"` on `<Button>`), falling back to an imperative ref escape hatch for anything the declarative path cannot express.

## Variant axes

No consumer-set variant axes.

Figma exposes a `breakpoint = Large/medium | Small` property on `.Footer`. This is a Figma expression of a **responsive rule**, not a consumer prop: when the Dialog's own width drops below 400px, footer actions stack vertically and stretch full-width. Implemented via container queries on the Dialog root, not a prop. Confirmed in the Figma component description ("Når dialogen blir mindre enn 400px i bredden, skift over til Small varianten").

## Interaction states

- **closed** — the `<dialog>` has no `open` attribute. The browser removes it from the top layer and returns focus to the trigger.
- **open (modal)** — opened with `showModal()` (triggered by `command="show-modal"` or imperative ref call). The browser renders a `::backdrop`, makes the rest of the page `inert`, traps Tab focus inside the dialog, and dismisses on `Esc` (unless `closedby="none"`).
- **dismissing** — triggered by `Esc`, light-dismiss (if `closedby="any"`), `command="close"` / `command="request-close"` on a child button, or an imperative close call. Fires `cancel` first so consumers can intercept (e.g. unsaved-changes guard).

Hover / focus / active states live on the inner `<Button>` components, not on the Dialog surface itself.

## Slots

The Dialog itself has one slot: `children`, which the consumer composes out of `Dialog.Header`, `Dialog.Content`, `Dialog.Footer`, and (optionally) `Dialog.Close` sub-components. All content structure — heading, body, action rows — is consumer-composed. Dividers are a boolean prop on Header (`divider` → bottom rule) and Footer (`divider` → top rule), matching the Figma `Divider` property on `.Header` and `.Footer`.

| Slot                         | Content                                            | Constraint                                                                                                                                               |
| ---------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Dialog > children`          | `Dialog.Header`, `Dialog.Content`, `Dialog.Footer` | The Figma look is Header → Content → Footer. Each is optional in the API; the Header should carry a heading for `aria-labelledby` to resolve.            |
| `Dialog.Header > children`   | Heading, subheading, optional `Dialog.Close`       | Padded top section. Grid places heading-area + Close on a single row. `divider` prop renders a bottom rule.                                              |
| `Dialog.Content > children`  | Body text, form fields, lists, etc.                | Padded body section. No internal layout imposed.                                                                                                         |
| `Dialog.Footer > children`   | One or more `<Button>` instances                   | Horizontal row right-aligned at ≥400px container width; stacks vertically and stretches buttons full-width at <400px. `divider` prop renders a top rule. |
| `Dialog.Close` (no children) | —                                                  | Renders the X close button pre-wired to close its parent Dialog. Takes `aria-label` for its accessible name. Typically placed inside `Dialog.Header`.    |

## Internal composition

| Internal part      | Rendered when            | Notes                                                                                                                                                                                                    |
| ------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dialog>` element | Always                   | Root. Receives the `id`, `closedby`, and all passthrough attributes. Not shown until opened.                                                                                                             |
| `::backdrop`       | While open (modal)       | Native pseudo-element. `background-color: rgb(0 0 0 / 60%)`; dismisses on click when `closedby="any"`.                                                                                                   |
| `Dialog.Header`    | Per consumer composition | `<header>` with grid layout that lays heading-area beside optional `Dialog.Close`. `divider` prop renders a 1px `--sd3-color-border-subtle` bottom border.                                               |
| `Dialog.Content`   | Per consumer composition | `<div>` padded section for body content.                                                                                                                                                                 |
| `Dialog.Footer`    | Per consumer composition | `<footer>` responsive action row. `@container (max-width: 400px)` → column with full-width buttons; otherwise → right-aligned flex. `divider` prop renders a 1px `--sd3-color-border-subtle` top border. |
| `Dialog.Close`     | Per consumer composition | Icon-only tertiary button with the `close` icon. Reads the parent Dialog id from context; closes via `command="close" commandfor={id}`.                                                                  |

The close affordance (X icon) is **not** rendered automatically. Consumers who want it place `<Dialog.Close aria-label="Lukk" />` inside `Dialog.Header` — it renders a tertiary icon-only button pre-wired to close its parent Dialog (via context, no `commandfor` boilerplate).

## Icons used

### Slot icons (consumer supplies)

None. Icons appear only when the consumer puts them into a section — typically `<Button>` with the `close` icon for the dismiss affordance.

### Internal icons (component renders)

| Icon name | Where it appears                  | Notes                                    |
| --------- | --------------------------------- | ---------------------------------------- |
| `close`   | Inside `Dialog.Close` (when used) | 28px rendered size, tertiary icon colour |

## Props / API (proposal)

Composition-based. The consumer composes everything inside the dialog; the Dialog root owns semantics and lifecycle hooks only.

```ts
export interface DialogProps {
  /**
   * Required DOM id. Lets `command="show-modal"` / `command="close"` on a <Button> target this dialog
   * via `commandfor="<id>"`. Also used as the base for internal ids (e.g. the element referenced by
   * `aria-labelledby`, if the consumer does not provide one explicitly).
   */
  id: string;
  /**
   * How the dialog can be dismissed.
   * - `"any"` (default): Esc, back gesture, and click outside.
   * - `"closerequest"`: Esc / back gesture only.
   * - `"none"`: only developer-controlled close; no light-dismiss. Esc still fires `cancel`.
   */
  closedby?: "any" | "closerequest" | "none";
  /**
   * Fires when the dialog has closed. Mirrors the native `close` event. Read `event.target.returnValue`
   * for which button / form value closed it.
   */
  onClose?: (event: Event) => void;
  /**
   * Fires before Esc / request-close / light-dismiss closes the dialog. `event.preventDefault()`
   * cancels the close — use for unsaved-changes guards.
   */
  onCancel?: (event: Event) => void;
  /** Composed content — typically `Dialog.Header`, `Dialog.Content`, `Dialog.Footer` with optional `Dialog.Divider`s between them. */
  children?: Content;
}

export interface DialogHeaderProps {
  /** Padded top section. Heading + subheading + optional `Dialog.Close`. */
  children?: Content;
  /** Render a bottom divider rule. Matches the Figma `Divider` prop on `.Header`. */
  divider?: boolean;
}

export interface DialogContentProps {
  /** Padded body section. */
  children?: Content;
}

export interface DialogFooterProps {
  /**
   * One or more Button instances. Rendered as a right-aligned horizontal row when the Dialog
   * container is ≥400px wide, stacked full-width when <400px (CSS `@container` query, no JS).
   */
  children?: Content;
  /** Render a top divider rule. Matches the Figma `Divider` prop on `.Footer`. */
  divider?: boolean;
}

export interface DialogCloseProps {
  /** Accessible name for the close button. Required — screen readers need to announce the action. */
  "aria-label": string;
}
```

Usage shape the API supports:

```tsx
<Button command="show-modal" commandfor="confirm-change">
  Åpne modal Dialog
</Button>

<Dialog id="confirm-change">
  <Dialog.Header>
    <Heading>Er du sikker på at du vil endre søknaden?</Heading>
    <Paragraph data-size="sm">Bekreft endring</Paragraph>
  </Dialog.Header>
  <Dialog.Content>
    <Paragraph>
      OBS! Du bør ikke endre søknaden etter at fristen har gått ut …
    </Paragraph>
  </Dialog.Content>
  <Dialog.Footer>
    <Button variant="primary" data-color="danger" command="close" commandfor="confirm-change">
      Ja, endre
    </Button>
    <Button variant="secondary" command="close" commandfor="confirm-change">
      Avbryt
    </Button>
  </Dialog.Footer>
</Dialog>
```

Imperative escape hatch — when declarative `command` is not expressive enough:

```tsx
const ref = useRef<HTMLDialogElement>(null);
// ref.current.showModal(); ref.current.close('saved'); ref.current.returnValue; etc.
<Dialog id="x" ref={ref}>
  …
</Dialog>;
```

Notes for the implementer (not an enlargement of the consumer surface):

- The root renders as `<dialog>`. Do NOT add `role="dialog"`, `aria-modal`, a manual focus trap, `inert` toggling, or a scripted Esc handler — the browser provides these natively.
- Set `aria-labelledby` to the id of the heading-like element inside the first `Dialog.Header / Dialog.Content / Dialog.Footer` (or let the consumer supply `aria-labelledby` explicitly via passthrough).
- Invoker Commands (`command`, `commandfor`) are Baseline since 2025-12-12. For older browser targets, conditionally load the `invokers-polyfill` package behind a `commandForElement in HTMLButtonElement.prototype` feature detect. Do not polyfill unconditionally.
- Light-dismiss (`closedby="any"`) is Limited availability — Safari does not implement it at all. Ship a small per-instance JS fallback (wired in a `useEffect` after the dialog mounts) so Safari users get the same click-outside-to-dismiss behaviour:

  ```ts
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if ("closedBy" in HTMLDialogElement.prototype) return; // native support — nothing to do
    if (closedby !== "any") return; // only "any" wants light-dismiss
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };
    let pressedOutside = false;
    const onDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    // Require press AND release outside so a text-selection drag ending on the backdrop does not dismiss.
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) dialog.close();
    };
    dialog.addEventListener("pointerdown", onDown);
    dialog.addEventListener("pointerup", onUp);
    return () => {
      dialog.removeEventListener("pointerdown", onDown);
      dialog.removeEventListener("pointerup", onUp);
    };
  }, [closedby]);
  ```

  Test both positions (press/release) against the bounding rect, not `event.target` — the `<dialog>` is also the event target for its own padding and gaps between children, so `event.target === dialog` would close on legitimate clicks inside the dialog.

- Scroll containment: `dialog:modal { overscroll-behavior: contain; }` AND `dialog::backdrop { overflow: hidden; overscroll-behavior: contain; }` — progressive enhancement. Not in Safari yet; symptom is slightly loose scroll chaining, not a correctness bug. Do NOT fall back to `overflow: hidden` on html/body.
- Responsive footer rule (<400px → stack buttons full-width) is encapsulated in `Dialog.Footer` via `@container` query on the Dialog root (`container-type: inline-size`). Consumers do not write the CSS themselves.
- No open/exit animation. Do not add `@starting-style` or `allow-discrete` transitions — dialog and backdrop appear/disappear instantly.

## Accessibility

- **Semantic element:** native `<dialog>`, opened via `showModal()` either declaratively (`command="show-modal"`) or imperatively through a ref.
- **Keyboard:**
  - `Esc` closes the dialog (unless `closedby="none"`, which fires `cancel` but keeps the dialog open so the consumer can run an unsaved-changes guard).
  - `Tab` / `Shift+Tab` cycles focus inside the dialog — native containment, no manual trap.
  - Mobile back gesture closes, same semantics as `Esc`.
- **Screen reader / ARIA:**
  - `aria-labelledby` points to the heading element the consumer places in the first `Dialog.Header / Dialog.Content / Dialog.Footer` (resolves to the dialog's accessible name).
  - When the consumer gives a body paragraph an id, `aria-describedby` can point to it. The Dialog component does not inject either attribute automatically beyond the implementer's heading-id convention.
  - Do NOT set `role="dialog"` or `aria-modal="true"` — the native modal already exposes these.
- **Focus:**
  - On open: focus moves to the first `autofocus` descendant (consumer-controlled); otherwise to the first focusable element. For destructive confirmations, `autofocus` should go on the safe action (Avbryt / Keep).
  - On close: the browser returns focus to the invoker. The component must NOT re-implement this.
- **Close affordance:** `Dialog.Close` is a native `<button>` with `aria-label` (consumer-provided, e.g. `"Lukk"`) and `command="close" commandfor={parentId}` wired automatically via context. No JS required beyond the Invokers polyfill for older browsers.
- **WAI-ARIA pattern:** [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

## Design tokens

Record of what Figma binds to the Dialog chrome (surface, corners, section padding, text styles). Button tokens inside the footer belong to `<Button>`, not Dialog.

### Figma-bound tokens

| Figma token                             | Current value | CSS property      | Applies to                                                              |
| --------------------------------------- | ------------- | ----------------- | ----------------------------------------------------------------------- |
| `color/surface/default-1`               | `#ffffff`     | background-color  | Dialog surface                                                          |
| `space/border/radius/200`               | `8px`         | border-radius     | Dialog corners                                                          |
| `space/component/600`                   | `24px`        | padding           | `Dialog.Header / Dialog.Content / Dialog.Footer` inline + block padding |
| `space/component/300`                   | `12px`        | gap               | Top block: heading row ↔ close                                          |
| `space/component/050`                   | `2px`         | gap               | Heading ↔ subheading inside a Block                                     |
| `space/component/200`                   | `8px`         | gap               | Button row gap inside a Block                                           |
| `color/text/primary`                    | `#0a0132`     | color             | Heading-sized text                                                      |
| `color/text/secondary`                  | `#595959`     | color             | Subheading / body-md text                                               |
| `typography/size/application/md`        | `24px`        | font-size         | Heading                                                                 |
| `typography/line-height/application/md` | `28px`        | line-height       | Heading                                                                 |
| `typography/weight/semibold`            | `600`         | font-weight       | Heading                                                                 |
| `typography/size/text/body-md`          | `16px`        | font-size         | Subheading                                                              |
| `typography/line-height/text/body-md`   | `24px`        | line-height       | Subheading                                                              |
| `typography/weight/regular`             | `400`         | font-weight       | Subheading                                                              |
| `icon/primary`                          | `#0a0132`     | color (icon fill) | Close icon when consumer renders one                                    |

The text-style tokens above live on consumer-provided Heading / Paragraph components; Dialog only owns surface + padding tokens.

### Hardcoded values

Values Figma is not binding to a variable **and** that the hidden-token check ruled out.

| Raw value                       | CSS property | Applies to                   |
| ------------------------------- | ------------ | ---------------------------- |
| `0 4px 12px rgba(0, 0, 0, 0.1)` | box-shadow   | Dialog surface (drop shadow) |

Figma reports the shadow as `DROP_SHADOW offset=(0,4) radius=12 color=rgba(0,0,0,0.1)` with an empty `boundVariables` object and no `effectStyleId`. No elevation/shadow token family exists in `packages/design-tokens/src/figma/**` — verified via grep. Hardcoded for now (Q1); mark with a `// TODO: promote to elevation token` comment at the declaration.

The native `<dialog>::backdrop` has no fill in Figma. SD3 default is `rgb(0 0 0 / 60%)`, matching `@sikt/sds-dialog` (Q2). No fade — appears solid the moment the dialog opens.

## Reference screenshots

Capture these from Figma and drop them into `./screenshots/` before running `review-component-spec`:

- `overview.png` — full Dialog with heading, subheading, body, two footer buttons (node `27506:652`)
- `footer-large.png` — footer at `breakpoint=Large/medium`, buttons right-aligned (node `31003:814` inside `31008:2993`)
- `footer-small.png` — footer at `breakpoint=Small`, buttons stacked full-width (node `31008:2987`)
- `header-close.png` — header showing the X close button (from node `31003:816`, `showClose=true`)
- `header-no-subtitle.png` — header without subheading (from `31003:816` with `showSubtitle=false`)

## Open questions & gaps

1. ~~Promote the drop shadow to a token?~~ **Resolved:** hardcode `0 4px 12px rgba(0, 0, 0, 0.1)` in SD3 CSS for now. Revisit when a second component needs elevation. Leave a `// TODO: promote to elevation token` note at the declaration.
2. ~~Backdrop styling.~~ **Resolved:** `::backdrop { background-color: rgb(0 0 0 / 60%); }` (same colour as `@sikt/sds-dialog`). No fade — appears solid the moment the dialog opens (see Q4).
3. ~~Tall content behaviour.~~ **Resolved:** mirror `@sikt/sds-dialog` — the `<dialog>` itself is the scroll container: `max-block-size: 100dvh; max-inline-size: 100vw; overflow: auto;`. Modern tweaks vs. the old component: use `100dvh` (not `100vh`) for correct mobile behaviour, and drop the JS-driven `sds-dialog--scrollable` class (no measurement needed). Consider `scrollbar-gutter: stable` to avoid layout jank when content grows across the overflow threshold.
4. ~~Entry / exit animation.~~ **Resolved:** no animation. Dialog + backdrop appear and disappear instantly. Do not wire `@starting-style` or `allow-discrete` transitions.
5. ~~Responsive button row.~~ **Resolved:** `Dialog.Footer` owns the Figma footer-at-<400px rule via `@container` query on the Dialog root: horizontal flex with right alignment and 8px gap at ≥400px, column with stretched buttons and 8px gap at <400px. Consumers put `<Button>` instances directly inside `Dialog.Footer`.
6. ~~Close affordance primitive.~~ **Resolved:** ship `Dialog.Close` as a convenience sub-component. Renders an icon-only tertiary button with the `close` icon, pre-wired to close its parent Dialog via context (no `commandfor` boilerplate for the consumer). Requires an `aria-label`. ButtonIcon as a standalone SD3 primitive stays out of scope — if other components need it later, extract from Dialog.Close then.
7. ~~Dialog id surface.~~ **Resolved:** `id: string` stays a required prop. Consumer owns it; `command="show-modal" commandfor="my-id"` on any `<Button>` wires up without JS or context plumbing. `Dialog.Close` reads the parent id via context internally — the consumer still only declares it once on `<Dialog>`.
8. ~~Invokers polyfill.~~ **Resolved:** load on side-effect from `packages/design-system/src/Dialog/index.ts`:

   ```ts
   if (
     typeof window !== "undefined" &&
     !("commandForElement" in HTMLButtonElement.prototype)
   ) {
     import("invokers-polyfill");
   }
   ```

   Runs once per app (module cache), gated on `typeof window` to stay SSR-safe, feature-detected so modern browsers skip the fetch. Related: confirm the SD3 `<Button>` passes `command` + `commandfor` through to the underlying `<button>` (both are native HTML attributes, likely already works, but worth verifying during implementation).

   **Safari caveat — not covered by this polyfill:** `closedby="any"` (click-outside-to-dismiss) is unsupported in Safari. A per-instance JS fallback is wired in the Dialog component (see the "Notes for the implementer" code block in "Props / API"). `overscroll-behavior` is also unsupported in Safari; left as progressive enhancement.

9. **sds-dialog's non-modal / drawer modes — deferred.** The existing `@sikt/sds-dialog` supports `modal: false` (uses `dialog.show()`) and `drawer: "left" | "right"`. This SD3 spec implements only the modal path for now. Revisit when a consumer actually migrates and needs the non-modal / drawer escape hatch — likely answers are "add `modal: boolean` back" and "ship a separate Drawer component", but no decision until there's a concrete use case.

## Documentation text (verbatim from Figma)

### Dialog (node 27506:652)

> Når dialogen blir mindre enn 400px i bredden, skift over til Small varianten av footeren.

### .Footer (node 31008:2993)

> Når dialogen blir mindre enn 400px i bredden, skift over til Small varianten.

### .Footer slot annotation (data-development-annotations on node 31008:2990)

> Det er en svakhet i Figma som gjør at vi her må tilby to "størrelser" av knappene. Logikken skal egentlig være at når bredden på komponentet når 400px, så blir knappene fullbredde.
