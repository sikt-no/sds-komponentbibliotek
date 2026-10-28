// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26011-189
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Footer/index.ts
// component=Footer
import figma from "figma";

const instance = figma.selectedInstance;

const showSlotCenter = instance.getBoolean("showSlotCenter");
const slotCenter = instance.getSlot("slotCenter");
const slotCenterItems = slotCenter?.connectedInstances.map(
  (item) => item.executeTemplate().example,
);

const showSlotTopRight = instance.getBoolean("showSlotTopRight");
const slotTopRight = instance.getSlot("slotTopRight");
const slotTopRightItems = slotTopRight?.connectedInstances.map(
  (item) => item.executeTemplate().example,
);

export default {
  example: figma.code`
    <Footer>
        <Footer.Link href="//sikt.no">
            <Footer.Logo />
        </Footer.Link>
        ${showSlotCenter ? figma.code`${slotCenterItems}` : null}
        ${showSlotTopRight ? figma.code`${slotTopRightItems}` : null}
    </Footer>
  `,
  imports: ['import { Footer } from "@sikt/sd3-design-system";'],
  id: "footer",
  metadata: {
    nestable: true,
  },
};
