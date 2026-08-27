# @sikt/sds-chip — HTML snippets

Rendered HTML for every Storybook story in `packages/chip`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-chip/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/chip.md`) to pick up the visual styles for these classes.

## ChipButton.stories

### Default

```html
<button class="sds-chip sds-chip--checked">
  <span class="sds-chip__label">Button</span>
  <span class="sds-chip__icon"><!-- icon: AddAltIcon --></span>
</button>
```

## ChipToggle.stories

### Default

```html
<button class="sds-chip sds-chip--toggle" aria-pressed="false">
  <span class="sds-chip__label">Toggle</span>
  <span class="sds-chip__icon"><!-- icon: AddAltIcon --></span>
</button>
```
