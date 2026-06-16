# @sikt/sds-tag

Version: `1.1.0`  
Package slug: `tag` (under `packages/tag`)

Tag component, Sikt component library

## Install

```sh
npm i -s @sikt/sds-tag
```

```ts
import { TagCategory } from "@sikt/sds-tag";
```

Add `@import "@sikt/sds-tag/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `TagCategory`
- `TagCategoryProps`
- `TagStatus`
- `TagStatusProps`

## Components

### TagCategory

Source: `packages/tag/src/Tag.tsx`

**Props**

| Prop        | Type                                                   | Required | Default | Description |
| ----------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| `category`  | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8"` | no       | —       | —           |
| `className` | `string`                                               | no       | —       | —           |
| `icon`      | `ReactNode`                                            | no       | —       | —           |

### TagStatus

Source: `packages/tag/src/Tag.tsx`

**Props**

| Prop         | Type                                                                     | Required | Default  | Description |
| ------------ | ------------------------------------------------------------------------ | -------- | -------- | ----------- |
| `className`  | `string`                                                                 | no       | —        | —           |
| `icon`       | `ReactNode`                                                              | no       | —        | —           |
| `variant`    | `"brand" \| "neutral" \| "success" \| "info" \| "warning" \| "critical"` | no       | `brand`  | —           |
| `visibility` | `"strong" \| "subtle"`                                                   | no       | `subtle` | —           |

## CSS class names

Available when `@sikt/sds-tag/dist/index.css` is imported.

- `.sds-tag`
- `.sds-tag--category`
- `.sds-tag--category-1`
- `.sds-tag--category-2`
- `.sds-tag--category-3`
- `.sds-tag--category-4`
- `.sds-tag--category-5`
- `.sds-tag--category-6`
- `.sds-tag--category-7`
- `.sds-tag--category-8`
- `.sds-tag--status-brand`
- `.sds-tag--status-critical`
- `.sds-tag--status-info`
- `.sds-tag--status-neutral`
- `.sds-tag--status-success`
- `.sds-tag--status-warning`
- `.sds-tag--visibility-strong`
- `.sds-tag__icon`
- `.sds-tag__label`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **TagCategory**: Default, IconLeft
- **TagStatus**: AllVariantsDefault, AllVariantsStrongVisibility, CustomIconsForBrandAndNeutral, Default, IconLeft

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
