# `@sikt/sds-accordion`

## Consume

```sh
npm i -s @sikt/sds-accordion
```

### React

```js
import { Accordion } from "@sikt/sds-accordion";
import "@sikt/sds-accordion/dist/index.css";

<Accordion title="Accordion header">Content</Accordion>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-accordion");
```

Create custom markup:

```html
<div class="sds-accordion sds-accordion--large">
  <button class="sds-accordion__button">Accordion header</button>
  <div class="sds-accordion__content">Content</div>
</div>
```
