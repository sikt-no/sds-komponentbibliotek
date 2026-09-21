// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26837-1400
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/sikt-logo/index.ts
// component=Logo
import figma from "figma";

const instance = figma.selectedInstance;

const isSymbol = instance.getBoolean("isSymbol");

export default {
  example: figma.code`
    <Logo ${isSymbol ? null : figma.code`hasSymbol="false"`} />
  `,
  imports: ['import { Logo } from "@sikt/sd3-sikt-logo";'],
  id: "logo",
  metadata: {
    nestable: true,
  },
};
