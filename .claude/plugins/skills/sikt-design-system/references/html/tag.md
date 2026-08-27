# @sikt/sds-tag — HTML snippets

Rendered HTML for every Storybook story in `packages/tag`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-tag/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/tag.md`) to pick up the visual styles for these classes.

## TagCategory.stories

### Default

```html
<span class="sds-tag sds-tag--category sds-tag--category-1">
  <span class="sds-tag__label">Category</span>
</span>
```

### IconLeft

```html
<span class="sds-tag sds-tag--category sds-tag--category-1">
  <span class="sds-tag__icon"><!-- icon: InfoIcon --></span>
  <span class="sds-tag__label">Category</span>
</span>
```

## TagStatus.stories

### AllVariantsDefault

```html
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
  <span
    class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-subtle"
  >
    <span class="sds-tag__label">brand</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-neutral sds-tag--visibility-subtle"
  >
    <span class="sds-tag__label">neutral</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-info sds-tag--visibility-subtle"
  >
    <span class="sds-tag__icon"><!-- icon: InfoIcon --></span>
    <span class="sds-tag__label">info</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-warning sds-tag--visibility-subtle"
  >
    <span class="sds-tag__icon"><!-- icon: AlertIcon --></span>
    <span class="sds-tag__label">warning</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-success sds-tag--visibility-subtle"
  >
    <span class="sds-tag__icon"><!-- icon: SuccessIcon --></span>
    <span class="sds-tag__label">success</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-critical sds-tag--visibility-subtle"
  >
    <span class="sds-tag__icon"><!-- icon: FailedIcon --></span>
    <span class="sds-tag__label">critical</span>
  </span>
</div>
```

### AllVariantsStrongVisibility

```html
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
  <span
    class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-strong"
  >
    <span class="sds-tag__label">brand</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-neutral sds-tag--visibility-strong"
  >
    <span class="sds-tag__label">neutral</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-info sds-tag--visibility-strong"
  >
    <span class="sds-tag__icon"><!-- icon: InfoIcon --></span>
    <span class="sds-tag__label">info</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-warning sds-tag--visibility-strong"
  >
    <span class="sds-tag__icon"><!-- icon: AlertIcon --></span>
    <span class="sds-tag__label">warning</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-success sds-tag--visibility-strong"
  >
    <span class="sds-tag__icon"><!-- icon: SuccessIcon --></span>
    <span class="sds-tag__label">success</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-critical sds-tag--visibility-strong"
  >
    <span class="sds-tag__icon"><!-- icon: FailedIcon --></span>
    <span class="sds-tag__label">critical</span>
  </span>
</div>
```

### CustomIconsForBrandAndNeutral

```html
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
  <span
    class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-subtle"
  >
    <span class="sds-tag__icon"><!-- icon: BookIcon --></span>
    <span class="sds-tag__label">brand with icon</span>
  </span>
  <span
    class="sds-tag sds-tag--status sds-tag--status-neutral sds-tag--visibility-subtle"
  >
    <span class="sds-tag__icon"><!-- icon: UserProfileIcon --></span>
    <span class="sds-tag__label">neutral with icon</span>
  </span>
</div>
```

### Default

```html
<span
  class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-subtle"
>
  <span class="sds-tag__label">Status</span>
</span>
```

### IconLeft

```html
<span
  class="sds-tag sds-tag--status sds-tag--status-brand sds-tag--visibility-subtle"
>
  <span class="sds-tag__icon"><!-- icon: InfoIcon --></span>
  <span class="sds-tag__label">Status</span>
</span>
```
