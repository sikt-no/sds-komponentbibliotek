# Spacing tokens

Border, gap, grid and padding tokens. Tablet/desktop overrides redefine the medium/large/huge padding scale and the grid max-width.

Automatically included when you import `@sikt/sds-core` — no separate import needed for normal apps.

## border

| Token                               | Value     |
| ----------------------------------- | --------- |
| `--sds-space-border-radius-full`    | `99999px` |
| `--sds-space-border-radius-large`   | `24px`    |
| `--sds-space-border-radius-medium`  | `12px`    |
| `--sds-space-border-radius-minimal` | `4px`     |
| `--sds-space-border-radius-small`   | `8px`     |
| `--sds-space-border-weight-bold`    | `4px`     |
| `--sds-space-border-weight-regular` | `2px`     |
| `--sds-space-border-weight-thin`    | `1px`     |

## gap

| Token                     | Value  |
| ------------------------- | ------ |
| `--sds-space-gap-large`   | `48px` |
| `--sds-space-gap-medium`  | `24px` |
| `--sds-space-gap-minimal` | `4px`  |
| `--sds-space-gap-small`   | `12px` |
| `--sds-space-gap-tiny`    | `8px`  |

## grid

| Token                        | Value  |
| ---------------------------- | ------ |
| `--sds-space-grid-full`      | `100%` |
| `--sds-space-grid-max-width` | `100%` |

## padding

| Token                               | Value  |
| ----------------------------------- | ------ |
| `--sds-space-padding-huge`          | `32px` |
| `--sds-space-padding-infinitesimal` | `2px`  |
| `--sds-space-padding-large`         | `24px` |
| `--sds-space-padding-medium`        | `12px` |
| `--sds-space-padding-minimal`       | `4px`  |
| `--sds-space-padding-small`         | `12px` |
| `--sds-space-padding-tiny`          | `8px`  |

## Tablet overrides (≥ 720px)

| Token                        | Value  |
| ---------------------------- | ------ |
| `--sds-space-padding-huge`   | `48px` |
| `--sds-space-padding-large`  | `32px` |
| `--sds-space-padding-medium` | `16px` |

## Desktop overrides (≥ 1024px)

| Token                        | Value   |
| ---------------------------- | ------- |
| `--sds-space-grid-max-width` | `960px` |
| `--sds-space-padding-huge`   | `96px`  |
| `--sds-space-padding-large`  | `48px`  |
| `--sds-space-padding-medium` | `24px`  |
