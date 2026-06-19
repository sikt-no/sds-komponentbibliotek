# @sikt/sds-breadcrumbs

Version: `2.1.2`  
Package slug: `breadcrumbs` (under `packages/breadcrumbs`)

## Install

```sh
npm i -s @sikt/sds-breadcrumbs
```

```ts
import { BreadcrumbItem } from "@sikt/sds-breadcrumbs";
```

Add `@import "@sikt/sds-breadcrumbs/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `BreadcrumbItem`
- `BreadcrumbItemProps`
- `Breadcrumbs`
- `BreadcrumbsProps`

## Components

### BreadcrumbItem

Source: `packages/breadcrumbs/src/BreadcrumbItem.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### Breadcrumbs

Source: `packages/breadcrumbs/src/Breadcrumbs.tsx`

**Props**

| Prop         | Type     | Required | Default | Description |
| ------------ | -------- | -------- | ------- | ----------- |
| `aria-label` | `string` | yes      | —       | —           |
| `className`  | `string` | no       | —       | —           |

## CSS class names

Available when `@sikt/sds-breadcrumbs/dist/index.css` is imported.

- `.sds-breadcrumbs`
- `.sds-breadcrumbs-item`
- `.sds-breadcrumbs__list`
- `.sds-typography-link`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Breadcrumbs**: Default, WithIcon
