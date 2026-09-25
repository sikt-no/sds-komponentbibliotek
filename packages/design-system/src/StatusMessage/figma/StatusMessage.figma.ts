// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25912-1616
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/StatusMessage/index.ts
// component=StatusMessage

import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", {
  Success: "success",
  Failure: "failure",
  Warning: "warning",
  Info: "info",
  Neutral: "neutral",
});
const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});
const label = instance.getString("label");
const text = instance.getString("text");
const showLabel = instance.getBoolean("showLabel");
const showText = instance.getBoolean("showText");
const showSlot = instance.getBoolean("showSlot");
const slot = instance.getSlot("slot");

const titleSnippet = showLabel
  ? figma.code`
      <StatusMessage.Title>${label}</StatusMessage.Title>`
  : "";
const descriptionSnippet = showText
  ? figma.code`
      <StatusMessage.Description>${text}</StatusMessage.Description>`
  : "";
const bodySnippet = showSlot
  ? figma.code`
      <StatusMessage.Body>${slot}</StatusMessage.Body>`
  : "";

export default {
  id: "StatusMessage",
  imports: [`import { StatusMessage } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <StatusMessage${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("size", size)}>${titleSnippet}${descriptionSnippet}${bodySnippet}
    </StatusMessage>`,
  metadata: {
    nestable: true,
  },
};
