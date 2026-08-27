# @sikt/sds-list — HTML snippets

Rendered HTML for every Storybook story in `packages/list`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-list/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/list.md`) to pick up the visual styles for these classes.

## DescriptionList.stories

### List

```html
<dl class="sds-description-list">
  <dt class="sds-description-list__term">First Term</dt>
  <dd class="sds-description-list__details">Description of the first term</dd>
  <dt class="sds-description-list__term">Second term</dt>
  <dd class="sds-description-list__details">Description of the second term</dd>
</dl>
```

## OrderedList.stories

### List

```html
<ol class="sds-list sds-list--ordered">
  <li class="sds-list__item">First Item</li>
  <li class="sds-list__item">Second Item</li>
  <li class="sds-list__item">Third Item</li>
</ol>
```

### Nested

```html
<ol class="sds-list sds-list--ordered">
  <li class="sds-list__item">First Item</li>
  <li class="sds-list__item">
    Second Item
    <ol class="sds-list sds-list--ordered">
      <li class="sds-list__item">First Sub Item</li>
      <li class="sds-list__item">Second Sub Item</li>
    </ol>
  </li>
  <li class="sds-list__item">Third Item</li>
</ol>
```

## UnorderedList.stories

### List

```html
<ul class="sds-list sds-list--unordered">
  <li class="sds-list__item">First Item</li>
  <li class="sds-list__item">Second Item</li>
  <li class="sds-list__item">Third Item</li>
</ul>
```

### Nested

```html
<ul class="sds-list sds-list--unordered">
  <li class="sds-list__item">First Item</li>
  <li class="sds-list__item">
    Second Item
    <ul class="sds-list sds-list--unordered">
      <li class="sds-list__item">First Sub Item</li>
      <li class="sds-list__item">Second Sub Item</li>
    </ul>
  </li>
  <li class="sds-list__item">Third Item</li>
</ul>
```
