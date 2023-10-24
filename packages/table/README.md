# `@sikt/sds-table`

## Consume

```sh
npm i -s @sikt/sds-table
```

### React

```js
import { Table } from "@sikt/sds-table";
import "@sikt/sds-table/dist/index.css";

<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Header</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell data-th="Header">Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

**Note:** That you need to add the `data-th` to all cells of the body for the mobile view to work.

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-table");
```

Create custom markup:

```html
<div class="sds-table"></div>
```
