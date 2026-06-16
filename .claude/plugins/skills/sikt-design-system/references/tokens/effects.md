# Effect tokens

Animation duration/easing and shadow effects. Shadows reference `--sds-color-shadow-*` tokens so they automatically follow light/dark mode.

Automatically included when you import `@sikt/sds-core` — no separate import needed for normal apps.

## animation

| Token                                    | Value         |
| ---------------------------------------- | ------------- |
| `--sds-effect-animation-duration-long`   | `500ms`       |
| `--sds-effect-animation-duration-medium` | `250ms`       |
| `--sds-effect-animation-duration-short`  | `100ms`       |
| `--sds-effect-animation-easing-default`  | `ease-in-out` |

## shadow

| Token                                  | Value                                                 |
| -------------------------------------- | ----------------------------------------------------- |
| `--sds-effect-shadow-elevated-default` | `0 4px 24px var(--sds-color-shadow-elevated-default)` |
| `--sds-effect-shadow-elevated-hover`   | `0 4px 12px var(--sds-color-shadow-elevated-hover)`   |
