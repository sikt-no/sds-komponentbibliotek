# Button — Spec

**Figma:** [SDS Komponenter — Button](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13122-9882&p=f&m=dev)
**Component folder:** `packages/design-system/src/Button/`
**Replaces:** `@sikt/sds-button`
**Last synced:** 2026-09-02

## Overview

A pill-shaped button used to trigger an action. Pass label text as children and wrap icons in `Button.Icon` — up to two icons, positioned by DOM order relative to the text.

Reach for it whenever a user needs to invoke an action, submit a form, or advance a flow. Use a link (not a button) when the action is navigation to a different URL.

## Variant axes

| Axis    | Values                                               | Default   | Figma label mapping                      | Notes                                                                                                          |
| ------- | ---------------------------------------------------- | --------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| variant | `primary`, `primary-subtle`, `secondary`, `tertiary` | `primary` | `Primary-subtle` → `primary-subtle`      | Controls fill / border / text tokens. Layout is identical across variants.                                     |
| theme   | `main`, `neutral`, `danger`                          | `main`    | `Fare` → `danger`, `Nøytral` → `neutral` | Swaps the color palette via variable modes; token _names_ stay the same. Use `danger` for destructive actions. |
| size    | `large`, `medium`, `small`                           | `medium`  |                                          | Controls height (48 / 40 / 32 px) via padding + line-height. Border radius is `999px` (pill) for all sizes.    |

## Interaction states

- **default** — base tokens per variant.
- **hover** — background swaps to the variant's `hover` token (e.g. primary: `#7351fb` → `#643ffa`); text and icons unchanged.
- **pressed / active** — background swaps to the variant's `pressed` token (e.g. primary: `#5531e8`). Text and icons follow their `*/text-pressed` and `*/icon-pressed` tokens on variants that define them (all except `primary`, which reuses the base text/icon color).
- **focus-visible** — a 2px pill-shaped ring rendered _outside_ the button (`inset: -2px`, `border-color: focus/border` = `#004fcf`, radius `999px`). Orthogonal to variant/state — appears on top of any state.
- **disabled** — background → `color/interaction/disabled/default` (`#e0e0e0`), text → `color/text/disabled` (`#959595`), icons → `color/icon/disabled` (`#959595`). Same across all variants (variant-specific tokens are not applied).

## Slots

| Slot          | Content                           | Constraint                                                                                                                              |
| ------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| _text_        | Label text (children)             | Required for text buttons — passed directly as `children`. Icon-only buttons pass only `Button.Icon`s and set `aria-label` on the root. |
| `Button.Icon` | A single icon (consumer-supplied) | Optional. May appear up to twice — once before and/or once after the text. Position is set by DOM order.                                |

### Icon-only layout

When the button has no text children (only `Button.Icon`s), it must render as a circle at each size — large `48×48`, medium `40×40`, small `32×32`. Detection is done in the component and signalled to CSS via `data-icon-only`; the CSS equalises inline padding so the `999px` border-radius produces a circle.

## Internal composition

| Internal part | Rendered when    | Notes                                                                                    |
| ------------- | ---------------- | ---------------------------------------------------------------------------------------- |
| Focus ring    | `:focus-visible` | Absolutely positioned 2px pill overlay, `inset: -2px`. Independent of variant and state. |

## Icons used

### Slot icons (consumer supplies)

| Slot          | Example icon in Figma         | Notes                                                                                                  |
| ------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Button.Icon` | `confirm`, `navigate-to-next` | Consumer supplies any icon. Icon size follows `size`: 24px for `large`, 20px for `medium` and `small`. |

### Internal icons (component renders)

None in v1.

## Props / API (proposal)

Consumer-facing surface. Types are described in framework-neutral terms — the implementation maps slots to the target framework's node type, adds pass-through attributes, refs, and composition patterns as it sees fit.

The Button takes label text as `children` and pairs it with an optional `Button.Icon` compound child. Icon position (start vs. end) is determined by DOM order relative to the text.

```ts
export interface ButtonProps {
  /** Visual emphasis. Use `primary` for the main call-to-action; `subtle` / `secondary` / `tertiary` step down in emphasis. */
  variant?: "primary" | "primary-subtle" | "secondary" | "tertiary";
  /** Semantic theme — swaps the color palette. Use `danger` for destructive actions. */
  theme?: "main" | "neutral" | "danger";
  /** Height. `large` (48px), `medium` (40px, default), `small` (32px). */
  size?: "large" | "medium" | "small";
  /** Label text and/or `Button.Icon`. Icon position is determined by DOM order. When the only children are `Button.Icon`s, the button collapses to a circle. */
  children?: Content;
  /** Prevents interaction. */
  disabled?: boolean;
}

