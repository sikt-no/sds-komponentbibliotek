# @sikt/sds-message — HTML snippets

Rendered HTML for every Storybook story in `packages/message`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-message/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/message.md`) to pick up the visual styles for these classes.

## Alert.stories

### Alert

```html
<div role="alert">
  <div class="sds-message sds-message--critical sds-message--box">
    <span class="sds-message__icon"><!-- icon: FailedIcon --></span>
    <span class="sds-message__message">Message</span>
    <span class="sds-message__cta">
      <button
        class="sds-button sds-button--neutral-transparent sds-button--small sds-message-button"
        type="button"
      >
        <span class="sds-button__label">Action</span>
        <span class="sds-button__icon sds-button__icon--right">
          <!-- icon: NavigateToNextIcon -->
        </span>
      </button>
    </span>
  </div>
</div>
```

## ApplicationStatus.stories

### ApplicationStatus

```html
<div role="status">
  <div
    class="sds-message sds-message--info sds-message--bar sds-message--application-status"
  >
    <span class="sds-message__icon"><!-- icon: InfoIcon --></span>
    <span class="sds-message__message">Message</span>
  </div>
</div>
```

### ApplicationStatusWithHeader

```html
<span
  class="sds-screen-reader-only sds-screen-reader-only--focusable sds-header__skip-link"
>
  <a class="sds-typography-link" href="#main">Gå til innhold</a>
</span>
<header class="sds-header">
  <div class="sds-header__content">
    <div class="sds-header__content-left">
      <div class="sds-logo sds-logo--product sds-header__logo">
        <!-- svg -->
        <div><div class="sds-logo__title">Sikt</div></div>
      </div>
    </div>
    <div class="sds-header__content-mid"></div>
  </div>
</header>
<div role="status">
  <div
    class="sds-message sds-message--info sds-message--bar sds-message--application-status"
  >
    <span class="sds-message__icon"><!-- icon: InfoIcon --></span>
    <span class="sds-message__message">Message</span>
  </div>
</div>
```

## ErrorSummary.stories

### ErrorSummary

```html
<div aria-live="polite">
  <div class="sds-message sds-message--critical sds-message--box" tabindex="-1">
    <span class="sds-message__icon"><!-- icon: FailedIcon --></span>
    <span class="sds-message__message">
      Message
      <ul class="sds-list sds-list--unordered">
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#1">Error 1</a>
        </li>
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#2">Error 2</a>
        </li>
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#3">Error 3</a>
        </li>
      </ul>
    </span>
  </div>
</div>
```

### ErrorSummaryWithSubmit

```html
<div aria-live="polite">
  <div
    class="sds-message sds-message--critical sds-message--box"
    tabindex="-1"
    id="id"
  >
    <span class="sds-message__icon"><!-- icon: FailedIcon --></span>
    <span class="sds-message__message">
      Message
      <ul class="sds-list sds-list--unordered">
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#1">Error 1</a>
        </li>
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#2">Error 2</a>
        </li>
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#3">Error 3</a>
        </li>
      </ul>
    </span>
  </div>
</div>
<button>Submit with error</button>
```

## GuidePanel.stories

### GuidePanel

```html
<div>
  <div class="sds-message sds-message--info sds-message--box">
    <span class="sds-message__icon"><!-- icon: InfoIcon --></span>
    <span class="sds-message__message">Message</span>
  </div>
</div>
```
