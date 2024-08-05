# `@sikt/sds-popover`

## Consume

```sh
npm i -s @sikt/sds-popover
```

### React

```js
import { Popover } from "@sikt/sds-popover";
import "@sikt/sds-popover/dist/index.css";

<Popover target={<>Hello, World!</>}>Hello?</Popover>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-popover");
```

Create custom markup:

```html
<button class="sds-popover" popovertarget="id">Hello?</button>
<div class="sds-popover__target" id="id">Hello, World!</div>
```
