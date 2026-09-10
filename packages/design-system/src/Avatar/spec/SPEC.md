# Avatar — Spec

**Figma:** [❖ Avatar [NEW]](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27428-1380)
**Component folder:** `packages/design-system/src/Avatar/`
**Replaces:** none
**Last synced:** 2026-08-31
**Figma status:** ⚠️ In progress — the Figma page carries an "In progress" badge; expect follow-up changes before this component is considered final.

## Overview

Visual representation of a user, shown as a circular graphic in three variants: a photo, initials on a colored background, or a generic placeholder icon.

Use to identify the person associated with a resource (comment author, profile menu, list item). Not intended for decorative imagery — for that, use a plain `<img>`.

**v1 scope.** Matches Figma exactly. Out of scope for v1: status indicator (online/offline dot), avatar group/stack, custom pixel sizes, loading skeleton. Add these in later versions if the design system needs them.

## Variant axes

Rendered variant is inferred from the props the consumer passes — there is no explicit `variant` prop. Precedence: `children` (photo) > `initials` (initials) > default (placeholder icon).

| Axis            | Values                                                 | Default              | Figma label mapping                                                                                                                                                                                                                 | Notes                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rendered visual | `photo`, `initials`, `placeholder`                     | inferred (see above) | Figma's `Variant` enum (`Photo`, `Inititals`, `Placeholder`) maps to **how the consumer instantiates Avatar in code**, not to a prop value. Recorded as `data-variant` on the root for styling/testing. Figma has typo "Inititals". | Not a prop — inferred at render time.                                                                                                                                                                                            |
| size            | `small`, `medium`, `large`                             | `medium`             | direct                                                                                                                                                                                                                              | 32 / 40 / 48 px square.                                                                                                                                                                                                          |
| color           | `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"6"`, `"7"`, `"8"` | hashed               | see color palette table below                                                                                                                                                                                                       | Only applies when `initials` is set. Uses the shared `Category` type from `@sikt/sd3-design-system` — string literals, contiguous 1..8. Figma labels them 1, 2, 4–9 (see Open Questions), but the code stays on the shared type. |

## Interaction states

The component is non-interactive by design. No hover/focus/active/disabled states are rendered in Figma. When used inside an interactive parent (e.g. a button wrapping the avatar), focus/hover states belong to that parent, not the avatar itself.

## Slots

| Slot        | Content                                               | Constraint                                                                                                                                                                                                            |
| ----------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | An image element (`<img>`, `next/image`, `<picture>`) | When present, Avatar wraps it and applies `object-fit: cover`. Consumer supplies `alt` on the child — that provides the accessible name. Any element is technically accepted, but an image is the intended shape.     |
| `initials`  | 1–2 character string passed via `initials` prop       | Only applies when `children` is absent. Component silently slices to first 2 chars; visually uppercased via CSS `text-transform`. See "Initials rendering" below.                                                     |
| (aria name) | Accessible name via `aria-label`                      | Required when there are no `children` (initials + placeholder cases) — the visible content is not sufficient for screen readers. Not required for the photo case: the child `<img alt>` covers it. See Accessibility. |

## Icons used

### Slot icons (consumer supplies)

None. Icon rendering is entirely internal.

### Internal icons (component renders)

| Icon name         | Where it appears                                 | Notes                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UserProfileIcon` | Center of container when `variant="placeholder"` | Rendered at 16/20/24 px for size small/medium/large. Sized via SVG `width`/`height` attributes (the icon has no `size` prop). Uses `fill="currentColor"` — color is controlled via CSS `color` on the parent avatar (see Open Questions for the color token). |

Import: `import { UserProfileIcon } from "@sikt/sds-icons"`. The icon's `id` in `icons.config.mjs` is `user`, mapped to Phosphor `user-profile` → generated export `UserProfileIcon`.

## Props / API

Uses the shared `Size` and `Category` types from `@sikt/sd3-design-system` (`packages/design-system/types/index.ts`). **Single flat props interface, no discriminated union.** The visual is inferred from what the consumer passes.

```ts
import type { HTMLAttributes, ReactNode } from "react";
import { Category, Size } from "../../../../types";

export interface AvatarProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children" | "color"
> {
  /** Container size. Controls dimensions, initials font size, and placeholder icon size. */
  size?: Size;
  /**
   * 1–2 character initials. Longer strings are silently sliced to the first 2 characters.
   * Ignored when `children` is provided.
   */
  initials?: string;
  /**
   * Background color for the initials disc (`"1"` through `"8"`). Only used with `initials`.
   * When omitted, a deterministic color is derived by hashing `initials`.
   */
  color?: Category;
  /**
   * An image element (`<img>`, `next/image`, `<picture>`) to render inside the circular frame.
   * The consumer sets `alt` on the child — it provides the accessible name.
   * Takes precedence over `initials`.
   */
  children?: ReactNode;
}
```

**Usage:**

```tsx
// Photo — consumer brings the image element
<Avatar><img src="/ada.jpg" alt="Ada Lovelace" /></Avatar>

