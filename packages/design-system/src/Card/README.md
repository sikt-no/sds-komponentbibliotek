# `card`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { Card } from "@sikt/sd3-design-system";

<Card>
  <Card.Image>
    <picture>
      <img src="/path/to/image" alt="A image" />
    </picture>
  </Card.Image>
  <Card.Content>Hello, World!</Card.Content>
</Card>;
```

### Stylesheets

Import stylesheet:

```css
@layer sd3 /*, my-own-more-specific-layer */;
@import url("@sikt/sd3-design-system") layer(sd3);
```

### Custom markup

Create custom markup:

```html
<!-- see html example in Storybook -->
```
