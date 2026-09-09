# `@sikt/sd3-design-tokens`

## Consume

```sh
npm i -s @sikt/sd3-design-tokens
```

### Stylesheet

```css
@layer sd3, my-own-more-specific-layer;
@import url("@sikt/sd3-design-tokens") layer(sd3);

@scope (.my-component) {
  :scope {
    color: var(--sd3-color-brand-primary-strong);
  }
}
```

**Note** If you use `@sikt/sd3-design-system` tokens are imported through that package and there is no need to add this dependency and redundant import.

### React

```js
import tokens from "@sikt/sd3-design-tokens";

<MyComponent style={{ color: tokens.color.brand.primary.strong.$value }}>
  Hello, World!
</MyComponent>;
```

## Design Tokens

Colors are available in light and dark scheme following system preferences.  
Color themes are available in Sikt gray (default), Sikt white and Feide.  
Space themes are available in Compact, Comfortable (default) and Spacious.

### Tips

- Relative sizes should be used on user font size setting scalable properties like `font-size`, `line-height`, etc.
- Custom media queries are transformed to valid CSS during build step. For you to utilize them you need to transform them with PostCSS.

## Contribute

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables.

**Note** Do not edit these directly in the `/dist` output directory but rather in the `/src` source directory.
