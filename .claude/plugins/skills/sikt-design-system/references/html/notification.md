# @sikt/sds-notification — HTML snippets

Rendered HTML for every Storybook story in `packages/notification`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-notification/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/notification.md`) to pick up the visual styles for these classes.

## Notification.stories

### Default

```html
<span class="sds-notification sds-notification--info">
  <span class="sds-notification__count">9+</span>
</span>
```

### WithoutCount

```html
<span class="sds-notification sds-notification--info"></span>
```
