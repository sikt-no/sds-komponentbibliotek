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

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables.  
Do not change these directly in the `/core/dist` output directory but rather in the `/core/tokens` source directory.  
**Note** That Style Dictionary tokens follow a CTI (Category/Type/Item) naming pattern that may affect their outcome by what transforms are applied.

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
