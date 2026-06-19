# @sikt/sds-notification

Version: `1.1.1`  
Package slug: `notification` (under `packages/notification`)

Notification component, Sikt component library

## Install

```sh
npm i -s @sikt/sds-notification
```

```ts
import { Notification } from "@sikt/sds-notification";
```

Add `@import "@sikt/sds-notification/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Notification`
- `NotificationProps`

## Components

### Notification

Source: `packages/notification/src/Notification.tsx`

Extends: `HTMLAttributes<HTMLSpanElement>`

**Props**

| Prop        | Type                                                                     | Required | Default | Description |
| ----------- | ------------------------------------------------------------------------ | -------- | ------- | ----------- |
| `className` | `string`                                                                 | no       | —       | —           |
| `count`     | `number`                                                                 | no       | —       | —           |
| `maxCount`  | `number`                                                                 | no       | —       | —           |
| `variant`   | `"brand" \| "neutral" \| "success" \| "info" \| "warning" \| "critical"` | no       | `info`  | —           |

## CSS class names

Available when `@sikt/sds-notification/dist/index.css` is imported.

- `.sds-notification`
- `.sds-notification--brand`
- `.sds-notification--critical`
- `.sds-notification--info`
- `.sds-notification--neutral`
- `.sds-notification--success`
- `.sds-notification--warning`
- `.sds-notification__count`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Notification**: Default, WithoutCount
