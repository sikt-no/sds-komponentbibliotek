# @sikt/sds-list

Version: `2.2.0`  
Package slug: `list` (under `packages/list`)

## Install

```sh
npm i -s @sikt/sds-list
```

```ts
import { DescriptionDetails } from "@sikt/sds-list";
```

Add `@import "@sikt/sds-list/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `DescriptionDetails`
- `DescriptionDetailsProps`
- `DescriptionList`
- `DescriptionTerm`
- `DescriptionTermProps`
- `ListItem`
- `ListItemProps`
- `ListProps`
- `OrderedList`
- `UnorderedList`

## Components

### DescriptionDetails

Source: `packages/list/src/DescriptionDetails.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### DescriptionList

Source: `packages/list/src/List.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### DescriptionTerm

Source: `packages/list/src/DescriptionTerm.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### ListItem

Source: `packages/list/src/ListItem.tsx`

Extends: `LiHTMLAttributes<HTMLLIElement>`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### OrderedList

Source: `packages/list/src/List.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### UnorderedList

Source: `packages/list/src/List.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

## CSS class names

Available when `@sikt/sds-list/dist/index.css` is imported.

- `.sds-description-list`
- `.sds-description-list__details`
- `.sds-description-list__term`
- `.sds-list`
- `.sds-list--ordered`
- `.sds-list--unordered`
- `.sds-list__item`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **DescriptionList**: List
- **OrderedList**: List, Nested
- **UnorderedList**: List, Nested
