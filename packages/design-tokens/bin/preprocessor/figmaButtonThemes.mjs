import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Color from "tinycolor2";
import { buildModeAwareTree, getIn, isToken } from "./tree.mjs";

const BUTTON_THEMES_DIR = fileURLToPath(
  new URL("../../src/figma/button-themes", import.meta.url),
);
const COLOR_THEMES_DIR = fileURLToPath(
  new URL("../../src/figma/color-themes", import.meta.url),
);
const BASE_FILE = "main.tokens.json";
const MODE_FILES = {
  neutral: "neutral.tokens.json",
  danger: "danger.tokens.json",
};
// The button-theme JSONs alias into `color-themes`. We use `Sikt dark` as the
// dark-mode source; light values come from the button-theme file directly (they
// match `Sikt grey (light)`).
const DARK_COLOR_THEME_FILE = "Sikt dark.tokens.json";

const readJson = (dir, fileName) =>
  JSON.parse(readFileSync(path.join(dir, fileName), "utf-8"));

const readButtonThemeFile = (fileName) => readJson(BUTTON_THEMES_DIR, fileName);
const readColorThemeFile = (fileName) => readJson(COLOR_THEMES_DIR, fileName);

// Convert a DTCG color value (`{ hex, alpha, ... }`) to a CSS hex string.
// Preserves alpha as an 8-digit hex when the color isn't fully opaque.
// Passes primitive values through unchanged (e.g. size tokens).
const toCssColor = (value) => {
  if (typeof value !== "object" || value === null || !("hex" in value)) {
    return value;
  }
  const color = Color(value.hex);
  color.setAlpha(value.alpha ?? 1);
  return color.getAlpha() === 1 ? color.toHexString() : color.toHex8String();
};

// Follow a token's Figma alias into the dark color-theme tree and return the
// CSS colour, or `null` if the alias can't be resolved (e.g. it points at
// `foundation`/`color-primitives`, which has no dark variant).
const resolveDarkColor = (token, darkTree) => {
  const targetName =
    token?.$extensions?.["com.figma.aliasData"]?.targetVariableName;
  if (!targetName) return null;
  const darkToken = getIn(darkTree, targetName.split("/"));
  if (!isToken(darkToken)) return null;
  return toCssColor(darkToken.$value);
};

// Wrap a colour token's value in `light-dark(light, dark)` so it participates
// in the page's `color-scheme`. Returns the plain colour when the alias can't
// be resolved (foundation primitives) or when both modes share the same value.
const buildValue = (token, darkTree) => {
  const light = toCssColor(token.$value);
  if (token.$type !== "color") return light;
  const dark = resolveDarkColor(token, darkTree);
  if (dark === null || dark === light) return light;
  return `light-dark(${light}, ${dark})`;
};

const normalizeToken = (token, darkTree) => ({
  ...token,
  $value: buildValue(token, darkTree),
});

export const figmaButtonThemesPreprocessor = {
  name: "preprocessor/figma/button-themes/modes",
  preprocessor: (dict) => {
    const baseTree = readButtonThemeFile(BASE_FILE).color;
    const modeTrees = Object.fromEntries(
      Object.entries(MODE_FILES).map(([modeKey, fileName]) => [
        modeKey,
        readButtonThemeFile(fileName).color,
      ]),
    );
    // Keep the full root object so alias paths like `color/interaction/...`
    // can be resolved by splitting on `/` (leading `color` matches the key).
    const darkTree = readColorThemeFile(DARK_COLOR_THEME_FILE);

    dict.color = {
      ...dict.color,
      ...buildModeAwareTree(baseTree, modeTrees, {
        transformToken: (token) => normalizeToken(token, darkTree),
        warnLabel: "preprocessor/figma/button-themes/modes",
      }),
    };

    return dict;
  },
};
