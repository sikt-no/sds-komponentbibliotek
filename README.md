# Sikt komponentbibliotek

A component library for [Sikt designsystem](https://isikt.sharepoint.com/sites/Innsikt-OmOss/SitePages/Profil.aspx).

<details>
  <summary>Table of Contents</summary>

- [Consume](#consume)
  - [Core & Design Tokens](#core--design-tokens)
    - [Tailwind CSS](#tailwind-css)
  - [React](#react)
  - [Stylesheets & custom markup](#stylesheets--custom-markup)
    - htmx
  - [Vue](#vue)
- [Accessibility](#accessibility)
- [Contribute](#contribute)
- [Security](#security)
- [License](#license)

</details>

## Consume

Install package to be consumed:

```sh
npm i -s @sikt/sds-{core,<package-name>}
```

### Core & Design Tokens

Import the [@sikt/sds-core](./packages/core/) package. It contains, among other things, a base stylesheet with reset, font family and [Design Tokens](./packages/tokens/README.md#design-tokens), on which other packages are based.

```css
@import url("@sikt/sds-core");
```

**Note** This package may be required whether you use the React components or not. Unless you import design tokens directly and make the setup yourself.

**Note** Design Tokens can be imported in the needed format directly from [@sikt/sds-tokens](./packages/tokens/).

#### Tailwind CSS

[Tailwind CSS](./packages/tokens/README.md#tailwind-css)

### React

Import component & stylesheet:

```jsx
import { Button } from "@sikt/sds-button";
import "@sikt/sds-button/dist/index.css";

return (
  <Button variant="strong">Hello, World!</Button>;
);
```

### Stylesheets & custom markup

If you are not able to use the React components, for example if you are using Vue, Angular, Svelte, htmx or even PHP 😱. You can still benefit by using the stylesheets and building your own markup and functionality based on the components CSS class names.

Import stylesheet:

```css
@import url("@sikt/sds-button");
```

Create custom markup:

```html
<button class="sds-button sds-button--strong">
  <span class="sds-button__label">Hello, World!</span>
</button>
```

### Vue

See custom markup below or go to the [Vue component example](./docs/VUE.md).

## Examples

These are example web applications to see how things can be built with Sikt designsystem:

- [designsystem.sikt.no](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/-/tree/main/apps/astro) (Astro)
- [Min kompetanse](https://gitlab.sikt.no/fs/min-kompetanse) (Next.js)
- [FS Admin](https://gitlab.sikt.no/studieadm/fs-admin) (Next.js)

## Accessibility

[Accessibility](./docs/A11Y.md)

## Contribute

[Contributing](CONTRIBUTING.md)

## Security

[Security](./docs/SECURITY.md)

## License

[License](LICENSE.md)

---

Made with ❤️🧡💛💚💙💜 at [Sikt](https://www.sikt.no/)
