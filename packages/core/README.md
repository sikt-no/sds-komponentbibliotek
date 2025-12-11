# `@sikt/sds-core`

## Consume

```sh
npm i -s @sikt/sds-core
```

### Stylesheet

```css
@import url("@sikt/sds-core");
```

### React

```js
import { PrimaryButton } from "@sikt/sds-button";
import "@sikt/sds-core/dist/index.css";

<PrimaryButton>Hello, World!</PrimaryButton>;
```

## Link

Different routing systems may affect the usage of the `<Link />` component. Make sure to read your frameworks documentation 🤓 Or use the `asChild` prop that uses [Radix UI Slot](https://www.radix-ui.com/primitives/docs/utilities/slot).

### Next.js

[Next.js Docs](https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag)

```js
import { Link as SdsLink } from "@sikt/sds-core";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export const Link = ({
                       href,
                       children,
                       ...rest
                     }: NextLinkProps & { children: ReactNode }) => {
  return (
    <SdsLink asChild>
      <NextLink href={href} {...rest}>{children}</NextLink>
    </SdsLink>
  );
};
```

### React Router

[React Router Docs](https://reactrouter.com/en/main/hooks/use-link-click-handler#uselinkclickhandler)

```js
import { Link as SdsLink } from "@sikt/sds-core";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router";

export const Link = ({
                       to,
                       children,
                       ...rest
                     }: RouterLinkProps) => {
  return (
    <SdsLink asChild>
      <RouterLink to={to} {...rest}>{children}</RouterLink>
    </SdsLink>
  );
};
```

## Color Scheme

Color scheme is default light and can be changed by the users color scheme setting. If a web page or parts of a web page should be locked to one mode it can be done with the CSS property `color-scheme: only <scheme>;` or (deprecated) HTML attribute `data-color-scheme="<scheme>"`, remember to set a background if used on a partial pages as the root background otherwise will affect your partial page.
