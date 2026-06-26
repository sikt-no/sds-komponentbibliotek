# `@sikt/sds-checkbox`

## Consume

```sh
npm i -s @sikt/sds-{checkbox,form}
```

### React

```js
import { CheckboxInput } from "@sikt/sds-checkbox";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-checkbox/dist/index.css";

<CheckboxInput label="Label" checked onChange={(event, isChecked) => {}}
```

```js
import { Fieldset } from "@sikt/sds-form";
import { CheckboxInput } from "@sikt/sds-checkbox";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-checkbox/dist/index.css";

<Fieldset legend="Legend" helpText="Helpful text">
  <CheckboxInput label="Label" checked onChange={(event, isChecked) => {}}
  <CheckboxInput label="Label" checked onChange={(event, isChecked) => {}}
</Fieldset>
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-form");
@import url("@sikt/sds-checkbox");
```
