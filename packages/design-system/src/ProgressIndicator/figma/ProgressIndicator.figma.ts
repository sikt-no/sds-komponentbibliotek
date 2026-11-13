// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27019-569
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/ProgressIndicator/index.ts
// component=ProgressIndicator
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
  Expanded: "expanded",
});
const direction = instance.getEnum("direction", {
  Horizontal: "horizontal",
  Vertical: "vertical",
});

export default {
  example: figma.code`
    <ProgressIndicator aria-label="Søknadsprosess"${figma.helpers.react.renderProp("size", size)}${figma.helpers.react.renderProp("direction", direction)}>
      <ProgressIndicator.Step status="completed" label="Konto" />
      <ProgressIndicator.Step status="current" label="Profil" />
      <ProgressIndicator.Step status="upcoming" label="Betaling" />
    </ProgressIndicator>
  `,
  imports: ['import { ProgressIndicator } from "@sikt/sd3-design-system";'],
  id: "progress-indicator",
  metadata: {
    nestable: true,
  },
};
