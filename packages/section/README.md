# `@sikt/sds-section`

## Consume

```sh
npm i -s @sikt/sds-section
```

### React

```js
import { Section } from "@sikt/sds-section";
import "@sikt/sds-section/dist/index.css";

<Section
  headingLevel="h2"
  headingText="Header"
  linkHref="www.internet.com"
  linkLabel="Clickable label"
/>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-section");
```

Create custom markup:

```html
<div class="sds-section">...</div>
```
