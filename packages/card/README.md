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
  image={
    <img
      src="https://url.to/image.type"
      alt="A descriptive text of what is shown in the image"
    />
  }
  overlineText="Overline"
  headingText="Heading"
  headingLevel="h2"
  children="Content"
  callToAction={<a href="https://url.to/destination">Call to action</a>}
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
