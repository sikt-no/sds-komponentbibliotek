# `@sikt/sds-details`

## Consume

```sh
npm i -s @sikt/sds-details
```

### React

```js
import { Details } from "@sikt/sds-details";
import "@sikt/sds-details/dist/index.css";

<Details summary="Hello">Hello, World!</Details>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-details");
```

Create custom markup:

```html
<details class="sds-details">
  <summary class="sds-details__summary">
    Hello
    <div>
      <svg className="sds-details__icon" />
    </div>
  </summary>
  <div class="sds-details__content">Hello, World!</div>
</details>
```
