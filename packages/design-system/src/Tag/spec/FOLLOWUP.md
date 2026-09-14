# Tag / TagStatus — followup

Hardcoded values and known design/code divergences in `tag.css` and `tag-status.css`. Track and replace as tokens land in `@sikt/sd3-design-tokens`.

## Hardcoded values

| Where                                                     | Value            | Notes                                                                                                                                                                       |
| --------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--tag-base-icon-size` (standard)                         | `1.25rem` (20px) | Icon box size is not tokenised in Figma. The `interaction-md` line-height variable is scoped to `LINE_HEIGHT`/`LETTER_SPACING`, not general sizing. Need a size-icon token. |
| `--tag-base-icon-size` (compact)                          | `1rem` (16px)    | Same as above — no scope-appropriate icon-size token exists.                                                                                                                |
| `line-height: 1` (compact)                                | literal          | Figma's `interaction-md` line-height (1.25 → 20px) would push compact past Figma's 24px total. Kept literal until sizing model is revisited.                                |
| `--tag-base-background-color` — `color=neutral`, `strong` | `#656565`        | Figma binds `color/neutral/600`, but no `--sd3-*` token exists. Approved literal pending `color-neutral-600` in `@sikt/sd3-design-tokens`.                                  |

## Design/code divergences

| Where           | Figma | Code | Notes                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standard height | 32px  | 30px | Building the height from padding + line-height lands at 30px (4px block padding + ~22px line-height + 4px). The next padding token is 8px, which overshoots. `min-height` was removed to avoid a hardcoded value; border uses inset `box-shadow` so all variants share the same height. Consider a 5px block-padding token or a Figma revision to 30px. |
