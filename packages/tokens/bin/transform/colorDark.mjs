import Color from "tinycolor2";
import { colorFilter, filter } from "../filters.mjs";

export const transformHex = (c) => {
  const color = Color(c);
  if (color.getAlpha() === 1) {
    return color.toHexString();
  } else {
    return color.toHex8String();
  }
};

/**
 * Custom Transform: Color Dark
 * This change color tokens value to dark attribute.
 */
export const colorDarkTransform = {
  name: "transform/color/dark",
  type: "value",
  transitive: true,
  filter: (token) => filter(token) && colorFilter(token),
  transform: (token) => {
    return transformHex(token.dark);
  },
};
