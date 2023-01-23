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
import "@sikt/horisont-core/dist/index.css";
```

## Design Tokens

Created using [Style Dictionary](https://github.com/amzn/style-dictionary) and exported as CSS & JavaScript variables  
Do not change these directly in the `/core/dist` output folder but rather in the `/core/tokens` source folder  
Note that Style Dictionary tokens follow a CTI (Category/Type/Item) naming pattern that may affect their outcome by what transforms are applied

### Consume

#### Stylesheet

```css
@import "@sikt/horisont-core/dist/index.css";

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

## Accessibility

### `<abbr>`

The [abbreviation element is not by itself accessible](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr#accessibility_concerns). It can be hard to understand without correct text content and can't be accessed by keyboard.

1. Spell out the acronym or abbreviation in full the first time it is used on a page
2. Use the following markup. Tabindex makes is accessible by keyboard and class name will display the content

```html
<abbr
  class="horisont-typography-abbr"
  tabindex="0"
  title="JavaScript Object Notation"
>
  JSON
</abbr>
```

### `<input type="date">`

TODO
