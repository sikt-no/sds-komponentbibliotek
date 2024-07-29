# `@sikt/sds-icons`

Sikt designsystem uses [Phosphor Icons](https://phosphoricons.com/).

## Consume

```sh
npm i -s @sikt/sds-icons
```

### React

```js
import { <icon-name>Icon } from "@sikt/sds-icons";
import "@sikt/sds-icons/dist/index.css";

<<IconName>Icon />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-icons");
```

Create custom markup:

```html
<img
  class="sds-icon"
  aria-hidden="true"
  src="@sikt/sds-icons/dist/assets/<icon-name>.svg"
/>
```

Or use sprite:

```html
<svg class="sds-icon" aria-hidden="true">
  <use href="@sikt/sds-icons/dist/sds-icons.svg#<icon-name>"></use>
</svg>
```

## Contribute

Add new icons by adding name to `src/icons.config.js`.
