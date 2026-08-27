# @sikt/sds-breadcrumbs — HTML snippets

Rendered HTML for every Storybook story in `packages/breadcrumbs`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-breadcrumbs/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/breadcrumbs.md`) to pick up the visual styles for these classes.

## Breadcrumbs.stories

### Default

```html
<nav class="sds-breadcrumbs" aria-label="Navigation path">
  <ol class="sds-breadcrumbs__list">
    <li class="sds-breadcrumbs-item">
      <a class="sds-typography-link" href="/">Level 1</a>
    </li>
    <li class="sds-breadcrumbs-item">
      <a class="sds-typography-link" href="/">Level 2</a>
    </li>
    <li class="sds-breadcrumbs-item">Current page</li>
  </ol>
</nav>
```

### WithIcon

```html
<nav class="sds-breadcrumbs" aria-label="Navigation path">
  <ol class="sds-breadcrumbs__list">
    <li class="sds-breadcrumbs-item">
      <a class="sds-typography-link sds-typography-link--icon-left" href="/">
        Home
        <span class="sds-typography-link__icon sds-typography-link__icon--left">
          <!-- icon: HomeLandingIcon -->
        </span>
      </a>
    </li>
    <li class="sds-breadcrumbs-item">
      <a class="sds-typography-link" href="/">Level 2</a>
    </li>
    <li class="sds-breadcrumbs-item">Current page</li>
  </ol>
</nav>
```
