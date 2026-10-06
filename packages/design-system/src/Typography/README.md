# `Typography`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { Heading1, Label, Link, Paragraph, Span } from "@sikt/sd3-design-system";

<Heading1>My heading</Heading1>
<Label>My label</Label>
<Link href="#">My link</Link>
<Paragraph>My paragraph</Paragraph>
<Span>My span</Span>
```

### Stylesheets

Import stylesheet:

```css
@layer sd3 /*, my-own-more-specific-layer */;
@import url("@sikt/sd3-design-system") layer(sd3);
```

### Custom markup

```html
<!-- see html example in Storybook -->
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
