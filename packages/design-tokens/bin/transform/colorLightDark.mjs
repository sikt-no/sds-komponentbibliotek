import Color from "tinycolor2";
import { isColor } from "../filters.mjs";

const toHex = (value) => {
  if (typeof value === "string") return value;
  const color = Color(value.hex);
  color.setAlpha(value.alpha ?? 1);
  return color.getAlpha() === 1 ? color.toHexString() : color.toHex8String();
};

const modeHex = (token, modeKey) => {
  const mode = token.$extensions?.modes?.[modeKey];
  return mode ? toHex(mode.$value) : undefined;
};

/**
 * Custom Transform: Color Light-Dark
 * Combines the Sikt light/dark modes into `light-dark()` on the token's
 * own $value, and attaches the same for the "grey" (Sikt grey/dark) and
 * "feide" (Feide light/dark) themes onto `token.themes`, for the
 * formatter to emit as [data-color-theme] overrides.
 */
export const colorLightDarkTransform = {
  name: "transform/color/light-dark",
  type: "value",
  filter: (token) => isColor(token),
  transform: (token) => {
    const siktDark = modeHex(token, "sikt-dark");
    const siktWhite = modeHex(token, "sikt-white");
    const feideLight = modeHex(token, "feide-light");
    const feideDark = modeHex(token, "feide-dark");

    token.themes = {
      white:
        siktWhite && siktDark
          ? `light-dark(${siktWhite}, ${siktDark})`
          : undefined,
      feide:
        feideLight && feideDark
          ? `light-dark(${feideLight}, ${feideDark})`
          : undefined,
    };

    return siktDark ? `light-dark(${token.$value}, ${siktDark})` : token.$value;
  },
};
