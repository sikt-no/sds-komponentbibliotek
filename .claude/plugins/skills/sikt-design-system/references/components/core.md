# @sikt/sds-core

Version: `5.3.0`  
Package slug: `core` (under `packages/core`)

## Install

```sh
npm i -s @sikt/sds-core
```

```ts
import { Figure } from "@sikt/sds-core";
```

Add `@import "@sikt/sds-core/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

## Exports

- `BodyProps`
- `Figure`
- `FigureProps`
- `Heading`
- `Heading1`
- `Heading2`
- `Heading3`
- `Heading4`
- `Heading5`
- `Heading6`
- `HeadingProps`
- `LabelProps`
- `Link`
- `LinkProps`
- `OverlineProps`
- `Paragraph`
- `ParagraphProps`
- `ScreenReaderOnly`
- `ScreenReaderOnlyProps`

## Components

### Figure

Source: `packages/core/src/Figure/Figure.tsx`

Extends: `HTMLAttributes<HTMLElement>`

**Props**

| Prop          | Type     | Required | Default | Description                                                                               |
| ------------- | -------- | -------- | ------- | ----------------------------------------------------------------------------------------- |
| `aspectRatio` | `"16x9"` | no       | —       | —                                                                                         |
| `className`   | `string` | no       | —       | —                                                                                         |
| `figCaption`  | `string` | no       | —       | A caption or legend describing the rest of the contents of its parent `<figure>` element. |

### Heading

Source: `packages/core/src/Heading/Heading.tsx`

Extends: `HTMLAttributes<HTMLHeadingElement>`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ----------------------------------------------------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                                                                            |
| `level`     | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"`              | yes      | —           | Represent six levels of section headings. `<h1>` is the highest section level and `<h6> is the lowest. A common navigation technique for users of screen reading software is to quickly jump from heading to heading in order to determine the content of the page. Because of this, it is important to not skip one or more heading levels. |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                                                                                  |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications.                                                           |

### Heading1

Source: `packages/core/src/Heading/Heading.tsx`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                  |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                        |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications. |

### Heading2

Source: `packages/core/src/Heading/Heading.tsx`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                  |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                        |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications. |

### Heading3

Source: `packages/core/src/Heading/Heading.tsx`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                  |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                        |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications. |

### Heading4

Source: `packages/core/src/Heading/Heading.tsx`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                  |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                        |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications. |

### Heading5

Source: `packages/core/src/Heading/Heading.tsx`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                  |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                        |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications. |

### Heading6

Source: `packages/core/src/Heading/Heading.tsx`

**Props**

| Prop        | Type                                                  | Required | Default     | Description                                                                                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string`                                              | no       | —           | —                                                                                                                                                                                                                                                                                  |
| `size`      | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | no       | `m`         | Visual size of the heading.                                                                                                                                                                                                                                                        |
| `variant`   | `"application" \| "editorial"`                        | no       | `editorial` | Represents two sets of heading styles. These should in most cases be used separately. - Editorial is for applications with low complexity and enough space - that strive for a calm user interface. - Application is for more compact, information dense and complex applications. |

### Link

Source: `packages/core/src/Link/Link.tsx`

Extends: `AnchorHTMLAttributes<HTMLAnchorElement>`

**Props**

