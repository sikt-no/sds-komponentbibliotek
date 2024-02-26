# `@sikt/sds-core`

## Consume

```sh
npm i -s @sikt/sds-core
```

### Stylesheet

```css
@import url("@sikt/sds-core");
```

### React

```js
import { PrimaryButton } from "@sikt/sds-button";
import "@sikt/sds-core/dist/index.css";

<PrimaryButton>Hello, World!</PrimaryButton>;
```

## Color Scheme

Color scheme is default light and can be changed by the users color scheme setting. If a web page or parts of a web page should be locked to one mode it can be done with the attribute `data-color-scheme="<scheme>"`, remember to set a background if used on a partial pages as the root background otherwise will affect your partial page.
