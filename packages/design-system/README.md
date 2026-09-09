# `@sikt/sd3-design-system`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### Stylesheet

```css
@import url("@sikt/sd3-design-system");
```

### React

```js
import { Button } from "@sikt/sd3-design-system";
/**
 * NOTE: Importing CSS in JS is usually not a good idea,
 * see example for Stylesheets for how to import it into CSS
 */
import "@sikt/sd3-design-system/dist/index.css";

<Button>Hello, World!</Button>;
```

## Link

Different routing systems may affect the usage of the `<Link />` component. Make sure to read your frameworks documentation 🤓 Or use the `asChild` prop that uses [Radix UI Slot](https://www.radix-ui.com/primitives/docs/utilities/slot).

### Next.js

[Next.js Docs](https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag)

```js
import { Link as Sd3Link } from "@sikt/sd3-design-system";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export const Link = ({
                       href,
                       children,
                       ...rest
                     }: NextLinkProps & { children: ReactNode }) => {
  return (
    <Sd3Link asChild>
      <NextLink href={href} {...rest}>{children}</NextLink>
    </Sd3Link>
  );
};
```

### React Router

[React Router Docs](https://reactrouter.com/en/main/hooks/use-link-click-handler#uselinkclickhandler)

```js
import { Link as Sd3Link } from "@sikt/sd3-design-system";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router";

export const Link = ({
                       to,
                       children,
                       ...rest
                     }: RouterLinkProps) => {
  return (
    <Sd3Link asChild>
      <RouterLink to={to} {...rest}>{children}</RouterLink>
    </Sd3Link>
  );
};
```

## Color Scheme

Color scheme is default `light` and can be changed by the users color scheme preferences. If a web page or parts of a web page should be locked to one mode it can be done with the CSS property `color-scheme: only <scheme>;`, remember to set a background if used on a partial pages as the root background otherwise will affect the visibility of the text.

### Caveats

Next.js 16 used Turbopack by default which in turn uses LightningCSS with a [bug related to light-dark()](https://github.com/parcel-bundler/lightningcss/issues/873). A work around is to add `@csstools/postcss-light-dark-function`.

## Color Theme

Color theme is default `grey`and can be changed with the data-attribute `data-color-theme="grey|white|feide"`.

## Space Theme

Space theme is default `comfortable`and can be changed with the data-attribute `data-space-theme="compact|comfortable|spacious"`.
