# @sikt/sds-input-file

Version: `2.0.1`  
Package slug: `input-file` (under `packages/input-file`)

## Install

```sh
npm i -s @sikt/sds-input-file
```

```ts
import { FileList } from "@sikt/sds-input-file";
```

Add `@import "@sikt/sds-input-file/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `FileList`
- `FileListItem`
- `FileListItemProps`
- `FileListProps`
- `FileWithError`
- `InputFile`
- `InputFileProps`

## Components

### FileList

Source: `packages/input-file/src/FileList.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop         | Type     | Required | Default | Description |
| ------------ | -------- | -------- | ------- | ----------- |
| `className`  | `string` | no       | —       | —           |
| `figCaption` | `string` | no       | —       | —           |

### FileListItem

Source: `packages/input-file/src/FileListItem.tsx`

Extends: `LiHTMLAttributes<HTMLLIElement>`

**Props**

| Prop                | Type                                                            | Required | Default   | Description                                                                                                                       |
| ------------------- | --------------------------------------------------------------- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `bytesConversion`   | `"decimal" \| "binary"`                                         | no       | `decimal` | —                                                                                                                                 |
| `errorText`         | `ReactNode`                                                     | no       | —         | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`. |
| `fileSize`          | `number`                                                        | no       | —         | —                                                                                                                                 |
| `loading`           | `boolean`                                                       | no       | `false`   | —                                                                                                                                 |
| `progressProps`     | `{ label: string; value: number; }`                             | no       | —         | —                                                                                                                                 |
| `removeActionProps` | `(Pick<ButtonProps, "onClick" \| "type"> & { label: string; })` | no       | —         | —                                                                                                                                 |

### InputFile

Source: `packages/input-file/src/InputFile.tsx`

Extends: `DropZoneProps`

**Props**

| Prop                | Type                                              | Required | Default                   | Description                                                                                                                                                                        |
| ------------------- | ------------------------------------------------- | -------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`            | `string \| string[]`                              | yes      | —                         | —                                                                                                                                                                                  |
| `aria-label`        | `string`                                          | yes      | —                         | Defines a string value that labels the current element.                                                                                                                            |
| `capture`           | `"user" \| "environment"`                         | no       | —                         | —                                                                                                                                                                                  |
| `children`          | `ReactNode`                                       | no       | —                         | The children of the component. A function may be provided to alter the children based on component state.                                                                          |
| `className`         | `string`                                          | no       | —                         | The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state. |
| `errorText`         | `ReactNode`                                       | no       | —                         | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                  |
| `helpText`          | `ReactNode`                                       | no       | —                         | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                |
| `label`             | `NonNullable<ReactNode>`                          | yes      | —                         | —                                                                                                                                                                                  |
| `maxFileSize`       | `number`                                          | no       | —                         | —                                                                                                                                                                                  |
| `multiple`          | `boolean`                                         | no       | `false`                   | —                                                                                                                                                                                  |
| `onValueChange`     | `((newValue: (File \| FileWithError)[]) => void)` | no       | —                         | —                                                                                                                                                                                  |
| `placeholder`       | `string`                                          | no       | `Dra og slipp filer her,` | —                                                                                                                                                                                  |
| `placeholderBridge` | `string`                                          | no       | `eller`                   | —                                                                                                                                                                                  |
| `triggerText`       | `ReactNode`                                       | no       | `Åpne filutforskeren`     | —                                                                                                                                                                                  |
| `value`             | `File[]`                                          | no       | —                         | —                                                                                                                                                                                  |

## CSS class names

Available when `@sikt/sds-input-file/dist/index.css` is imported.

- `.sds-input-file-list`
- `.sds-input-file-list__item`
- `.sds-input-file-list__item--error`
- `.sds-input-file-list__item-end`
- `.sds-input-file-list__item-error`
- `.sds-input-file-list__item-icon`
- `.sds-input-file-list__item-icon--loading`
- `.sds-input-file-list__item-size`
- `.sds-input-file-list__item-start`
- `.sds-input-file-list__list`
- `.sds-input-file-wrapper`
- `.sds-input-file__drop-zone`
- `.sds-input-file__drop-zone--error`
- `.sds-input-file__drop-zone-icon`
- `.sds-input-file__placeholder`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **InputFile**: Default, WithError

## Dependencies

**Runtime:**

- `@react-types/shared` ^3.34.0
- `@sikt/sds-button` ^4.6.0
- `@sikt/sds-core` ^5.3.0
- `@sikt/sds-form` ^4.1.1
- `@sikt/sds-icons` ^4.2.0
- `react-aria-components` ^1.18.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^1.0.0 || ^2.0.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
