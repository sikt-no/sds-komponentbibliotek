# @sikt/sds-section — HTML snippets

Rendered HTML for every Storybook story in `packages/section`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-section/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/section.md`) to pick up the visual styles for these classes.

## Section.stories

### Default

```html
<section class="sds-section" aria-labelledby="REPLACE_ME_0">
  <header class="sds-section__header">
    <h2
      id="REPLACE_ME_0"
      class="sds-section__heading sds-typography-editorial-headline--s"
    >
      Header
    </h2>
  </header>
  <div class="sds-section__content">Section content</div>
</section>
```

### WithCallToAction

```html
<section class="sds-section" aria-labelledby="REPLACE_ME_0">
  <header class="sds-section__header">
    <h2
      id="REPLACE_ME_0"
      class="sds-section__heading sds-typography-editorial-headline--s"
    >
      Header
    </h2>
    <div class="sds-section__cta">
      <a class="sds-button-link sds-button sds-button--subtle" href="#">
        <span class="sds-button__label">Action</span>
        <span class="sds-button__icon sds-button__icon--right">
          <!-- icon: NavigateToNextAltIcon -->
        </span>
      </a>
    </div>
  </header>
</section>
```
