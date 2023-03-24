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

## Design Tokens

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables. Colors are available in light and dark scheme.  
Do not edit these directly in the `/core/dist` output directory but rather in the `/core/tokens` source directory.  
**Note** That Style Dictionary tokens follow a CTI (Category/Type/Item) naming pattern that may affect their outcome by what transforms are applied.  
**Note** There is currently a bug in Figma that translates HSL to incorrect HEX color values. If you use the same name token you will get the correct HEX color value.

### Tips

- Relative size tokens should be used on user font size setting scalable things like `font-size`, `line-height`, etc. These are calculated from the root font-size so that for example `16px` is the same as `calc(16 * 1rem / 16)`.

### Consume

#### Stylesheet

```css
@import url("@sikt/sds-core");

.prefix-custom-block__element--blue {
  color: var(--sds-color-primary-dark);
}
```

#### React

```js
import * as tokens from "@sikt/sds-core/dist/tokens/js/tokens";

<Button style={{ color: tokens.default.color.primary.dark.value }}>
  Hello, World!
</Button>;
```

### Color Scheme

Color scheme is default light and can be changed by the users color scheme setting. If a web page or parts of a web page should be lock to one mode it can be done with the attribute `data-color-scheme="<scheme>"`, remember to set a background if used on a partial pages as the root background otherwise will affect your partial page.
