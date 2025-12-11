# `@sikt/sds-input-datepicker`

## Consume

```sh
npm i -s @sikt/sds-{form,input,input-datepicker} @internationalized/date
```

### React

This component is build on top of [React Aria DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html).

```js
import { parseDate } from "@internationalized/date";
import { InputDatepicker } from "@sikt/sds-input-datepicker";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-input/dist/index.css";
import "@sikt/sds-input-datepicker/dist/index.css";

const defaultValue = parseDate(new Date().toISOString().substring(0, 10));
<InputDatepicker label="Label" value={defaultValue} />;
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
<!-- see html example in Storybook -->
```
