// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26666-8280
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/ToggleGroup/index.ts
// component=ToggleGroup
import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", {
  Text: "text",
  Icon: "icon",
});

const buttons = instance
  .findLayers(
    (node) =>
      node.type === "INSTANCE" &&
      (node.name === "Button" || node.name === "ButtonIcon"),
  )
  .filter((n): n is typeof instance => n.type === "INSTANCE");

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/\s+/g, "-") || "item";

const capitalize = (text: string) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1) : text;

const itemData = buttons.map((btn, i) => {
  if (variant === "icon") {
    const icon = btn.getInstanceSwap("icon");
    const iconName =
      icon && icon.type === "INSTANCE" ? capitalize(icon.name) : "";
    const ariaLabel = iconName || `Item ${i + 1}`;
    const value = slugify(ariaLabel);
    return {
      value,
      element: figma.code`<ToggleGroup.Item value="${value}" aria-label="${ariaLabel}">
        <ToggleGroup.Item.Icon>${icon}</ToggleGroup.Item.Icon>
      </ToggleGroup.Item>`,
    };
  }
  const label = btn.getString("label") || `Item ${i + 1}`;

  const value = slugify(label);

  return {
    value,
    element: figma.code`<ToggleGroup.Item value="${value}">${label}</ToggleGroup.Item>`,
  };
});

const defaultValue = itemData[0]?.value;

const items = itemData.map((d) => d.element);

const firstButtonSize = buttons[0]?.getEnum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});
const size =
  firstButtonSize && firstButtonSize !== "medium" ? firstButtonSize : undefined;

export default {
  example: figma.code`
    <ToggleGroup aria-label="Vis"${size ? ` size="${size}"` : ""}${defaultValue ? ` defaultValue="${defaultValue}"` : ""}>
      ${items}
    </ToggleGroup>
  `,
  imports: ['import { ToggleGroup } from "@sikt/sd3-design-system";'],
  id: "ToggleGroup",
  metadata: {
    nestable: true,
  },
};
