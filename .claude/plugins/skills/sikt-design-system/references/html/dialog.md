# @sikt/sds-dialog — HTML snippets

Rendered HTML for every Storybook story in `packages/dialog`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-dialog/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/dialog.md`) to pick up the visual styles for these classes.

## Dialog.stories

### Default

```html
<button
  class="sds-button sds-button--strong sds-dialog__trigger"
  type="button"
  aria-controls="REPLACE_ME_0"
>
  <span class="sds-button__label">Open dialog</span>
</button>
<dialog
  class="sds-dialog"
  aria-label="Newsletter Subscription Modal"
  id="REPLACE_ME_0"
>
  <div>
    <div class="sds-dialog__header">
      <div
        id="REPLACE_ME_1-heading"
        data-testid="headings"
        class="sds-dialog__heading"
      >
        <h1
          class="sds-typography-editorial-headline sds-typography-editorial-headline--s"
        >
          Welcome to Our Newsletter
        </h1>
        <p class="sds-typography-body sds-typography--color-primary">
          Stay Informed and Inspired
        </p>
      </div>
      <button
        class="sds-button sds-button--transparent sds-dialog__close-button"
        type="button"
      >
        <span class="sds-button__label">Close dialog</span>
        <span class="sds-button__icon sds-button__icon--right"
          ><!-- icon: CancelIcon --></span
        >
      </button>
    </div>
    <div class="sds-dialog__content-wrapper">
      <div
        id="REPLACE_ME_1-content"
        data-testid="content"
        class="sds-typography-body--xl sds-dialog__content"
      >
        <p>
          Sign up for our newsletter to receive the latest updates, articles,
          and insights from our experts. Stay connected with the trends shaping
          your industry and gain valuable knowledge to enhance your skills and
          career.
        </p>
      </div>
      <div class="sds-dialog__footer">
        <button class="sds-button sds-button--transparent" type="button">
          <span class="sds-button__label">Show short content</span>
        </button>
        <button class="sds-button sds-button--subtle" type="button">
          <span class="sds-button__label">Change content length</span>
        </button>
        <button class="sds-button sds-button--strong" type="button">
          <span class="sds-button__label">Close</span>
        </button>
      </div>
    </div>
  </div>
</dialog>
```

### Drawer

```html
<button
  class="sds-button sds-button--strong sds-dialog__trigger"
  type="button"
  aria-controls="REPLACE_ME_0"
>
  <span class="sds-button__label">Open drawer</span>
</button>
<dialog
  class="sds-dialog sds-dialog--drawer sds-dialog--drawer-left"
  aria-label="Filter page list content"
  id="REPLACE_ME_0"
  style="width: 400px"
>
  <div>
    <div class="sds-dialog__header">
      <div
        id="REPLACE_ME_1-heading"
        data-testid="headings"
        class="sds-dialog__heading"
      >
        <h1
          class="sds-typography-editorial-headline sds-typography-editorial-headline--s"
        >
          Filter
        </h1>
      </div>
      <button
        class="sds-button sds-button--transparent sds-dialog__close-button"
        aria-label="Close drawer"
        type="button"
      >
        <span class="sds-button__icon sds-button__icon--only"
          ><!-- icon: CancelIcon --></span
        >
      </button>
    </div>
    <div class="sds-dialog__content-wrapper">
      <div
        id="REPLACE_ME_1-content"
        data-testid="content"
        class="sds-typography-body--xl sds-dialog__content"
      >
        <ul>
          <li>Yes</li>
          <li>No</li>
          <li>Maybe</li>
        </ul>
      </div>
      <div class="sds-dialog__footer">
        <button class="sds-button sds-button--transparent" type="button">
          <span class="sds-button__label">Reset filters</span>
        </button>
        <button class="sds-button sds-button--strong" type="button">
          <span class="sds-button__label">Apply filters</span>
        </button>
      </div>
    </div>
  </div>
</dialog>
```

### NonModal

```html
<button
  class="sds-button sds-button--strong sds-dialog__trigger"
  type="button"
  aria-controls="REPLACE_ME_0"
>
  <span class="sds-button__label">Open dialog</span>
</button>
<dialog
  class="sds-dialog"
  aria-label="Newsletter Subscription Modal"
  id="REPLACE_ME_0"
>
  <div>
    <div class="sds-dialog__header">
      <div
        id="REPLACE_ME_1-heading"
        data-testid="headings"
        class="sds-dialog__heading"
      >
        <h1
          class="sds-typography-editorial-headline sds-typography-editorial-headline--s"
        >
          Welcome to Our Newsletter
        </h1>
        <p class="sds-typography-body sds-typography--color-primary">
          Stay Informed and Inspired
        </p>
      </div>
      <button
        class="sds-button sds-button--transparent sds-dialog__close-button"
        type="button"
      >
        <span class="sds-button__label">Close dialog</span>
        <span class="sds-button__icon sds-button__icon--right"
          ><!-- icon: CancelIcon --></span
        >
      </button>
    </div>
    <div class="sds-dialog__content-wrapper">
      <div
        id="REPLACE_ME_1-content"
        data-testid="content"
        class="sds-typography-body--xl sds-dialog__content"
      >
        <p>
          Sign up for our newsletter to receive the latest updates, articles,
          and insights from our experts. Stay connected with the trends shaping
          your industry and gain valuable knowledge to enhance your skills and
          career.
        </p>
      </div>
      <div class="sds-dialog__footer">
        <button class="sds-button sds-button--transparent" type="button">
          <span class="sds-button__label">Show short content</span>
        </button>
        <button class="sds-button sds-button--subtle" type="button">
          <span class="sds-button__label">Change content length</span>
        </button>
        <button class="sds-button sds-button--strong" type="button">
          <span class="sds-button__label">Close</span>
        </button>
      </div>
    </div>
  </div>
</dialog>
```
