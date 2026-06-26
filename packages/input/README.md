# `@sikt/sds-input`

## Consume

```sh
npm i -s @sikt/sds-{form,input}
```

### React

```js
import { TextInput } from "@sikt/sds-input";
import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-input/dist/index.css";

<TextInput label="Label" value={value} onChange={(event, newValue) => {}} />;
```

### Input Component

The Input component is a flexible input field component designed to handle different types of inputs.

#### Available types

- TextArea: Allows multi-line text input.
- TextInput: Standard single-line text input.
- NumberInput: Accepts numerical input.
- EmailInput: Specifically designed for email input.
- PasswordInput: Secured input for password entry.
- TelInput: For entering telephone numbers.
- SearchInput: Optimized for search functionality with a custom clear icon button.

#### SearchInput

The SearchInput features a custom clear icon button. Note that clearing the input field when pressing the Escape key is a built-in default feature.

It is important to note that in Firefox, clicking the clear button causes the SearchInput field to lose focus. However, this has been adressed by reassigning focus to the SearchInput using the useRef hook.

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-form");
@import url("@sikt/sds-input");
```

Create custom markup:

```html
<div class="sds-input">
  <label class="sds-input__label" for="nameInput">Name</label>
  <div class="sds-input__wrapper">
    <input class="sds-input__input" id="nameInput" type="text" />
  </div>
  <div class="sds-input__help-text">Enter your name</div>
</div>
```
