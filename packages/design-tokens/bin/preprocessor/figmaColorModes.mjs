import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildModeAwareTree } from "./tree.mjs";

const COLOR_THEMES_DIR = fileURLToPath(
  new URL("../../src/figma/color-themes", import.meta.url),
);
const BASE_FILE = "Sikt gray (light).tokens.json";
const MODE_FILES = {
  "sikt-dark": "Sikt dark.tokens.json",
  "sikt-white": "Sikt white (light).tokens.json",
  "feide-light": "Feide light.tokens.json",
  "feide-dark": "Feide dark.tokens.json",
};

const readTokenFile = (fileName) =>
  JSON.parse(readFileSync(path.join(COLOR_THEMES_DIR, fileName), "utf-8"));

export const figmaColorModesPreprocessor = {
  name: "preprocessor/figma/color/modes",
  preprocessor: (dict) => {
    const baseTree = readTokenFile(BASE_FILE).color;
    const modeTrees = Object.fromEntries(
      Object.entries(MODE_FILES).map(([modeKey, fileName]) => [
        modeKey,
        readTokenFile(fileName).color,
      ]),
    );

    dict.color = {
      ...dict.color,
      ...buildModeAwareTree(baseTree, modeTrees, {
        warnLabel: "preprocessor/figma/color/modes",
      }),
    };

    return dict;
  },
};
