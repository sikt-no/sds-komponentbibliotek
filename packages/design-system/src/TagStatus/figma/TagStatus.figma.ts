// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25880-206
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/TagStatus/index.ts
// component=TagStatus
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});

const variant = instance.getEnum("variant", {
  Success: "success",
  Info: "info",
  Warning: "warning",
  Critical: "critical",
});

const visibility = instance.getEnum("visibility", {
  Strong: "strong",
  Subtle: "subtle",
});

const label = instance.getString("label");

export default {
  example: figma.code`
    <TagStatus variant="${variant}" size="${size}" visibility="${visibility}">${label}</TagStatus>
  `,
  imports: ['import { TagStatus } from "@sikt/sd3-design-system";'],
  id: "tag-status",
  metadata: {
    nestable: true,
  },
};
