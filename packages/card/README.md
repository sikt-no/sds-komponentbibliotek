# `@sikt/sds-card`

## Consume

```sh
npm i -s @sikt/sds-card
```

### React

```js
import { Card } from "@sikt/sds-card";
import "@sikt/sds-card/dist/index.css";
import "@sikt/sds-button/dist/index.css";

<Card
  headingLevel="h2"
  imgSrc="https://url.to/image.type"
  imgAlt="A descriptive text of what is shown in the image"
  linkText="Call to action text"
  linkHref="https://url.to/destination"
  headingText="Heading"
  overlineText="Overline"
  text="Text content"
/>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-card");
@import url("@sikt/sds-button");
```

Create custom markup:

```html
<div class="sds-card">...</div>
```
