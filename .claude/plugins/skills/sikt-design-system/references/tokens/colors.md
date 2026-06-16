# Color tokens

Provided by `@sikt/sds-tokens` and automatically included when you import `@sikt/sds-core` — no separate import needed for normal apps.

Values use the CSS `light-dark()` function — first value is light mode, second is dark mode. Switch with `color-scheme: light` or `color-scheme: dark` on a containing element.

## Brand

| Token                              | Value                          |
| ---------------------------------- | ------------------------------ |
| `--sds-color-brand-accent-strong`  | `light-dark(#0a0132, #1d1d1d)` |
| `--sds-color-brand-accent-subtle`  | `light-dark(#c2bfcb, #433a65)` |
| `--sds-color-brand-neutral-strong` | `light-dark(#767676, #767676)` |
| `--sds-color-brand-neutral-subtle` | `light-dark(#dedede, #dedede)` |
| `--sds-color-brand-primary-strong` | `light-dark(#7351fb, #7351fb)` |
| `--sds-color-brand-primary-subtle` | `light-dark(#ebe6fe, #4324c8)` |

## Datavisualization

| Token                                      | Value                          |
| ------------------------------------------ | ------------------------------ |
| `--sds-color-datavisualization-category-1` | `light-dark(#ff957a, #ff957a)` |
| `--sds-color-datavisualization-category-2` | `light-dark(#ffac70, #ffac70)` |
| `--sds-color-datavisualization-category-3` | `light-dark(#fbc774, #fbc774)` |
| `--sds-color-datavisualization-category-4` | `light-dark(#fbe774, #fbe774)` |
| `--sds-color-datavisualization-category-5` | `light-dark(#82e3cb, #82e3cb)` |
| `--sds-color-datavisualization-category-6` | `light-dark(#75c7f0, #75c7f0)` |
| `--sds-color-datavisualization-category-7` | `light-dark(#cca3f5, #cca3f5)` |
| `--sds-color-datavisualization-category-8` | `light-dark(#f5a3cc, #f5a3cc)` |

## Interaction

| Token                                                   | Value                              |
| ------------------------------------------------------- | ---------------------------------- |
| `--sds-color-interaction-danger-strong-default`         | `light-dark(#b60203, #cc1201)`     |
| `--sds-color-interaction-danger-strong-highlight`       | `light-dark(#970002, #b60203)`     |
| `--sds-color-interaction-danger-strong-pressed`         | `light-dark(#7f0001, #970002)`     |
| `--sds-color-interaction-neutral-strong-default`        | `light-dark(#767676, #767676)`     |
| `--sds-color-interaction-neutral-strong-highlight`      | `light-dark(#656565, #656565)`     |
| `--sds-color-interaction-neutral-strong-pressed`        | `light-dark(#595959, #595959)`     |
| `--sds-color-interaction-neutral-subtle-default`        | `light-dark(#dedede, #4f4f4f)`     |
| `--sds-color-interaction-neutral-subtle-highlight`      | `light-dark(#d6d6d6, #454545)`     |
| `--sds-color-interaction-neutral-subtle-pressed`        | `light-dark(#cccccc, #404040)`     |
| `--sds-color-interaction-neutral-transparent-default`   | `light-dark(#00000000, #00000000)` |
| `--sds-color-interaction-neutral-transparent-highlight` | `light-dark(#d6d6d6, #454545)`     |
| `--sds-color-interaction-neutral-transparent-pressed`   | `light-dark(#cccccc, #404040)`     |
| `--sds-color-interaction-primary-strong-default`        | `light-dark(#7351fb, #7351fb)`     |
| `--sds-color-interaction-primary-strong-highlight`      | `light-dark(#643ffa, #643ffa)`     |
| `--sds-color-interaction-primary-strong-pressed`        | `light-dark(#5531e8, #5531e8)`     |
| `--sds-color-interaction-primary-subtle-default`        | `light-dark(#d1cdff, #4324c8)`     |
| `--sds-color-interaction-primary-subtle-highlight`      | `light-dark(#c2bcff, #351aad)`     |
| `--sds-color-interaction-primary-subtle-pressed`        | `light-dark(#b4aeff, #260d92)`     |
| `--sds-color-interaction-primary-transparent-default`   | `light-dark(#00000000, #00000000)` |
| `--sds-color-interaction-primary-transparent-highlight` | `light-dark(#c2bcff, #351aad)`     |
| `--sds-color-interaction-primary-transparent-pressed`   | `light-dark(#b4aeff, #260d92)`     |

## Layout

| Token                                    | Value                              |
| ---------------------------------------- | ---------------------------------- |
| `--sds-color-layout-background-critical` | `light-dark(#ffeae9, #470001)`     |
| `--sds-color-layout-background-default`  | `light-dark(#ffffff, #262626)`     |
| `--sds-color-layout-background-info`     | `light-dark(#e6f0ff, #001d4d)`     |
| `--sds-color-layout-background-neutral`  | `light-dark(#ebebeb, #2a2a2a)`     |
| `--sds-color-layout-background-primary`  | `light-dark(#ebe6fe, #404040)`     |
| `--sds-color-layout-background-success`  | `light-dark(#cff7e2, #032b17)`     |
| `--sds-color-layout-background-warning`  | `light-dark(#fceed2, #000000)`     |
| `--sds-color-layout-divider-strong`      | `light-dark(#656565, #959595)`     |
| `--sds-color-layout-divider-subtle`      | `light-dark(#dedede, #595959)`     |
| `--sds-color-layout-focus-border`        | `light-dark(#004fcf, #005aea)`     |
| `--sds-color-layout-page-default`        | `light-dark(#f1f1f1, #1a1a1a)`     |
| `--sds-color-layout-page-overlay`        | `light-dark(#00000040, #00000040)` |

## Shadow

| Token                                 | Value                              |
| ------------------------------------- | ---------------------------------- |
| `--sds-color-shadow-elevated-default` | `light-dark(#0000001a, #00000080)` |
| `--sds-color-shadow-elevated-hover`   | `light-dark(#00000040, #000000bf)` |

## Support

| Token                                 | Value                          |
| ------------------------------------- | ------------------------------ |
| `--sds-color-support-critical-strong` | `light-dark(#b60203, #cc1201)` |
| `--sds-color-support-critical-subtle` | `light-dark(#ffeae9, #470001)` |
| `--sds-color-support-info-strong`     | `light-dark(#004fcf, #005aea)` |
| `--sds-color-support-info-subtle`     | `light-dark(#e6f0ff, #001d4d)` |
| `--sds-color-support-success-strong`  | `light-dark(#096638, #007638)` |
| `--sds-color-support-success-subtle`  | `light-dark(#cff7e2, #032b17)` |
| `--sds-color-support-warning-strong`  | `light-dark(#ffb700, #ffb700)` |
| `--sds-color-support-warning-subtle`  | `light-dark(#fceed2, #000000)` |

## Text

| Token                        | Value                          |
| ---------------------------- | ------------------------------ |
| `--sds-color-text-critical`  | `light-dark(#b60203, #e87373)` |
| `--sds-color-text-on-strong` | `light-dark(#ffffff, #ffffff)` |
| `--sds-color-text-primary`   | `light-dark(#0a0132, #ffffff)` |
| `--sds-color-text-secondary` | `light-dark(#595959, #dedede)` |
