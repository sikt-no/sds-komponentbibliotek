# `@sikt/sds-content-block`

## Consume

```sh
npm i -s @sikt/sds-content-block
```

### React

```js
import { Featured } from "@sikt/sds-content-block";
import "@sikt/sds-content-block/dist/index.css";
import "@sikt/sds-button/dist/index.css";

<Featured
  headingLevel="h2"
  imgSrc="https://url.to/image.type"
  imgAlt="Descriptive image text"
  linkText="Label"
  linkHref="https://url.to/destination"
  headingText="Heading"
  overlineText="Overline"
  text="Text content"
/>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-content-block");
@import url("@sikt/sds-button");
```

Create custom markup:

```html
<div class="sds-content-block-featured">...</div>
```
