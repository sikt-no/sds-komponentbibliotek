# @sikt/sds-popover — HTML snippets

Rendered HTML for every Storybook story in `packages/popover`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-popover/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/popover.md`) to pick up the visual styles for these classes.

## Popover.stories

### Abbreviation

```html
<span>
  <button
    class="sds-popover"
    popovertarget="REPLACE_ME_0"
    style="anchor-name: --popover-anchor-REPLACE_ME_0"
  >
    <abbr>SDS</abbr>
  </button>
  <span
    class="sds-popover__target sds-popover__target--anchor sds-typography-body"
    id="REPLACE_ME_0"
    popover="auto"
    style="position-anchor: --popover-anchor-REPLACE_ME_0; top: anchor(bottom); left: anchor(left)"
  >
    Sikt Design System
  </span>
</span>
```

### Default

```html
<span>
  <button
    class="sds-popover"
    popovertarget="REPLACE_ME_0"
    style="anchor-name: --popover-anchor-REPLACE_ME_0"
  >
    Popover
  </button>
  <span
    class="sds-popover__target sds-popover__target--anchor sds-typography-body"
    id="REPLACE_ME_0"
    popover="auto"
    style="position-anchor: --popover-anchor-REPLACE_ME_0; top: anchor(bottom); left: anchor(left)"
  >
    Target
  </span>
</span>
```

### Tooltip

```html
<span>
  <button
    class="sds-popover"
    popovertarget="REPLACE_ME_0"
    style="anchor-name: --popover-anchor-REPLACE_ME_0"
  >
    Tooltip
  </button>
  <span
    class="sds-popover__target sds-popover__target--anchor sds-typography-body"
    id="REPLACE_ME_0"
    popover="auto"
    style="position-anchor: --popover-anchor-REPLACE_ME_0; bottom: anchor(top); left: anchor(left)"
  >
    Target
  </span>
</span>
```
