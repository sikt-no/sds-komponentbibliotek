// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25912-3543
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Chip/index.ts
// component=FilterChip
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});
const pressed = instance.getEnum("selected", {
  True: true,
  False: false,
});
const label = instance.getString("labelText");

export default {
  id: "FilterChip",
  imports: [`import { FilterChip } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <FilterChip${figma.helpers.react.renderProp("size", size)}${pressed ? " pressed" : ""}>${label}</FilterChip>`,
  metadata: {
    nestable: true,
  },
};
