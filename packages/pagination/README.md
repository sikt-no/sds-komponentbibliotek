# `@sikt/sds-pagination`

## Consume

```sh
npm i -s @sikt/sds-pagination
```

### React

```js
import { Pagination } from "@sikt/sds-pagination";
import "@sikt/sds-pagination/dist/index.css";

<Pagination ariaLabel="Liste over studier" count={10} limit={7} />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-pagination");
```

Create custom markup:

```html
<nav class="sds-pagination" aria-label="Liste over studier">
  <ol class="sds-pagination__list">
    <li class="sds-pagination__list-item">
      <button class="sds-pagination__button" aria-label="Vis side 1">1</button>
    </li>
    <li class="sds-pagination__list-item">
      <button class="sds-pagination__button" aria-label="Vis side 2">2</button>
    </li>
  </ol>
</nav>
```
