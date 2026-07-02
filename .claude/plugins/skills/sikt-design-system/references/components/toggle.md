# @sikt/sds-toggle

Version: `8.0.1`  
Package slug: `toggle` (under `packages/toggle`)

## Install

```sh
npm i -s @sikt/sds-toggle
```

```ts
import { ToggleSegment } from "@sikt/sds-toggle";
```

Add `@import "@sikt/sds-toggle/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `ToggleSegment`
- `ToggleSegmentOption`
- `ToggleSegmentOptionProps`
- `ToggleSegmentProps`
- `ToggleSwitch`
- `ToggleSwitchProps`

## Components

### ToggleSegment

Source: `packages/toggle/src/ToggleSegment.tsx`

Extends: `Omit<FieldsetProps, "onChange">`

**Props**

| Prop              | Type                         | Required | Default      | Description                                                                                                                                             |
| ----------------- | ---------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-labelledby` | `string`                     | no       | —            | Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`       | `string`                     | no       | —            | —                                                                                                                                                       |
| `errorText`       | `ReactNode`                  | no       | —            | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                       |
| `helpText`        | `ReactNode`                  | no       | —            | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `legend`.                                    |
| `legend`          | `NonNullable<ReactNode>`     | no       | —            | —                                                                                                                                                       |
| `name`            | `string`                     | no       | —            | —                                                                                                                                                       |
| `orientation`     | `"horizontal" \| "vertical"` | no       | `horizontal` | —                                                                                                                                                       |
| `variant`         | `"default" \| "fixed"`       | no       | `default`    | —                                                                                                                                                       |

### ToggleSegmentOption

Source: `packages/toggle/src/ToggleSegmentOption.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">`

**Props**

| Prop       | Type                                                                               | Required | Default | Description |
| ---------- | ---------------------------------------------------------------------------------- | -------- | ------- | ----------- |
| `checked`  | `boolean`                                                                          | no       | —       | —           |
| `label`    | `NonNullable<ReactNode>`                                                           | yes      | —       | —           |
| `onChange` | `(event: ChangeEvent<HTMLInputElement, Element>, value: string \| number) => void` | yes      | —       | —           |
| `value`    | `string \| number`                                                                 | yes      | —       | —           |

### ToggleSwitch

Source: `packages/toggle/src/ToggleSwitch.tsx`

Extends: `Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "aria-label" | "aria-labelledby">`

**Props**

| Prop              | Type                                   | Required               | Default | Description                                                                                                                                                                                                              |
| ----------------- | -------------------------------------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-labelledby` | `string`                               | conditionally required | —       | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `checked`         | `boolean`                              | no                     | `false` | —                                                                                                                                                                                                                        |
| `className`       | `string`                               | no                     | —       | —                                                                                                                                                                                                                        |
| `label`           | `NonNullable<ReactNode>`               | conditionally required | —       | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `labelFirst`      | `boolean`                              | no                     | `false` | —                                                                                                                                                                                                                        |
| `onChange`        | `ChangeEventHandler<HTMLInputElement>` | no                     | —       | —                                                                                                                                                                                                                        |
| `showIcons`       | `boolean`                              | no                     | `true`  | —                                                                                                                                                                                                                        |

## CSS class names

Available when `@sikt/sds-toggle/dist/index.css` is imported.

- `.sds-form-fieldset__legend`
- `.sds-icon`
- `.sds-toggle-segment`
- `.sds-toggle-segment--fixed`
- `.sds-toggle-segment--horizontal`
- `.sds-toggle-segment__fieldset`
- `.sds-toggle-segment__group`
- `.sds-toggle-segment__input`
- `.sds-toggle-segment__label`
- `.sds-toggle-segment__option`
- `.sds-toggle-segment__option--checked`
- `.sds-toggle-switch`
- `.sds-toggle-switch--checked`
- `.sds-toggle-switch__inner`
- `.sds-toggle-switch__label`
- `.sds-toggle-switch__label-text`
- `.sds-toggle-switch__thumb`
- `.sds-toggle-switch__track`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **ToggleSegment**: Default, WithFixedWidth, WithVerticalOrientation
