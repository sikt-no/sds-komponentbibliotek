# `@sikt/sds-select`

## Consume

```sh
npm i -s @sikt/sds-select
```

### React

```js
import { Select } from "@sikt/sds-select";
import "@sikt/sds-select/dist/index.css";

<Select />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-select");
```

Create custom markup:

```html
<div class="sds-select">
  <label for="id">
    <div class="sds-select__label">Label</div>
    <div class="sds-select__select">
      <select
        id="id"
        class="sds-select__select-input"
        aria-describedby="id-described"
      >
        <option>Option</option>
      </select>
    </div>
    <svg class="sds-icon sds-select__select-button">...</svg>
  </label>
  <div id="id-described" class="sds-select__help-text">Help text</div>
</div>
```
