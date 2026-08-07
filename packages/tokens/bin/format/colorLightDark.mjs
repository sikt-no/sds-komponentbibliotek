import { fileHeader } from "style-dictionary/utils";

const defaultFileHeader = await fileHeader({});

/**
 * Custom Format: Color Light-Dark
 * This adds `color-scheme: light dark` to color tokens.
 */
export const colorLightDarkFormat = {
  name: "format/color/light-dark",
  format: ({ dictionary, options }) => {
    return (
      defaultFileHeader +
      `:root {
  color-scheme: light dark;

${dictionary.allTokens.map((prop) => `  --${prop.name}: ${prop.$value};`).join("\n")}
}

[data-color-scheme="light"] {
  color-scheme: only light;
}

[data-color-scheme="dark"] {
  color-scheme: only dark;
}`
    );
  },
};
