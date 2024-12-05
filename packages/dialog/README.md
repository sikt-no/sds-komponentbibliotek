# `@sikt/sds-dialog`

## Consume

```sh
npm i -s @sikt/sds-dialog
```

### React

```js
import { useState } from "react";
import { Dialog } from "@sikt/sds-dialog";
import "@sikt/sds-dialog/dist/index.css";

export const DialogExample = ({ children }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>Open dialog</button>
			<Dialog
				heading="An example Dialog"
				subheading="This components uses the native HTML dialog element!"
				footer={<button type="button" onClick={() => setOpen(false)}>Close dialog</button> }
				open={open}
				onClose={() => setOpen(false)}
				closeButtonLabel="Close dialog"
				dismissable
			>
				<p>Your dialog content will go here.</p>
			</Dialog>
		</>
	)
}
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-dialog");
```

Create custom markup:

```html
<dialog
  class="sds-dialog sds-dialog--scrollable"
  aria-labelledby="dialog-heading"
  aria-describedby="dialog-content"
  aria-label="My dialog component"
  ref="{dialogRef}"
>
  <header className="sds-dialog__header">
    <div
      id="{headingId}"
      data-testid="headings"
      className="sds-dialog__heading"
    >
      <h2
        class="sds-typography-heading sds-typography-heading--medium"
        id="dialog-heading"
      >
        An example Dialog
      </h2>
      <p
        class="sds-typography-body sds-typography-body--regular sds-typography-paragraph--color-primary"
      >
        This components uses the native HTML dialog element!
      </p>
    </div>

    <button
      class="sds-button sds-button--transparent sds-modal__close-button"
      type="button"
    >
      <span class="sds-button__label"></span>
      <span class="sds-button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          class="sds-icon"
          aria-hidden="true"
        >
          <path
            d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
          />
        </svg>
      </span>
    </button>
  </header>
  <div className="sds-dialog__content-wrapper">
    <div id="dialog-content" className="sds-dialog__content">
      <p>Your dialog content goes here.</p>
    </div>
    <div className="sds-dialog__footer">
      <!-- Your footer content, if needed, goes here. -->
    </div>
  </div>
</dialog>
```
