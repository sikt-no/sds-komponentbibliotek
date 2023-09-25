# `@sikt/sds-progress-indicator`

## Consume

```sh
npm i -s @sikt/sds-progress-indicator
```

### React

The state of each `<ProgressStep>`-component is set by its `status`-prop. `"complete"` and `"current"` steps are visibly identical but have important accessibility differences.

```js
import { ProgressIndicator, ProgressStep } from "@sikt/sds-progress-indicator";
import "@sikt/sds-progress-indicator/dist/index.css";

<ProgressIndicator>
  <ProgressStep value={1} label="First step" status="complete" />
  <ProgressStep value={2} label="Second step" status="current" />
  <ProgressStep value={3} label="Third step" />
  <ProgressStep value={4} label="Fourth step" />
</ProgressIndicator>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-progress-indicator");
```

Create custom markup:

```html
<div class="sds-progress-indicator">
  <div class="sds-progress-step">
    <div class="sds-progress-step__number"></div>
    <p className="sds-typography-body--small"></p>
  </div>
  <div className="sds-progress-indicator__separator-icon">&gt;</div>
  <div class="sds-progress-step sds-progress-step__number--selected">
    <div class="sds-progress-step__number"></div>
    <p className="sds-typography-body--small"></p>
  </div>
</div>
```
