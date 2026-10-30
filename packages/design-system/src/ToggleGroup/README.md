# `ToggleGroup`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { ToggleGroup } from "@sikt/sd3-design-system";
import "@sikt/sd3-design-system/dist/index.css";

<ToggleGroup aria-label="Mail folder" defaultValue="inbox">
  <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
  <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
</ToggleGroup>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sd3-design-system");
```

Create custom markup:

```html
<!-- see html example in Storybook -->
```
