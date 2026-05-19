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

export const DialogExample = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Open dialog
      </button>
      <Dialog
        heading="An example Dialog"
        subheading="This components uses the native HTML dialog element!"
        footer={<button onClick={() => setOpen(false)}>Close dialog</button>}
        open={open}
        onClose={() => setOpen(false)}
        closeButtonLabel="Close dialog"
      >
        <p>Your dialog content will go here.</p>
      </Dialog>
    </>
  );
};
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-dialog");
```

Create custom markup:

```html
<!-- see html example in Storybook -->
```
