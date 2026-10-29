// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=5375-21793
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Checkbox/index.ts
// component=Checkbox
import figma from "figma";

const instance = figma.selectedInstance;

const disabled = instance.getEnum("state", {
  Default: false,
  Hover: false,
  Pressed: false,
  Critical: false,
  Disabled: true,
});
const defaultChecked = instance.getEnum("selection", {
  Unchecked: false,
  Checked: true,
  Indeterminate: false,
});
const indeterminate = instance.getEnum("selection", {
  Unchecked: false,
  Checked: false,
  Indeterminate: true,
});
const label = instance.getString("labelText");
const isBorder = instance.getEnum("isBorder", {
  True: true,
  False: false,
});
const showSecondaryText = instance.getBoolean("showSecondaryText");
const secondaryText = instance.getString("secondaryText");

const example = isBorder
  ? figma.code`
      <CheckboxCard${figma.helpers.react.renderProp("defaultChecked", defaultChecked)}${figma.helpers.react.renderProp("indeterminate", indeterminate)}${figma.helpers.react.renderProp("disabled", disabled)}>
        ${label}
        ${showSecondaryText ? figma.code`<CheckboxCard.HelpText>${secondaryText}</CheckboxCard.HelpText>` : ""}
      </CheckboxCard>`
  : figma.code`
      <Checkbox${figma.helpers.react.renderProp("defaultChecked", defaultChecked)}${figma.helpers.react.renderProp("indeterminate", indeterminate)}${figma.helpers.react.renderProp("disabled", disabled)}>${label}</Checkbox>`;

const imports = isBorder
  ? [`import { CheckboxCard } from "@sikt/sd3-design-system"`]
  : [`import { Checkbox } from "@sikt/sd3-design-system"`];

export default {
  id: "Checkbox",
  imports,
  example,
  metadata: {
    nestable: true,
  },
};
