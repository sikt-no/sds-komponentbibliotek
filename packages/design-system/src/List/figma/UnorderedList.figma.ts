// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=34728-1048
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/List/index.ts
// component=List
import figma from "figma";

//const instance = figma.selectedInstance;

export default {
  example: figma.code`
    <List.Unordered>
        <List.Item></List.Item>
    </List.Unordered>
  `,
  imports: ['import { List } from "@sikt/sd3-design-system";'],
  id: "list",
  metadata: {
    nestable: true,
  },
};