| Prop           | Type                | Required | Default | Description                                                                                                                                                                                                                                |
| -------------- | ------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asChild`      | `boolean`           | no       | `false` | Use to change element type into alternative React component. Useful with libraries that require their own routing components. For example `<Link asChild><NextLink>` would result in a `<NextLink>` with all properties of this component. |
| `className`    | `string`            | no       | —       | —                                                                                                                                                                                                                                          |
| `icon`         | `ReactNode`         | no       | —       | Icon element to display on the component. Should be a `@sikt/sds-icons` element, or optionally `@phosphor-icons/react` (with `className="sds-icon" aria-hidden="true"`).                                                                   |
| `iconVariant`  | `"right" \| "left"` | no       | `right` | —                                                                                                                                                                                                                                          |
| `isExternal`   | `boolean`           | no       | —       | Will add icon to external links. These are default added to `target="_blank"`.                                                                                                                                                             |
| `isNavigation` | `boolean`           | no       | —       | Will add icon to navigation links.                                                                                                                                                                                                         |
| `noIcon`       | `boolean`           | no       | —       | Will hide default icons for `target="_blank"`, `href="mailto:"` & `href="tel:"`.                                                                                                                                                           |

### Paragraph

Source: `packages/core/src/Paragraph/Paragraph.tsx`

**Props**

| Prop        | Type                                          | Required | Default   | Description |
| ----------- | --------------------------------------------- | -------- | --------- | ----------- |
| `as`        | `ElementType`                                 | no       | `p`       | —           |
| `className` | `string`                                      | no       | —         | —           |
| `color`     | `"primary" \| "secondary" \| "critical"`      | no       | `primary` | —           |
| `modifier`  | `"emphasis" \| "strong" \| "code" \| "quote"` | no       | —         | —           |
| `size`      | `"s" \| "l" \| "default"`                     | no       | `default` | —           |
| `variant`   | `"label" \| "overline" \| "body"`             | no       | `body`    | —           |

### ScreenReaderOnly

Source: `packages/core/src/ScreenReaderOnly/ScreenReaderOnly.tsx`

Extends: `HTMLAttributes<HTMLSpanElement>`

**Props**

| Prop          | Type      | Required | Default | Description                                                    |
| ------------- | --------- | -------- | ------- | -------------------------------------------------------------- |
| `className`   | `string`  | no       | —       | —                                                              |
| `isFocusable` | `boolean` | no       | —       | Will make the element visible when navigated to with keyboard. |

## CSS class names

Available when `@sikt/sds-core/dist/index.css` is imported.

- `.sds-figure`
- `.sds-figure__caption`
- `.sds-figure__figure`
- `.sds-figure__figure--ratio-16x9`
- `.sds-screen-reader-only`
- `.sds-screen-reader-only--focusable`
- `.sds-typography--code`
- `.sds-typography--color-critical`
- `.sds-typography--color-primary`
- `.sds-typography--color-secondary`
- `.sds-typography--emphasis`
- `.sds-typography--quote`
- `.sds-typography--strong`
- `.sds-typography--tabular-nums`
- `.sds-typography-application-headline--l`
- `.sds-typography-application-headline--m`
- `.sds-typography-application-headline--s`
- `.sds-typography-application-headline--xl`
- `.sds-typography-application-headline--xs`
- `.sds-typography-application-headline--xxl`
- `.sds-typography-application-headline--xxs`
- `.sds-typography-blockquote`
- `.sds-typography-blockquote__quote`
- `.sds-typography-body`
- `.sds-typography-body--l`
- `.sds-typography-body--s`
- `.sds-typography-body--xl`
- `.sds-typography-editorial-headline--l`
- `.sds-typography-editorial-headline--m`
- `.sds-typography-editorial-headline--s`
- `.sds-typography-editorial-headline--xl`
- `.sds-typography-editorial-headline--xs`
- `.sds-typography-editorial-headline--xxl`
- `.sds-typography-editorial-headline--xxs`
- `.sds-typography-label`
- `.sds-typography-label--l`
- `.sds-typography-link`
- `.sds-typography-link--external`
- `.sds-typography-link--icon-left`
- `.sds-typography-link--navigation`
- `.sds-typography-link--no-icon`
- `.sds-typography-link__icon`
- `.sds-typography-overline`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **Figure**: AspectRatio16x9, Default
- **Heading**: Heading
- **Link**: Default, External, Mail, Navigation, Phone, WithIcon
- **Paragraph**: AsHeading3, AsSpan, ColorCritical, ColorSecondary, Regular
- **ScreenReaderOnly**: Focusable
