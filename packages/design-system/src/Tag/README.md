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
import "@sikt/sd3-design-system/dist/index.css";

<Tag color="brand">Ny</Tag>;
<Tag color="category-3" visibility="strong">
  Kategori 3
</Tag>;
```

### Stylesheets & custom markup

```css
@import url("@sikt/sd3-design-system");
```

```html
<!-- see html example in Storybook -->
```
