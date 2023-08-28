# `@sikt/sds-form`

## Consume

```sh
npm i -s @sikt/sds-form
```

### React

#### Fieldset

```js
import { Fieldset } from "@sikt/sds-form";
import "@sikt/sds-form/dist/index.css";

<Fieldset legend="Example Fieldset">
  <Radio>
</Fieldset>
```

The `Fieldset` component is useful when grouping several checkboxes, but can also be used with other input elements. If the elements inside are `Radio` components, please use `RadioFieldset` instead. It contains additional support for radio buttons.

#### FormField

```js
import { FormField } from "@sikt/sds-form";
import "@sikt/sds-form/dist/index.css";

<FormField label="Example input" helpText="This is an example" htmlFor="example-input">
  <input type="text" id="example-input">
</FormField>
```

The `FormField` component can be used to implement input elements needing a label and help/error text. It is used internally for components like `Input` and `Select`, and contains logic for handling error state by switching help text with error text. This component is recommended to use when developing custom input components to be used together with the existing ones.

This package also exports the `Label` and `HelpText` components, which are used by `FormField`. You will most likely not need to use these, but they are available. Prefer to use `FormField` instead.

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-form");
```
