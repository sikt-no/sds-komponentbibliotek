# `@sikt/sd3-design-system`

<details>
  <summary>Table of Contents</summary>

- [Consume](#consume)
  - [Stylesheet](#stylesheet)
  - [React](#react)
- [Link](#link)
- [Design Tokens](#design-tokens)
- [Font](#font)
  - [Content Security Policy (CSP)](#content-security-policy-csp)
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

[How to use Link component with Next.js, React Router or other routing systems](./src/Typography/README.md#link)

## Design Tokens

[@sikt/sd3-design-tokens/README.md](../design-tokens/README.md)

## Font

Sikt uses Haffer as font-family. The license doesn't allow for distribution from other domians than our CDN (static.sikt.no) so do not copy or publish it.

### Content Security Policy (CSP)

To allow fetching of this resource you need to add it to your CSPs `font-src`:

```http
font-src 'self' https://static.sikt.no/;
```

## Migration from SDS

Sikt designsystem 2.0 (SDS) & Sikt designsystem 3.0 (SD3) does play nicely together. Meaning you can take the migration at your own pace, migrating one component at a time or one page at a time.

Base CSS on `:root` like `color` and `background-color` can be chosen by you which one has presidence by using CSS @layers.

```css
@layer reset, sds, my-own-more-specific-layer;

@import url("@sikt/sds-core") layer(sds);
@import url("@sikt/sds-button") layer(sds);
...
@import url("@sikt/sd3-design-system");
```

## License

[License](LICENSE.md)
