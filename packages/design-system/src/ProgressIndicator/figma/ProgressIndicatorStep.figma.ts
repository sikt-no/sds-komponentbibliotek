// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27009-2543
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/ProgressIndicator/index.ts
// component=ProgressIndicator.Step
import figma from "figma";

const instance = figma.selectedInstance;

const status = instance.getEnum("variant", {
  Unfinished: "upcoming",
  Current: "current",
  Finished: "completed",
  Critical: "critical",
  Disabled: "disabled",
});
const label = instance.getString("labelText");
const description = instance.getString("helperText");

export default {
  example: figma.code`<ProgressIndicator.Step status="${status}" label="${label}"${figma.helpers.react.renderProp("description", description)} />`,
  imports: ['import { ProgressIndicator } from "@sikt/sd3-design-system";'],
  id: "progress-indicator-step",
  metadata: {
    nestable: true,
  },
};
