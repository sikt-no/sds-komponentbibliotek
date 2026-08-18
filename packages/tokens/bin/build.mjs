import StyleDictionary from "style-dictionary";
import { colorDarkTransform } from "./transform/colorDark.mjs";
import { colorLightDarkTransform } from "./transform/colorLightDark.mjs";
import { colorLightDarkFormat } from "./format/colorLightDark.mjs";
import { customMediaFormat } from "./format/customMedia.mjs";
import { atMediaFormat } from "./format/atMedia.mjs";
import { tsAccurateModuleDeclarationsFormat } from "./format/tsAccurateModuleDeclarations.mjs";
import { tailwindConfigFormat } from "./format/tailwindConfig.mjs";
import { prefix } from "./config.mjs";
import { colorFilter, filter } from "./filters.mjs";

const sourcePath = "src/";
const buildPath = "dist/";

const cssTransforms = [
  "attribute/cti",
  "name/kebab",
  "time/seconds",
  "html/icon",
  "color/hex",
  "size/pxToRem",
];
const tsTransforms = ["attribute/cti", "name/pascal", "color/hex"];

StyleDictionary.registerTransform(colorDarkTransform);
StyleDictionary.registerTransform(colorLightDarkTransform);

StyleDictionary.registerFormat(colorLightDarkFormat);
StyleDictionary.registerFormat(customMediaFormat);
StyleDictionary.registerFormat(atMediaFormat);
StyleDictionary.registerFormat(tailwindConfigFormat);
StyleDictionary.registerFormat(tsAccurateModuleDeclarationsFormat);

const logLevel = "default";
// const logLevel = "verbose";

/**
 * Builds Tokens for CSS (not Color), TS and Tailwind
 */
const dictionaryTokens = new StyleDictionary({
  log: {
    verbosity: logLevel,
  },
  source: [`${sourcePath}**/!(*.tablet|*.desktop).{json,js,mjs}`],
  platforms: {
    css: {
      transforms: cssTransforms,
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
      transforms: tsTransforms,
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/tokens.js",
          filter,
        },
        {
          format: "format/typescript/accurate-module-declarations",
          destination: "js/tokens.d.ts",
          filter,
        },
        {
          format: "javascript/esm",
          destination: "js/tokens.mjs",
          filter,
        },
      ],
    },
    tailwind: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "color/hex",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "format/tailwind/config",
          destination: "tailwind/config.css",
        },
      ],
    },
  },
});

await dictionaryTokens.buildAllPlatforms();

/**
 * Builds Color tokens for CSS
 */
const dictionaryColorCss = new StyleDictionary({
  log: {
    verbosity: logLevel,
  },
  source: [`${sourcePath}color/*.{json,js,mjs}`],
  platforms: {
    css: {
      transforms: [...cssTransforms, "transform/color/light-dark"],
      buildPath,
      prefix,
      files: [
        {
          format: "format/color/light-dark",
          destination: "css/color.css",
          filter: (token) => filter(token) && colorFilter(token),
        },
      ],
    },
  },
});

await dictionaryColorCss.buildAllPlatforms();

/**
 * Builds Color (dark) tokens for TS
 */
const dictionaryColorDark = new StyleDictionary({
  log: {
    verbosity: logLevel,
  },
  source: [`${sourcePath}color/*.{json,js,mjs}`],
  platforms: {
    ts: {
      transforms: [...tsTransforms, "transform/color/dark"],
      buildPath,
      prefix,
      files: [
        {
          format: "javascript/module",
          destination: "js/color.dark.js",
          filter: (token) => filter(token) && colorFilter(token),
        },
        {
          format: "format/typescript/accurate-module-declarations",
          destination: "js/color.dark.d.ts",
          filter: (token) => filter(token) && colorFilter(token),
        },
        {
          format: "javascript/esm",
          destination: "js/color.dark.mjs",
          filter: (token) => filter(token) && colorFilter(token),
        },
      ],
    },
  },
});

await dictionaryColorDark.buildAllPlatforms();

/**
 * Builds Viewport tokens for CSS
 */
for (const viewport of ["tablet", "desktop"]) {
  const dictionaryMediaViewport = new StyleDictionary({
    log: {
      verbosity: logLevel,
    },
    source: [
      `${sourcePath}**/base/*.{json,js,mjs}`,
      `${sourcePath}**/*.${viewport}.{json,js,mjs}`,
    ],
    platforms: {
      css: {
        transforms: cssTransforms,
        buildPath,
        prefix,
        files: [
          {
            format: "format/at-media",
            destination: `css/tokens.${viewport}.css`,
            filter,
            options: {
              atMedia: viewport,
            },
          },
        ],
      },
      ts: {
        transforms: tsTransforms,
        buildPath,
        prefix,
        files: [
          {
            format: "javascript/module",
            destination: `js/tokens.${viewport}.js`,
            filter,
          },
          {
            format: "format/typescript/accurate-module-declarations",
            destination: `js/tokens.${viewport}.d.ts`,
            filter,
          },
          {
            format: "javascript/esm",
            destination: `js/tokens.${viewport}.mjs`,
            filter,
          },
        ],
      },
    },
  });

  await dictionaryMediaViewport.buildAllPlatforms();
}
