# `@sikt/sds-progress-indicator`

## Consume

```sh
npm i -s @sikt/sds-progress-indicator
```

### React

The state of each `<ProgressStep>` component is set by the `currentIndex` prop on the `<ProgressIndicator>`.  
Actions can be added to a step with the child components `<ProgressStepButton>` and `<ProgressStepLink>`.

```js
import { ProgressIndicator, ProgressStep } from "@sikt/sds-progress-indicator";
import "@sikt/sds-progress-indicator/dist/index.css";

<ProgressIndicator currentIndex={0} heading="First step">
  <ProgressStep>
    <ProgressStepButton onClick={() => {}}>First step</ProgressStepButton>
  </ProgressStep>
  <ProgressStep>Second step</ProgressStep>
  <ProgressStep>Third step</ProgressStep>
  <ProgressStep>Fourth step</ProgressStep>
</ProgressIndicator>;
```

For use without details add the `count` prop and omit children.

```js
<ProgressIndicator currentIndex={0} count={4} heading="First step" />
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-progress-indicator");
```

Create custom markup:

```html
<div class="sds-progress-indicator">...</div>
```
