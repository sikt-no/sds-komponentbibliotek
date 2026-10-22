// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25962-3107
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Radio/index.ts
// component=Radio
import figma from "figma";

const instance = figma.selectedInstance;

const disabled = instance.getBoolean("Disabled");
const label = instance.getString("Label");
const isBorder = instance.getBoolean("isBorder");
const secondaryText = instance.getString("secondaryText");

const example = isBorder
  ? figma.code`
      <RadioCard${figma.helpers.react.renderProp("disabled", disabled)}>
        ${label}
        ${secondaryText ? figma.code`<RadioCard.HelpText>${secondaryText}</RadioCard.HelpText>` : ""}
      </RadioCard>`
  : figma.code`
      <Radio${figma.helpers.react.renderProp("disabled", disabled)}>${label}</Radio>`;

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
