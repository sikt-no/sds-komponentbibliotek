# @sikt/sds-input-datepicker

Version: `3.0.3`  
Package slug: `input-datepicker` (under `packages/input-datepicker`)

## Install

```sh
npm i -s @sikt/sds-input-datepicker
```

```ts
import { ClearButton } from "@sikt/sds-input-datepicker";
```

Add `@import "@sikt/sds-input-datepicker/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-form/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `InputDatepicker`
- `InputDatepickerProps`
- `InputDaterangepicker`
- `InputDaterangepickerProps`

## Components

### ClearButton

Source: `packages/input-datepicker/src/InputDatepicker.tsx`

**Props**

_No declared props._

### ClearButton

Source: `packages/input-datepicker/src/InputDaterangepicker.tsx`

**Props**

_No declared props._

### InputDatepicker

Source: `packages/input-datepicker/src/InputDatepicker.tsx`

Extends: `Omit<DatePickerProps<DateValue>, "aria-label" | "aria-labelledby">`

**Props**

| Prop                 | Type                                   | Required | Default         | Description                                                                                                                                                                                                              |
| -------------------- | -------------------------------------- | -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-labelledby`    | `string`                               | yes\*    | —               | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`          | `string`                               | no       | —               | The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.                                       |
| `clearActionProps`   | `ClearActionProps`                     | no       | —               | —                                                                                                                                                                                                                        |
| `errorText`          | `ReactNode`                            | no       | —               | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`           | `ReactNode`                            | no       | —               | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `label`              | `NonNullable<ReactNode>`               | yes\*    | —               | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `lang`               | `string`                               | no       | `nb-NO`         | —                                                                                                                                                                                                                        |
| `nextMonthLabel`     | `string`                               | no       | `Neste måned`   | —                                                                                                                                                                                                                        |
| `onValueChange`      | `((value: DateValue \| null) => void)` | no       | —               | —                                                                                                                                                                                                                        |
| `openCalendarLabel`  | `ReactNode`                            | no       | `Åpne kalender` | —                                                                                                                                                                                                                        |
| `previousMonthLabel` | `string`                               | no       | `Forrige måned` | —                                                                                                                                                                                                                        |
| `value`              | `DateValue`                            | no       | —               | The current value (controlled).                                                                                                                                                                                          |

### InputDaterangepicker

Source: `packages/input-datepicker/src/InputDaterangepicker.tsx`

Extends: `Omit<DateRangePickerProps<DateValue>, "aria-label" | "aria-labelledby">`

**Props**

| Prop                 | Type                                                                               | Required | Default         | Description                                                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------- | -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aria-labelledby`    | `string`                                                                           | yes\*    | —               | Required unless `label` is set. Mutually exclusive with `label`. Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden. |
| `className`          | `string`                                                                           | no       | —               | The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.                                       |
| `clearActionProps`   | `ClearActionProps`                                                                 | no       | —               | —                                                                                                                                                                                                                        |
| `errorText`          | `ReactNode`                                                                        | no       | —               | Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` & `aria-errormessage`.                                                                                        |
| `helpText`           | `ReactNode`                                                                        | no       | —               | Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.                                                                                                      |
| `label`              | `NonNullable<ReactNode>`                                                           | yes\*    | —               | Required unless `aria-labelledby` is set. Mutually exclusive with `aria-labelledby`.                                                                                                                                     |
| `lang`               | `string`                                                                           | no       | `nb-NO`         | —                                                                                                                                                                                                                        |
| `nextMonthLabel`     | `string`                                                                           | no       | `Neste måned`   | —                                                                                                                                                                                                                        |
| `onValueChange`      | `((dates: { start: DateValue \| null; end: DateValue \| null; } \| null) => void)` | no       | —               | —                                                                                                                                                                                                                        |
| `openCalendarLabel`  | `ReactNode`                                                                        | no       | `Åpne kalender` | —                                                                                                                                                                                                                        |
| `previousMonthLabel` | `string`                                                                           | no       | `Forrige måned` | —                                                                                                                                                                                                                        |
| `value`              | `{ start: DateValue; end: DateValue; }`                                            | no       | —               | The current value (controlled).                                                                                                                                                                                          |

## CSS class names

Available when `@sikt/sds-input-datepicker/dist/index.css` is imported.

- `.sds-form__help-text`
- `.sds-input-datepicker`
- `.sds-input-datepicker__calendar`
- `.sds-input-datepicker__calendar-button`
- `.sds-input-datepicker__calendar-cell`
- `.sds-input-datepicker__calendar-header`
- `.sds-input-datepicker__calendar-heading`
- `.sds-input-datepicker__input`
- `.sds-input-datepicker__input--end`
- `.sds-input-datepicker__input-segment`
- `.sds-input-datepicker__wrapper`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **InputDatepicker**: WithClearOption, WithCustomLocale, WithError, WithTime
- **InputDaterangepicker**: WithClearOption
