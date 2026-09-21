// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=9-2555
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/sikt-logo/index.ts
// component=Logo
import figma from "figma";

const instance = figma.selectedInstance;

const lang = instance.getEnum("language", {
  en: "en",
  fkv: "fkv",
  nb: "nb",
  nn: "nn",
  se: "se",
  sma: "sma",
  smj: "smj",
});

const isSymbol = instance.getBoolean("isSymbol");

export default {
  example: figma.code`
    <Logo variant="secondary" ${lang === "nb" ? null : figma.code`lang="${lang}"`} ${isSymbol ? null : figma.code`hasSymbol="false"`} />
  `,
  imports: ['import { Logo } from "@sikt/sd3-sikt-logo";'],
  id: "logo",
  metadata: {
    nestable: true,
  },
};
