# @sikt/sds-details

Version: `1.2.3`  
Package slug: `details` (under `packages/details`)

## Install

```sh
npm i -s @sikt/sds-details
```

```ts
import { Details } from "@sikt/sds-details";
```

Add `@import "@sikt/sds-details/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `Details`
- `DetailsProps`

## Components

### Details

Source: `packages/details/src/Details.tsx`

Extends: `DetailsHTMLAttributes<HTMLDetailsElement>`

**Props**

| Prop        | Type                 | Required | Default     | Description                                                                                                                                                    |
| ----------- | -------------------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`             | no       | —           | —                                                                                                                                                              |
| `name`      | `string`             | no       | `undefined` | Enables multiple `<details>` elements to be connected, with only one open at a time. Creating an accordion by setting the same `name` attribute to group them. |
| `size`      | `"small" \| "large"` | no       | `large`     | —                                                                                                                                                              |
| `summary`   | `ReactNode`          | yes      | —           | Label for the disclosure widget and its contents (`{children}`).                                                                                               |

## CSS class names

Available when `@sikt/sds-details/dist/index.css` is imported.

- `.sds-details`
- `.sds-details--large`
- `.sds-details--small`
- `.sds-details__content`
- `.sds-details__icon`
- `.sds-details__summary`
- `.sds-typography-application-headline`
- `.sds-typography-editorial-headline`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Details**: Accordion, Default
