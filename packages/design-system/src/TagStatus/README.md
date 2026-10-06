# `TagStatus`

Semantic status label with a locked icon per variant.

For brand, neutral, or categorical (non-status) tagging use `Tag` instead.

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```tsx
import { TagStatus } from "@sikt/sd3-design-system";

<TagStatus variant="success">Bekreftet</TagStatus>;
<TagStatus variant="critical" visibility="strong">
  Feilet
</TagStatus>;
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
