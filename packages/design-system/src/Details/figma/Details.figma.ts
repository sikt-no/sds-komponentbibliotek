// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27292-17134
// component=Details

import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});

const isOpen = instance.getEnum("isOpen", {
  True: true,
  False: false,
});
const labelText = instance.getString("labelText");

const content =
  instance.children[0]?.type === "TEXT"
    ? instance.children[0].textContent
    : "Revealed content";

export default {
  id: "Details",
  imports: [`import { Details } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Details${figma.helpers.react.renderProp("size", size)}${figma.helpers.react.renderProp("open", isOpen)}>
      <Details.Summary>${labelText}</Details.Summary>
      <Details.Content>${content}</Details.Content>
    </Details>`,
  metadata: {
    nestable: true,
  },
};
