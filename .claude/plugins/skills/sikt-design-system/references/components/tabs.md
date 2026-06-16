# @sikt/sds-tabs

Version: `7.1.0`  
Package slug: `tabs` (under `packages/tabs`)

## Install

```sh
npm i -s @sikt/sds-tabs
```

```ts
import { Tab } from "@sikt/sds-tabs";
```

Add `@import "@sikt/sds-tabs/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-icons/dist/index.css";`
- `@import "@sikt/sds-popover/dist/index.css";`

## Exports

- `Tab`
- `TabLink`
- `TabLinkProps`
- `TabList`
- `TabListProps`
- `TabPanel`
- `TabPanelProps`
- `TabProps`
- `Tabs`
- `TabsProps`

## Components

### Tab

Source: `packages/tabs/src/Tab.tsx`

Extends: `HTMLAttributes<HTMLButtonElement>`

**Props**

| Prop        | Type                                             | Required | Default | Description |
| ----------- | ------------------------------------------------ | -------- | ------- | ----------- |
| `className` | `string`                                         | no       | —       | —           |
| `icon`      | `ReactNode`                                      | no       | —       | —           |
| `onClick`   | `((e: MouseEvent<Element, MouseEvent>) => void)` | no       | —       | —           |

### TabLink

Source: `packages/tabs/src/TabLink.tsx`

Extends: `AnchorHTMLAttributes<HTMLAnchorElement>`

**Props**

| Prop         | Type        | Required | Default | Description |
| ------------ | ----------- | -------- | ------- | ----------- |
| `asChild`    | `boolean`   | no       | `false` | —           |
| `className`  | `string`    | no       | —       | —           |
| `icon`       | `ReactNode` | no       | —       | —           |
| `isSelected` | `boolean`   | no       | —       | —           |

### TabList

Source: `packages/tabs/src/TabList.tsx`

Extends: `HTMLAttributes<HTMLDivElement>`

**Props**

| Prop         | Type     | Required | Default | Description                                             |
| ------------ | -------- | -------- | ------- | ------------------------------------------------------- |
| `aria-label` | `string` | yes      | —       | Defines a string value that labels the current element. |
| `className`  | `string` | no       | —       | —                                                       |

### TabPanel

Source: `packages/tabs/src/TabPanel.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### Tabs

Source: `packages/tabs/src/Tabs.tsx`

Extends: `Omit<HTMLAttributes<HTMLDivElement>, "onChange">`

**Props**

| Prop              | Type                        | Required | Default | Description |
| ----------------- | --------------------------- | -------- | ------- | ----------- |
| `className`       | `string`                    | no       | —       | —           |
| `controlledIndex` | `number`                    | no       | —       | —           |
| `defaultIndex`    | `number`                    | no       | `0`     | —           |
| `isSelectOnFocus` | `boolean`                   | no       | `false` | —           |
| `onValueChange`   | `((index: number) => void)` | no       | —       | —           |

## CSS class names

Available when `@sikt/sds-tabs/dist/index.css` is imported.

- `.sds-popover`
- `.sds-popover-icon`
- `.sds-popover__target`
- `.sds-screen-reader-only`
- `.sds-tab-link`
- `.sds-tab-link--selected`
- `.sds-tabs`
- `.sds-tabs__popover-target`
- `.sds-tabs__tab`
- `.sds-tabs__tab-button`
- `.sds-tabs__tab-icon`
- `.sds-tabs__tab-list`
- `.sds-tabs__tab-panel`
- `.sds-tabs__tab-tablist`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **TabLink**: Default, WithIcon, WithTag
- **Tabs**: Controlled, Default, TooManyTabsOnTheDancefloor, WithIcon, WithTag

## Dependencies

**Runtime:**

- `@radix-ui/react-slot` ^1.2.4
- `@radix-ui/react-use-controllable-state` ^1.2.2
- `@sikt/sds-core` ^5.3.0
- `@sikt/sds-hooks` ^1.0.0
- `@sikt/sds-icons` ^4.2.0
- `@sikt/sds-popover` ^1.4.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
