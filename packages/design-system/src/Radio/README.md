# `Radio`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { Radio, RadioCard } from "@sikt/sd3-design-system";

<Radio name="plan">Fri</Radio>;

<RadioCard name="plan">
  Fri
  <RadioCard.HelpText>Alltid gratis</RadioCard.HelpText>
</RadioCard>;
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
