import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FIGMA_DIR = fileURLToPath(new URL("../../src/figma", import.meta.url));
const RESPONSIVE_DIRS = ["size-responsive", "typography"];
const BASE_FILE = "comfortable.tokens.json";
const MODE_FILES = {
  compact: "compact.tokens.json",
  spacious: "spacious.tokens.json",
};

const readTokenFile = (dir, fileName) =>
  JSON.parse(readFileSync(path.join(FIGMA_DIR, dir, fileName), "utf-8"));

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
          `[preprocessor/figma/responsive/modes] Missing token at "${keyPath.join(".")}" in mode "${modeKey}", skipping.`,
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

export const figmaResponsiveModesPreprocessor = {
  name: "preprocessor/figma/responsive/modes",
  preprocessor: (dict) => {
    for (const dir of RESPONSIVE_DIRS) {
      const baseFile = readTokenFile(dir, BASE_FILE);
      const namespace = Object.keys(baseFile).find(
        (key) => key !== "$extensions",
      );
      const baseTree = baseFile[namespace];
      const modeTrees = Object.fromEntries(
        Object.entries(MODE_FILES).map(([modeKey, fileName]) => [
          modeKey,
          readTokenFile(dir, fileName)[namespace],
        ]),
      );

      dict[namespace] = {
        ...dict[namespace],
        ...buildModeAwareTree(baseTree, modeTrees),
      };
    }

    return dict;
  },
};
