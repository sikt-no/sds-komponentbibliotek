# `@sikt/sds-combobox`

## Consume

```sh
npm i -s @sikt/sds-combobox
```

### React

#### With dynamic content

```js
import { Combobox, ComboBoxItem } from "@sikt/sds-combobox";
import "@sikt/sds-combobox/dist/index.css";

<Combobox
  label="..."
  defaultItems={[
    { title: "foo", id: 1 },
    { title: "baz", id: 2 },
  ]}
>
  {(item) => <ComboBoxItem>{item.title}</ComboBoxItem>}
</Combobox>;
```

#### With static content

```js
import { Combobox, ComboBoxItem } from "@sikt/sds-combobox";
import "@sikt/sds-combobox/dist/index.css";

<Combobox label="...">
  <ComboBoxItem id="Foo">Foo</ComboBoxItem>
  <ComboBoxItem id="Baz">Baz</ComboBoxItem>
</Combobox>;
```

### Additional information

For any additional details, troubleshooting, or advanced features, please consult the React Aria ComboBox documentation.

[https://react-spectrum.adobe.com/react-aria/ComboBox.html](https://react-spectrum.adobe.com/react-aria/ComboBox.html)

### Stylesheets

Import stylesheet:

```css
@import url("@sikt/sds-form");
@import url("@sikt/sds-combobox");
```
