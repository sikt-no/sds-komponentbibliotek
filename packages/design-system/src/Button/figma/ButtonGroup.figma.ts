// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25924-3184
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Button/index.ts
// component=Button

import figma from "figma";

const instance = figma.selectedInstance;

const direction = instance.getEnum("direction", {
  Horizontal: "horizontal",
  Vertical: "vertical",
});

const children = instance.children.map(
  (item) => item.type === "INSTANCE" && item.executeTemplate().example,
);

export default {
  id: "Button",
  imports: [`import { Button } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Button.Group direction="${direction}">
      ${children}
    </Button.Group>`,
  metadata: {
    nestable: true,
  },
};
