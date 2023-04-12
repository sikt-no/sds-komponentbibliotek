# Sikt komponentbibliotek

A component library for [Sikt designsystem](https://isikt.sharepoint.com/sites/Innsikt-OmOss/SitePages/Profil.aspx).

## Consume

Install package to be consumed:

```sh
npm i -s @sikt/sds-core @sikt/sds-<package-name>
```

### Core & Design Tokens

Import the [@sikt/sds-core](./packages/core/) package. It contains, among other things, a stylesheet reset, font family and [Design Tokens](./packages/core/README.md#design-tokens), on which other packages are based.

```css
@import url("@sikt/sds-core");
```

**Note** This package is always required whether you use the React components or other frameworks.

### React

Import component & stylesheet:

```jsx
import { PrimaryButton } from "@sikt/sds-button";
import "@sikt/sds-button/dist/index.css";

return (
  <PrimaryButton>Hello, World!</PrimaryButton>;
);
```

### Vue

See custom markup below or go to the [Vue component example](./docs/VUE.md).

### Stylesheets & custom markup

If you are not able to use the React components, for example if you are using Vue or PHP. You can still benefit by using the stylesheets and building your own markup and components.

Import stylesheet:

```css
@import url("@sikt/sds-button");
```

Create custom markup:

```html
<button class="sds-button sds-button--primary">
  <span class="sds-button__label">Hello, World!</span>
</button>
```

## Accessibility

[Accessibility](./docs/A11Y.md)

## Contribute

[Contributing](CONTRIBUTING.md)

## License

[License](LICENSE.md)

---

Made with ♥ at [Sikt](https://www.sikt.no/)