export interface ButtonIconProps {
  /** The icon to render. Sized by the parent Button's `size` prop. */
  children?: Icon;
}
```

Usage:

```tsx
<Button variant="primary" size="large">
  <Button.Icon><IconConfirm /></Button.Icon>
  Bekreft
</Button>

<Button variant="primary">
  Neste
  <Button.Icon><IconArrowRight /></Button.Icon>
</Button>

<Button aria-label="Lukk">
  <Button.Icon><IconClose /></Button.Icon>
</Button>
```

## Accessibility

- **Semantic element:** `<button type="button">` by default. When the action navigates to a URL, the consumer renders a link instead — the implementation decides whether to expose polymorphism.
- **Keyboard:** `Space` and `Enter` activate the button when focused. `Tab` moves focus in and out.
- **Screen reader / ARIA:**
  - Accessible name comes from the button's text children. Icon-only buttons must set `aria-label` on the root; otherwise the button is unnamed.
  - `disabled=true` uses the native `disabled` attribute (removes from the tab order).
- **Focus:** must be visibly indicated when the element receives keyboard focus. Implementation defines the ring — Figma specifies a 2px pill-shaped outline at `#004fcf`, offset `-2px` from the button.
- **WAI-ARIA pattern:** [Button pattern (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

## Design tokens

Record what Figma binds. Whether these tokens exist in the SD3 CSS catalog, and what to do about hardcoded values, is `implement-component-spec`'s call.

Values below are the **`main` theme** palette. `neutral` and `danger` themes use the same token names with different raw values — see Open questions.

### Figma-bound tokens

| Figma token                           | Current value | CSS property                | Applies to                                            |
| ------------------------------------- | ------------- | --------------------------- | ----------------------------------------------------- |
| `primary/default`                     | `#7351fb`     | `background-color`          | `variant=primary`, state=default                      |
| `primary/hover`                       | `#643ffa`     | `background-color`          | `variant=primary`, state=hover                        |
| `primary/text`                        | `#ffffff`     | `color`                     | `variant=primary`, label                              |
| `primary/icon`                        | `#ffffff`     | icon `color`                | `variant=primary`, icons                              |
| `primary-subtle/default`              | `#d1cdff`     | `background-color`          | `variant=primary-subtle`                              |
| `primary-subtle/text`                 | `#0a0132`     | `color`                     | `variant=primary-subtle`, label                       |
| `primary-subtle/icon`                 | `#0a0132`     | icon `color`                | `variant=primary-subtle`, icons                       |
| `secondary/default`                   | `#00000000`   | `background-color`          | `variant=secondary`                                   |
| `secondary/border`                    | `#7351fb`     | `border-color`              | `variant=secondary`                                   |
| `secondary/text`                      | `#0a0132`     | `color`                     | `variant=secondary`, label                            |
| `secondary/icon`                      | `#0a0132`     | icon `color`                | `variant=secondary`, icons                            |
| `tertiary/default`                    | `#00000000`   | `background-color`          | `variant=tertiary`                                    |
| `tertiary/text`                       | `#0a0132`     | `color`                     | `variant=tertiary`, label                             |
| `tertiary/icon`                       | `#0a0132`     | icon `color`                | `variant=tertiary`, icons                             |
| `color/interaction/disabled/default`  | `#e0e0e0`     | `background-color`          | state=disabled, all variants                          |
| `color/text/disabled`                 | `#959595`     | `color`                     | state=disabled, label                                 |
| `color/icon/disabled`                 | `#959595`     | icon `color`                | state=disabled, icons                                 |
| `focus/border`                        | `#004fcf`     | `border-color` (focus ring) | state=focus-visible, all variants                     |
| `layout/border-weight/regular`        | `2px`         | `border-width`              | focus ring                                            |
| `spacing/border/weight/xs`            | `1px`         | `border-width`              | `variant=secondary`                                   |
| `spacing/border/radius/full`          | `999px`       | `border-radius`             | root and focus ring, all variants and sizes           |
| `space/component/400`                 | `16px`        | `padding-inline`            | `size=large`, `size=medium`                           |
| `space/component/300`                 | `12px`        | `padding-inline`            | `size=medium`, `size=small`                           |
| `space/component/200`                 | `8px`         | `padding-block`             | `size=medium` vertical padding                        |
| `space/component/200`                 | `8px`         | flex `gap`                  | all sizes (gap between icon and text)                 |
| `space/component/100`                 | `4px`         | `padding-block`             | `size=small`                                          |
| `space/component/050`                 | `2px`         | `padding-block` addend      | added to `size=large` block padding (label breathing) |
| `typography/size/text/body-lg`        | `18px`        | `font-size`                 | `size=large` label                                    |
| `typography/line-height/text/body-lg` | `28px`        | `line-height`               | `size=large` label                                    |
| `typography/size/text/body-md`        | `16px`        | `font-size`                 | `size=medium`, `size=small` label                     |
| `typography/line-height/text/body-md` | `24px`        | `line-height`               | `size=medium`, `size=small` label                     |
| `typography/weight/regular`           | `400`         | `font-weight`               | all labels                                            |
| `icon/interaction-md`                 | `20px`        | icon `width` / `height`     | `size=medium`, `size=small` icons                     |

### Hardcoded values

Values Figma is not binding to a variable. Flagged in "Open questions" so the tokens owner can decide whether to promote.

| Raw value | CSS property          | Applies to                                                                                                                                                                                                              |
| --------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `24px`    | icon slot `font-size` | `size=large` icons. Stays hardcoded in CSS; tracked in [`FOLLOWUP.md`](./FOLLOWUP.md). Implementer: add a CSS comment linking to `./FOLLOWUP.md` next to the declaration.                                               |
| `20px`    | icon slot `font-size` | `size=medium` / `size=small` icons. Figma binds `icon/interaction-md` (20px), but the token is not yet compiled into `@sikt/sd3-design-tokens`. Tracked in [`FOLLOWUP.md`](./FOLLOWUP.md) until the token is published. |
| `-2px`    | focus ring `inset`    | focus ring offset from the button edge                                                                                                                                                                                  |

## Reference screenshots

Capture these node groupings from Figma manually and save them to `spec/screenshots/`. `review-component-spec` compares these PNGs against Storybook.

- `variant-primary.png` — Large Primary Default (`26055:2805`), Hover (`26055:2806`), Pressed, Disabled (`26494:24166`)
- `variant-primary-subtle.png` — Large Primary-subtle Default (`30314:5314`)
- `variant-secondary.png` — Large Secondary Default (`30314:5533`)
- `variant-tertiary.png` — Large Tertiary Default (`30314:5750`)
- `size-comparison.png` — Large (`26055:2805`), Medium (`26055:2814`), Small (`26055:2905`) side by side
- `icon-only.png` — icon-only variants at all three sizes (should render as circles)
- `focus-ring.png` — Large Primary with focus overlay visible
- `theme-neutral.png` — Large Primary at `data-button-theme="neutral"`
- `theme-danger.png` — Large Primary at `data-button-theme="danger"`

## Open questions & gaps

1. **Documentation frame is corrupted.** The Meta frame (`13122:10300`) contains an unrelated Norwegian note about file naming in a shared folder — not Button documentation. Needs replacement in Figma.
2. **`loading` state deferred to v2.** V1 ships without a loading state. Figma includes a Loading design (spinner replaces icons, label stays), but decision was made to defer. Revisit when loading is needed.

## Documentation text (verbatim from Figma)

The Meta frame on the Figma page contains this text, which is **not** related to Button (see Open question #1):

> "En kollega nevnte at en del av filene i fellesmappa hadde navnekollisjon. Det betyr at nye filer overskriver eldre. Vi må kanskje innføre en streng navnestandard, slik at ikke alt bare heter 'Dok1', 'Dok2' og så videre. Det skaper jo lett kaos. Kan du, eller noen andre, ta ansvar for å lage en kort retningslinje? Ellers sitter vi med en haug forvirrende kopier om et par måneder."

No usable Norwegian Button documentation is available from Figma at this time. Downstream docs will need to be written from scratch or await a Figma update.
