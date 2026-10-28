// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27602-2186
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Header/index.ts
// component=Header
import figma from "figma";

const instance = figma.selectedInstance;

const largeSlot = instance.getSlot("largeSlot");
const largeSlotItems = largeSlot?.connectedInstances.map(
  (item) => item.executeTemplate().example,
);
const mediumSlot = instance.getSlot("mediumSlot");
const mediumSlotItems = mediumSlot?.connectedInstances.map(
  (item) => item.executeTemplate().example,
);
const smallSlot = instance.getSlot("smallSlot");
const smallSlotitems = smallSlot?.connectedInstances.map(
  (item) => item.executeTemplate().example,
);

export default {
  example: figma.code`
    <Header>
        <Header.SkipLink href="#main">{/* text content */}</Header.SkipLink>
        <Header.Content>
            <Header.Link href="/">
                <Header.Logo />
            </Header.Link>
            <div>${largeSlotItems}</div>
        </Header.Content>
        <div>${mediumSlotItems}</div>
        <div>${smallSlotitems}</div>
    </Header>
  `,
  imports: ['import { Header } from "@sikt/sd3-design-system";'],
  id: "header",
  metadata: {
    nestable: true,
  },
};
