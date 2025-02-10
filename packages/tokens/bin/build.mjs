import StyleDictionary from "style-dictionary";
import Color from "tinycolor2";

const prefix = "sds";
const sourcePath = "src/";
const buildPath = "dist/";

const filter = (token) => !token.attributes?.category?.startsWith("_");
const colorFilter = (token) =>
  (token.attributes?.category === "color" || token.type === "color") &&
  filter(token);

/**
 * Custom Transform: Color Dark
 * This change color tokens value to dark attribute.
 */
StyleDictionary.registerTransform({
  name: "transform/color/dark",
  type: "value",
  transitive: true,
  filter: colorFilter,
  transform: (token) => {
    return Color(token.dark).toHex8String();
  },
});

/**
 * Custom Transform: Color Light-Dark
 * This change color tokens value to `light-dark(value, value)`.
 */
StyleDictionary.registerTransform({
  name: "transform/color/light-dark",
  type: "value",
  transitive: true,
  filter: colorFilter,
  transform: (token) => {
    const dark = Color(token.dark).toHex8String();
    return `light-dark(${token.value}, ${dark})`;
  },
});

/**
 * Custom Format: Color Light-Dark
 * This adds `color-scheme: light dark` to color tokens.
 */
StyleDictionary.registerFormat({
  name: "format/color/light-dark",
  format: ({ dictionary, options }) => {
    return `:root {
  color-scheme: light;

${dictionary.allTokens.map((prop) => `  --${prop.name}: ${prop.value};`).join("\n")}
}

[data-color-scheme="light"] {
  color-scheme: only light;
}

[data-color-scheme="dark"] {
  color-scheme: only dark;
}`;
  },
});

/**
 * Custom Format: Custom Media
 * This converts our viewport tokens to the very specific `@custom-media`
 * variable definition format.
 */
StyleDictionary.registerFormat({
  name: "format/custom-media",
  format: ({ dictionary }) => {
    return dictionary.allTokens
      .map((prop) => {
        const { name, value } = prop;
        return `@custom-media --${name} (width >= ${value});`;
      })
      .join("\n");
  },
});

/**
 * Custom Format: At Media
 * This adds `@media` to tokens.
 */
StyleDictionary.registerFormat({
  name: "format/at-media",
  format: ({ dictionary, options }) => {
    return `@media (min-width: ${
      dictionary.tokens.base.breakpoint[options.atMedia].value
    }) {
  :root {
${dictionary.allTokens
  .filter((prop) => !prop.path.includes("base"))
  .map((prop) => `  --${prop.name}: ${prop.value};`)
  .join("\n")}
  }
}`;
  },
});

const dictionaryTokens = new StyleDictionary({
  source: [`${sourcePath}**/!(*.tablet|*.desktop).{json,js,mjs}`],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "css/variables",
          destination: "css/tokens.css",
          filter: (token) => filter(token) && !colorFilter(token),
        },
        {
          format: "format/custom-media",
          destination: "css/custom-media.css",
          filter: { attributes: { type: "breakpoint" } },
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/pascal", "color/hex8"],
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/tokens.js",
          filter,
        },
        {
          format: "typescript/module-declarations",
          destination: "js/tokens.d.ts",
          filter,
        },
      ],
    },
  },
});

await dictionaryTokens.buildAllPlatforms();

const dictionaryColorCss = new StyleDictionary({
  source: [`${sourcePath}color/*.{json,js,mjs}`],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "color/hex8",
        "transform/color/light-dark",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "format/color/light-dark",
          destination: "css/color.css",
          filter: colorFilter,
        },
      ],
    },
  },
});

await dictionaryColorCss.buildAllPlatforms();

const dictionaryColorDark = new StyleDictionary({
  source: [`${sourcePath}color/*.{json,js,mjs}`],
  platforms: {
    ts: {
      transforms: [
        "attribute/cti",
        "name/pascal",
        "color/hex8",
        "transform/color/dark",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/color.dark.js",
          filter: colorFilter,
        },
        {
          format: "typescript/module-declarations",
          destination: "js/color.dark.d.ts",
          filter: colorFilter,
        },
      ],
    },
  },
});

await dictionaryColorDark.buildAllPlatforms();

const dictionaryMediaTablet = new StyleDictionary({
  source: [
    `${sourcePath}base/*.{json,js,mjs}`,
    `${sourcePath}**/*.tablet.{json,js,mjs}`,
  ],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "format/at-media",
          destination: "css/tokens.tablet.css",
          filter,
          options: {
            atMedia: "tablet",
          },
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/pascal", "color/hex8"],
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/tokens.tablet.js",
          filter,
        },
        {
          format: "typescript/module-declarations",
          destination: "js/tokens.tablet.d.ts",
          filter,
        },
      ],
    },
  },
});

await dictionaryMediaTablet.buildAllPlatforms();

const dictionaryMediaDesktop = new StyleDictionary({
  source: [
    `${sourcePath}base/*.{json,js,mjs}`,
    `${sourcePath}**/*.desktop.{json,js,mjs}`,
  ],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "format/at-media",
          destination: "css/tokens.desktop.css",
          filter,
          options: {
            atMedia: "desktop",
          },
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/pascal", "color/hex8"],
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/tokens.desktop.js",
          filter,
        },
        {
          format: "typescript/module-declarations",
          destination: "js/tokens.desktop.d.ts",
          filter,
        },
      ],
    },
  },
});

await dictionaryMediaDesktop.buildAllPlatforms();
