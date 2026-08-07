import { fileHeader } from "style-dictionary/utils";
import { prefix } from "../config.mjs";

const defaultFileHeader = await fileHeader({});

/**
 * Custom Format: Tailwind @theme
 * This adds tokens to @theme.
 */
export const tailwindConfigFormat = {
  name: "format/tailwind/config",
  format: ({ dictionary, options }) => {
    const colorTokens = dictionary.allTokens.filter(
      (prop) => prop.attributes.category === "color",
    );
    const typographyTokens = dictionary.allTokens.filter(
      (prop) => prop.attributes.category === "typography",
    );
    const fontSizeTokensBase = typographyTokens.filter(
      (prop) =>
        prop.attributes.category === "typography" &&
        prop.attributes.type?.includes("fontsize"),
    );
    const fontSizeTokensSemantic = typographyTokens.filter(
      (prop) =>
        prop.attributes.category === "typography" &&
        prop.name.endsWith("fontsize"),
    );
    const fontSizeTokens = [...fontSizeTokensBase, ...fontSizeTokensSemantic];
    const lineHeightTokensBase = typographyTokens.filter(
      (prop) =>
        prop.attributes.category === "typography" &&
        prop.attributes.type?.includes("lineheight"),
    );
    const lineHeightTokensSemantic = typographyTokens.filter(
      (prop) =>
        prop.attributes.category === "typography" &&
        prop.name.endsWith("lineheight"),
    );
    const lineHeightTokens = [
      ...lineHeightTokensBase,
      ...lineHeightTokensSemantic,
    ];
    const fontWeightTokens = typographyTokens.filter(
      (prop) =>
        prop.attributes.category === "typography" &&
        prop.attributes.type?.includes("fontweight"),
    );
    const letterSpacingTokens = typographyTokens.filter(
      (prop) =>
        prop.attributes.category === "typography" &&
        prop.attributes.type?.includes("letterspacing"),
    );
    const breakpointTokens = dictionary.allTokens.filter(
      (prop) => prop.attributes.type === "breakpoint",
    );
    const borderRadiusTokens = dictionary.allTokens.filter(
      (prop) =>
        prop.attributes.type === "border" && prop.attributes.item === "radius",
    );

    return (
      defaultFileHeader +
      `@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

@theme inline {
  --color-*: initial;
${colorTokens.map((prop) => `  --${prop.name.replace(`${prefix}-`, "")}: var(--${prop.name});`).join("\n")}

  --font-*: initial;
  --font-sans: Haffer, Arial, sans-serif;
  --font-mono: monospace;

  --text-*: initial;
${fontSizeTokens.map((prop) => `  --text${prop.name.replace("sds-typography", "").replace("-fontsize", "")}: var(--${prop.name});`).join("\n")}
${lineHeightTokens.map((prop) => `  --text${prop.name.replace("sds-typography", "").replace("-lineheight", "")}--line-height: var(--${prop.name});`).join("\n")}

  --font-weight-*: initial;
${fontWeightTokens.map((prop) => `  --font-weight-${prop.attributes.item}: var(--${prop.name});`).join("\n")}

  --tracking-*: initial;
${letterSpacingTokens.map((prop) => `  --tracking-${prop.attributes.item}: var(--${prop.name});`).join("\n")}

  --breakpoint-*: initial;
${breakpointTokens.map((prop) => `  --breakpoint-${prop.attributes.item}: ${prop.$value};`).join("\n")}

  --spacing-*: initial;

  --radius-*: initial;
${borderRadiusTokens.map((prop) => `  --radius-${prop.attributes.subitem}: var(--${prop.name});`).join("\n")}
}`
    );
  },
};
