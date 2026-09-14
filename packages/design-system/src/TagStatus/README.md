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
import "@sikt/sd3-design-system/dist/index.css";

<TagStatus variant="success">Bekreftet</TagStatus>;
<TagStatus variant="critical" visibility="strong">
  Feilet
</TagStatus>;
```

### Stylesheets & custom markup

```css
@import url("@sikt/sd3-design-system");
```

```html
<!-- see html example in Storybook -->
```
