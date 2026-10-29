# `Checkbox`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { Checkbox, CheckboxCard } from "@sikt/sd3-design-system";

<Checkbox name="terms">Godta vilkår</Checkbox>;

<CheckboxCard name="terms">
  Godta vilkår
  <CheckboxCard.HelpText>
    Du kan trekke samtykket når som helst
  </CheckboxCard.HelpText>
</CheckboxCard>;
```

### Stylesheets

Import stylesheet:

```css
@layer sd3 /*, my-own-more-specific-layer */;
@import url("@sikt/sd3-design-system") layer(sd3);
```

### Custom markup

```html
<!-- see html example in Storybook -->
```
