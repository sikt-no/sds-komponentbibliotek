// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=18312-969
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/ApplicationStatus/index.ts
// component=ApplicationStatus
import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", {
  Info: "info",
  Warning: "warning",
  Success: "success",
  Critical: "critical",
  Neutral: "neutral",
});

const label = instance.getString("label");
const dismissable = instance.getBoolean("dismissable");
const showContent = instance.getBoolean("showContent");

const dismissSlot = dismissable
  ? '\n      <ApplicationStatus.Dismiss label="Lukk" onClick={() => {}} />'
  : "";
const descriptionSlot = showContent
  ? "\n      <ApplicationStatus.Description>…</ApplicationStatus.Description>"
  : "";

export default {
  id: "ApplicationStatus",
  imports: ['import { ApplicationStatus } from "@sikt/sd3-design-system";'],
  example: figma.code`
    <ApplicationStatus${figma.helpers.react.renderProp("variant", variant)}>
      <ApplicationStatus.Message>${label}</ApplicationStatus.Message>${dismissSlot}${descriptionSlot}
    </ApplicationStatus>`,
  metadata: {
    nestable: true,
  },
};
