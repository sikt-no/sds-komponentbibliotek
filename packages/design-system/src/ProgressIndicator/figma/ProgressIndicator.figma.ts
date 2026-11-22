// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27019-569
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/ProgressIndicator/index.ts
// component=ProgressIndicator
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
  Expanded: "expanded",
});
const direction = instance.getEnum("direction", {
  Horizontal: "horizontal",
  Vertical: "vertical",
});

const children = instance.children.map(
  (item) => item.type === "INSTANCE" && item.executeTemplate().example,
);

export default {
  example: figma.code`
    <ProgressIndicator aria-label="{/* TODO: must be filled out */}" size="${size}" direction="${direction}">
      ${children}
    </ProgressIndicator>
  `,
  imports: ['import { ProgressIndicator } from "@sikt/sd3-design-system";'],
  id: "progress-indicator",
  metadata: {
    nestable: true,
  },
};
