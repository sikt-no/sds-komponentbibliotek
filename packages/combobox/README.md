# `@sikt/sds-combobox`

## Consume

```sh
npm i -s @sikt/sds-{combobox,form}
```

### React

#### With dynamic content

```js
import { Combobox, ComboboxItem } from "@sikt/sds-combobox";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-combobox/dist/index.css";

<Combobox
  label="..."
  defaultItems={[
    { title: "foo", id: 1 },
    { title: "baz", id: 2 },
  ]}
>
  {(item) => <ComboboxItem>{item.title}</ComboboxItem>}
</Combobox>;
```

#### With static content

```js
<Combobox label="...">
  <ComboboxItem id="Foo">Foo</ComboboxItem>
  <ComboboxItem id="Baz">Baz</ComboboxItem>
</Combobox>
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
