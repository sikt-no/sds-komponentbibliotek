# `@sikt/horisont-core`

## Consume

```sh
npm i -s @sikt/horisont-core
```

### Stylesheet

```css
@import url("@sikt/horisont-core/dist/index.css");
```

### React

```js
import { PrimaryButton } from "@sikt/horisont-button";
import "@sikt/horisont-button/dist/index.css";

<PrimaryButton>Hello, World!</PrimaryButton>;
```

## Design Tokens

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables  
Do not change these directly in the `/core/dist` output folder but rather in the `/core/tokens` source folder  
Note that Style Dictionary tokens follow a CTI (Category/Type/Item) naming pattern that may affect their outcome by what transforms are applied

### Consume

#### Stylesheet

```css
@import url("@sikt/horisont-core/dist/index.css");

.prefix-custom-block__element--blue {
  color: var(--horisont-color-primary-dark);
}
```

#### React

```js
import * as tokens from "@sikt/horisont-core/dist/tokens/ts/tokens";

<Button style={{ color: tokens.default.color.primary.dark.value }}>
  Hello, World!
</Button>;
```
