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
        return `@custom-media --${name} (width >= ${value});`;
      })
      .join("\n");
  },
});

StyleDictionary.registerFormat({
  name: "custom/format/color",
  formatter: function (dictionary) {
    return `${
      this.colorScheme === "light" ? ":root, " : ""
    }[data-color-scheme="${this.colorScheme}"], [data-color-scheme="${
      this.colorScheme
    }"]:root {
      ${dictionary.allProperties
        .map((prop) => `  --${prop.name}: ${prop.value};`)
        .join("\n")}
    }

    @media (prefers-color-scheme: ${this.colorScheme}) {
      :root {
        ${dictionary.allProperties
          .map((prop) => `  --${prop.name}: ${prop.value};`)
          .join("\n")}
      }
    }`;
  },
});

const prefix = "sds";
const buildPath = "dist/tokens/";

StyleDictionary.extend({
  source: ["tokens/**/*.json", "tokens/**/!(*.base|*.dark).js"],
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
          filter: (token) => token.attributes.category !== "color",
        },
        {
          format: "custom/format/color",
          destination: "css/color.light.css",
          filter: { attributes: { category: "color" } },
          colorScheme: "light",
        },
        {
          format: "custom/format/custom-media",
          destination: "css/custom-media.css",
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
}).buildAllPlatforms();

StyleDictionary.extend({
  source: ["tokens/**/*.dark.js"],
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
          format: "custom/format/color",
          destination: "css/color.dark.css",
          filter: { attributes: { category: "color" } },
          colorScheme: "dark",
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
          destination: "js/color.dark.js",
          filter: { attributes: { category: "color" } },
        },
      ],
    },
  },
}).buildAllPlatforms();
