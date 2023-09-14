# `@sikt/sds-tokens`

## Consume

```sh
npm i -s @sikt/sds-tokens
```

### Stylesheet

```css
@import url("@sikt/sds-tokens");

.prefix-custom-block__element--blue {
  color: var(--sds-color-brand-primary-strong);
}
```

### React

```js
import * as tokens from "@sikt/sds-tokens/dist/js/tokens";

<Button style={{ color: tokens.default.color.brand.primary.strong.value }}>
  Hello, World!
</Button>;
```

### Sassy CSS

```sass
@use "@sikt/sds-tokens/scss/tokens";

.prefix-custom-block__element--blue {
  color: tokens.$sds-color-brand-primary-strong;
}
```

## Design Tokens

Colors are available in light (default) and dark scheme.  
Sizes are, in some cases, available for media mobile (default), tablet & desktop.  
When there is no corresponding token in the non-default version the default should be used.

### Tips

- Relative size tokens (`--sds-base-size-relative-<size>`) should be used on user font size setting scalable properties like `font-size`, `line-height`, etc. These are calculated from the root font-size so that for example `16px` is the same as `calc(16 * 1rem / 16)`.
- Custom media queries are transformed to valid CSS during build step and need to be imported into the PostCSS file that uses them.

**Note** There is currently a bug in Figma that translates HSL to incorrect HEX color values. If you use the same name token you will get the correct HEX color value.

## Contribute

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS, SCSS & JavaScript variables.

**Note** Do not edit these directly in the `/dist` output directory but rather in the `/src` source directory.

**Note** Style Dictionary tokens follow a CTI (Category/Type/Item) naming pattern that may affect their outcome by what transforms are applied.

_TODO: SCSS media query mixins._  
_TODO: JavaScript relative size variables. How are these used in non-CSS environments?_
