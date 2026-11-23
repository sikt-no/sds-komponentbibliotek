// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26637-5431
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Tabs/index.ts
// component=Tabs
import figma from "figma";

const instance = figma.selectedInstance;

const tab1 = instance.findInstance("Tab 1")?.executeTemplate().example;
const tab2 = instance.findInstance("Tab 2")?.executeTemplate().example;
const tab3 = instance.findInstance("Tab 3")?.executeTemplate().example;
const extraTabs = instance
  .getSlot("slot")
  ?.connectedInstances.map((item) => item.executeTemplate().example);

export default {
  id: "Tabs",
  imports: [`import { Tabs } from "@sikt/sd3-design-system";`],
  example: figma.code`
    <Tabs defaultValue="…">
      <Tabs.List aria-label="…">
        ${tab1}
        ${tab2}
        ${tab3}
        ${extraTabs}
      </Tabs.List>
      <Tabs.Panel value="…">{/* panel content */}</Tabs.Panel>
    </Tabs>`,
  metadata: {
    nestable: true,
  },
};
