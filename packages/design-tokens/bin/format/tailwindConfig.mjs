import { fileHeader } from "style-dictionary/utils";
import { prefix } from "../config.mjs";
import { isColor } from "../filters.mjs";

const defaultFileHeader = await fileHeader({});

const cssVar = (prop) => `var(--${prop.name})`;

const themeVars = (tokens, name, value = cssVar) =>
  tokens.map((prop) => `  --${name(prop)}: ${value(prop)};`).join("\n");

const textName = (prop) =>
  prop.path
    .slice(2)
    .filter((segment) => segment !== "text")
    .join("-");

/**
 * Custom Format: Tailwind @theme
 * This adds tokens to @theme.
 */
export const tailwindConfigFormat = {
  name: "format/tailwind/config",
  format: ({ dictionary }) => {
    const isType = (type) => (prop) => prop.attributes.type === type;

    const colorTokens = dictionary.allTokens.filter(isColor);
    const typographyTokens = dictionary.allTokens.filter(
      (prop) => prop.attributes.category === "typography",
    );
    const fontSizeTokens = typographyTokens.filter(isType("size"));
    const lineHeightTokens = typographyTokens.filter(isType("line-height"));
    const fontWeightTokens = typographyTokens.filter(isType("weight"));
    const breakpointTokens = dictionary.allTokens.filter(
      (prop) => prop.attributes.category === "breakpoint",
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
${themeVars(colorTokens, (prop) => prop.path.join("-"))}

  --font-*: initial;
  --font-sans: var(--${prefix}-font-family);
  --font-mono: monospace;

  --text-*: initial;
${themeVars(fontSizeTokens, (prop) => `text-${textName(prop)}`)}
${themeVars(lineHeightTokens, (prop) => `text-${textName(prop)}--line-height`)}

  --font-weight-*: initial;
${themeVars(fontWeightTokens, (prop) => `font-weight-${prop.attributes.item}`)}

  --breakpoint-*: initial;
${themeVars(
  breakpointTokens,
  (prop) => `breakpoint-${prop.attributes.type}`,
  (prop) => prop.$value,
)}

  --spacing-*: initial;

  --radius-*: initial;
${themeVars(borderRadiusTokens, (prop) => `radius-${prop.attributes.subitem}`)}
}`
    );
  },
};
