// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25878-88
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Badge/index.ts
// component=Badge
import figma from "figma";

const instance = figma.selectedInstance;

const number = instance.getString("number");

const isDot = instance.getBoolean("isDot");

const variant = instance.getEnum("variant", {
  Brand: "brand",
  Neutral: "neutral",
  Info: "info",
  Warning: "warning",
  Critical: "critical",
  Success: "success",
});

const size = instance.getEnum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});

export default {
  example: figma.code`
    ${isDot ? figma.code`<Badge variant="${variant}" size="${size}" />` : figma.code`<Badge variant="${variant}" size="${size}">${number}</Badge>`}
  `,
  imports: ['import { Badge } from "@sikt/sd3-design-system";'],
  id: "badge",
  metadata: {
    nestable: true,
  },
};
