import { fileHeader } from "style-dictionary/utils";

const defaultFileHeader = await fileHeader({});

/**
 * Custom Format: Custom Media
 * This converts our viewport tokens to the very specific `@custom-media`
 * variable definition format.
 */
export const customMediaFormat = {
  name: "format/custom-media",
  format: ({ dictionary }) => {
    return (
      defaultFileHeader +
      dictionary.allTokens
        .map((prop) => {
          const { name, $value } = prop;
          return `@custom-media --${name} (width >= ${$value});`;
        })
        .join("\n")
    );
  },
};
