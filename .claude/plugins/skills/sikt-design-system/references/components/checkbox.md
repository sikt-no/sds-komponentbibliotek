# @sikt/sds-checkbox

Version: `4.0.0`  
Package slug: `checkbox` (under `packages/checkbox`)

## Install

```sh
npm i -s @sikt/sds-checkbox
```

```ts
import { CheckboxInput } from "@sikt/sds-checkbox";
```

Add `@import "@sikt/sds-checkbox/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `CheckboxInput`
- `CheckboxInputProps`

## Components

### CheckboxInput

Source: `packages/checkbox/src/CheckboxInput.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                                                                            | Required               | Default | Description                                                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------- | ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-label`      | `string`                                                                        | conditionally required | —       | Required unless `label` or `aria-labelledby` is set. Mutually exclusive with `label` or `aria-labelledby`.                                                                                                                                               |
| `aria-labelledby` | `string`                                                                        | conditionally required | —       | Required unless `label` or `aria-label` is set. Mutually exclusive with `label` or `aria-label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `checked`         | `boolean`                                                                       | no                     | —       | —                                                                                                                                                                                                                                                        |
| `className`       | `string`                                                                        | no                     | —       | —                                                                                                                                                                                                                                                        |
| `error`           | `boolean`                                                                       | no                     | —       | —                                                                                                                                                                                                                                                        |
| `indeterminate`   | `boolean`                                                                       | no                     | —       | —                                                                                                                                                                                                                                                        |
| `label`           | `NonNullable<ReactNode>`                                                        | conditionally required | —       | Required unless `aria-labelledby` or `aria-label` is set. Mutually exclusive with `aria-labelledby` or `aria-label`.                                                                                                                                     |
| `name`            | `string`                                                                        | no                     | —       | —                                                                                                                                                                                                                                                        |
| `onChange`        | `((event: ChangeEvent<HTMLInputElement, Element>, isChecked: boolean) => void)` | no                     | —       | —                                                                                                                                                                                                                                                        |
| `value`           | `string \| number`                                                              | no                     | —       | —                                                                                                                                                                                                                                                        |

## CSS class names

Available when `@sikt/sds-checkbox/dist/index.css` is imported.

- `.sds-checkbox`
- `.sds-checkbox--error`
- `.sds-checkbox__icon`
- `.sds-checkbox__icon-wrapper`
- `.sds-checkbox__input`
- `.sds-checkbox__input-label`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Checkbox**: Checked, Indeterminate, Unchecked, WithAriaLabel, WithAriaLabelledby
