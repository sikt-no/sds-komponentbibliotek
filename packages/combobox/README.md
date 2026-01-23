# `@sikt/sds-combobox`

## Consume

```sh
npm i -s @sikt/sds-{combobox,form,icons}
```

### React

This component is build on top of [u-elements](https://u-elements.github.io/u-elements/elements/u-combobox).

```js
import { Combobox } from "@sikt/sds-combobox";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-icons/dist/index.css";
import "@sikt/sds-combobox/dist/index.css";

<Combobox
  label="Label"
  onChange={(event, values) => setValue(values)}
  options={[{ label: "Value 1", value: "1" }]}
  lang="en"
/>;
```

Accessible texts are set with the `lang`-prop. Missing a language? MRs welcome 🔀

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-form");
@import url("@sikt/sds-icons");
@import url("@sikt/sds-combobox");
```

Create custom markup:

```html
<!-- see html example in Storybook -->
```
