import StyleDictionary from "style-dictionary";
import { prefix } from "./config.mjs";
import { isHiddenFromPublishing, isColor } from "./filters.mjs";
import { tsAccurateModuleDeclarationsFormat } from "./format/tsAccurateModuleDeclarations.mjs";
import { fontWeightTransform } from "./transform/fontWeight.mjs";
import { numberPxTransform } from "./transform/numberPx.mjs";

const sourcePath = "src/**";
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

StyleDictionary.registerFormat(tsAccurateModuleDeclarationsFormat);

StyleDictionary.registerTransform(numberPxTransform);
StyleDictionary.registerTransform(fontWeightTransform);

const logLevel = "default";
// const logLevel = "verbose";

/**
 * Builds Tokens for CSS and TS
 */
const dictionaryTokens = new StyleDictionary({
  log: {
    verbosity: logLevel,
  },
  source: [`${sourcePath}/*.{json,js,mjs}`],
  platforms: {
    css: {
      transforms: [
        "transform/number/px",
        ...cssTransforms,
        "transform/font/weight",
      ],
      buildPath,
      prefix,
      files: [
        {
          format: "css/variables",
          destination: "css/tokens.css",
          filter: isHiddenFromPublishing,
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
          filter: isHiddenFromPublishing,
        },
        {
          format: "format/typescript/accurate-module-declarations",
          destination: "js/tokens.d.ts",
          filter: isHiddenFromPublishing,
        },
        {
          format: "javascript/esm",
          destination: "js/tokens.mjs",
          filter: isHiddenFromPublishing,
        },
      ],
    },
  },
});

await dictionaryTokens.buildAllPlatforms();
