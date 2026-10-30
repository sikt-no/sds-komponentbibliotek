// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=5320-14700
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Toggle/index.ts
// component=Toggle
import figma from "figma";

const instance = figma.selectedInstance;

const selected = instance.getBoolean("selected");
const showLabelLeft = instance.getBoolean("showLabelLeft");
const showLabelRight = instance.getBoolean("showLabelRight");
const labelLeft = instance.getString("labelLeft");
const labelRight = instance.getString("labelRight");

const checked = figma.helpers.react.renderProp("defaultChecked", selected);

const example = showLabelLeft
  ? figma.code`
      <Toggle${checked}>${labelLeft}</Toggle>`
  : showLabelRight
    ? figma.code`
      <Toggle labelPosition="right"${checked}>${labelRight}</Toggle>`
    : figma.code`
      <Toggle${checked} />`;

export default {
  id: "Toggle",
  imports: [`import { Toggle } from "@sikt/sd3-design-system"`],
  example,
  metadata: {
    nestable: true,
  },
};
