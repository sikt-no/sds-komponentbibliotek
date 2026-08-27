# @sikt/sds-footer — HTML snippets

Rendered HTML for every Storybook story in `packages/footer`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-footer/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/footer.md`) to pick up the visual styles for these classes.

## Footer.stories

### Default

```html
<footer class="sds-footer">
  <div class="sds-footer__content">
    <div>
      <a class="sds-typography-link sds-footer__logo-link" href="//sikt.no">
        <div class="sds-logo sds-logo--secondary">
          <!-- svg -->
          <div>
            <div class="sds-logo__title">Sikt</div>
            <div class="sds-logo__subtitle">
              Kunnskapssektorens
              <br />
              tjenesteleverandør
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</footer>
```

### WithContent

```html
<footer class="sds-footer">
  <div class="sds-footer__content">
    <div>
      <a class="sds-typography-link sds-footer__logo-link" href="//sikt.no">
        <div class="sds-logo sds-logo--secondary">
          <!-- svg -->
          <div>
            <div class="sds-logo__title">Sikt</div>
            <div class="sds-logo__subtitle">
              Kunnskapssektorens
              <br />
              tjenesteleverandør
            </div>
          </div>
        </div>
      </a>
    </div>
    <div>
      <h3
        class="sds-typography-editorial-headline sds-typography-editorial-headline--xxs"
      >
        Header
      </h3>
      <ul class="sds-list sds-list--unordered">
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#link">Link</a>
        </li>
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#link">Link</a>
        </li>
        <li class="sds-list__item">
          <a class="sds-typography-link" href="#link">Link</a>
        </li>
      </ul>
    </div>
    <div>
      <button class="sds-button sds-button--subtle" type="button">
        <span class="sds-button__label">Button</span>
      </button>
    </div>
  </div>
</footer>
```