// Photo with next/image — same shape, framework primitive slots in naturally
<Avatar><Image src="/ada.jpg" alt="Ada Lovelace" width={40} height={40} /></Avatar>

// Initials — dedicated prop
<Avatar initials="AL" aria-label="Ada Lovelace" />

// Placeholder — the default when nothing is passed
<Avatar aria-label="Ada Lovelace" />
```

**Defaults:** `size="medium"`. When both `children` and `initials` are set, children wins (photo). When neither is set, the placeholder icon renders.

**Design decisions worth calling out:**

- **No `variant` prop.** The visual is inferred. Trades compile-time exhaustiveness for a much simpler surface — the consumer never has to think about which discriminant matches their intent.
- **No `asChild`.** `children` _is_ the escape hatch for framework image primitives. Radix `Slot` machinery isn't needed.
- **No refs.** Avatar is non-interactive; consumers who need a DOM handle wrap or use their own child element. Adding `ref` later is non-breaking; removing it is.
- **`color` without `initials` is a no-op.** Not enforced at the type level — silently ignored at runtime.

## Photo variant behavior

- **DOM root:** `<span class="sd3-avatar" data-variant="photo" data-size="...">` wrapping the consumer's image element.
- **Child element:** any React node, but intended to be an `<img>` (or a framework equivalent that renders an `<img>`). Consumers control `src`, `alt`, `loading`, `decoding`, `referrerPolicy`, `crossOrigin`, `srcset`, etc. by setting them on the child.
- **Load failure:** the component takes no action. The browser's default broken-image UI shows on the child. Consumers who need graceful fallback can attach their own `onError` handler and swap what they render.
- **Object-fit:** CSS applies `object-fit: cover; object-position: center; width: 100%; height: 100%` to the direct child. Non-square photos are cropped to the circle regardless of the child's intrinsic size.
- **Dimensions:** the wrapper is sized via CSS `.sd3-avatar[data-size="small|medium|large"]`. The child fills 100 % of that box. Consumers using `next/image` should still pass `width`/`height` — `next/image` requires them, and the CSS override sizes the rendered element to the container.
- **Accessibility:** the wrapper has no `role`/`aria-label` for the photo case; the child `<img alt>` provides the accessible name. If the consumer forgets `alt`, axe will fail — the component does not paper over it.

```tsx
<Avatar size="large">
  <NextImage src="/me.jpg" alt="Ada Lovelace" width={48} height={48} />
</Avatar>
```

## Initials rendering

- **Slice:** `initials.slice(0, 2)` silently. Longer inputs truncate without warning. Empty strings render as an empty disc (with the background color).
- **Uppercase:** CSS `text-transform: uppercase` on the text node. DOM text preserves consumer casing — only the visual is uppercased. Works with non-Latin scripts that browsers can uppercase locale-correctly.
- **Auto-color:** when `color` is omitted, the component picks a color by hashing the (sliced, un-uppercased) `initials` string to `"1"`..`"8"`. **The hash is part of the public contract** — changing the algorithm is a breaking change. Consumers relying on stable colors across renders can pass `color` explicitly.
  - Reference algorithm: `String(([...s].reduce((a, c) => a + c.charCodeAt(0), 0) % 8) + 1)`.
- **Text color:** `--sd3-color-component-category-strong-text` (paired with the category strong backgrounds — currently dark `#0a0132`). See Open Question about contrast verification on the paired palette.

## Accessibility

- **Semantic element:**
  - Photo (children): `<span class="sd3-avatar">` with an `<img>` child. The child's `alt` provides the accessible name. Wrapper has no `role`/`aria-label`.
  - Initials and placeholder: `<span role="img" aria-label="...">`. The consumer's `aria-label` provides the accessible name.
- **Keyboard:** none — non-interactive. If wrapped in an interactive element (button, link) the parent owns keyboard behaviour.
- **Screen reader / ARIA:**
  - Photo: native `<img alt>` on the child. No wrapper-level ARIA. Screen readers announce the alt text.
  - Initials: initials text (e.g. "JD") is inside a nested span marked `aria-hidden="true"` — screen readers announce the wrapper's `aria-label`, not the letters.
  - Placeholder: the internal `user` icon is `aria-hidden` by default (from `@sikt/sds-icons`).
  - Decorative use (avatar rendered next to a visible name label): consumer sets `aria-hidden="true"` on the Avatar and omits `aria-label`. Nothing at the type level enforces `aria-label`, so decorative use is straightforward.
