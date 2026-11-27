# Popover — Figma extraction

**Figma URL:** https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13309-24859&p=f&m=dev
**File key:** 0aelUwbn2Ivir3T2JfhdOo
**NodeId:** 13309:24859
**Captured:** 2026-11-24

## Overview

A rounded rectangular surface that floats over other UI, anchored to a trigger element, with a small triangular arrow pointing back at the anchor. Figma defines a single component set whose only variant axis is the arrow's position relative to the surface.

## Documentation text (verbatim)

Heading tag: **Slot**

> Popover vises over andre elementer i grensesnittet og er koblet til et spesifikt element. Den brukes til å vise tilleggsinformasjon, interaktive elementer eller korte forklaringer uten å navigere bort fra siden.

Properties → Variants table lists three trigger example rows:

- **Button** — primary button ("Åpne popover") as the anchor
- **Interaktiv trigger** — ButtonIcon (critical, trash icon) as the anchor
- **Inline tekst** — "Dette er en _inline text_" with the trigger word rendered as dashed-underline inline link

(These are consumer-side anchor examples; the popover component itself does not vary by trigger type.)

## Variant axes

| Axis             | Values                                                                                                                                                                                         | Default     | Figma label mapping                                                                                                                                                                                                        | Notes                                                                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arrowPlacement` | `Top start` \| `Top center` \| `Top end` \| `Right start` \| `Right center` \| `Right end` \| `Bottom start` \| `Bottom center` \| `Bottom end` \| `Left start` \| `Left center` \| `Left end` | `Top start` | Figma variant property is `arrowPlacement` with values exactly as listed (space-separated capitalised pairs). Proposed code values: kebab/camel per the implementer's style, e.g. `top-start`, `top-center`, … `left-end`. | 12 positions = 4 sides × 3 alignments (start / center / end). The side controls which edge of the popover the arrow juts out of; the alignment controls where along that edge it sits. |

## Interaction states

Figma draws no explicit interaction states for the popover surface itself — no hover, focus, disabled, open, or closed variants exist. The popover is a static container; open/close and focus behaviour belong to the overlay layer added at implementation time.

## Slots

| Slot                                                             | Content                                                                       | Constraint                                                                                                                                                                                                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content (Figma names it `slotOne`…`slotTwelve`, one per variant) | Consumer-supplied React node. Figma renders a 300×80 placeholder per variant. | Instance-swap slot. Width/height in Figma is illustrative only — consumer controls it. Only the slot matching the active `arrowPlacement` is visible per variant; collapse to a single `children` slot in code. |

## Internal composition

| Internal part | Rendered when                  | Notes                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arrow         | Always (one arrow per variant) | SVG triangle, 22×11 (horizontal sides) / 11×22 (vertical sides). Composed of `arrow-fill` (white triangle) overlaid on `arrow-border` (subtle-border triangle one pixel larger), so the arrow visually extends the popover's border + background. Positioned absolutely outside the surface in the direction of `arrowPlacement` (top/right/bottom/left) and aligned to start / center / end along that edge. |

## Icons

### Slot icons

None rendered by the popover component. Any iconography comes from consumer-supplied slot content.

### Internal icons

None — the arrow is a drawn SVG shape, not an icon-font / icon-component instance.

## Design tokens

### Figma-bound

| Figma token                | CSS property                                           | Applies to                                 | Current raw value                                                                            |
| -------------------------- | ------------------------------------------------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `color/surface/default-1`  | `background-color`                                     | Popover surface, arrow-fill                | `#ffffff` (light themes); dark-theme value from source token.                                |
| `color/border/subtle`      | `border-color`                                         | Popover surface (1 px solid), arrow-border | `#E0E0E0` (Feide light / Sikt white / Sikt gray), `#4D4D4D` (Feide dark / Sikt dark).        |
| `space/component/400`      | `padding` (all four sides)                             | Popover surface                            | `16` px                                                                                      |
| `space/component/200`      | (unused in output but reported by `get_variable_defs`) | —                                          | `8` px — listed for completeness; appears to be a stale/unused binding on the component set. |
| `spacing/border/radius/md` | `border-radius`                                        | Popover surface                            | `8` px                                                                                       |

Border width reported by generated code: `1px` (solid). Not bound to a Figma variable in the response — treat as the implicit default or re-bind to `spacing/border/width/sm` if that is the house token.

### Hidden-token values

