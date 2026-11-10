// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26150-1262
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Pagination/index.ts
// component=Pagination
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});

export default {
  id: "Pagination",
  imports: ['import { Pagination } from "@sikt/sd3-design-system"'],
  example: figma.code`
    <Pagination
      aria-label="Paginering"
      count={42}
      currentIndex={currentIndex}
      onPageChange={setCurrentIndex}${figma.helpers.react.renderProp("size", size)}
    />`,
  metadata: {
    nestable: true,
  },
};
