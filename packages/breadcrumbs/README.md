# `@sikt/sds-breadcrumbs`

## Consume

```sh
npm i -s @sikt/sds-breadcrumbs
```

### React

```js
import { Breadcrumbs } from "@sikt/sds-breadcrumbs";
import "@sikt/sds-breadcrumbs/dist/index.css";

<Breadcrumbs />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-breadcrumbs");
```

Create custom markup:

```html
<nav class="sds-breadcrumbs" aria-label="Navigasjonssti">
  <ol class="sds-breadcrumbs__list">
    <li class="sds-breadcrumbitem">
      <a href="/" class="sds-breadcrumb-item__link">Level 1</a>
    </li>
    <li class="sds-breadcrumbitem sds-breadcrumbitem--active">
      <a href="/" class="sds-breadcrumb-item__link" aria-current="page"
        >Level 2</a
      >
    </li>
  </ol>
</nav>
```
