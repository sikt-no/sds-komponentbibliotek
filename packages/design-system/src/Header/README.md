# `Header`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { Header } from "@sikt/sd3-design-system";

<Header>
  <Header.SkipLink href="">Skip to main content</Header.SkipLink>
  <Header.Content>
    <Header.Link href="">
      <Header.Logo />
    </Header.Link>
  </Header.Content>
</Header>;
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
