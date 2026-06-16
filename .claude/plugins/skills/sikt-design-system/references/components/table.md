# @sikt/sds-table

Version: `2.1.1`  
Package slug: `table` (under `packages/table`)

## Install

```sh
npm i -s @sikt/sds-table
```

```ts
import { Table } from "@sikt/sds-table";
```

Add `@import "@sikt/sds-table/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Table`
- `TableBody`
- `TableBodyProps`
- `TableCell`
- `TableCellProps`
- `TableFoot`
- `TableFootProps`
- `TableHead`
- `TableHeadProps`
- `TableHeader`
- `TableHeaderProps`
- `TableProps`
- `TableRow`
- `TableRowProps`

## Components

### Table

Source: `packages/table/src/Table.tsx`

Extends: `TableHTMLAttributes<HTMLTableElement>`

**Props**

| Prop           | Type                                                             | Required | Default | Description |
| -------------- | ---------------------------------------------------------------- | -------- | ------- | ----------- |
| `caption`      | `ReactNode`                                                      | yes      | —       | —           |
| `className`    | `string`                                                         | no       | —       | —           |
| `showCaption`  | `boolean`                                                        | no       | —       | —           |
| `wrapperProps` | `(HTMLAttributes<HTMLDivElement> & { "data-testid"?: string; })` | no       | —       | —           |

### TableBody

Source: `packages/table/src/TableBody.tsx`

Extends: `HTMLAttributes<HTMLTableSectionElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### TableCell

Source: `packages/table/src/TableCell.tsx`

Extends: `TdHTMLAttributes<HTMLTableCellElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |
| `data-th`   | `string` | yes      | —       | —           |

### TableFoot

Source: `packages/table/src/TableFoot.tsx`

Extends: `HTMLAttributes<HTMLTableSectionElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### TableHead

Source: `packages/table/src/TableHead.tsx`

Extends: `HTMLAttributes<HTMLTableSectionElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### TableHeader

Source: `packages/table/src/TableHeader.tsx`

Extends: `ThHTMLAttributes<HTMLTableCellElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### TableRow

Source: `packages/table/src/TableRow.tsx`

Extends: `HTMLAttributes<HTMLTableRowElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

## CSS class names

Available when `@sikt/sds-table/dist/index.css` is imported.

- `.sds-table`
- `.sds-table__body`
- `.sds-table__caption`
- `.sds-table__cell`
- `.sds-table__foot`
- `.sds-table__head`
- `.sds-table__header`
- `.sds-table__row`
- `.sds-table__table`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Table**: Default, WithFooter, WithVerticalHeader

## Dependencies

**Runtime:**

- `@sikt/sds-core` ^5.3.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