- **Focus:** no focus ring — component is not focusable. `tabIndex` is not applied.
- **WAI-ARIA pattern:** [Image Role](https://www.w3.org/TR/wai-aria-1.2/#img). No compound pattern applies.

## Design tokens

All values reference compiled `--sd3-*` custom properties in `packages/design-tokens/dist/css/tokens.css` (aggregated via `index.css` which pulls in `color.css`, `space.css`, `typography.css`). One documented exception — see Open Questions.

Grouped by CSS property.

| SD3 token                                          | CSS property     | Applies to                                              |
| -------------------------------------------------- | ---------------- | ------------------------------------------------------- |
| `--sd3-space-component-800`                        | width, height    | Container — `size="small"` (32 px)                      |
| `--sd3-space-component-1000`                       | width, height    | Container — `size="medium"` (40 px)                     |
| `--sd3-space-component-1200`                       | width, height    | Container — `size="large"` (48 px)                      |
| `--sd3-space-component-400`                        | width, height    | Placeholder icon — `size="small"` (16 px)               |
| — (hardcoded 20 px)                                | width, height    | Placeholder icon — `size="medium"` — see Open Questions |
| `--sd3-space-component-600`                        | width, height    | Placeholder icon — `size="large"` (24 px)               |
| `--sd3-space-border-radius-full`                   | border-radius    | All three variants                                      |
| `--sd3-color-brand-primary-strong`                 | background-color | Placeholder container                                   |
| `--sd3-color-icon-on-strong`                       | color            | Placeholder icon (icon uses `fill="currentColor"`)      |
| `--sd3-color-component-category-strong-1` .. `-8`  | background-color | Initials disc — `color="1"` .. `"8"`                    |
| `--sd3-color-component-category-strong-text`       | color            | Initials text (paired with the strong backgrounds)      |
| `--sd3-typography-size-text-interaction-sm`        | font-size        | Initials text — `size="small"`                          |
| `--sd3-typography-size-text-interaction-md`        | font-size        | Initials text — `size="medium"`                         |
| `--sd3-typography-size-text-interaction-lg`        | font-size        | Initials text — `size="large"`                          |
| `--sd3-typography-line-height-text-interaction-sm` | line-height      | Initials text — `size="small"`                          |
| `--sd3-typography-line-height-text-interaction-md` | line-height      | Initials text — `size="medium"`                         |
| `--sd3-typography-line-height-text-interaction-lg` | line-height      | Initials text — `size="large"`                          |

**Initials font-weight:** SD3 currently exposes no discrete weight tokens in `tokens.css` — the Haffer regular weight is the default from `--sd3-font-family`. Do not set `font-weight` explicitly unless a token is added.

## Story coverage (Storybook)

Minimum stories for v1:

| Story name    | What it renders                                                                      | Notes                                                                                             |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `Default`     | `<Avatar initials="AL" aria-label="Ada Lovelace" />`                                 | Default landing story — initials, so the `color` control is discoverable via Storybook's panel.   |
| `Photo`       | `<Avatar><img src="/avatar-photo.jpeg" alt="Sven-Åke" /></Avatar>` at `size="large"` | Image served from `apps/storybook/static/` so the URL matches real consumer usage in "Show code". |
| `Placeholder` | `<Avatar aria-label="Ada Lovelace" />`                                               | Renders the internal placeholder icon (no `children` or `initials`).                              |

Consumers can flip `size` and `color` via Storybook's controls — no per-value matrix stories. Out of scope for v1: `AllSizes` matrix, `PhotoWithNextImage`. The size + child-image behavior is still exercised by unit tests.

## README example

Keep the README lean — one minimal example:

```tsx
import { Avatar } from "@sikt/sd3-design-system";

<Avatar aria-label="Ada Lovelace" />;
```

Point consumers to Storybook for photo (child `<img>`) and initials usage.

## Reference screenshots

Under `packages/design-system/src/Avatar/spec/screenshots/`:

| Filename            | Figma node ID | What it captures                                                                                     |
| ------------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| `page-overview.png` | 27428:1380    | Full Avatar page — 3×3 size×variant grid, 8-color initials palette, page header, designer annotation |

Additional captures (optional, capture as needed during implementation/review):

| Filename                     | Figma node ID | What to capture         |
| ---------------------------- | ------------- | ----------------------- |
| `size-large-placeholder.png` | 27304:2418    | Large placeholder alone |
| `size-large-photo.png`       | 27304:2420    | Large photo alone       |
| `size-large-initials.png`    | 27454:5402    | Large initials alone    |

## Open questions & gaps

### Documented exception to the "no hardcoded values" rule

**Medium placeholder icon = `width: 20px; height: 20px;` (hardcoded).** The fixed `--sd3-space-component-*` scale has 18 px and 24 px but no 20 px step. The responsive `--sd3-space-layout-600` is 20 px in the default density theme but shrinks/grows with `data-space-theme`, which would break the fixed avatar aspect ratio. Decision (2026-08-31, user): ship with a hardcoded 20 px value and a comment in the CSS explaining the missing token, rather than distort the design or add a new token before shipping.

The comment in `avatar.css` should read approximately:

```
/* Icon medium = 20px. No matching --sd3-space-component-500 exists in the fixed scale
 * (jumps 18 → 24), and --sd3-space-layout-600 is responsive to density theme which
 * would break the fixed container aspect ratio. Replace with a fixed 20px token when
 * one is added. */
```

This is the **only** hardcoded dimension permitted in this component. Every other value must resolve to an `--sd3-*` variable per SD3 policy.

### Blocking token audit — all clear except the exception above

| Need                                   | SD3 token to use                                              |
| -------------------------------------- | ------------------------------------------------------------- |
| Container 32 / 40 / 48 px              | `--sd3-space-component-800 / 1000 / 1200`                     |
| Icon 16 px                             | `--sd3-space-component-400`                                   |
| Icon 20 px (medium)                    | **hardcoded — see exception above**                           |
| Icon 24 px                             | `--sd3-space-component-600`                                   |
| Border-radius fully round              | `--sd3-space-border-radius-full`                              |
| 8 category background colors           | `--sd3-color-component-category-strong-1` .. `-8`             |
| Placeholder background                 | `--sd3-color-brand-primary-strong`                            |
| Text on category background (initials) | `--sd3-color-component-category-strong-text` (paired token)   |
| Icon on brand (placeholder icon color) | `--sd3-color-icon-on-strong`                                  |
| Initials font size (sm/md/lg)          | `--sd3-typography-size-text-interaction-sm / md / lg`         |
| Initials line-height (sm/md/lg)        | `--sd3-typography-line-height-text-interaction-sm / md / lg`  |
| Initials font weight                   | (regular — reuse existing typography weight token if present) |

### Non-blocking (designer follow-ups)

1. **Add fixed 20 px token (`--sd3-space-component-500`) to the tokens package.** Would allow the medium icon to drop its hardcoded value. **Owner:** tokens-package maintainer.
2. **Mixed border-radius tokens in Figma** (`spacing/border/radius/full` vs `border/radius/border-radius-full`). SD3 exposes one: `--sd3-space-border-radius-full`. Code uses it everywhere; Figma should align.
3. **Photo variant has no border-radius binding in Figma.** Code applies `--sd3-space-border-radius-full` on all three variants; Figma should add the binding to Photo for review parity.
4. **Text-contrast verification on the 8 palette colors.** Add per-colour axe assertions during implementation. Any WCAG AA failures block CI and require palette or text-colour adjustment.
5. **Figma color-numbering bookkeeping.** Palette labelled `1, 2, 4–9`; underlying tokens are contiguous 1..8. Code uses the shared `Category` type (`"1"`..`"8"`). Nomenclature will drift until Figma is renumbered.
6. **Large Initials font-size variable inconsistency** in Figma (node `27454:5402` bound to `interaction-md` but renders 18px). Code will use `--sd3-typography-size-text-interaction-lg` per the design intent.
7. **Typo "Inititals"** in three Figma symbol names.

### Non-blocking

6. **Large Initials font-size variable inconsistency.** `get_variable_defs` on the Large Initials frame returns `typography/size/text/interaction-md` (16px) yet the rendered value is 18px. Likely the frame should be bound to `interaction-lg`. **Owner:** designer re-checks the binding on `27454:5402`.
7. **Typo "Inititals"** in three Figma symbol names (`27454:5402`, `27454:5616`, `27454:5607`). **Owner:** designer renames.
8. **Figma color-numbering bookkeeping.** Figma labels palette entries `1, 2, 4, 5, 6, 7, 8, 9` (missing `3`, per designer annotation: _"Slo sammen to av oransje til en farge #FDB972"_). Additionally the token bindings are offset (variant `4` binds to `strong/3`, etc.). The code uses the shared `Category` type (`"1"`..`"8"` contiguous) so this doesn't block implementation, but designer/dev nomenclature will drift until Figma is renumbered. **Owner:** designer.
9. ~~**Decorative-avatar API.** Discriminated union forces `aria-label` on Initials/Placeholder variants.~~ Resolved by the API redesign: `aria-label` is no longer type-required, so decorative use is `<Avatar aria-hidden />`.

<!-- Resolved: icon export is `UserProfileIcon`. Removed from open questions. -->

## Documentation text (verbatim from Figma)

Norwegian bokmål, from the page header:

> Avatar viser profilbilde, initialer eller et standardikon for en bruker. Brukes til å representere en person visuelt i grensesnitt.

(English gloss for reference — do **not** ship: "Avatar shows a profile picture, initials, or a default icon for a user. Used to represent a person visually in interfaces.")

No further explanatory prose is on the page. The consumer README/Astro doc should build on this seed.
