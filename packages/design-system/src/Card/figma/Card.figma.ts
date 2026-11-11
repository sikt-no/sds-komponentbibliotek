// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26165-1020
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Card/index.ts
// component=Card
import figma from "figma";

const instance = figma.selectedInstance;

const orientation = instance.getEnum("direction", {
  Vertical: "vertical",
  Horizontal: "horizontal",
});

const showImage = instance.getBoolean("showImage");

const showSlotVertical = instance.getBoolean("showSlotVertical");
const slotVertical = instance.getSlot("slotVertical");

const showSlotHorizontal = instance.getBoolean("showSlotHorizontal");
const slotHorizontal = instance.getSlot("slotHorizontal");

export default {
  example: figma.code`
    <Card orientation="${orientation}">
      ${showImage ? figma.code`<Card.Image>{/* image element */}</Card.Image>` : null}
      <Card.Content>
        ${orientation === "vertical" && showSlotVertical ? figma.code`${slotVertical}` : null}
        ${orientation === "horizontal" && showSlotHorizontal ? figma.code`${slotHorizontal}` : null}
      </Card.Content>
    </Card>
  `,
  imports: ['import { Card } from "@sikt/sd3-design-system";'],
  id: "card",
  metadata: {
    nestable: true,
  },
};
