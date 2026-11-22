// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27506-652&m=dev
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Dialog/index.ts
// component=Dialog
import figma from "figma";

const instance = figma.selectedInstance;

const showContent = instance.getBoolean("showContent");
const Content = instance.findInstance(".Content");
const slot = Content.type === "INSTANCE" ? Content.getSlot("slot") : null;

export default {
  example: figma.code`
    <Dialog id="dialog-id">
      <Dialog.Content>
        ${showContent ? figma.code`${slot}` : undefined}
      </Dialog.Content>
    </Dialog>
  `,
  imports: [`import { Dialog } from "@sikt/sd3-design-system";`],
  id: "dialog",
  metadata: {
    nestable: true,
  },
};
