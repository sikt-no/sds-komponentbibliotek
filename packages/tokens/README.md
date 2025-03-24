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

**Note** CSS tokens are best used by importing `@sikt/sds-core` which will include them as CSS variables. But you can still make use of them directly from `@sikt/sds-tokens` if need be.

### React

```js
import * as tokens from "@sikt/sds-tokens";

<Button style={{ color: tokens.default.color.brand.primary.strong.value }}>
  Hello, World!
</Button>;
```

### Tailwind CSS

This is a v4 config with peer dependency on `tailwindcss@^4.0.0`. It disables Tailwind preflight and rely on CSS resets and variables from `@sikt/sds-core`.

```css
@import url("@sikt/sds-core");
@import url("@sikt/sds-tokens/dist/tailwind/config.css");
```

```html
<button class="text-brand-primary-strong">Hello, World!</button>
```

#### Caveats

Theme utilities where we have our own tokens have been disabled in the Tailwind config with `--property-*: initial;`.

Tailwind spacing (padding/margin) is scale constructed from a base value. This has been disabled and instead you should use our CSS custom properties `p-(--sds-space-padding-small)`.

## Design Tokens

Colors are available in light (default) and dark scheme.  
Sizes are, in some cases, available for media mobile (default), tablet & desktop.  
When there is no corresponding token in the non-default version the default should be used.

### Tips

- Relative sizes should be used on user font size setting scalable properties like `font-size`, `line-height`, etc. These are calculated from the root font-size so that for example `20px` is the same as `calc(20 * 1rem / 16)` when root font-size is `16px`.
- Custom media queries are transformed to valid CSS during build step and need to be imported into the PostCSS file that uses them.

**Note** There is currently a bug in Figma that translates HSL to incorrect HEX color values. If you use the same name token you will get the correct HEX color value.

## Contribute

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables.

**Note** Do not edit these directly in the `/dist` output directory but rather in the `/src` source directory.

**Note** Style Dictionary tokens follow a CTI (Category/Type/Item) naming pattern that may affect their outcome by what transforms are applied.

_TODO: JavaScript relative size variables. How are these used in non-CSS environments?_
