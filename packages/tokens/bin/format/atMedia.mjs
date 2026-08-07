import { fileHeader } from "style-dictionary/utils";

const defaultFileHeader = await fileHeader({});

/**
 * Custom Format: At Media
 * This adds `@media` to tokens.
 */
export const atMediaFormat = {
  name: "format/at-media",
  format: ({ dictionary, options }) => {
    return (
      defaultFileHeader +
      `@media (width >= ${
        dictionary.tokens.base.breakpoint[options.atMedia].$value
      }) {
  :root {
${dictionary.allTokens
  .filter((prop) => !prop.filePath.includes("base"))
  .map((prop) => `  --${prop.name}: ${prop.$value};`)
  .join("\n")}
  }
}`
    );
  },
};
