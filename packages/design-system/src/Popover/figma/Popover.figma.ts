// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26709-7900
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Popover/index.ts
// component=Popover

import figma from "figma";

const instance = figma.selectedInstance;

const placement = instance.getEnum("arrowPlacement", {
  "Top start": "top-start",
  "Top center": "top-center",
  "Top end": "top-end",
  "Right start": "right-start",
  "Right center": "right-center",
  "Right end": "right-end",
  "Bottom start": "bottom-start",
  "Bottom center": "bottom-center",
  "Bottom end": "bottom-end",
  "Left start": "left-start",
  "Left center": "left-center",
  "Left end": "left-end",
});

// The Figma component exposes 12 instance-swap slots (slotOne..slotTwelve), one
// per arrowPlacement variant. In code these collapse to a single `children`
// prop — only the slot matching the selected variant is populated, so chain
// the lookups and the non-matching ones return empty.
const children =
  instance.getSlot("slotOne") ||
  instance.getSlot("slotTwo") ||
  instance.getSlot("slotThree") ||
  instance.getSlot("slotFour") ||
  instance.getSlot("slotFive") ||
  instance.getSlot("slotSix") ||
  instance.getSlot("slotSeven") ||
  instance.getSlot("slotEight") ||
  instance.getSlot("slotNine") ||
  instance.getSlot("slotTen") ||
  instance.getSlot("slotEleven") ||
  instance.getSlot("slotTwelve");

export default {
  id: "Popover",
  imports: [`import { Popover } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Popover id="my-popover"${figma.helpers.react.renderProp("placement", placement)}>
      ${children}
    </Popover>`,
  metadata: {
    nestable: true,
  },
};
