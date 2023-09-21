# `@sikt/sds-drawer`

## Consume

```sh
npm i -s @sikt/sds-drawer
```

### React

```js
import { Drawer } from "@sikt/sds-drawer";
```

#### Anatomy

The drawer component is a list that can expand and collapse. There's a button in the header to open and close the drawer. When the drawer is open, it has a overlay that makes the rest of the content look dim, and you can close it by clicking on the overlay or pressing the escape key.

`<DrawerHeader/>` is the header section.

`<DrawerContent />`contains the main content.

`<DrawerItem />` is a container for individual items.

`<DrawerItemGroup>` is a container to group related drawer items.

`<DrawerButton />` and `<DrawerButtonLink/>` are both actionable items. However, the latter is used for links.

```html
<Drawer>
  <DrawerHeader />
  <DrawerContent>
    <DrawerItemGroup>
      <DrawerItem>
        <DrawerItemButton />
      </DrawerItem>
    </DrawerItemGroup>
  </DrawerContent>
</Drawer>
```

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-drawer");
```
