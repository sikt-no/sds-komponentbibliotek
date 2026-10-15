// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26011-189
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Footer/index.ts
// component=Footer
import figma from "figma";

const instance = figma.selectedInstance;

const showSlotCenter = instance.getBoolean("showSlotCenter");
const slotCenter = instance.getSlot("slotCenter");

const showSlotTopRight = instance.getBoolean("showSlotTopRight");
const slotTopRight = instance.getSlot("slotTopRight");

export default {
  example: figma.code`
    <Footer>
        <Footer.Link>
            <Footer.Logo />
        </Footer.Link>
        ${showSlotCenter ? figma.code`${slotCenter}` : null}
        ${showSlotTopRight ? figma.code`${slotTopRight}` : null}
    </Footer>
  `,
  imports: ['import { Footer } from "@sikt/sd3-design-system";'],
  id: "footer",
  metadata: {
    nestable: true,
  },
};
