# `Pagination`

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```js
import { Pagination } from "@sikt/sd3-design-system";
import "@sikt/sd3-design-system/dist/index.css";

<Pagination
  aria-label="Paginering"
  count={42}
  currentIndex={currentIndex}
  onPageChange={setCurrentIndex}
/>;
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
