// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25870-6071
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Button/index.ts
// component=Button

import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", {
  Primary: "primary",
  "Primary-subtle": "primary-subtle",
  Secondary: "secondary",
  Tertiary: "tertiary",
});
const size = instance.getEnum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});
const label = instance.getString("label");
const icon = instance.getInstanceSwap("icon")?.executeTemplate().example;

export default {
  id: "Button",
  imports: [`import { Button } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Button variant="${variant}" size="${size}" aria-label={/* TODO: must be filled out */}>
        <Button.Icon>${icon}</Button.Icon>
    </Button>`,
  metadata: {
    nestable: true,
  },
};
