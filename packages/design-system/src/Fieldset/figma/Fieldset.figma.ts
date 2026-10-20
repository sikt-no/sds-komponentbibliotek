// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=30037-617
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Fieldset/index.ts
// component=Fieldset
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "large",
  Compact: "medium",
});
const legend = instance.getSlot("legend");
const description = instance.getSlot("description");
const controls = instance.getSlot("controls");
const validation = instance.getSlot("validation");

export default {
  id: "Fieldset",
  imports: [`import { Fieldset } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Fieldset${figma.helpers.react.renderProp("size", size)}>
      <Fieldset.Legend>${legend}</Fieldset.Legend>
      <Fieldset.Description>${description}</Fieldset.Description>
      ${controls}
      <Fieldset.ValidationMessage>${validation}</Fieldset.ValidationMessage>
    </Fieldset>`,
  metadata: {
    nestable: true,
  },
};
