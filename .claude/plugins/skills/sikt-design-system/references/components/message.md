# @sikt/sds-message

Version: `2.1.1`  
Package slug: `message` (under `packages/message`)

Message component, Sikt component library

## Install

```sh
npm i -s @sikt/sds-message
```

```ts
import { Alert } from "@sikt/sds-message";
```

Add `@import "@sikt/sds-message/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `Alert`
- `AlertProps`
- `ApplicationStatus`
- `ApplicationStatusProps`
- `ErrorSummary`
- `ErrorSummaryProps`
- `GuidePanel`
- `GuidePanelProps`
- `MessageButton`
- `MessageButtonLink`
- `MessageButtonLinkProps`
- `MessageButtonProps`

## Components

### Alert

Source: `packages/message/src/Message.tsx`

Is used to give instant feedback on a user action, for example posting a form or saving changes.
It should be placed in context of that action, and not be placed above other content.

Extends: `MessageBaseProps`

**Props**

| Prop           | Type                      | Required | Default | Description |
| -------------- | ------------------------- | -------- | ------- | ----------- |
| `callToAction` | `ReactNode`               | no       | —       | —           |
| `className`    | `string`                  | no       | —       | —           |
| `variant`      | `"success" \| "critical"` | yes      | —       | —           |

### ApplicationStatus

Source: `packages/message/src/Message.tsx`

Is used to indicate status on application level. Typically placed under the header or main menu.
It can, in most cases, not be dismissed by the user since it is needed to show the current system status.

Extends: `MessageBaseProps`

**Props**

| Prop           | Type                  | Required | Default | Description |
| -------------- | --------------------- | -------- | ------- | ----------- |
| `callToAction` | `ReactNode`           | no       | —       | —           |
| `className`    | `string`              | no       | —       | —           |
| `variant`      | `"info" \| "warning"` | yes      | —       | —           |

### ErrorSummary

Source: `packages/message/src/Message.tsx`

Is used to summarize errors in a form. Should help the user find errors if there are many.

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### GuidePanel

Source: `packages/message/src/Message.tsx`

Is used to give to give reasurment and additional information to a task or work flow.
For example where users struggle, where irreversible changes are made,
where there are error sources like fetched data or where manual validation is needed.

Extends: `MessageBaseProps`

**Props**

| Prop        | Type                  | Required | Default | Description |
| ----------- | --------------------- | -------- | ------- | ----------- |
| `className` | `string`              | no       | —       | —           |
| `variant`   | `"info" \| "warning"` | yes      | —       | —           |

### MessageButton

Source: `packages/message/src/MessageButton.tsx`

**Props**

| Prop           | Type                          | Required | Default | Description                                                                                                                                                                                                                 |
| -------------- | ----------------------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`    | `string`                      | no       | —       | —                                                                                                                                                                                                                           |
| `icon`         | `ReactNode`                   | no       | —       | Icon element to display inside the button. Use an icon from `@sikt/sds-icons`. Position is controlled by `iconVariant`.                                                                                                     |
| `iconVariant`  | `"right" \| "left" \| "only"` | no       | —       | Controls where the icon appears relative to the label. - `right` (default): icon after the label. - `left`: icon before the label. - `only`: icon replaces the label. The label text is used as `aria-label` automatically. |
| `notification` | `ReactNode`                   | no       | —       | Notification element to display on the button. Should be a `@sikt/sds-notification` element. The notification element should handle aria attributes itself.                                                                 |

### MessageButtonLink

Source: `packages/message/src/MessageButtonLink.tsx`

**Props**

| Prop           | Type                          | Required | Default | Description                                                                                                                                                                                                                                      |
| -------------- | ----------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asChild`      | `boolean`                     | no       | `false` | Use to change element type into alternative React component. Useful with libraries that require their own routing components. For example `<ButtonLink asChild><NextLink>` would result in a `<NextLink>` with all properties of this component. |
| `className`    | `string`                      | no       | —       | —                                                                                                                                                                                                                                                |
| `icon`         | `ReactNode`                   | no       | —       | Icon element to display inside the link. Use an icon from `@sikt/sds-icons`. Position is controlled by `iconVariant`.                                                                                                                            |
| `iconVariant`  | `"right" \| "left" \| "only"` | no       | —       | Controls where the icon appears relative to the label. - `right` (default): icon after the label. - `left`: icon before the label. - `only`: icon replaces the label. The label text is used as `aria-label` automatically.                      |
| `notification` | `ReactNode`                   | no       | —       | Notification element to display on the button. Should be a `@sikt/sds-notification` element. The notification element should handle aria attributes itself.                                                                                      |

## CSS class names

Available when `@sikt/sds-message/dist/index.css` is imported.

- `.sds-icon`
- `.sds-message`
- `.sds-message--application-status`
- `.sds-message--bar`
- `.sds-message--box`
- `.sds-message--critical`
- `.sds-message--info`
- `.sds-message--success`
- `.sds-message--warning`
- `.sds-message__cta`
- `.sds-message__icon`
- `.sds-message__message`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Alert**: Alert
- **ApplicationStatus**: ApplicationStatus, ApplicationStatusWithHeader
- **ErrorSummary**: ErrorSummary, ErrorSummaryWithSubmit
- **GuidePanel**: GuidePanel

## Dependencies

**Runtime:**

- `@sikt/sds-button` ^4.6.0
- `@sikt/sds-core` ^5.3.0
- `@sikt/sds-icons` ^4.2.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
