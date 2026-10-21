// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25870-6071
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Button/index.ts
// component=Button

import figma from "figma";

const variant = figma.properties.enum("variant", {
  Primary: "primary",
  "Primary-subtle": "primary-subtle",
  Secondary: "secondary",
  Tertiary: "tertiary",
});
const size = figma.properties.enum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});
const label = figma.properties.string("label");
const icon = figma.properties.instance("icon");

export default {
  id: "Button",
  imports: [`import { Button } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Button${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("size", size)} aria-label="<must be filled in by consumer>">
        <Button.Icon>${icon}</Button.Icon>
    </Button>`,
  metadata: {
    nestable: true,
  },
};
