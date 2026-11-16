import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Color from "tinycolor2";
import { prefix } from "../config.mjs";
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
  critical: "critical.tokens.json",
};
// Light + dark fallback sources for tokens that can't be expressed as a
// `var()` reference (foundation primitives, or color-theme tokens that are
// hidden from publishing and thus absent from `color.css`).
const LIGHT_COLOR_THEME_FILE = "Sikt gray (light).tokens.json";
const DARK_COLOR_THEME_FILE = "Sikt dark.tokens.json";

const isHiddenFromPublishing = (token) =>
  token?.$extensions?.["com.figma.hiddenFromPublishing"] === true;

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

// Emit a `var(--sd3-…)` reference into the color-themes layer so the token
// inherits per-theme (feide/sikt) and per-scheme (light/dark) swaps instead of
// baking a Sikt-only hex value.
const buildColorThemeRef = (targetVariableName) =>
  `var(--${prefix}-${targetVariableName.replaceAll("/", "-")})`;

// Button-theme tokens that alias into a *published* `color-themes` token
// become `var()` refs so they follow `data-color-theme`. Hidden color-theme
// tokens aren't emitted to `color.css`, so we fall through to the literal/
// `light-dark()` path for those (and for `foundation` aliases).
const buildValue = (token, lightTree, darkTree) => {
  const alias = token?.$extensions?.["com.figma.aliasData"];
  if (alias?.targetVariableSetName === "color-themes") {
    const target = getIn(lightTree, alias.targetVariableName.split("/"));
    if (isToken(target) && !isHiddenFromPublishing(target)) {
      return buildColorThemeRef(alias.targetVariableName);
    }
  }
  const light = toCssColor(token.$value);
  if (token.$type !== "color") return light;
  const dark = resolveDarkColor(token, darkTree);
  if (dark === null || dark === light) return light;
  return `light-dark(${light}, ${dark})`;
};

const normalizeToken = (token, lightTree, darkTree) => ({
  ...token,
  $value: buildValue(token, lightTree, darkTree),
});

export const figmaButtonThemesPreprocessor = {
  name: "preprocessor/figma/button-themes/modes",
  preprocessor: (dict) => {
    const baseTree = readButtonThemeFile(BASE_FILE)["color-button"];
    const modeTrees = Object.fromEntries(
      Object.entries(MODE_FILES).map(([modeKey, fileName]) => [
        modeKey,
        readButtonThemeFile(fileName)["color-button"],
      ]),
    );
    // Keep the full root object so alias paths like `color/interaction/...`
    // can be resolved by splitting on `/` (leading `color` matches the key).
    const lightTree = readColorThemeFile(LIGHT_COLOR_THEME_FILE);
    const darkTree = readColorThemeFile(DARK_COLOR_THEME_FILE);

    dict.color = {
      ...dict.color,
      button: buildModeAwareTree(baseTree, modeTrees, {
        transformToken: (token) => normalizeToken(token, lightTree, darkTree),
        warnLabel: "preprocessor/figma/button-themes/modes",
      }),
    };

    return dict;
  },
};
