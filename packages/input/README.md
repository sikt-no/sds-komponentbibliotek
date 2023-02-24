# `@sikt/sds-input`

## Consume

```sh
npm i -s @sikt/sds-input
```

### React

```js
import { TextInput } from "@sikt/sds-input";
import "@sikt/sds-input/dist/index.css";

<TextInput
  label="Label"
  onChange={() => {}}
  value={value}
  placeholder="Placeholder"
/>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-input");
```

Create custom markup:

```html
<div class="sds-input">
  <label className="sds-input__label" for="nameInput">Name</label>
  <div className="sds-input__wrapper">
    <input
      className="sds-input__input"
      id="nameInput"
      type="text"
      placeholder="Placeholder name"
    />
  </div>
  <div className="sds-input__help-text">Enter your name</div>
</div>
```
