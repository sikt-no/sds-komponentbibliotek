// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26055-2910
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Header/index.ts
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
const showIconLeft = figma.properties.boolean("showIconLeft");
const showIconRight = figma.properties.boolean("showIconRight");

const iconLeftInstance = figma.properties.instance("iconLeft");
const iconRightInstance = figma.properties.instance("iconRight");

const leftIcon = showIconLeft
  ? figma.code`
      <Button.Icon>${iconLeftInstance}</Button.Icon>`
  : "";
const rightIcon = showIconRight
  ? figma.code`
      <Button.Icon>${iconRightInstance}</Button.Icon>`
  : "";

export default {
  id: "Button",
  imports: [`import { Button } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Button${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("size", size)}>${leftIcon}
      ${label}${rightIcon}
    </Button>`,
  metadata: {
    nestable: true,
  },
};
