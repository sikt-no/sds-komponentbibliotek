import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildModeAwareTree } from "./tree.mjs";

const FIGMA_DIR = fileURLToPath(new URL("../../src/figma", import.meta.url));
const RESPONSIVE_DIRS = ["size-responsive", "typography"];
const BASE_FILE = "comfortable.tokens.json";
const MODE_FILES = {
  compact: "compact.tokens.json",
  spacious: "spacious.tokens.json",
};

const readTokenFile = (dir, fileName) =>
  JSON.parse(readFileSync(path.join(FIGMA_DIR, dir, fileName), "utf-8"));

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
        ...buildModeAwareTree(baseTree, modeTrees, {
          warnLabel: "preprocessor/figma/responsive/modes",
        }),
      };
    }

    return dict;
  },
};
