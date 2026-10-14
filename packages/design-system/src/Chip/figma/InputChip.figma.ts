// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25880-755
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Chip/index.ts
// component=InputChip
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});
const label = instance.getString("labelText");

export default {
  id: "InputChip",
  imports: [`import { InputChip } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <InputChip${figma.helpers.react.renderProp("size", size)}>${label}</InputChip>`,
  metadata: {
    nestable: true,
  },
};
