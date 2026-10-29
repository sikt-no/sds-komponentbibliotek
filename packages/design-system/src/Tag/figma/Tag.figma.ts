// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25880-255
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Tag/index.ts
// component=Tag
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
const showLabel = instance.getBoolean("showLabel");

const icon = instance.getInstanceSwap("icon")?.executeTemplate().example;
const showIcon = instance.getBoolean("showIcon");

export default {
  example: figma.code`
    <Tag variant="${variant}" size="${size}" visibility="${visibility}">
      ${showIcon ? figma.code`<Tag.Icon>${icon}</Tag.Icon>` : null}
      ${showLabel ? label : null}
    </Tag>
  `,
  imports: ['import { Tag } from "@sikt/sd3-design-system";'],
  id: "tag",
  metadata: {
    nestable: true,
  },
};
