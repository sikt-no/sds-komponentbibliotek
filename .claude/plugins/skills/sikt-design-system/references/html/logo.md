# @sikt/sds-logo — HTML snippets

Rendered HTML for every Storybook story in `packages/logo`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-logo/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/logo.md`) to pick up the visual styles for these classes.

## Logo.stories

### Default

```html
<div class="sds-logo sds-logo--primary">
  <!-- svg -->
  <div><div class="sds-logo__title">Sikt</div></div>
</div>
```

### Product

```html
<div class="sds-logo sds-logo--product">
  <!-- svg -->
  <div><div class="sds-logo__title">My product</div></div>
</div>
```
