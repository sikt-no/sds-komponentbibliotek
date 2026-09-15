// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=13122-9882
// component=Button

// TODO: Nested icons inside Button are unresolved. `findInstance("iconLeft").executeTemplate().example`
// only produces a clean `<XxxIcon />` snippet once every icon in `@sikt/sds-icons` has its own
// Code Connect binding. Until then, the interpolated content falls back to Figma's default
// rendering of the swapped instance. Follow-up: set up `packages/icons/figma/icons.figma.batch.{ts,json}`,
// extend `figma.config.json` include globs, and revisit this template afterwards.

import figma from "figma";

const variant = figma.properties.enum("Variant", {
  Primary: "primary",
  "Primary-subtle": "primary-subtle",
  Secondary: "secondary",
  Tertiary: "tertiary",
});
const size = figma.properties.enum("Size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});
const label = figma.properties.string("Label");
const showIconLeft = figma.properties.boolean("showIconLeft");
const showIconRight = figma.properties.boolean("showIconRight");

const selected = figma.selectedInstance;
const iconLeftSnippet = selected
  .findInstance("iconLeft")
  .executeTemplate().example;
const iconRightSnippet = selected
  .findInstance("iconRight")
  .executeTemplate().example;

const leftIcon = showIconLeft
  ? figma.code`
      <Button.Icon>${iconLeftSnippet}</Button.Icon>`
  : "";
const rightIcon = showIconRight
  ? figma.code`
      <Button.Icon>${iconRightSnippet}</Button.Icon>`
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
