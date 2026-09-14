# `@sikt/sd3-design-tokens`

<details>
  <summary>Table of Contents</summary>

- [Consume](#consume)
  - [Stylesheet](#stylesheet)
  - [React](#react)
- [Color Scheme](#color-scheme)
  - [CSS](#css-color-scheme)
    - [Caveats](#caveats)
- [Themes or modes](#themes-or-modes)
  - [CSS](#css-themes)
- [Tips](#tips)
- [Contribute](#contribute)

</details>

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

## Color Scheme

### CSS Color Scheme

Color scheme is default `light` and can be changed by the users color scheme preferences. If a web page or parts of a web page should be locked to one mode it can be done with the CSS property `color-scheme: only <scheme>;`, remember to set a background if used on a partial pages as the root background otherwise will affect the visibility of the text.

#### Caveats

Next.js 16 uses Turbopack by default which in turn uses LightningCSS with a [bug related to light-dark()](https://github.com/parcel-bundler/lightningcss/issues/873). A work around is to add `@csstools/postcss-light-dark-function`.

## Themes or `modes`

Color themes are available in Sikt gray (default), Sikt white and Feide.  
Space themes are available in Compact, Comfortable (default) and Spacious.

[DTCG](https://www.designtokens.org/) doesn't yet have a standard for themes or modes and because of this we follow how other tools have solved this. Different themes like color of space can be found on the same nodes `$extensions.modes` field in the JavaScript export.

```js
module.exports = {
  color: {
    brand: {
      "primary-strong": {
        $type: "color",
        $value: "#7351fb",
        $extensions: {
          modes: {
            "sikt-dark": {
              $type: "color",
              $value: {
                hex: "#7351FB",
              },
            },
          },
        },
      },
    },
  },
};
```

### CSS Themes

Color theme is default `gray` and can be changed with the data-attribute `data-color-theme="gray|white|feide"`.  
Space theme is default `comfortable` and can be changed with the data-attribute `data-space-theme="compact|comfortable|spacious"`.

## Tips

- Relative sizes should be used on user font size setting scalable properties like `font-size`, `line-height`, etc.
- Custom media queries are transformed to valid CSS during build step. For you to utilize them you need to transform them with PostCSS.

## Contribute

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables.  
Tokens are imported manually from Figma with the export function.

**Note** Do not edit these directly in the `/dist` output directory but rather in the `/src` source directory.
