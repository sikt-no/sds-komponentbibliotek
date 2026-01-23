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
/>;
```

i18n are set with the following props from [u-elements](https://u-elements.github.io/u-elements/elements/u-combobox#u-combobox):

- `data-sr-added="Added"` prefixes announcements about additions.
- `data-sr-removed="Removed"` prefixes announcements about removals.
- `data-sr-remove="Press to remove"` announces ability to remove.
- `data-sr-empty="No selected"` announces no selected items.
- `data-sr-found="Navigate left to find %d selected"` announces where to find amount of selected items.
- `data-sr-invalid="Invalid value"` announces if trying to select invalid value.
- `data-sr-of="of"` separates "number of total" in announcements.
- `data-sr-items="Selected"` aria-label for listbox containing selected items.
- `data-sr-singular="%d hit"` announces single hit
- `data-sr-plural="%d hits"` announces multiple hits
- `data-sr-clear="Clear text"` announces clear button.

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
