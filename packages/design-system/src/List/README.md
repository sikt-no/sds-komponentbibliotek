# `List`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { List } from "@sikt/sd3-design-system";

<List.Ordered>
  <List.Item>Item #</List.Item>
</List.Ordered>

<List.Unordered>
  <List.Item>Item #</List.Item>
</List.Unordered>

<List.Description>
  <List.Term>Term</List.Term>
  <List.Details>Details</List.Details>
</List.Description>
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
