# @sikt/sds-icons — HTML snippets

Rendered HTML for every Storybook story in `packages/icons`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-icons/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/icons.md`) to pick up the visual styles for these classes.

## Icon.stories

### ArrowRight

```html
<!-- svg -->
```

### LinkedInLogo

```html
<a href="#linkedin">
  Linkedin
  <!-- svg -->
</a>
```

### Spinner

```html
<!-- svg -->
```
