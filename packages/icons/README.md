# `@sikt/sds-icons`

Sikt designsystem uses [Phosphor Icons](https://phosphoricons.com/).

## Consume

```sh
npm i -s @sikt/sds-icons
```

### React

```js
import { Icon } from "@sikt/sds-icons";
import "@sikt/sds-icons/dist/index.css";

<Icon icon="arrow-right" />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-icons");
```

Create custom markup:

```html
<svg class="sds-icon" aria-hidden="true">
  <use href="@sikt/sds-icons/dist/sds-icons.svg#icon-name"></use>
</svg>
```
