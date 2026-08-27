# @sikt/sds-details — HTML snippets

Rendered HTML for every Storybook story in `packages/details`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-details/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/details.md`) to pick up the visual styles for these classes.

## Details.stories

### Accordion

```html
<div data-testid="test">
  <details class="sds-details sds-details--large" name="id">
    <summary class="sds-details__summary">
      <span class="sds-details__icon"><!-- icon: ExpandShowAltIcon --></span>
      <h3
        class="sds-typography-editorial-headline sds-typography-editorial-headline--s"
      >
        First Summary
      </h3>
    </summary>
    <div class="sds-details__content">First Details</div>
  </details>
  <details class="sds-details sds-details--large" name="id">
    <summary class="sds-details__summary">
      <span class="sds-details__icon"><!-- icon: ExpandShowAltIcon --></span>
      <h3
        class="sds-typography-editorial-headline sds-typography-editorial-headline--s"
      >
        Second Summary
      </h3>
    </summary>
    <div class="sds-details__content">Second Details</div>
  </details>
  <details class="sds-details sds-details--large" name="id">
    <summary class="sds-details__summary">
      <span class="sds-details__icon"><!-- icon: ExpandShowAltIcon --></span>
      <h3
        class="sds-typography-editorial-headline sds-typography-editorial-headline--s"
      >
        Third Summary
      </h3>
    </summary>
    <div class="sds-details__content">Third Details</div>
  </details>
</div>
```

### Default

```html
<details class="sds-details sds-details--large">
  <summary class="sds-details__summary">
    <span class="sds-details__icon"><!-- icon: ExpandShowAltIcon --></span>
    Summary
  </summary>
  <div class="sds-details__content">Details</div>
</details>
```
