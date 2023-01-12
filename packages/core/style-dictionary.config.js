const StyleDictionary = require("style-dictionary");

/**
 * Custom Format: Custom Media
 * This converts our viewport tokens to the very specific `@custom-media`
 * variable definition format.
 */
StyleDictionary.registerFormat({
  name: "custom/format/custom-media",
  formatter(dictionary) {
    return dictionary.allProperties
      .map((prop) => {
        const { name, value } = prop;
        return `@custom-media --${name} (min-width: ${value});`;
      })
      .join("\n");
  },
});

const prefix = "horisont";
const buildPath = "dist/tokens/";

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/css",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "css/variables",
          destination: "css/tokens.css",
        },
        {
          destination: "css/custom-media.css",
          format: "custom/format/custom-media",
          filter: { attributes: { category: "breakpoint" } },
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex"],
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/tokens.js",
        },
        {
          format: "typescript/module-declarations",
          destination: "js/tokens.d.ts",
        },
      ],
    },
  },
};
