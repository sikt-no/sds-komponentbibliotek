# `@sikt/sds-select`

## Consume

```sh
npm i -s @sikt/sds-{form,select}
```

### React

```js
import { Select } from "@sikt/sds-select";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-select/dist/index.css";

<Select
  label="Label"
  onChange={() => {}}
  options={[
    { label: "Value 1", value: "1" },
    { label: "Value 2", value: "2" },
  ]}
/>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-form");
@import url("@sikt/sds-select");
```

Create custom markup:

```html
<!-- see html example in Storybook -->
```
