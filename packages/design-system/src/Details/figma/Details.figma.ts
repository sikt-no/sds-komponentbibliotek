// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27292-17134
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Details/index.ts
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

const slotText = instance
  .findLayers((node) => node.type === "TEXT", {
    path: ["slot"],
    traverseInstances: true,
  })
  .map((node) => (node.type === "TEXT" ? node.textContent : ""))
  .join(" ");

export default {
  id: "Details",
  imports: [`import { Details } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Details size="${size}" ${figma.helpers.react.renderProp("open", isOpen)}>
      <Details.Summary>${labelText}</Details.Summary>
      <Details.Content>${slotText}</Details.Content>
    </Details>`,
  metadata: {
    nestable: true,
  },
};
