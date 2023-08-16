# `@sikt/sds-breadcrumbs`

## Consume

```sh
npm i -s @sikt/sds-breadcrumbs
```

### React

```js
import { Breadcrumbs, BreadcrumbItem } from "@sikt/sds-breadcrumbs";
import "@sikt/sds-breadcrumbs/dist/index.css";
import "@sikt/sds-icons/dist/index.css";

<Breadcrumbs aria-label="Navigasjonssti">
  <BreadcrumbItem>
    <a href="/1">Level 1</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="/2" aria-current="page">
      Level 2
    </a>
  </BreadcrumbItem>
</Breadcrumbs>;
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
      <a href="/1" class="sds-breadcrumb-item__link">Level 1</a>
    </li>
    <li class="sds-breadcrumbitem sds-breadcrumbitem--active">
      <a href="/2" class="sds-breadcrumb-item__link" aria-current="page">
        Level 2
      </a>
    </li>
  </ol>
</nav>
```
