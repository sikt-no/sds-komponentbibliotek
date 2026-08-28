import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const COLOR_THEMES_DIR = fileURLToPath(
  new URL("../../src/figma/color-themes", import.meta.url),
);
const BASE_FILE = "Sikt grey (light).tokens.json";
const MODE_FILES = {
  "sikt-dark": "Sikt dark.tokens.json",
  "sikt-white": "Sikt white (light).tokens.json",
  "feide-light": "Feide light.tokens.json",
  "feide-dark": "Feide dark.tokens.json",
};

const readTokenFile = (fileName) =>
  JSON.parse(readFileSync(path.join(COLOR_THEMES_DIR, fileName), "utf-8"));

const isToken = (node) =>
  typeof node === "object" &&
  node !== null &&
  "$type" in node &&
  "$value" in node;

const getIn = (node, keyPath) =>
  keyPath.reduce((acc, key) => (acc ? acc[key] : undefined), node);

/**
 * Walks the base tree and attaches an `$extensions.modes` entry for each
 * alternate mode, sourced from the matching path in that mode's own token
 * file.
 */
const buildModeAwareTree = (node, modeTrees, keyPath = []) => {
  if (isToken(node)) {
    const modes = {};
    for (const [modeKey, modeTree] of Object.entries(modeTrees)) {
      const modeToken = getIn(modeTree, keyPath);
      if (!isToken(modeToken)) {
        console.warn(
          `[preprocessor/figma/color/modes] Missing token at "${keyPath.join(".")}" in mode "${modeKey}", skipping.`,
        );
        continue;
      }
      modes[modeKey] = modeToken;
    }
    return {
      ...node,
      $extensions: {
        ...node.$extensions,
        modes,
      },
    };
  }

  return Object.fromEntries(
    Object.entries(node).map(([key, value]) => [
      key,
      buildModeAwareTree(value, modeTrees, [...keyPath, key]),
    ]),
  );
};

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
      ...buildModeAwareTree(baseTree, modeTrees),
    };

    return dict;
  },
};