None found. All colours used by the surface and arrow resolve through `color/surface/default-1` and `color/border/subtle`, both of which `get_variable_defs` surfaced directly.

### Hardcoded values

None in the actual component binding. The anatomy annotation values (`#D6D6D6` border colour, `12` border radius) that disagree with the live bindings are called out in Open questions — do not treat those as hardcoded in code.

### Dimension-affecting asymmetries

No asymmetries. All twelve variants share identical padding (`16` on all sides), border width (`1`), and border radius. Only the arrow's position differs.

## Reference screenshots

| NodeId     | Target path                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| 26709:7900 | packages/design-system/src/Popover/spec/screenshots/arrow-placement-overview.png      |
| 26709:7889 | packages/design-system/src/Popover/spec/screenshots/arrow-placement-top-center.png    |
| 26709:7892 | packages/design-system/src/Popover/spec/screenshots/arrow-placement-right-center.png  |
| 26709:7895 | packages/design-system/src/Popover/spec/screenshots/arrow-placement-bottom-center.png |
| 26709:7898 | packages/design-system/src/Popover/spec/screenshots/arrow-placement-left-center.png   |

(The overview PNG shows the full 4×3 matrix of all twelve `arrowPlacement` variants in one image; the four per-side shots are the `*-center` alignments for each side.)

## Code Connect inputs

One block per component / component set on the page.

### Popover (component set)

- **NodeId:** 26709:7900
- **URL:** https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26709-7900
- **Variant properties:**

| Figma name       | Values                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `arrowPlacement` | `Top start`, `Top center`, `Top end`, `Right start`, `Right center`, `Right end`, `Bottom start`, `Bottom center`, `Bottom end`, `Left start`, `Left center`, `Left end` |

- **Boolean properties:** none
- **Instance-swap slots:** `slotOne` (visible when `arrowPlacement=Top start`), `slotTwo` (Top center), `slotThree` (Top end), `slotFour` (Right start), `slotFive` (Right center), `slotSix` (Right end), `slotSeven` (Bottom start), `slotEight` (Bottom center), `slotNine` (Bottom end), `slotTen` (Left start), `slotEleven` (Left center), `slotTwelve` (Left end) — all share a single 300×80 example instance. These twelve slots are Figma-internal duplication; map to one `children` prop in code.
- **Text properties:** none

## Open questions

Blocking — SPEC.md should not be considered done until these are resolved:

- **Anatomy annotation disagrees with live bindings.** The Anatomy panel in the Specs frame documents `Border color: #D6D6D6` and `Border radius: 12` for the Popover, and the `arrow-border` marker also lists `#D6D6D6`. The actual component bindings resolve to `color/border/subtle` = `#E0E0E0` (light) / `#4D4D4D` (dark) and `spacing/border/radius/md` = `8`. Confirm with the designer which values are intended: are the bindings stale, or is the anatomy text stale?
- **Border width not bound.** The surface renders a 1 px solid border but no Figma variable is reported for the stroke weight. Should it be re-bound to the house `spacing/border/width/*` token?
- **Arrow is flattened SVGs, not auto-layout.** The arrow triangles are exported as raster-style `<img>` svgs in the generated output rather than being composed from `arrow-fill` + `arrow-border` nodes with bound colours. Confirm whether consumers should expect theme-token-driven arrow recolouring (likely yes, because the anatomy annotates arrow-fill/arrow-border separately) — the implementer will almost certainly re-draw the arrow in code using the two surface tokens so theme-switch keeps working.

## Follow-ups

Non-blocking:

- **Tooltip is explicitly out of scope.** No tooltip variants, shared pieces, or pattern-mixing wrappers exist on this Figma page — Popover is drawn as a standalone component set. Tooltip should be tracked as a separate spec.
- **Trigger examples in the Properties table are documentation-only.** Button / ButtonIcon / inline dashed-underline text are shown as anchor examples but are not slots of Popover; they belong in Storybook as composition stories, not in the component API.
- **Twelve `slotOne`..`slotTwelve` slot names.** Figma had to use one slot per variant because Figma can't address a slot across variants; collapse to one `children` prop in code and make that non-ambiguous in the Code Connect mapping.
- **No open/closed states in Figma.** Visibility, dismissal, focus-trap, and anchor-positioning (floating-ui or anchor-position CSS) are all implementation concerns not drawn in Figma.
- **No shadow / elevation token applied.** The popover in Figma has only border + fill; there is no drop-shadow. If product review wants elevation, raise with designer.
