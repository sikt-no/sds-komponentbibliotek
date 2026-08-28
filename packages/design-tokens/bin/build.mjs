import { writeFileSync } from "node:fs";
import path from "node:path";
import StyleDictionary from "style-dictionary";
import { prefix } from "./config.mjs";
import {
  isHiddenFromPublishing,
  isColor,
  isSizeRelative,
  isTypography,
  withPublishing,
} from "./filters.mjs";
import { tsAccurateModuleDeclarationsFormat } from "./format/tsAccurateModuleDeclarations.mjs";
import { colorLightDarkFormat } from "./format/colorLightDark.mjs";
import { spaceThemeFormat } from "./format/spaceTheme.mjs";
import { typographyThemeFormat } from "./format/typographyTheme.mjs";
import { figmaColorModesPreprocessor } from "./preprocessor/figmaColorModes.mjs";
import { figmaResponsiveModesPreprocessor } from "./preprocessor/figmaResponsiveModes.mjs";
import { figmaTypographyDimensionsPreprocessor } from "./preprocessor/figmaTypographyDimensions.mjs";
import { colorLightDarkTransform } from "./transform/colorLightDark.mjs";
import { sizeDimensionTransform } from "./transform/sizeDimension.mjs";
import { fontWeightTransform } from "./transform/fontWeight.mjs";
import { numberPxTransform } from "./transform/numberPx.mjs";

const sourcePath = "src/";
const buildPath = "dist/";

const preprocessors = [
  "preprocessor/figma/color/modes",
  "preprocessor/figma/responsive/modes",
  "preprocessor/figma/typography/dimensions",
];

const cssTransforms = [
  "attribute/cti",
  "name/kebab",
  "time/seconds",
  "html/icon",
  "color/hex",
  "transform/color/light-dark",
  "transform/number/px",
  "size/pxToRem",
  "transform/size/dimension",
  "transform/font/weight",
];

const tsTransforms = [
  "attribute/cti",
  "name/pascal",
  "color/hex",
  "transform/number/px",
  "size/pxToRem",
  "transform/size/dimension",
  "transform/font/weight",
];

StyleDictionary.registerPreprocessor(figmaColorModesPreprocessor);
StyleDictionary.registerPreprocessor(figmaResponsiveModesPreprocessor);
StyleDictionary.registerPreprocessor(figmaTypographyDimensionsPreprocessor);

StyleDictionary.registerFormat(tsAccurateModuleDeclarationsFormat);
StyleDictionary.registerFormat(colorLightDarkFormat);
StyleDictionary.registerFormat(spaceThemeFormat);
StyleDictionary.registerFormat(typographyThemeFormat);

StyleDictionary.registerTransform(numberPxTransform);
StyleDictionary.registerTransform(fontWeightTransform);
StyleDictionary.registerTransform(sizeDimensionTransform);
StyleDictionary.registerTransform(colorLightDarkTransform);

const logLevel = "default";
// const logLevel = "verbose";

const cssFiles = [
  {
    format: "css/variables",
    destination: "css/tokens.css",
    filter: withPublishing(
      (token) =>
        !isColor(token) && !isSizeRelative(token) && !isTypography(token),
    ),
  },
  {
    format: "format/color/light-dark",
    destination: "css/color.css",
    filter: withPublishing(isColor),
  },
  {
    format: "format/space/theme",
    destination: "css/space.css",
    filter: withPublishing(isSizeRelative),
  },
  {
    format: "format/typography/theme",
    destination: "css/typography.css",
    filter: withPublishing(isTypography),
  },
];

/**
 * Builds Tokens for CSS and TS
 */
const dictionaryTokens = new StyleDictionary({
  log: {
    verbosity: logLevel,
  },
  source: [
    `${sourcePath}/*.{json,js,mjs}`,
    `${sourcePath}/figma/!(color-themes|size-responsive|typography)/**/*.{json,js,mjs}`,
  ],
  platforms: {
    css: {
      preprocessors,
      transforms: cssTransforms,
      buildPath,
      prefix,
      files: cssFiles,
    },
    ts: {
      preprocessors,
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

const indexCss =
  `/**
 * Do not edit directly, this file was auto-generated.
 */

` +
  cssFiles
    .map((file) => `@import url("./${path.basename(file.destination)}");`)
    .join("\n") +
  "\n";

writeFileSync(path.join(buildPath, "css/index.css"), indexCss);
