# @sikt/sds-select

Version: `5.2.1`  
Package slug: `select` (under `packages/select`)

## Install

```sh
npm i -s @sikt/sds-select
```

```ts
import { Select } from "@sikt/sds-select";
```

Add `@import "@sikt/sds-select/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `Select`
- `SelectProps`

## Components

### Select

Source: `packages/select/src/Select.tsx`

Extends: `Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                                                                        | Required               | Default | Description                                                                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-labelledby` | `string`                                                                    | conditionally required | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden.        |
| `className`       | `string`                                                                    | no                     | —       | —                                                                                                                                                                                                                               |
| `errorText`       | `ReactNode`                                                                 | no                     | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                               |
| `helpText`        | `ReactNode`                                                                 | no                     | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                             |
| `label`           | `NonNullable<ReactNode>`                                                    | conditionally required | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`. Visible label rendered above the select. Required unless `aria-labelledby` is set.                                                         |
| `onChange`        | `((event: ChangeEvent<HTMLSelectElement, Element>, value: string) => void)` | no                     | —       | Called when the user selects an option. `value` is `event.target.value` as a convenience.                                                                                                                                       |
| `options`         | `SelectOptionProps[]`                                                       | yes                    | —       | Options to render. Each option is `{ label, value }`. For grouped options, use `{ label, options: [{ label, value }, ...] }`. @example options={[ { label: 'First item', value: '1' }, { label: 'Second item', value: '2' }, ]} |
| `value`           | `string \| number \| readonly string[]`                                     | no                     | —       | The controlled selected value. Must match one of the `value` fields in `options`.                                                                                                                                               |

## CSS class names

Available when `@sikt/sds-select/dist/index.css` is imported.

- `.sds-icon`
- `.sds-select`
- `.sds-select--invalid`
- `.sds-select__optgroup`
- `.sds-select__option`
- `.sds-select__select`
- `.sds-select__select-button`
- `.sds-select__select-input`
