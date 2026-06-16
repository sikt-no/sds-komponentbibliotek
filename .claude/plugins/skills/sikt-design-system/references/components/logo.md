# @sikt/sds-logo

Version: `2.2.3`  
Package slug: `logo` (under `packages/logo`)

## Install

```sh
npm i -s @sikt/sds-logo
```

```ts
import { Logo } from "@sikt/sds-logo";
```

Add `@import "@sikt/sds-logo/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Logo`
- `LogoProps`

## Components

### Logo

Source: `packages/logo/src/Logo.tsx`

Extends: `HTMLAttributes<HTMLDivElement>`

**Props**

| Prop          | Type                                                      | Required | Default   | Description |
| ------------- | --------------------------------------------------------- | -------- | --------- | ----------- |
| `className`   | `string`                                                  | no       | —         | —           |
| `lang`        | `"nb" \| "nn" \| "en" \| "se" \| "smj" \| "sma" \| "fkv"` | no       | `nb`      | —           |
| `productName` | `string`                                                  | no       | —         | —           |
| `variant`     | `"primary" \| "secondary"`                                | no       | `primary` | —           |

## CSS class names

Available when `@sikt/sds-logo/dist/index.css` is imported.

- `.sds-logo`
- `.sds-logo--primary`
- `.sds-logo--product`
- `.sds-logo--secondary`
- `.sds-logo__icon`
- `.sds-logo__subtitle`
- `.sds-logo__title`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Logo**: Default, Product

## Dependencies

**Runtime:**

- `@sikt/sds-core` ^5.3.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
