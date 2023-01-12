# Horisont

Horisont the component library for [Sikt](https://www.sikt.no/)

## Consume

Install package to be consumed

```sh
npm i -s @sikt/horisont-<package-name>
```

### Core & Design Tokens

Import [@sikt/horisont-core](./packages/core/) package which among other things contain stylesheet reset, font family and [Design Tokens](./packages/core/README.md#design-tokens) from which other packages are based

```css
@import "@sikt/horisont-core/dist/index.css";
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
@import "@sikt/horisont-button/dist/index.css";
```

Create custom markup

```html
<button class="horisont-button horisont-button--primary">Hello, World!</button>
```

## Contribute

[Contributing](CONTRIBUTING.md)

## Feedback

Please give us feedback  
E-mail [designsystem@sikt.no](designsystem@sikt.no)  
Slack [#designsystem](https://sikt-no.slack.com/archives/horisont)  
Gitlab [Issues](https://gitlab.sikt.no/designsystem/horisont/-/issues)

## License

MIT

---

Made with ♥ at [Sikt](https://www.sikt.no/)
