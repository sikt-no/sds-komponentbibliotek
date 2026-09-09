# `Details`

An expandable disclosure built on native `<details>` and `<summary>`. Ships as a compound: `Details`, `Details.Summary`, `Details.Content`.

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```tsx
import { Details } from "@sikt/sd3-design-system";
import "@sikt/sd3-design-system/dist/index.css";

export const Faq = () => (
  <>
    <Details name="faq">
      <Details.Summary>Hvem kan registrere seg?</Details.Summary>
      <Details.Content>
        Foreninger, stiftelser og aksjeselskap som driver frivillig virksomhet.
      </Details.Content>
    </Details>
    <Details name="faq">
      <Details.Summary>Hva koster registrering?</Details.Summary>
      <Details.Content>Registrering er gratis.</Details.Content>
    </Details>
  </>
);
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sd3-design-system");
```

Create custom markup:

```html
<!-- see html example in Storybook -->
```
