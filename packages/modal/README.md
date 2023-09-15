# `@sikt/sds-modal`

## Consume

```sh
npm i -s @sikt/sds-modal
```

### React

The component requires the following props:

- `open`: This prop controls the visibility of the component. It determines whether the component is currently displayed or hidden.
- `onClose`: This prop is used to handle the event when the component needs to be closed. It specifies the function that should be executed when the user interacts with the close functionality of the component.
- `heading`: This prop is required to provide a heading for the component.
- `footer`: buttons in modal footer

```js
import { Modal } from "@sikt/sds-modal";
import "@sikt/sds-modal/dist/index.css";

<Modal
  open={true}
  onClose={handleClose}
  heading={headingText}
  ariaHideApp={false}
  footer={}
>
  <p>Modal Content</p>
</Modal>;
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-modal");
```
