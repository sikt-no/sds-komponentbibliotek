# `@sikt/sds-list`

## Consume

```sh
npm i -s @sikt/sds-list
```

### React

```js
import { UnorderedList, ListItem } from "@sikt/sds-list";
import "@sikt/sds-list/dist/index.css";

<UnorderedList>
  <ListItem>Hello, World!</ListItem>
</UnorderedList>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-list");
```

Create custom markup:

```html
<ul class="sds-list">
  <li class="sds-list__item">Hello, World!</li>
</ul>
```
