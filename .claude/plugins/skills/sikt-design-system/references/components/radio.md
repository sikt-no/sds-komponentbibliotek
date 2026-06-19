# @sikt/sds-radio

Version: `5.0.0`  
Package slug: `radio` (under `packages/radio`)

## Install

```sh
npm i -s @sikt/sds-radio
```

```ts
import { RadioFieldset } from "@sikt/sds-radio";
```

Add `@import "@sikt/sds-radio/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-form/dist/index.css";`

## Exports

- `RadioFieldset`
- `RadioFieldsetProps`
- `RadioInput`
- `RadioInputProps`

## Components

### RadioFieldset

Source: `packages/radio/src/RadioFieldset.tsx`

Extends: `Omit<FieldsetProps, "onChange">`

**Props**

| Prop              | Type                                                        | Required | Default | Description                                                                                                                                             |
| ----------------- | ----------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-labelledby` | `string`                                                    | no       | —       | Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`       | `string`                                                    | no       | —       | —                                                                                                                                                       |
| `errorText`       | `ReactNode`                                                 | no       | —       | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                       |
| `helpText`        | `ReactNode`                                                 | no       | —       | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `legend`.                                    |
| `legend`          | `NonNullable<ReactNode>`                                    | no       | —       | —                                                                                                                                                       |
| `name`            | `string`                                                    | no       | —       | —                                                                                                                                                       |
| `onChange`        | `((event: ChangeEvent<HTMLInputElement, Element>) => void)` | no       | —       | —                                                                                                                                                       |
| `value`           | `string`                                                    | no       | —       | —                                                                                                                                                       |

### RadioInput

Source: `packages/radio/src/RadioInput.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                     | Required | Default | Description                                                                                                                                                                                                              |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-labelledby` | `string`                 | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`       | `string`                 | no       | —       | —                                                                                                                                                                                                                        |
| `label`           | `NonNullable<ReactNode>` | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `value`           | `string`                 | yes      | —       | —                                                                                                                                                                                                                        |

### RadioInputBase

Source: `packages/radio/src/RadioInputBase.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                                                                       | Required | Default | Description                                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-labelledby` | `string`                                                                   | yes\*    | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `checked`         | `boolean`                                                                  | no       | —       | —                                                                                                                                                                                                                        |
| `className`       | `string`                                                                   | no       | —       | —                                                                                                                                                                                                                        |
| `error`           | `boolean`                                                                  | no       | —       | —                                                                                                                                                                                                                        |
| `label`           | `NonNullable<ReactNode>`                                                   | yes\*    | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `name`            | `string`                                                                   | no       | —       | —                                                                                                                                                                                                                        |
| `onChange`        | `((event: ChangeEvent<HTMLInputElement, Element>, value: string) => void)` | no       | —       | —                                                                                                                                                                                                                        |
| `value`           | `string`                                                                   | yes      | —       | —                                                                                                                                                                                                                        |

## CSS class names

Available when `@sikt/sds-radio/dist/index.css` is imported.

- `.sds-radio`
- `.sds-radio--error`
- `.sds-radio__input`
- `.sds-radio__input-label`
