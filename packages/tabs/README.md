# `@sikt/sds-tabs`

## Consume

```sh
npm i -s @sikt/sds-tabs
```

### React

```js
import { Tabs, TabList, Tab, TabPanel } from "@sikt/sds-tabs";
import "@sikt/sds-tabs/dist/index.css";

<Tabs>
  <TabList>
    <Tab>First Tab</Tab>
    <Tab>Second Tab</Tab>
    <Tab>Third Tab</Tab>
  </TabList>
  <TabPanel>First Content</TabPanel>
  <TabPanel>Second Content</TabPanel>
  <TabPanel>Third Content</TabPanel>
</Tabs>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-tabs");
```

Create custom markup:

```html
<div class="sds-tabs">
  <div class="sds-tabs__tab-list" role="tablist" aria-label="Sample Tabs">
    <button
      class="sds-tabs__tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-guid-1"
      id="tab-guid-1"
      tabindex="0"
    >
      First Tab
    </button>
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-guid-1"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-guid-1"
  >
    <p>Content for the first panel</p>
  </div>
</div>
```

More about [accessibility requirements for the role tabs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role).
