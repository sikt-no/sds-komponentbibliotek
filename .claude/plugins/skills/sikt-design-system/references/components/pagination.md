# @sikt/sds-pagination

Version: `3.1.1`  
Package slug: `pagination` (under `packages/pagination`)

## Install

```sh
npm i -s @sikt/sds-pagination
```

```ts
import { Pagination } from "@sikt/sds-pagination";
```

Add `@import "@sikt/sds-pagination/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `Pagination`
- `PaginationProps`

## Components

### Pagination

Source: `packages/pagination/src/Pagination.tsx`

Extends: `Omit<HTMLAttributes<HTMLElement>, "onClick">`

**Props**

| Prop                | Type                                                                        | Required | Default            | Description                                                                                                       |
| ------------------- | --------------------------------------------------------------------------- | -------- | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `aria-label`        | `string`                                                                    | yes      | —                  | Label for pagination navigation element.                                                                          |
| `ariaLabelItem`     | `string`                                                                    | no       | `Vis side`         | Label item button.                                                                                                |
| `ariaLabelNext`     | `string`                                                                    | no       | `Vis neste side`   | Label for next item button.                                                                                       |
| `ariaLabelPrevious` | `string`                                                                    | no       | `Vis forrige side` | Label for previuos item button.                                                                                   |
| `className`         | `string`                                                                    | no       | —                  | —                                                                                                                 |
| `count`             | `number`                                                                    | yes      | —                  | Totalt number of pages.                                                                                           |
| `currentIndex`      | `number`                                                                    | yes      | —                  | —                                                                                                                 |
| `limit`             | `number`                                                                    | no       | `7`                | Total limit of elements, this includes previous/next/first/last. Minimum is 7 (previous/next/first/last/current/) |
| `onClick`           | `(event: MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => void` | yes      | `undefined`        | Function for when the user clicks a pagination button.                                                            |

## CSS class names

Available when `@sikt/sds-pagination/dist/index.css` is imported.

- `.sds-pagination`
- `.sds-pagination__button`
- `.sds-pagination__button--spacer`
- `.sds-pagination__list`
- `.sds-pagination__list-item`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Pagination**: Default

## Dependencies

**Runtime:**

- `@sikt/sds-core` ^5.3.0
- `@sikt/sds-icons` ^4.2.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
