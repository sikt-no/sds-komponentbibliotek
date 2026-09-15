# Button — Follow-up items

Tracks hardcoded values in the Button implementation that should eventually be promoted to Figma variables / SD3 design tokens. The CSS references this file in a comment next to each hardcoded value.

## Hardcoded values

### `size=large` icon dimensions — `1.5rem` (24px)

**Applies to:** `Button.Icon` when the parent Button has `size="large"`. Set via `font-size` on the icon slot so child SVGs sized in `em` scale correctly.

**Why hardcoded:** Figma binds `icon/interaction-md` (20px) for `size=medium` and `size=small`, but does not bind a variable for the 24px used at `size=large`. No `icon/interaction-lg` token exists.

**Follow-up:**

- Ask the design-tokens owner to add `icon/interaction-lg` (24px) in Figma.
- Once available, promote it into `@sikt/sd3-design-tokens` and update the Button CSS to consume it. Remove this entry.

### `size=medium` / `size=small` icon dimensions — `1.25rem` (20px)

**Applies to:** `Button.Icon` when the parent Button has `size="medium"` or `size="small"`. Set via `font-size` on the icon slot.

**Why hardcoded:** SPEC binds this to Figma's `icon/interaction-md` (20px), but that variable is not currently compiled into `@sikt/sd3-design-tokens` — no `--sd3-icon-interaction-md` custom property exists. Treated as a hardcoded value until the design-tokens build extracts it.

**Follow-up:**

- Extend the `@sikt/sd3-design-tokens` build to publish `icon/interaction-md` → `--sd3-icon-interaction-md` (20px).
- Once available, update the Button CSS to consume it. Remove this entry.
