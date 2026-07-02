# @sikt/sds-form

Version: `4.1.1`  
Package slug: `form` (under `packages/form`)

## Install

```sh
npm i -s @sikt/sds-form
```

```ts
import { Fieldset } from "@sikt/sds-form";
```

Add `@import "@sikt/sds-form/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Fieldset`
- `FieldsetProps`
- `FieldsetState`
- `FormField`
- `FormFieldProps`
- `HelpText`
- `HelpTextProps`
- `Label`
- `LabelProps`
- `useFieldset`

## Components

### Fieldset

Source: `packages/form/src/Fieldset.tsx`

Extends: `Omit<HTMLAttributes<HTMLFieldSetElement>, "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                     | Required               | Default | Description                                                                                                                                                                                                                |
| ----------------- | ------------------------ | ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-labelledby` | `string`                 | conditionally required | —       | Required unless `legend` is set. Mutually exclusive with `legend`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`       | `string`                 | no                     | —       | —                                                                                                                                                                                                                          |
| `errorText`       | `ReactNode`              | no                     | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                          |
| `helpText`        | `ReactNode`              | no                     | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `legend`.                                                                                                       |
| `legend`          | `NonNullable<ReactNode>` | conditionally required | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                       |
| `name`            | `string`                 | no                     | —       | —                                                                                                                                                                                                                          |

### FormField

Source: `packages/form/src/FormField.tsx`

Extends: `Omit<HTMLAttributes<HTMLLabelElement>, "onChange">`

**Props**

| Prop            | Type                                  | Required | Default | Description                                                                                                                       |
| --------------- | ------------------------------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `className`     | `string`                              | no       | —       | —                                                                                                                                 |
| `errorText`     | `ReactNode`                           | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`. |
| `errorTextId`   | `string`                              | no       | —       | ID for error text element, needs to be set if there is an error text.                                                             |
| `helpText`      | `ReactNode`                           | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.               |
| `helpTextId`    | `string`                              | no       | —       | ID for help text element, needs to be set if there is a help text.                                                                |
| `htmlFor`       | `string`                              | yes      | —       | ID of the form element inside children.                                                                                           |
| `label`         | `NonNullable<ReactNode> \| undefined` | yes      | —       | A label is required, but undefined is allowed for use when a label is provided via `aria-labelledby`.                             |
| `postLabelSlot` | `ReactNode`                           | no       | —       | Slot for adding content after the label, for example buttons for preforming actions with the field.                               |

### HelpText

Source: `packages/form/src/HelpText.tsx`

Extends: `HTMLAttributes<HTMLDivElement>`

**Props**

| Prop    | Type      | Required | Default | Description |
| ------- | --------- | -------- | ------- | ----------- |
| `error` | `boolean` | no       | —       | —           |

### Label

Source: `packages/form/src/Label.tsx`

Extends: `LabelHTMLAttributes<HTMLLabelElement>`

**Props**

| Prop      | Type                     | Required | Default | Description |
| --------- | ------------------------ | -------- | ------- | ----------- |
| `error`   | `boolean`                | no       | —       | —           |
| `htmlFor` | `string`                 | yes      | —       | —           |
| `text`    | `NonNullable<ReactNode>` | yes      | —       | —           |

## CSS class names

Available when `@sikt/sds-form/dist/index.css` is imported.

- `.sds-form-field`
- `.sds-form-field__label-after`
- `.sds-form-field__label-wrapper`
- `.sds-form-fieldset__legend`
- `.sds-form__help-text`
- `.sds-form__help-text--error`
- `.sds-form__label-text`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **FormField**: Default, WithError, WithHelpText, WithPostLabelSlot
- **HelpText**: Default, WithError
- **Label**: Default, WithChildren, WithError
