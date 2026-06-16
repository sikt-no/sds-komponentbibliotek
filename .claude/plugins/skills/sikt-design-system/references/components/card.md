# @sikt/sds-card

Version: `4.1.2`  
Package slug: `card` (under `packages/card`)

## Install

```sh
npm i -s @sikt/sds-card
```

```ts
import { Card } from "@sikt/sds-card";
```

Add `@import "@sikt/sds-card/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Card`
- `CardProps`

## Components

### Card

Source: `packages/card/src/Card.tsx`

Extends: `HTMLAttributes<HTMLDivElement>`

**Props**

| Prop           | Type                                           | Required | Default | Description |
| -------------- | ---------------------------------------------- | -------- | ------- | ----------- |
| `callToAction` | `ReactNode`                                    | no       | —       | —           |
| `className`    | `string`                                       | no       | —       | —           |
| `headingLevel` | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | no       | `h3`    | —           |
| `headingText`  | `string`                                       | yes      | —       | —           |
| `image`        | `ReactNode`                                    | no       | —       | —           |
| `leadText`     | `string`                                       | no       | —       | —           |
| `overlineText` | `string`                                       | no       | —       | —           |

## CSS class names

Available when `@sikt/sds-card/dist/index.css` is imported.

- `.sds-card`
- `.sds-card__content`
- `.sds-card__cta`
- `.sds-card__image`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Card**: Default

## Dependencies

**Runtime:**

- `@sikt/sds-core` ^5.3.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
