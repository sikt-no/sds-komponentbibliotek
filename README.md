# Sikt komponentbibliotek

A component library for [Sikt](https://www.sikt.no/) designsystem.

## Consume

Install package to be consumed:

```sh
npm i -s @sikt/sds-<package-name>
```

### Core & Design Tokens

Import [@sikt/sds-core](./packages/core/) package which among other things contain stylesheet reset, font family and [Design Tokens](./packages/core/README.md#design-tokens) from which other packages are based:

```css
@import url("@sikt/sds-core");
```

### React

Import component & stylesheet:

```js
import { PrimaryButton } from "@sikt/sds-button";
import "@sikt/sds-button/dist/index.css";

<PrimaryButton>Hello, World!</PrimaryButton>;
```

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

### Vue

See custom markup above or [Vue component example](VUE.md).

## Accessibility

[Accessibility](A11Y.md)

## Contribute

[Contributing](CONTRIBUTING.md)

## License

[License](LICENSE.md)

---

Made with ♥ at [Sikt](https://www.sikt.no/)
