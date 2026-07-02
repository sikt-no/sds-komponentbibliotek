# @sikt/sds-dialog

Version: `2.0.7`  
Package slug: `dialog` (under `packages/dialog`)

Dialog component, Sikt component library

## Install

```sh
npm i -s @sikt/sds-dialog
```

```ts
import { Dialog } from "@sikt/sds-dialog";
```

Add `@import "@sikt/sds-dialog/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `Dialog`
- `DialogProps`

## Components

### Dialog

Source: `packages/dialog/src/Dialog.tsx`

Extends: `HTMLAttributes<HTMLDialogElement>`

**Props**

| Prop                   | Type                                | Required               | Default | Description                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ----------------------------------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-label`           | `string`                            | no                     | —       | Specifies the ARIA label for the modal when the heading alone does not sufficiently describe the content. This property should only be used when the heading alone is not enough to provide an adequate description of the content.                                                                                                                     |
| `className`            | `string`                            | no                     | —       | —                                                                                                                                                                                                                                                                                                                                                       |
| `closeButtonAriaLabel` | `string`                            | conditionally required | —       | Required unless `closeButtonLabel` is set. Mutually exclusive with `closeButtonLabel`.                                                                                                                                                                                                                                                                  |
| `closeButtonLabel`     | `string`                            | conditionally required | —       | Required unless `closeButtonAriaLabel` is set. Mutually exclusive with `closeButtonAriaLabel`.                                                                                                                                                                                                                                                          |
| `closedby`             | `"any" \| "closerequest" \| "none"` | no                     | `any`   | - any (default): The dialog can be dismissed with a light dismiss user action, a platform-specific user action, or a developer-specified mechanism. - closerequest: The dialog can be dismissed with a platform-specific user action or a developer-specified mechanism. - none: The dialog can only be dismissed with a developer-specified mechanism. |
| `drawer`               | `"left" \| "right"`                 | no                     | —       | - left: Left side drawer. - right: Right side drawer.                                                                                                                                                                                                                                                                                                   |
| `footer`               | `ReactNode`                         | no                     | —       | Content rendered in the footer area below the body, typically action buttons.                                                                                                                                                                                                                                                                           |
| `heading`              | `ReactNode`                         | yes                    | —       | Title displayed in the dialog header. Rendered as an `<h1>` visually sized at `s`.                                                                                                                                                                                                                                                                      |
| `modal`                | `boolean`                           | no                     | `true`  | - true (default): Modal dialog. - false: Non-modal dialog.                                                                                                                                                                                                                                                                                              |
| `onClose`              | `() => void`                        | yes                    | —       | Called when the dialog requests to close (escape key, backdrop click, or close button). Update the `open` prop in response.                                                                                                                                                                                                                             |
| `open`                 | `boolean`                           | yes                    | —       | Controls whether the dialog is shown. Pass `true` to open, `false` to close.                                                                                                                                                                                                                                                                            |
| `subheading`           | `string`                            | no                     | —       | Optional subtitle rendered below the heading in smaller body text.                                                                                                                                                                                                                                                                                      |

## CSS class names

Available when `@sikt/sds-dialog/dist/index.css` is imported.

- `.sds-dialog`
- `.sds-dialog--drawer`
- `.sds-dialog--drawer-left`
- `.sds-dialog--drawer-right`
- `.sds-dialog--scrollable`
- `.sds-dialog__close-button`
- `.sds-dialog__content`
- `.sds-dialog__content-wrapper`
- `.sds-dialog__footer`
- `.sds-dialog__header`
- `.sds-dialog__heading`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Dialog**: Default, Drawer, NonModal
