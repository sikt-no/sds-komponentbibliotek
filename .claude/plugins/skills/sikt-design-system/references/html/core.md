# @sikt/sds-core — HTML snippets

Rendered HTML for every Storybook story in `packages/core`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-core/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/core.md`) to pick up the visual styles for these classes.

## Figure.stories

### AspectRatio16x9

```html
<figure class="sds-figure" style="max-width: 300px">
  <img
    src="data:image/jpeg;base64,..."
    alt="Sikt-stol"
    class="sds-figure__figure sds-figure__figure--ratio-16x9"
  />
  <figcaption class="sds-figure__caption">
    A chair from Sikt&#x27;s office
  </figcaption>
</figure>
```

### Default

```html
<figure class="sds-figure" style="max-width: 300px">
  <img
    src="data:image/jpeg;base64,..."
    alt="Sikt-stol"
    class="sds-figure__figure"
  />
  <figcaption class="sds-figure__caption">
    A chair from Sikt&#x27;s office
  </figcaption>
</figure>
```

## Heading.stories

### Heading

```html
<h1
  class="sds-typography-editorial-headline sds-typography-editorial-headline--m"
>
  Heading
</h1>
```

## Link.stories

### Default

```html
<a class="sds-typography-link" href="#">Link</a>
```

### External

```html
<a class="sds-typography-link" href="#" target="_blank">Link</a>
```

### ExternalMultiline

```html
<a class="sds-typography-link sds-typography-link--external" href="#">
  The market fit team has been doing
</a>
```

### Mail

```html
<a class="sds-typography-link" href="mailto:#">Link</a>
```

### Navigation

```html
<a class="sds-typography-link sds-typography-link--navigation" href="#">Link</a>
```

### Phone

```html
<a class="sds-typography-link" href="tel:#">Link</a>
```

### WithIcon

```html
<a class="sds-typography-link" href="#">
  Link
  <span class="sds-typography-link__icon sds-typography-link__icon--right">
    <!-- icon: NavigateToNextIcon -->
  </span>
</a>
```

## Paragraph.stories

### AsHeading3

```html
<h3 class="sds-typography-body sds-typography--color-primary">Paragraph</h3>
```

### AsSpan

```html
<span class="sds-typography-body sds-typography--color-primary">Paragraph</span>
```

### ColorCritical

```html
<p class="sds-typography-body sds-typography--color-critical">Paragraph</p>
```

### ColorSecondary

```html
<p class="sds-typography-body sds-typography--color-secondary">Paragraph</p>
```

### Regular

```html
<p class="sds-typography-body sds-typography--color-primary">Paragraph</p>
```

## ScreenReaderOnly.stories

### Focusable

```html
<span class="sds-screen-reader-only sds-screen-reader-only--focusable">
  <a href="#abc" class="sds-typography-link">Skip Link</a>
</span>
```
