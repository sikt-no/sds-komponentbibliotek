# `@sikt/sds-header`

## Consume

```sh
npm i -s @sikt/sds-header
```

### React

The Header uses a grid layout to position two children in the middle and on the right side of the header, while the left is used for a logo, link or text as defined in the props of the `Header` element.

Links inserted in the `HeaderNav` element will automatically be styled as `TabLink`s in desktop view, with the mobile menu view remaining unstyled. The `HeaderNav` element is optional, but should only be used when also using the `HeaderCollapsibleMenu` element.

When using the header with navigation links, the following pattern can be used to insert content into a collapsible menu that supports mobile view.

```jsx
import { Header, HeaderCollapsibleMenu, HeaderNav } from "@sikt/sds-header";
import "@sikt/sds-header/dist/index.css";
import "@sikt/sds-logo/dist/index.css";

<Header>
  <HeaderCollapsibleMenu>
    <HeaderNav>
      <a href="">Link 1</a>
      <a href="">Link 2</a>
    </HeaderNav>
    <Button>Button</Button>
  </HeaderCollapsibleMenu>
</Header>;
```

To use the header with general content, do the following. This does not include the collapsible mobile menu.

```jsx
import { Header } from "@sikt/sds-header";
import "@sikt/sds-header/dist/index.css";
import "@sikt/sds-logo/dist/index.css";

<Header>
  <div>This content is positioned in the middle of the header</div>
  <div>This content is positioned on the right side of the header</div>
</Header>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-header");
@import url("@sikt/sds-logo");
```

Create custom markup:

```html
<header class="sds-header">
  <div class="sds-header__content">
    <!-- content goes here -->
  </div>
</header>
```
