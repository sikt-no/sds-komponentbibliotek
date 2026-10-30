// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26903-2943
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/InlineMessage/index.ts
// component=InlineMessage
import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("Variant", {
  Critical: "critical",
  Warning: "warning",
  Success: "success",
  Info: "info",
});

const labelText = instance.getString("labelText");

export default {
  id: "InlineMessage",
  imports: ['import { InlineMessage } from "@sikt/sd3-design-system";'],
  example: figma.code`
    <InlineMessage${figma.helpers.react.renderProp("variant", variant)}>
      ${labelText}
    </InlineMessage>`,
  metadata: {
    nestable: true,
  },
};
