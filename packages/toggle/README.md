# `@sikt/sds-toggle`

## Consume

```sh
npm i -s @sikt/sds-toggle
```

### React

```js
import { ToggleSwitch } from "@sikt/sds-toggle";
import "@sikt/sds-toggle/dist/index.css";
import "@sikt/sds-icons/dist/index.css";

<ToggleSwitch label="Label" />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-toggle");
```

Create custom markup:

```html
<div class="sds-toggle-switch">
  <label class="sds-toggle-switch__main-label">
    <div class="sds-toggle-switch__inner">
      <input type="checkbox" class="sds-toggle-switch__track" />
      <div class="sds-toggle-switch__thumb">√</div>
    </div>
    <div class="sds-toggle-switch__label">Label</div>
  </label>
</div>
```
