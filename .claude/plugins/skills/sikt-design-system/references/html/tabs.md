# @sikt/sds-tabs — HTML snippets

Rendered HTML for every Storybook story in `packages/tabs`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-tabs/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/tabs.md`) to pick up the visual styles for these classes.

## TabLink.stories

### Default

```html
<a class="sds-tabs__tab sds-tab-link sds-tab-link--selected" href="#link"
  >Tab Link</a
>
```

### WithIcon

```html
<a class="sds-tabs__tab sds-tab-link sds-tab-link--selected" href="#link">
  <div class="sds-tabs__tab-icon"><!-- icon: InfoIcon --></div>
  Tab Link
</a>
```

### WithTag

```html
<a class="sds-tabs__tab sds-tab-link sds-tab-link--selected" href="#link">
  Tab Link
  <span
    class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-subtle"
  >
    <span class="sds-tag__label">Status</span>
  </span>
</a>
```

## Tabs.stories

### Controlled

```html
<button>Change index+1</button>
<div class="sds-tabs">
  <div class="sds-tabs__tab-list">
    <div class="sds-tabs__tab-tablist" role="tablist" aria-label="Sample Tabs">
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-REPLACE_ME_0-0"
        id="tab-REPLACE_ME_0-0"
        tabindex="0"
        index="0"
      >
        First Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-1"
        id="tab-REPLACE_ME_0-1"
        tabindex="-1"
        index="1"
      >
        Second Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-2"
        id="tab-REPLACE_ME_0-2"
        tabindex="-1"
        index="2"
      >
        Third Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-3"
        id="tab-REPLACE_ME_0-3"
        tabindex="-1"
        index="3"
      >
        Fourth Tab
      </button>
    </div>
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-0"
    role="tabpanel"
    aria-labelledby="tab-REPLACE_ME_0-0"
    index="0"
  >
    First Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-1"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-1"
    hidden=""
    index="1"
  >
    Second Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-2"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-2"
    hidden=""
    index="2"
  >
    Third Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-3"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-3"
    hidden=""
    index="3"
  >
    Fourth Content
  </div>
</div>
```

### Default

```html
<div class="sds-tabs">
  <div class="sds-tabs__tab-list">
    <div class="sds-tabs__tab-tablist" role="tablist" aria-label="Sample Tabs">
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-REPLACE_ME_0-0"
        id="tab-REPLACE_ME_0-0"
        tabindex="0"
        index="0"
      >
        First Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-1"
        id="tab-REPLACE_ME_0-1"
        tabindex="-1"
        index="1"
      >
        Second Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-2"
        id="tab-REPLACE_ME_0-2"
        tabindex="-1"
        index="2"
      >
        Third Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-3"
        id="tab-REPLACE_ME_0-3"
        tabindex="-1"
        index="3"
      >
        Fourth Tab
      </button>
    </div>
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-0"
    role="tabpanel"
    aria-labelledby="tab-REPLACE_ME_0-0"
    index="0"
  >
    First Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-1"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-1"
    hidden=""
    index="1"
  >
    Second Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-2"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-2"
    hidden=""
    index="2"
  >
    Third Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-3"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-3"
    hidden=""
    index="3"
  >
    Fourth Content
  </div>
</div>
```

### TooManyTabsOnTheDancefloor

```html
<div class="sds-tabs">
  <div class="sds-tabs__tab-list">
    <div class="sds-tabs__tab-tablist" role="tablist" aria-label="Sample Tabs">
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-REPLACE_ME_0-0"
        id="tab-REPLACE_ME_0-0"
        tabindex="0"
        index="0"
      >
        First Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-1"
        id="tab-REPLACE_ME_0-1"
        tabindex="-1"
        index="1"
      >
        Second Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-2"
        id="tab-REPLACE_ME_0-2"
        tabindex="-1"
        index="2"
      >
        Third Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-3"
        id="tab-REPLACE_ME_0-3"
        tabindex="-1"
        index="3"
      >
        Fourth Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-4"
        id="tab-REPLACE_ME_0-4"
        tabindex="-1"
        index="4"
      >
        5 Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-5"
        id="tab-REPLACE_ME_0-5"
        tabindex="-1"
        index="5"
      >
        6 Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-6"
        id="tab-REPLACE_ME_0-6"
        tabindex="-1"
        index="6"
      >
        7 Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-7"
        id="tab-REPLACE_ME_0-7"
        tabindex="-1"
        index="7"
      >
        8 Tab
      </button>
    </div>
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-0"
    role="tabpanel"
    aria-labelledby="tab-REPLACE_ME_0-0"
    index="0"
  >
    First Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-1"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-1"
    hidden=""
    index="1"
  >
    Second Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-2"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-2"
    hidden=""
    index="2"
  >
    Third Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-3"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-3"
    hidden=""
    index="3"
  >
    Fourth Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-4"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-4"
    hidden=""
    index="4"
  >
    5 Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-5"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-5"
    hidden=""
    index="5"
  >
    6 Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-6"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-6"
    hidden=""
    index="6"
  >
    7 Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-7"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-7"
    hidden=""
    index="7"
  >
    8 Content
  </div>
</div>
```

### WithIcon

```html
<div class="sds-tabs">
  <div class="sds-tabs__tab-list">
    <div class="sds-tabs__tab-tablist" role="tablist" aria-label="Sample Tabs">
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-REPLACE_ME_0-0"
        id="tab-REPLACE_ME_0-0"
        tabindex="0"
        index="0"
      >
        <span class="sds-tabs__tab-icon"><!-- icon: InfoIcon --></span>
        First Tab
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-1"
        id="tab-REPLACE_ME_0-1"
        tabindex="-1"
        index="1"
      >
        Second Tab
      </button>
    </div>
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-0"
    role="tabpanel"
    aria-labelledby="tab-REPLACE_ME_0-0"
    index="0"
  >
    First Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-1"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-1"
    hidden=""
    index="1"
  >
    Second Content
  </div>
</div>
```

### WithTag

```html
<div class="sds-tabs">
  <div class="sds-tabs__tab-list">
    <div class="sds-tabs__tab-tablist" role="tablist" aria-label="Sample Tabs">
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-REPLACE_ME_0-0"
        id="tab-REPLACE_ME_0-0"
        tabindex="0"
        index="0"
      >
        First Tab
        <span
          class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-subtle"
        >
          <span class="sds-tag__label">Status</span>
        </span>
      </button>
      <button
        class="sds-tabs__tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-REPLACE_ME_0-1"
        id="tab-REPLACE_ME_0-1"
        tabindex="-1"
        index="1"
      >
        Second Tab
      </button>
    </div>
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-0"
    role="tabpanel"
    aria-labelledby="tab-REPLACE_ME_0-0"
    index="0"
  >
    First Content
  </div>
  <div
    class="sds-tabs__tab-panel"
    id="panel-REPLACE_ME_0-1"
    role="tabpanel"
    tabindex="-1"
    aria-labelledby="tab-REPLACE_ME_0-1"
    hidden=""
    index="1"
  >
    Second Content
  </div>
</div>
```
