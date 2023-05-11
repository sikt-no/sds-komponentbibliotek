# `@sikt/sds-toggle`

## Consume

```sh
npm i -s @sikt/sds-toggle
```

### React

```js
import { ToggleInput } from "@sikt/sds-toggle";
import "@sikt/sds-toggle/dist/index.css";

<ToggleInput>Label</ToggleInput>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-toggle");
```

Create custom markup:

```html
<div class="sds-toggle">
  <label class="sds-toggle__main-label">
    <div class="sds-toggle__inner">
      <input type="checkbox" class="sds-toggle__track" />
      <div class="sds-toggle__thumb">√</div>
    </div>
    <div class="sds-toggle__label">Label</div>
  </label>
</div>
```
