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

Import stylesheet

```css
@import url("@sikt/horisont-button/dist/index.css");
```

Create custom markup

```html
<button class="horisont-button horisont-button--primary">Hello, World!</button>
```

## Contribute

[Contributing](CONTRIBUTING.md)

## License

MIT

---

Made with ♥ at [Sikt](https://www.sikt.no/)
