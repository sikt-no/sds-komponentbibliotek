# `@sikt/sds-header`

## Consume

```sh
npm i -s @sikt/sds-header
```

### React

Simple header

```jsx
import { Header } from "@sikt/sds-header";
import "@sikt/sds-header/dist/index.css";
import "@sikt/sds-logo/dist/index.css";

<Header />;
```

Header with product name

```jsx
<Header logoText="Min produkt" logoHref="//path/to/my/product" />
```

Header with hamburger that can be positioned left `leftSlot` or right `rigthSlot`.  
Children are positioned in the middle.

```jsx
<Header leftSlot={<MyOwnHamburgerComponent />}>
  Content positioned in the middle of the header
</Header>
```

There is also a `topSlot` for adding an external menu above the header and a `applicationStatus` prop for adding a status below the header.
