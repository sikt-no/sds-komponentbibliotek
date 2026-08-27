# @sikt/sds-pagination — HTML snippets

Rendered HTML for every Storybook story in `packages/pagination`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-pagination/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/pagination.md`) to pick up the visual styles for these classes.

## Pagination.stories

### Default

```html
<nav class="sds-pagination" aria-label="Sample pagination">
  <ol class="sds-pagination__list">
    <li class="sds-pagination__list-item">
      <button
        class="sds-pagination__button"
        aria-label="Vis forrige side 0"
        disabled=""
      >
        <!-- icon: MoveToPreviousIcon -->
      </button>
    </li>
    <li class="sds-pagination__list-item">
      <button
        class="sds-pagination__button"
        aria-current="page"
        aria-label="Vis side 1"
        disabled=""
      >
        1
      </button>
    </li>
    <li class="sds-pagination__list-item">
      <button class="sds-pagination__button" aria-label="Vis side 2">2</button>
    </li>
    <li class="sds-pagination__list-item">
      <button class="sds-pagination__button" aria-label="Vis side 3">3</button>
    </li>
    <li class="sds-pagination__list-item">
      <div class="sds-pagination__button--spacer">…</div>
    </li>
    <li class="sds-pagination__list-item">
      <button class="sds-pagination__button" aria-label="Vis side 10">
        10
      </button>
    </li>
    <li class="sds-pagination__list-item">
      <button class="sds-pagination__button" aria-label="Vis neste side 2">
        <!-- icon: MoveToNextIcon -->
      </button>
    </li>
  </ol>
</nav>
```
