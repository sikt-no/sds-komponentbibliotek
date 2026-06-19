# @sikt/sds-button

Version: `4.6.1`  
Package slug: `button` (under `packages/button`)

## Install

```sh
npm i -s @sikt/sds-button
```

```ts
import { Button } from "@sikt/sds-button";
```

Add `@import "@sikt/sds-button/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Button`
- `ButtonGroup`
- `ButtonGroupProps`
- `ButtonLink`
- `ButtonLinkProps`
- `ButtonProps`

## Components

### Button

Source: `packages/button/src/Button.tsx`

Extends: `ButtonHTMLAttributes<HTMLButtonElement>`

**Props**

| Prop           | Type                                                                                        | Required | Default   | Description                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                                                                                    | no       | —         | —                                                                                                                                                                                                                                                                                                                                                                              |
| `icon`         | `ReactNode`                                                                                 | no       | —         | Icon element to display inside the button. Use an icon from `@sikt/sds-icons`. Position is controlled by `iconVariant`.                                                                                                                                                                                                                                                        |
| `iconVariant`  | `"right" \| "left" \| "only"`                                                               | no       | `right`   | Controls where the icon appears relative to the label. - `right` (default): icon after the label. - `left`: icon before the label. - `only`: icon replaces the label. The label text is used as `aria-label` automatically.                                                                                                                                                    |
| `notification` | `ReactNode`                                                                                 | no       | —         | Notification element to display on the button. Should be a `@sikt/sds-notification` element. The notification element should handle aria attributes itself.                                                                                                                                                                                                                    |
| `size`         | `"default" \| "small"`                                                                      | no       | `default` | Size of the button. - `default`: standard size for most contexts. - `small`: compact size for dense UIs or toolbars.                                                                                                                                                                                                                                                           |
| `variant`      | `"strong" \| "subtle" \| "transparent" \| "critical" \| "neutral" \| "neutral-transparent"` | no       | `subtle`  | Visual emphasis of the button. Choose based on the action's importance, not aesthetics. - `subtle` (default): secondary actions. - `strong`: primary call to action — use at most one per section. - `transparent`: low-emphasis or icon-only actions. - `critical`: destructive actions such as delete or remove. - `neutral` / `neutral-transparent`: neutral-tone variants. |

### ButtonGroup

Source: `packages/button/src/ButtonGroup.tsx`

**Props**

| Prop          | Type                                   | Required | Default | Description                                                                                                                                                                                           |
| ------------- | -------------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`   | `string`                               | no       | —       | —                                                                                                                                                                                                     |
| `orientation` | `"auto" \| "horizontal" \| "vertical"` | no       | `auto`  | Layout direction of the buttons. - `auto` (default): horizontal, wrapping to vertical on small viewports. - `horizontal`: always side by side. - `vertical`: always stacked.                          |
| `variant`     | `"right" \| "left" \| "split"`         | no       | `split` | Alignment of the buttons within the group. - `split` (default): first button left-aligned, remaining buttons right-aligned. - `left`: all buttons left-aligned. - `right`: all buttons right-aligned. |

### ButtonLink

Source: `packages/button/src/ButtonLink.tsx`

Extends: `AnchorHTMLAttributes<HTMLAnchorElement>`

**Props**

| Prop           | Type                                                                                        | Required | Default   | Description                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------- | -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `asChild`      | `boolean`                                                                                   | no       | `false`   | Use to change element type into alternative React component. Useful with libraries that require their own routing components. For example `<ButtonLink asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.                                                                                                                                    |
| `className`    | `string`                                                                                    | no       | —         | —                                                                                                                                                                                                                                                                                                                                                                                   |
| `icon`         | `ReactNode`                                                                                 | no       | —         | Icon element to display inside the link. Use an icon from `@sikt/sds-icons`. Position is controlled by `iconVariant`.                                                                                                                                                                                                                                                               |
| `iconVariant`  | `"right" \| "left" \| "only"`                                                               | no       | `right`   | Controls where the icon appears relative to the label. - `right` (default): icon after the label. - `left`: icon before the label. - `only`: icon replaces the label. The label text is used as `aria-label` automatically.                                                                                                                                                         |
| `notification` | `ReactNode`                                                                                 | no       | —         | Notification element to display on the button. Should be a `@sikt/sds-notification` element. The notification element should handle aria attributes itself.                                                                                                                                                                                                                         |
| `size`         | `"default" \| "small"`                                                                      | no       | `default` | Size of the button link. - `default`: standard size for most contexts. - `small`: compact size for dense UIs or toolbars.                                                                                                                                                                                                                                                           |
| `variant`      | `"strong" \| "subtle" \| "transparent" \| "critical" \| "neutral" \| "neutral-transparent"` | no       | `subtle`  | Visual emphasis of the button link. Choose based on the action's importance, not aesthetics. - `subtle` (default): secondary actions. - `strong`: primary call to action — use at most one per section. - `transparent`: low-emphasis or icon-only actions. - `critical`: destructive actions such as delete or remove. - `neutral` / `neutral-transparent`: neutral-tone variants. |

## CSS class names

Available when `@sikt/sds-button/dist/index.css` is imported.

- `.sds-button`
- `.sds-button--critical`
- `.sds-button--icon-left`
- `.sds-button--neutral`
- `.sds-button--neutral-transparent`
- `.sds-button--small`
- `.sds-button--strong`
- `.sds-button--subtle`
- `.sds-button--transparent`
- `.sds-button-group`
- `.sds-button-group--auto`
- `.sds-button-group--horizontal`
- `.sds-button-group--left`
- `.sds-button-group--right`
- `.sds-button-group--split`
- `.sds-button-group--vertical`
- `.sds-button-link`
- `.sds-button__icon`
- `.sds-button__icon--left`
- `.sds-button__icon--only`
- `.sds-button__icon--right`
- `.sds-button__notification`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Button**: Default, IconLeft, IconOnly, IconRight, Small, WithNotification, WithNotificationAndText, WithNotificationIconLeft, WithNotificationMaxCount, WithNotificationNoCount
- **ButtonGroup**: Default
- **ButtonLink**: AsChild, Default, IconLeft, IconOnly, IconRight, Small, WithFeedbackNotification, WithNotification, WithNotificationAndText, WithNotificationMaxCount
