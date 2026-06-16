# Base tokens

Breakpoints, raw size scale (xxxs → xxl) and z-index layering. These are referenced by other token categories — prefer the semantic tokens (spacing/typography/etc.) in component CSS.

Automatically included when you import `@sikt/sds-core` — no separate import needed for normal apps.

## breakpoint

| Token                             | Value   |
| --------------------------------- | ------- |
| `--sds-base-breakpoint-desktop`   | `64rem` |
| `--sds-base-breakpoint-tablet`    | `45rem` |
| `--sds-base-breakpoint-ultrawide` | `90rem` |

## size

| Token                  | Value   |
| ---------------------- | ------- |
| `--sds-base-size-l`    | `48px`  |
| `--sds-base-size-m`    | `24px`  |
| `--sds-base-size-m1`   | `32px`  |
| `--sds-base-size-s`    | `12px`  |
| `--sds-base-size-s1`   | `16px`  |
| `--sds-base-size-xl`   | `96px`  |
| `--sds-base-size-xs`   | `8px`   |
| `--sds-base-size-xxl`  | `192px` |
| `--sds-base-size-xxs`  | `4px`   |
| `--sds-base-size-xxxs` | `2px`   |

## zindex

| Token                       | Value  |
| --------------------------- | ------ |
| `--sds-base-zindex-default` | `auto` |
| `--sds-base-zindex-drawer`  | `2000` |
| `--sds-base-zindex-menu`    | `1000` |
| `--sds-base-zindex-modal`   | `3000` |
