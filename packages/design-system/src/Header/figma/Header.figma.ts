// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27602-2186
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Header/index.ts
// component=Header
import figma from "figma";

const instance = figma.selectedInstance;

export default {
  example: figma.code`
    <Header>
        <Header.Link>
            <Header.Logo />
        </Header.Link>
    </Header>
  `,
  imports: ['import { Header } from "@sikt/sd3-design-system";'],
  id: "header",
  metadata: {
    nestable: true,
  },
};
