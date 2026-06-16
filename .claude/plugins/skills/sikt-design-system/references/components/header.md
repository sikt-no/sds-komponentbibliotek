# @sikt/sds-header

Version: `5.1.1`  
Package slug: `header` (under `packages/header`)

## Install

```sh
npm i -s @sikt/sds-header
```

```ts
import { Header } from "@sikt/sds-header";
```

Add `@import "@sikt/sds-header/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-button/dist/index.css";`
- `@import "@sikt/sds-icons/dist/index.css";`
- `@import "@sikt/sds-logo/dist/index.css";`

## Exports

- `Header`
- `HeaderProps`

## Components

### Header

Source: `packages/header/src/Header.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop                | Type                                                                                                                 | Required | Default          | Description                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `applicationStatus` | `ReactNode`                                                                                                          | no       | `undefined`      | Slot for adding an `<ApplicationStatus />`.                                                                                                                                                            |
| `children`          | `ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>, string \| JSXElementConstructor<any>> \| ReactElement<...>[]` | no       | `undefined`      | Slot for adding content to the center of the Header.                                                                                                                                                   |
| `className`         | `string`                                                                                                             | no       | —                | —                                                                                                                                                                                                      |
| `leftSlot`          | `ReactNode`                                                                                                          | no       | `undefined`      | Slot for adding content to the left side of the Header.                                                                                                                                                |
| `logoLink`          | `ReactNode`                                                                                                          | no       | `undefined`      | Element to wrap logotype. Can be any framework routing `<Link />`, like `next/link` or `react-router`. Should have className `sds-typography-link`. Children will be overwritten with `logoText` prop. |
| `logoText`          | `string`                                                                                                             | no       | `Sikt`           | —                                                                                                                                                                                                      |
| `rightSlot`         | `ReactNode`                                                                                                          | no       | `undefined`      | Slot for adding content to the right side of the Header.                                                                                                                                               |
| `skipLinkId`        | `string`                                                                                                             | no       | `main`           | Id for main content element where the skip link will anchor link.                                                                                                                                      |
| `skipLinkText`      | `string`                                                                                                             | no       | `Gå til innhold` | Text for the skip link anchor link.                                                                                                                                                                    |
| `topSlot`           | `ReactNode`                                                                                                          | no       | `undefined`      | Slot for adding content above the header, like a global menu between services.                                                                                                                         |

## CSS class names

Available when `@sikt/sds-header/dist/index.css` is imported.

- `.sds-header`
- `.sds-header__content`
- `.sds-header__content-left`
- `.sds-header__content-left-item`
- `.sds-header__content-mid`
- `.sds-header__content-right`
- `.sds-header__logo`
- `.sds-header__skip-link`
- `.sds-screen-reader-only--focusable`
- `.sds-typography-link`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Header**: Default, WithApplicationStatus, WithProductName, WithSlots

## Dependencies

**Runtime:**

- `@sikt/sds-button` ^4.6.0
- `@sikt/sds-core` ^5.3.0
- `@sikt/sds-icons` ^4.2.0
- `@sikt/sds-logo` ^2.2.3

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
