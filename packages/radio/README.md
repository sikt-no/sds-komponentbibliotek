# `@sikt/sds-radio`

## Consume

```sh
npm i -s @sikt/sds-radio
```

### React

```js
import { RadioInput, RadioFieldset } from "@sikt/sds-radio";
import "@sikt/sds-radio/dist/index.css";

<RadioFieldset
  label="Favorite animal"
  name="animal"
  onChange={(newValue) => {}}
  value="dog"
>
  <RadioInput label="Cat" value="cat" />
  <RadioInput label="Dog" value="dog" />
  <RadioInput label="Snake" value="snake" />
</RadioFieldset>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-radio");
```

Create custom markup:

```html
<fieldset class="sds-radio-fieldset">
  <legend class="sds-radio-fieldset__legend">Favorite animal</legend>
  <label class="sds-radio" for="radio1">
    <input
      class="sds-radio__input"
      id="radio1"
      name="animal"
      type="radio"
      value="cat"
    />
    Cat
  </label>
  <label class="sds-radio" for="radio2">
    <input
      class="sds-radio__input"
      id="radio2"
      name="animal"
      type="radio"
      value="dog"
      checked
    />
    Dog
  </label>
  <label class="sds-radio" for="radio3">
    <input
      class="sds-radio__input"
      id="radio3"
      name="animal"
      type="radio"
      value="snake"
    />
    Snake
  </label>
</fieldset>
```
