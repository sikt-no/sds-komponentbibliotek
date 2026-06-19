# @sikt/sds-input

Version: `4.5.1`  
Package slug: `input` (under `packages/input`)

## Install

```sh
npm i -s @sikt/sds-input
```

```ts
import { EmailInput } from "@sikt/sds-input";
```

Add `@import "@sikt/sds-input/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `EmailInput`
- `Input`
- `InputProps`
- `NumberInput`
- `PasswordInput`
- `SearchInput`
- `TelInput`
- `TextArea`
- `TextAreaProps`
- `TextInput`

## Components

### EmailInput

Source: `packages/input/src/Input.tsx`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

### Input

Source: `packages/input/src/Input.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

### NumberInput

Source: `packages/input/src/Input.tsx`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

### PasswordInput

Source: `packages/input/src/Input.tsx`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

### SearchInput

Source: `packages/input/src/Input.tsx`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

### TelInput

Source: `packages/input/src/Input.tsx`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

### TextArea

Source: `packages/input/src/TextArea.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                                                                             | Required | Default | Description                                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-labelledby` | `string`                                                                         | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`       | `string`                                                                         | no       | —       | —                                                                                                                                                                                                                        |
| `errorText`       | `ReactNode`                                                                      | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`        | `ReactNode`                                                                      | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`            | `ReactNode`                                                                      | no       | —       | Icon element to display on the component. Should be a `@sikt/sds-icons` element, or optionally `@phosphor-icons/react` (with `className="sds-icon" aria-hidden="true"`).                                                 |
| `label`           | `NonNullable<ReactNode>`                                                         | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`        | `((event: ChangeEvent<HTMLTextAreaElement, Element>, newValue: string) => void)` | no       | —       | —                                                                                                                                                                                                                        |
| `placeholder`     | `string`                                                                         | no       | —       | —                                                                                                                                                                                                                        |
| `rows`            | `number`                                                                         | no       | —       | —                                                                                                                                                                                                                        |
| `value`           | `string`                                                                         | no       | —       | —                                                                                                                                                                                                                        |

### TextInput

Source: `packages/input/src/Input.tsx`

**Props**

| Prop               | Type                                                                          | Required | Default | Description                                                                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionProps`      | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the action button shown in `SearchInput` (the search submit button). At minimum supply `aria-label` with a localized "Search" string.                                                                          |
| `aria-labelledby`  | `string`                                                                      | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`        | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `clearActionProps` | `Pick<ButtonProps, "aria-label" \| "type" \| "onClick">`                      | no       | —       | Props for the clear button shown in `SearchInput` when the field has a value. At minimum supply `aria-label` with a localized "Clear" string.                                                                            |
| `errorText`        | `ReactNode`                                                                   | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`         | `ReactNode`                                                                   | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `icon`             | `ReactNode`                                                                   | no       | —       | Icon element displayed inside the input field, before the text. Use an icon from `@sikt/sds-icons`. The specialized variants (`EmailInput`, `PasswordInput`, `TelInput`) pre-wire the appropriate icon.                  |
| `label`            | `NonNullable<ReactNode>`                                                      | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `onChange`         | `((event: ChangeEvent<HTMLInputElement, Element>, newValue: string) => void)` | no       | —       | Called when the input value changes. Receives the native event and the new string value as a second argument — use the second argument rather than reading `event.target.value`.                                         |
| `placeholder`      | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |
| `value`            | `string`                                                                      | no       | —       | —                                                                                                                                                                                                                        |

## CSS class names

Available when `@sikt/sds-input/dist/index.css` is imported.

- `.sds-input`
- `.sds-input--error`
- `.sds-input--textarea`
- `.sds-input__icon`
- `.sds-input__input`
- `.sds-input__input--content-sized`
- `.sds-input__wrapper`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **EmailInput**: Input, Readonly, WithCustomIcon, WithError, WithHelpText
- **NumberInput**: Default, Readonly, WithCustomIcon, WithError, WithHelpText
- **PasswordInput**: Default, WithCustomIcon, WithError, WithHelpText
- **SearchInput**: Default, WithClearButton, WithCustomIcon, WithError, WithHelpText
- **TelInput**: Default, Readonly, WithCustomIcon, WithError, WithHelpText
- **TextArea**: Default, Readonly, WithCustomIcon, WithError, WithHelpText, WithRows
