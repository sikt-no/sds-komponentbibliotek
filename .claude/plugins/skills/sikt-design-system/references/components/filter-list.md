# @sikt/sds-filter-list

Version: `0.6.3`  
Package slug: `filter-list` (under `packages/filter-list`)

## Install

```sh
npm i -s @sikt/sds-filter-list
```

```ts
import { FilterList } from "@sikt/sds-filter-list";
```

Add `@import "@sikt/sds-filter-list/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-checkbox/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`
- `@import "@sikt/sds-notification/dist/index.css";`
- `@import "@sikt/sds-radio/dist/index.css";`

## Exports

- `FilterList`
- `FilterListCategory`
- `FilterListCategoryProps`
- `FilterListItem`
- `FilterListItemProps`
- `FilterListProps`
- `FilterListSection`
- `FilterListSectionProps`

## Components

### FilterList

Source: `packages/filter-list/src/FilterList/FilterList.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### FilterListCategory

Source: `packages/filter-list/src/FilterListCategory/FilterListCategory.tsx`

**Props**

| Prop                    | Type                            | Required | Default | Description |
| ----------------------- | ------------------------------- | -------- | ------- | ----------- |
| `ariaLabelExpandToggle` | `string`                        | yes      | —       | —           |
| `checked`               | `boolean`                       | yes      | —       | —           |
| `count`                 | `number`                        | no       | —       | —           |
| `expanded`              | `boolean`                       | no       | —       | —           |
| `icon`                  | `ReactNode`                     | no       | —       | —           |
| `indeterminate`         | `boolean`                       | yes      | —       | —           |
| `label`                 | `string`                        | yes      | —       | —           |
| `onCategoryToggle`      | `((checked: boolean) => void)`  | no       | —       | —           |
| `onExpandToggle`        | `((expanded: boolean) => void)` | no       | —       | —           |

### FilterListExpand

Source: `packages/filter-list/src/components/FilterListExpand/FilterListExpand.tsx`

**Props**

| Prop                    | Type                            | Required | Default | Description |
| ----------------------- | ------------------------------- | -------- | ------- | ----------- |
| `ariaLabelExpandToggle` | `string`                        | no       | —       | —           |
| `clickableHeader`       | `boolean`                       | no       | `false` | —           |
| `header`                | `ReactNode`                     | yes      | —       | —           |
| `initialExpanded`       | `boolean`                       | no       | `false` | —           |
| `onExpandToggle`        | `((expanded: boolean) => void)` | no       | —       | —           |

### FilterListIconLabel

Source: `packages/filter-list/src/components/FilterListIconLabel/FilterListIconLabel.tsx`

**Props**

| Prop    | Type        | Required | Default | Description |
| ------- | ----------- | -------- | ------- | ----------- |
| `icon`  | `ReactNode` | yes      | —       | —           |
| `label` | `ReactNode` | yes      | —       | —           |

### FilterListItem

Source: `packages/filter-list/src/FilterListItem/FilterListItem.tsx`

**Props**

| Prop       | Type                                                          | Required | Default | Description |
| ---------- | ------------------------------------------------------------- | -------- | ------- | ----------- |
| `checked`  | `boolean`                                                     | no       | —       | —           |
| `count`    | `number`                                                      | no       | —       | —           |
| `icon`     | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | no       | —       | —           |
| `label`    | `NonNullable<ReactNode>`                                      | yes      | —       | —           |
| `onChange` | `((event: ChangeEvent<HTMLInputElement, Element>) => void)`   | no       | —       | —           |
| `type`     | `"radio" \| "checkbox"`                                       | yes      | —       | —           |
| `value`    | `string`                                                      | yes      | —       | —           |

### FilterListSection

Source: `packages/filter-list/src/FilterListSection/FilterListSection.tsx`

**Props**

| Prop         | Type                                                                     | Required | Default | Description |
| ------------ | ------------------------------------------------------------------------ | -------- | ------- | ----------- |
| `count`      | `number`                                                                 | no       | —       | —           |
| `expandable` | `{ expanded: boolean; onExpandToggle?: ((expanded: boolean) => void); }` | no       | —       | —           |
| `label`      | `string`                                                                 | yes      | —       | —           |

## CSS class names

Available when `@sikt/sds-filter-list/dist/index.css` is imported.

- `.sds-filter-list`
- `.sds-filter-list-category`
- `.sds-filter-list-category__content`
- `.sds-filter-list-expand`
- `.sds-filter-list-expand--icon-container`
- `.sds-filter-list-expand__content`
- `.sds-filter-list-expand__content--open`
- `.sds-filter-list-expand__header`
- `.sds-filter-list-expand__header-clickable`
- `.sds-filter-list-expand__icon`
- `.sds-filter-list-expand__icon--expanded`
- `.sds-filter-list-icon-label`
- `.sds-filter-list-icon-label__icon`
- `.sds-filter-list-item`
- `.sds-filter-list-item__input`
- `.sds-filter-list-item__input-label`
- `.sds-filter-list-section`
- `.sds-filter-list-section--expandable`
- `.sds-filter-list-section__label`
- `.sds-form-fieldset__legend`

## Dependencies

**Runtime:**

- `@sikt/sds-button` ^4.6.0
- `@sikt/sds-checkbox` ^4.0.0
- `@sikt/sds-core` ^5.3.0
- `@sikt/sds-icons` ^4.2.0
- `@sikt/sds-notification` ^1.1.0
- `@sikt/sds-radio` ^5.0.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
