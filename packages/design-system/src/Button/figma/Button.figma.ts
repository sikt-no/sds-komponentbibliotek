// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26055-2910
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

// Figma has no dedicated iconOnly variant — detect it from an empty label
// combined with exactly one icon shown. Consumers who want icon-only in
// Figma clear the label and enable one of the icon toggles.
const iconCount = (showIconLeft ? 1 : 0) + (showIconRight ? 1 : 0);
const isIconOnly = !label && iconCount === 1;
const soloIcon = showIconLeft ? leftIcon : rightIcon;

export default {
  id: "Button",
  imports: [`import { Button } from "@sikt/sd3-design-system"`],
  example: isIconOnly
    ? figma.code`
    <Button${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("size", size)} iconOnly aria-label="<must be filled in by consumer>">${soloIcon}
    </Button>`
    : figma.code`
    <Button${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("size", size)}>${leftIcon}
      ${label}${rightIcon}
    </Button>`,
  metadata: {
    nestable: true,
  },
};
