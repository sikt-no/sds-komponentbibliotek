// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=1095-7969
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Tabs/index.ts
// component=Tabs.Tab
import figma from "figma";

const instance = figma.selectedInstance;

const label = instance.getString("label");
const showIcon = instance.getBoolean("showIcon");
const icon = instance.getInstanceSwap("icon");
const showSlot = instance.getBoolean("showSlot");

export default {
  id: "Tabs.Tab",
  imports: [`import { Tabs } from "@sikt/sd3-design-system";`],
  example: figma.code`
    <Tabs.Tab value="…">
      ${showIcon ? figma.code`<Tabs.Tab.Icon>${icon}</Tabs.Tab.Icon>` : null}
      ${label}
      ${showSlot ? figma.code`<Tabs.Tab.Slot>{/* slot content */}</Tabs.Tab.Slot>` : null}
    </Tabs.Tab>`,
  metadata: {
    nestable: true,
  },
};
