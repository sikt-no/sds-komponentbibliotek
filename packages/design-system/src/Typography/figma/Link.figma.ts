// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26134-5617&t=2stw01WfFZBmfxJt-4
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Typography/src/index.ts
// component=Link
import figma from "figma";

const instance = figma.selectedInstance;

const textContent =
  instance.children[0].textContent || instance.children[1].textContent;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});

const showIconRight = instance.getBoolean("showIconRight");
const iconRight = instance
  .getInstanceSwap("iconRight")
  ?.executeTemplate().example;

const showIconLeft = instance.getBoolean("showIconLeft");
const iconLeft = instance
  .getInstanceSwap("IconLeft")
  ?.executeTemplate().example;

export default {
  example: figma.code`
    <Link size="${size}">
      ${showIconLeft ? figma.code`<Link.Icon>${iconLeft}</Link.Icon>` : null}
      ${textContent}
      ${showIconRight ? figma.code`<Link.Icon>${iconRight}</Link.Icon>` : null}
    </Link>
  `,
  imports: ['import { Link } from "@sikt/sd3-design-system";'],
  id: "Link",
  metadata: {
    nestable: true,
  },
};
