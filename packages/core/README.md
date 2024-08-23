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

Different routing systems may affect the usage of the `<Link />` component. Make sure to read your frameworks documentation 🤓

### Next.js

[Next.js Docs](https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag)

```js
import { Link as SdsLink, LinkProps as SdsLinkProps } from "@sikt/sds-core";
import { default as NextLink, LinkProps } from "next/link";

export const Link = ({
                       href,
                       children,
                       ...rest
                     }: Omit<SdsLinkProps, "href"> & LinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <SdsLink {...rest}>{children}</SdsLink>
    </NextLink>
  );
};
```

### React Router

[React Router Docs](https://reactrouter.com/en/main/hooks/use-link-click-handler#uselinkclickhandler)

```js
import { Link as SdsLink } from "@sikt/sds-core";
import { forwardRef } from "react";
import { useHref, useLinkClickHandler, LinkProps } from "react-router-dom";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className,
      onClick,
      replace = false,
      state,
      target,
      to,
      ...rest
    },
    ref,
  ) => {
    const href = useHref(to);
    const handleClick = useLinkClickHandler(to, { replace, state, target });

    return (
      <SdsLink
        {...rest}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            handleClick(event);
          }
        }}
        ref={ref}
        target={target}
        className={className}
      >
        {children}
      </SdsLink>
    );
  },
);
```

## Color Scheme

Color scheme is default light and can be changed by the users color scheme setting. If a web page or parts of a web page should be locked to one mode it can be done with the CSS property `color-scheme: only <scheme>;` or (deprecated) HTML attribute `data-color-scheme="<scheme>"`, remember to set a background if used on a partial pages as the root background otherwise will affect your partial page.
