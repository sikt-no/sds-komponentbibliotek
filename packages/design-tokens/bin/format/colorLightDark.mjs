import { fileHeader } from "style-dictionary/utils";

const defaultFileHeader = await fileHeader({});

const themeBlock = (selector, tokens, themeKey) => {
  const lines = tokens
    .filter((token) => token.themes?.[themeKey])
    .map((token) => `  --${token.name}: ${token.themes[themeKey]};`)
    .join("\n");

  if (!lines) return "";

  return `\n\n${selector} {\n${lines}\n}`;
};

/**
 * Custom Format: Color Light-Dark
 * This adds `color-scheme: light dark` to color tokens, plus
 * [data-color-theme="white"] and [data-color-theme="feide"] overrides for
 * the alternate color themes.
 */
export const colorLightDarkFormat = {
  name: "format/color/light-dark",
  format: ({ dictionary }) => {
    return (
      defaultFileHeader +
      `:root {
  color-scheme: light dark;
}

[data-color-scheme="light"] {
  color-scheme: only light;
}

[data-color-scheme="dark"] {
  color-scheme: only dark;
}
  
:root, 
[data-color-theme="grey"] {
${dictionary.allTokens.map((prop) => `  --${prop.name}: ${prop.$value};`).join("\n")}
}` +
      themeBlock('[data-color-theme="white"]', dictionary.allTokens, "white") +
      themeBlock('[data-color-theme="feide"]', dictionary.allTokens, "feide")
    );
  },
};
