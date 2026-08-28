import { fileHeader } from "style-dictionary/utils";

const defaultFileHeader = await fileHeader({});

const collectModeKeys = (tokens) => {
  const modeKeys = new Set();
  for (const token of tokens) {
    for (const modeKey of Object.keys(token.$extensions?.modes ?? {})) {
      modeKeys.add(modeKey);
    }
  }
  return [...modeKeys];
};

const modeBlock = (selector, tokens, modeKey) => {
  const lines = tokens
    .filter((token) => token.$extensions?.modes?.[modeKey])
    .map(
      (token) =>
        `  --${token.name}: ${token.$extensions.modes[modeKey].$value};`,
    )
    .join("\n");

  if (!lines) return "";

  return `\n\n${selector} {\n${lines}\n}`;
};

/**
 * Custom Format Factory: Theme Variables
 * Outputs the default (base) value to :root, and each alternate mode's
 * value to its own [attribute="mode"] override block.
 */
export const createThemeVariablesFormat = ({ name, attribute }) => ({
  name,
  format: ({ dictionary }) => {
    const modeKeys = collectModeKeys(dictionary.allTokens);

    return (
      defaultFileHeader +
      `:root,
[${attribute}="comfortable"] {
${dictionary.allTokens.map((prop) => `  --${prop.name}: ${prop.$value};`).join("\n")}
}` +
      modeKeys
        .map((modeKey) =>
          modeBlock(
            `[${attribute}="${modeKey}"]`,
            dictionary.allTokens,
            modeKey,
          ),
        )
        .join("")
    );
  },
});
