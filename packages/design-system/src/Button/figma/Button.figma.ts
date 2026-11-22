// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26055-2910
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Header/index.ts
// component=Button

import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", {
  Primary: "primary",
  "Primary-subtle": "primary-subtle",
  Secondary: "secondary",
  Tertiary: "tertiary",
});
const size = instance.getEnum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});
const label = instance.getString("label");
const showIconLeft = instance.getBoolean("showIconLeft");
const showIconRight = instance.getBoolean("showIconRight");

const iconLeftInstance = instance
  .getInstanceSwap("iconLeft")
  ?.executeTemplate().example;
const iconRightInstance = instance
  .getInstanceSwap("iconRight")
  ?.executeTemplate().example;

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
    <Button variant="${variant}" size="${size}">
      ${leftIcon}
      ${label}
      ${rightIcon}
    </Button>`,
  metadata: {
    nestable: true,
  },
};
