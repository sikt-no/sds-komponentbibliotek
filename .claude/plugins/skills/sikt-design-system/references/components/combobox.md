# @sikt/sds-combobox

Version: `5.3.0`  
Package slug: `combobox` (under `packages/combobox`)

## Install

```sh
npm i -s @sikt/sds-combobox
```

```ts
import { ClearButton } from "@sikt/sds-combobox";
```

Add `@import "@sikt/sds-combobox/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `Combobox`
- `ComboboxItem`
- `ComboboxMultipleProps`
- `ComboboxOption`
- `ComboboxOptionGroupProps`
- `ComboboxProps`
- `ComboboxSingleProps`

## Components

### ClearButton

Source: `packages/combobox/src/ClearButton.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `clearText` | `string` | yes      | —       | —           |

### Combobox

Source: `packages/combobox/src/Combobox.tsx`

**Props**

| Prop               | Type                                                                           | Required | Default     | Description                                                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------ | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                                                                       | no       | —           | —                                                                                                                                                                                                                                                                       |
| `defaultSelected`  | `string \| ComboboxItem \| (string \| ComboboxItem)[]`                         | no       | —           | Default selected item when uncontrolled                                                                                                                                                                                                                                 |
| `errorText`        | `ReactNode`                                                                    | no       | —           | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                                                                       |
| `helpText`         | `ReactNode`                                                                    | no       | —           | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                                                                     |
| `inputProps`       | `InputHTMLAttributes<HTMLInputElement>`                                        | no       | —           | —                                                                                                                                                                                                                                                                       |
| `label`            | `NonNullable<ReactNode>`                                                       | yes\*    | —           | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                                                                    |
| `lang`             | `"nb" \| "nn" \| "en"`                                                         | no       | `nb`        | Sets language for accessible texts.                                                                                                                                                                                                                                     |
| `multiple`         | `boolean`                                                                      | no       | `false`     | Indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time.                                                                                                                                    |
| `name`             | `string`                                                                       | no       | `undefined` | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                                                                                                                         |
| `noChips`          | `boolean`                                                                      | no       | —           | —                                                                                                                                                                                                                                                                       |
| `onSelectedChange` | `((value: ComboboxItem \| null) => void) \| ((value: ComboboxItem[]) => void)` | no       | —           | Callback when selected items changes                                                                                                                                                                                                                                    |
| `options`          | `ComboboxOption[]`                                                             | yes      | —           | A list of option objects or section objects containing grouped options: - **label** Text for the option label or section heading. - **value** The value submitted with the form (options only). - **selected** Whether the option is initially selected (options only). |
| `selected`         | `string \| ComboboxItem \| (string \| ComboboxItem)[] \| null`                 | no       | —           | The selected item of the Combobox. If `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `ComboboxItem`. Using this makes the component controlled and it must be used in combination with `onSelectedChange`.               |

### Option

Source: `packages/combobox/src/Option.tsx`

**Props**

_No declared props._

### OptionGroup

Source: `packages/combobox/src/OptionGroup.tsx`

**Props**

| Prop      | Type            | Required | Default | Description |
| --------- | --------------- | -------- | ------- | ----------- |
| `options` | `OptionProps[]` | yes      | —       | —           |

## CSS class names

Available when `@sikt/sds-combobox/dist/index.css` is imported.

- `.sds-combobox`
- `.sds-combobox--invalid`
- `.sds-combobox--no-chips`
- `.sds-combobox__button`
- `.sds-combobox__button-icon`
- `.sds-combobox__combobox`
- `.sds-combobox__datalist`
- `.sds-combobox__datalist-group`
- `.sds-combobox__datalist-group-label`
- `.sds-combobox__datalist-option`
- `.sds-combobox__input`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Combobox**: Controlled, ControlledMultiple, Default, InForm, InFormMultiple, Multiple, WithError, WithGroupedOptions, WithGroupedOptionsMultiple, WithHelpText
