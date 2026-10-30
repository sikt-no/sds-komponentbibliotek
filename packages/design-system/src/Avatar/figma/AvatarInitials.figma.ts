// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27454-5285
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Avatar/index.ts
// component=Avatar
import figma from "figma";

const instance = figma.selectedInstance;

const color = instance.getEnum("color", {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
});

const initials = instance.getString("initials");

export default {
  example: figma.code`<Avatar initials="${initials}" color="${color}" />`,
  imports: ['import { Avatar } from "@sikt/sd3-design-system";'],
  id: "avatar",
  metadata: {
    nestable: true,
  },
};
