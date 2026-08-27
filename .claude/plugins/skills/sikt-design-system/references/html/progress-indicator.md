# @sikt/sds-progress-indicator — HTML snippets

Rendered HTML for every Storybook story in `packages/progress-indicator`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-progress-indicator/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/progress-indicator.md`) to pick up the visual styles for these classes.

## ProgressIndicator.stories

### Default

```html
<div class="sds-progress-indicator">
  <div class="sds-progress-indicator__summary">
    <div class="sds-progress-indicator__heading">
      <span class="sds-progress-indicator__heading-content">2.</span>
      <span class="sds-progress-indicator__heading-content">Second step</span>
    </div>
    <div class="sds-progress-indicator__step-bar">
      <div class="sds-progress-indicator__step-bar-item"></div>
      <div
        class="sds-progress-indicator__step-bar-item sds-progress-indicator__step-bar-item--current"
      ></div>
      <div class="sds-progress-indicator__step-bar-item"></div>
      <div class="sds-progress-indicator__step-bar-item"></div>
    </div>
  </div>
  <ol class="sds-progress-indicator__step-details">
    <li class="sds-progress-indicator__step-details-item">
      <button
        class="sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action"
        type="button"
      >
        1. First step
      </button>
    </li>
    <li class="sds-progress-indicator__step-details-item">
      <a
        class="sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action"
        href="#"
        aria-current="step"
      >
        2. Second step
      </a>
    </li>
    <li class="sds-progress-indicator__step-details-item">
      <span class="sds-progress-indicator__step-details-content"
        >3. Third step</span
      >
    </li>
    <li class="sds-progress-indicator__step-details-item">
      <span class="sds-progress-indicator__step-details-content"
        >4. Fourth step</span
      >
    </li>
  </ol>
</div>
```

### Expandable

```html
<details class="sds-progress-indicator sds-progress-indicator--expandable">
  <summary class="sds-progress-indicator__summary">
    <div class="sds-progress-indicator__heading">
      <span class="sds-progress-indicator__heading-content">2.</span>
      <span class="sds-progress-indicator__heading-content">Second step</span>
      <div class="sds-progress-indicator__heading-button">
        <div class="sds-progress-indicator__heading-icon">
          <!-- icon: ExpandShowIcon -->
        </div>
      </div>
    </div>
    <div class="sds-progress-indicator__step-bar">
      <div class="sds-progress-indicator__step-bar-item"></div>
      <div
        class="sds-progress-indicator__step-bar-item sds-progress-indicator__step-bar-item--current"
      ></div>
      <div class="sds-progress-indicator__step-bar-item"></div>
      <div class="sds-progress-indicator__step-bar-item"></div>
    </div>
  </summary>
  <ol class="sds-progress-indicator__step-details">
    <li class="sds-progress-indicator__step-details-item">
      <button
        class="sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action"
        type="button"
      >
        1. First step
      </button>
    </li>
    <li class="sds-progress-indicator__step-details-item">
      <a
        class="sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action"
        href="#"
        aria-current="step"
      >
        2. Second step
      </a>
    </li>
    <li class="sds-progress-indicator__step-details-item">
      <span class="sds-progress-indicator__step-details-content"
        >3. Third step</span
      >
    </li>
    <li class="sds-progress-indicator__step-details-item">
      <span class="sds-progress-indicator__step-details-content"
        >4. Fourth step</span
      >
    </li>
  </ol>
</details>
```

### WithoutDetails

```html
<div class="sds-progress-indicator">
  <div class="sds-progress-indicator__summary">
    <div class="sds-progress-indicator__heading">
      <span class="sds-progress-indicator__heading-content">2.</span>
      <span class="sds-progress-indicator__heading-content">Second step</span>
    </div>
    <div class="sds-progress-indicator__step-bar">
      <div class="sds-progress-indicator__step-bar-item"></div>
      <div
        class="sds-progress-indicator__step-bar-item sds-progress-indicator__step-bar-item--current"
      ></div>
      <div class="sds-progress-indicator__step-bar-item"></div>
      <div class="sds-progress-indicator__step-bar-item"></div>
    </div>
  </div>
</div>
```
