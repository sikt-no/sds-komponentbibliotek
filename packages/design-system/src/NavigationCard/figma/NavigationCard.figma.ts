// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25948-5451
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/NavigationCard/index.ts
// component=NavigationCard
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Standard: "standard",
  Compact: "compact",
});

const showIcon = instance.getBoolean("showIcon");
const icon = instance.getSlot("Icon");

const showTag = instance.getBoolean("showTag");
const TagCustom = instance.findInstance("TagCustom");

const showBodyText = instance.getBoolean("showBodyText");
const bodyText = instance.getString("bodyText");

const heading = instance.getString("Heading");

export default {
  example: figma.code`
    <NavigationCard size="${size}">
        ${showIcon ? figma.code`<NavigationCard.Icon>${icon}</NavigationCard.Icon>` : null}
        <NavigationCard.Content>
            <NavigationCard.Heading>${heading}</NavigationCard.Heading>
            ${showBodyText ? figma.code`<NavigationCard.Body>${bodyText}</NavigationCard.Body>` : null}
        </NavigationCard.Content>
        ${showTag ? TagCustom.executeTemplate().example : null}
    </NavigationCard>
  `,
  imports: ['import { NavigationCard } from "@sikt/sd3-design-system";'],
  id: "navigation-card",
  metadata: {
    nestable: true,
  },
};
