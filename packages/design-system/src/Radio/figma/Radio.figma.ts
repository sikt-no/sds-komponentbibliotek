// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25962-3107
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Radio/index.ts
// component=Radio
import figma from "figma";

const instance = figma.selectedInstance;

const state = instance.getEnum("state", {
  Default: "default",
  Hover: "default",
  Active: "default",
  Disabled: "disabled",
  Critical: "critical",
});

const isDisabled = state === "disabled";
const isCritical = state === "critical";

const isBorder = instance.getBoolean("isBorder");
const isSelected = instance.getBoolean("selected");

const label = instance.getString("labelText");
const secondaryText = instance.getString("secondaryText");

const example = isBorder
  ? figma.code`
      <RadioCard${isSelected ? " checked" : ""}${isDisabled ? " disabled" : ""}${isCritical ? " aria-invalid='true'" : ""}>
        ${label}
        ${secondaryText ? figma.code`<RadioCard.HelpText>${secondaryText}</RadioCard.HelpText>` : ""}
      </RadioCard>`
  : figma.code`
      <Radio${isSelected ? " checked" : ""}${isDisabled ? " disabled" : ""}${isCritical ? " aria-invalid='true'" : ""}>${label}</Radio>`;

const imports = isBorder
  ? [`import { RadioCard } from "@sikt/sd3-design-system"`]
  : [`import { Radio } from "@sikt/sd3-design-system"`];

export default {
  id: "Radio",
  imports,
  example,
  metadata: {
    nestable: true,
  },
};
