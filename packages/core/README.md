# `@sikt/horisont-core`

## Consume

### Stylesheet

```css
@import "@sikt/horisont-core/dist/index.css";
```

### React

```js
import "@sikt/horisont-core/dist/index.css";
```

## Design Tokens

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & TypeScript variables

### Consume

#### Stylesheet

```css
@import "@sikt/horisont-core/dist/index.css";

.custom-block--blue {
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
