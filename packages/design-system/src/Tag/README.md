# `Tag`

Small inline label for brand, neutral, or categorical tagging. Purely presentational.

For semantic status (success, info, warning, critical) use `TagStatus` instead.

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```tsx
import { Tag } from "@sikt/sd3-design-system";

<Tag color="brand">Ny</Tag>;
<Tag color="category-3" visibility="strong">
  Kategori 3
</Tag>;
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
