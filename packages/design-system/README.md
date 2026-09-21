# `@sikt/sd3-design-system`

<details>
  <summary>Table of Contents</summary>

- [Consume](#consume)
  - [Stylesheet](#stylesheet)
  - [React](#react)
- [Link](#link)
  - [Next.js](#nextjs)
  - [React Router](#react-router)
- [Design Tokens](#design-tokens)
- [Font](#font)
- [Migration from SDS](#migration-from-sds)
- [License](#space-theme)

</details>

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

## Design Tokens

[@sikt/sd3-design-tokens/README.md](../design-tokens/README.md)

## Font

Sikt uses Haffer as font-family. The license doesn't allow for distribution from other domians than our CDN (static.sikt.no) so do not copy or publish it.

## Migration from SDS

Sikt designsystem 2.0 (SDS) & Sikt designsystem 3.0 (SD3) does play nicely together. Meaning you can take the migration at your own pace, migrating one component at a time or one page at a time.

Base CSS on `:root` like `color` and `background-color` can be chosen by you which one has presidence by using CSS @layers.

```css
@layer sds, sd3, my-own-more-specific-layer;

@import url("@sikt/sds-core") layer(sds);
@import url("@sikt/sds-button") layer(sds);
...
@import url("@sikt/sd3-design-system") layer(sd3);
```

## License

[License](LICENSE.md)
