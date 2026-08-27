# @sikt/sds-card — HTML snippets

Rendered HTML for every Storybook story in `packages/card`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-card/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/card.md`) to pick up the visual styles for these classes.

## Card.stories

### Default

```html
<section
  class="sds-card"
  aria-labelledby="REPLACE_ME_0"
  style="max-width: 500px"
>
  <div class="sds-card__image">
    <picture>
      <source srcset="data:image/png;base64,..." type="image/avif" />
      <source srcset="data:image/png;base64,..." type="image/webp" />
      <img src="data:image/png;base64,..." alt="Placeholder" />
    </picture>
  </div>
  <div class="sds-card__content">
    <span class="sds-typography-overline">overline</span>
    <h3 id="REPLACE_ME_0" class="sds-typography-editorial-headline--xs">
      Heading
    </h3>
    <span class="sds-typography-body--xl">Lead</span>
    <div class="sds-typography-body">Text</div>
    <div class="sds-card__cta">
      <a class="sds-button-link sds-button sds-button--subtle" href="#">
        <span class="sds-button__label">Action</span>
        <span class="sds-button__icon sds-button__icon--right">
          <!-- icon: NavigateToNextAltIcon -->
        </span>
      </a>
    </div>
  </div>
</section>
```
