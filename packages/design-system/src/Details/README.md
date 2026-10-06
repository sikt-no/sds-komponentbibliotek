# `Details`

An expandable disclosure built on native `<details>` and `<summary>`. Ships as a compound: `Details`, `Details.Summary`, `Details.Content`.

## Consume

```sh
npm i -s @sikt/sd3-design-system
```

### React

```tsx
import { Details } from "@sikt/sd3-design-system";

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

### Stylesheets

Import stylesheet:

```css
@layer sd3 /*, my-own-more-specific-layer */;
@import url("@sikt/sd3-design-system") layer(sd3);
```

### Custom markup

```html
<!-- see html example in Storybook -->
```
