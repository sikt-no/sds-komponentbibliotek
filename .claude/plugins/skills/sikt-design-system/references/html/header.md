# @sikt/sds-header — HTML snippets

Rendered HTML for every Storybook story in `packages/header`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-header/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/header.md`) to pick up the visual styles for these classes.

## Header.stories

### Default

```html
<span
  class="sds-screen-reader-only sds-screen-reader-only--focusable sds-header__skip-link"
>
  <a class="sds-typography-link" href="#main">Gå til innhold</a>
</span>
<header class="sds-header">
  <div class="sds-header__content">
    <div class="sds-header__content-left">
      <a class="sds-typography-link" href="//sikt.no">
        <div class="sds-logo sds-logo--product sds-header__logo">
          <!-- svg -->
          <div><div class="sds-logo__title">Sikt</div></div>
        </div>
      </a>
    </div>
    <div class="sds-header__content-mid"></div>
  </div>
</header>
```

### WithApplicationStatus

```html
<span
  class="sds-screen-reader-only sds-screen-reader-only--focusable sds-header__skip-link"
>
  <a class="sds-typography-link" href="#main">Gå til innhold</a>
</span>
<header class="sds-header">
  <div class="sds-header__content">
    <div class="sds-header__content-left">
      <a class="sds-typography-link" href="//sikt.no">
        <div class="sds-logo sds-logo--product sds-header__logo">
          <!-- svg -->
          <div><div class="sds-logo__title">Sikt</div></div>
        </div>
      </a>
    </div>
    <div class="sds-header__content-mid"></div>
  </div>
</header>
<div role="status">
  <div
    class="sds-message sds-message--warning sds-message--bar sds-message--application-status"
  >
    <span class="sds-message__icon"><!-- icon: AlertIcon --></span>
    <span class="sds-message__message">Status message</span>
  </div>
</div>
```

### WithProductName

```html
<span
  class="sds-screen-reader-only sds-screen-reader-only--focusable sds-header__skip-link"
>
  <a class="sds-typography-link" href="#main">Gå til innhold</a>
</span>
<header class="sds-header">
  <div class="sds-header__content">
    <div class="sds-header__content-left">
      <a class="sds-typography-link" href="//sikt.no">
        <div class="sds-logo sds-logo--product sds-header__logo">
          <!-- svg -->
          <div><div class="sds-logo__title">My product</div></div>
        </div>
      </a>
    </div>
    <div class="sds-header__content-mid"></div>
  </div>
</header>
```

### WithSlots

```html
<span
  class="sds-screen-reader-only sds-screen-reader-only--focusable sds-header__skip-link"
>
  <a class="sds-typography-link" href="#main">Gå til innhold</a>
</span>
<header class="sds-header">
  <div class="sds-header__content">
    <div class="sds-header__content-left">
      <a class="sds-typography-link" href="//sikt.no">
        <div class="sds-logo sds-logo--product sds-header__logo">
          <!-- svg -->
          <div><div class="sds-logo__title">Sikt</div></div>
        </div>
      </a>
      <div class="sds-header__content-left-item"><div>Foo</div></div>
    </div>
    <div class="sds-header__content-mid"><div>Baz</div></div>
    <div class="sds-header__content-right"><div>Bar</div></div>
  </div>
</header>
```
