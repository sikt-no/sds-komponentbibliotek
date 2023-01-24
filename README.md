# Horisont

Horisont the component library for [Sikt](https://www.sikt.no/)  
_Horizon derives from Greek (horízō) 'to divide, to separate' and (hóros) 'boundary'_

## Consume

Install package to be consumed

```sh
npm i -s @sikt/horisont-<package-name>
```

### Core & Design Tokens

Import [@sikt/horisont-core](./packages/core/) package which among other things contain stylesheet reset, font family and [Design Tokens](./packages/core/README.md#design-tokens) from which other packages are based

```css
@import url("@sikt/horisont-core/dist/index.css");
```

### React

```js
import { PrimaryButton } from "@sikt/horisont-button";
import "@sikt/horisont-button/dist/index.css";

<PrimaryButton>Hello, World!</PrimaryButton>;
```

### Stylesheets & custom markup

If you are not able to use the React components, for example if you are using Vue or PHP. You can still benefit by using the stylesheets and building your own markup and components

Import stylesheet

```css
@import url("@sikt/horisont-button/dist/index.css");
```

Create custom markup

```html
<button class="horisont-button horisont-button--primary">Hello, World!</button>
```

## Accessibility

[Accessibility](A11Y.md)

## Contribute

[Contributing](CONTRIBUTING.md)

## License

[License](LICENSE.md)

---

Made with ♥ at [Sikt](https://www.sikt.no/)
