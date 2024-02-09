import StyleDictionary from "style-dictionary";

/**
 * Custom Format: Custom Media
 * This converts our viewport tokens to the very specific `@custom-media`
 * variable definition format.
 */
StyleDictionary.registerFormat({
  name: "custom/format/custom-media",
  formatter({ dictionary }) {
    return dictionary.allProperties
      .map((prop) => {
        const { name, value } = prop;
        return `@custom-media --${name} (width >= ${value});`;
      })
      .join("\n");
  },
});

/**
 * Custom Format: Color
 * This adds `prefers-color-scheme` & `[data-color-scheme]` to color tokens.
 */
StyleDictionary.registerFormat({
  name: "custom/format/color",
  formatter: function ({ dictionary }) {
    return `${
      this.colorScheme === "light" ? ":root, " : ""
    }[data-color-scheme="${this.colorScheme}"],
[data-color-scheme="${this.colorScheme}"]:root {
${dictionary.allProperties
  .map((prop) => `  --${prop.name}: ${prop.value};`)
  .join("\n")}
}

@media (prefers-color-scheme: ${this.colorScheme}) {
  :root {
${dictionary.allProperties
  .map((prop) => `    --${prop.name}: ${prop.value};`)
  .join("\n")}
  }
}`;
  },
});

/**
 * Custom Format: At Media
 * This adds `@media` to tokens.
 */
StyleDictionary.registerFormat({
  name: "custom/format/at-media",
  formatter: function ({ dictionary, platform, options, file }) {
    return `@media (min-width: ${
      dictionary.tokens.base.breakpoint[this.atMedia].value
    }) {
  :root {
${dictionary.allProperties
  .filter((prop) => !prop.path.includes("base"))
  .map((prop) => `  --${prop.name}: ${prop.value};`)
  .join("\n")}
  }
}`;
  },
});

const prefix = "sds";
const sourcePath = "src/";
const buildPath = "dist/";

const filter = (token) => !token.attributes.category.startsWith("_");

const isEffectShadowToken = (token) =>
  token.attributes.category === "effect" && token.attributes.type === "shadow";
const colorFilter = (token) =>
  filter(token) &&
  (token.attributes.category === "color" || isEffectShadowToken(token));

StyleDictionary.extend({
  source: [`${sourcePath}**/!(*.dark|*.tablet|*.desktop).{json,js}`],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
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
          format: "custom/format/color",
          destination: "css/color.light.css",
          filter: colorFilter,
          colorScheme: "light",
        },
        {
          format: "custom/format/custom-media",
          destination: "css/custom-media.css",
          filter: { attributes: { type: "breakpoint" } },
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex8"],
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
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "scss/variables",
          destination: "scss/tokens.scss",
          filter,
        },
      ],
    },
  },
}).buildAllPlatforms();

StyleDictionary.extend({
  source: [`${sourcePath}**/*.dark.{json,js}`],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "custom/format/color",
          destination: "css/color.dark.css",
          filter: colorFilter,
          colorScheme: "dark",
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex8"],
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
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "scss/variables",
          destination: "scss/color.dark.scss",
          filter: colorFilter,
        },
      ],
    },
  },
}).buildAllPlatforms();

StyleDictionary.extend({
  source: [
    `${sourcePath}base/*.{json,js}`,
    `${sourcePath}**/*.tablet.{json,js}`,
  ],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "custom/format/at-media",
          destination: "css/tokens.tablet.css",
          filter,
          atMedia: "tablet",
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex8"],
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
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "scss/variables",
          destination: "scss/tokens.tablet.scss",
          filter,
        },
      ],
    },
  },
}).buildAllPlatforms();

StyleDictionary.extend({
  source: [
    `${sourcePath}base/*.{json,js}`,
    `${sourcePath}**/*.desktop.{json,js}`,
  ],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "custom/format/at-media",
          destination: "css/tokens.desktop.css",
          filter,
          atMedia: "desktop",
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex8"],
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
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "color/hex8",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "scss/variables",
          destination: "scss/tokens.desktop.scss",
          filter,
        },
      ],
    },
  },
}).buildAllPlatforms();
