// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=34728-2824
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/List/index.ts
// component=List
import figma from "figma";

const instance = figma.selectedInstance;

const slot = instance.getSlot("Slot");
const items = slot?.connectedInstances.map(
  (item) => item.executeTemplate().example,
);
const number = slot?.connectedInstances[0]?.getString("Number");
const component = number ? "Ordered" : "Unordered";

export default {
  example: figma.code`
    <List.${component}>
      ${items}
    </List.${component}>
  `,
  imports: ['import { List } from "@sikt/sd3-design-system";'],
  id: "list",
  metadata: {
    nestable: true,
  },
};
