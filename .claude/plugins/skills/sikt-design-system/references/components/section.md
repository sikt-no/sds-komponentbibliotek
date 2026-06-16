# @sikt/sds-section

Version: `3.1.3`  
Package slug: `section` (under `packages/section`)

## Install

```sh
npm i -s @sikt/sds-section
```

```ts
import { Section } from "@sikt/sds-section";
```

Add `@import "@sikt/sds-section/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `Section`
- `SectionProps`

## Components

### Section

Source: `packages/section/src/Section.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop           | Type                                           | Required | Default | Description |
| -------------- | ---------------------------------------------- | -------- | ------- | ----------- |
| `callToAction` | `ReactNode`                                    | no       | —       | —           |
| `className`    | `string`                                       | no       | —       | —           |
| `headingLevel` | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | no       | `h2`    | —           |
| `headingText`  | `string`                                       | yes      | —       | —           |

## CSS class names

Available when `@sikt/sds-section/dist/index.css` is imported.

- `.sds-section`
- `.sds-section__content`
- `.sds-section__cta`
- `.sds-section__header`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Section**: Default, WithCallToAction

## Dependencies

**Runtime:**

- `@sikt/sds-core` ^5.3.0

**Peer:**

- `@types/react` ^18.0.0 || ^19.0.0
- `@types/react-dom` ^18.0.0 || ^19.0.0
- `clsx` ^2.1.0
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
