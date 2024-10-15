# `@sikt/sds-input-datepicker`

## Consume

```sh
npm i -s @sikt/sds-{form,input,input-datepicker}
```

### React

```js
import { InputDatepicker } from "@sikt/sds-input-datepicker";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-input/dist/index.css";
import "@sikt/sds-input-datepicker/dist/index.css";

<InputDatepicker label="Label" />;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-form");
@import url("@sikt/sds-input");
@import url("@sikt/sds-input-datepicker");
```

Create custom markup:

```html
<div class="sds-input-datepicker sds-input">
  <!-- Your datepicker-components goes here -->
</div>
```
