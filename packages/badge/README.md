# `@sikt/sds-badge`

## Consume

```sh
npm i -s @sikt/sds-badge
```

### React

```js
import { Badge } from "@sikt/sds-badge";
import "@sikt/sds-badge/dist/index.css";

<Badge>Hello, World!</Badge>;
```

The badge can be marked as active by using the `active`-prop, altering its appearance:

```js
<Badge active>I am Active!</Badge>
```

Icons can be added to the badge by passing an [sds-icon](/packages/icons/README.md) with the `icon`-prop.

```js
import { Badge } from "@sikt/sds-badge";
import { InfoIcon } from "@sikt/sds-icon";
import "@sikt/sds-badge/dist/index.css";
import "@sikt/sds-icon/dist/index.css";

<Badge icon={<InfoIcon />}>Information</Badge>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-badge");
```

Create custom markup:

```html
<span class="sds-badge"> Hello, World! </span>
```
