# `@sikt/sds-toggle`

## Consume

```sh
npm i -s @sikt/sds-toggle
```

### React

#### Toggle Switch

```js
import { ToggleSwitch } from "@sikt/sds-toggle";
import "@sikt/sds-toggle/dist/index.css";
import "@sikt/sds-icons/dist/index.css";

<ToggleSwitch label="Label" />;
```

#### Toggle Button

```js
import { ToggleButton } from "@sikt/sds-toggle";
import "@sikt/sds-toggle/dist/index.css";
import "@sikt/sds-icons/dist/index.css";

<ToggleButton label="Label" checked={false} onClick={() => {}} />;
```

#### Toggle Segment

```js
import { ToggleSegment } from "@sikt/sds-toggle";
import "@sikt/sds-toggle/dist/index.css";
import "@sikt/sds-icons/dist/index.css";

<ToggleSegment legend="Legend">
  <ToggleSegmentOption label="Label 1" value="1" checked onChange={() => {}} />
  <ToggleSegmentOption label="Label 2" value="2" checked onChange={() => {}} />
</ToggleSegment>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-toggle");
```

Create custom markup:

#### Toggle Switch

```html
<div class="sds-toggle-switch">
  <label class="sds-toggle-switch__main-label">
    <div class="sds-toggle-switch__inner">
      <input type="checkbox" class="sds-toggle-switch__track" />
      <div class="sds-toggle-switch__thumb">√</div>
    </div>
    <div class="sds-toggle-switch__label">Label</div>
  </label>
</div>
```
