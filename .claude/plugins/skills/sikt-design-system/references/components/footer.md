# @sikt/sds-footer

Version: `2.1.3`  
Package slug: `footer` (under `packages/footer`)

## Install

```sh
npm i -s @sikt/sds-footer
```

```ts
import { Footer } from "@sikt/sds-footer";
```

Add `@import "@sikt/sds-footer/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-logo/dist/index.css";`

## Exports

- `Footer`
- `FooterProps`

## Components

### Footer

Source: `packages/footer/src/Footer.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop        | Type                                                      | Required | Default     | Description |
| ----------- | --------------------------------------------------------- | -------- | ----------- | ----------- |
| `className` | `string`                                                  | no       | —           | —           |
| `lang`      | `"nb" \| "nn" \| "en" \| "se" \| "smj" \| "sma" \| "fkv"` | no       | `nb`        | —           |
| `logoHref`  | `string`                                                  | no       | `//sikt.no` | —           |

## CSS class names

Available when `@sikt/sds-footer/dist/index.css` is imported.

- `.sds-footer`
- `.sds-footer__content`
- `.sds-footer__logo-link`
- `.sds-typography-link`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Footer**: Default, WithContent
