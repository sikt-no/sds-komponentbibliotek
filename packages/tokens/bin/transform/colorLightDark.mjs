import { colorFilter, filter } from "../filters.mjs";
import { transformHex } from "./colorDark.mjs";

/**
 * Custom Transform: Color Light-Dark
 * This change color tokens value to `light-dark(value, value)`.
 */
export const colorLightDarkTransform = {
  name: "transform/color/light-dark",
  type: "value",
  transitive: true,
  filter: (token) => filter(token) && colorFilter(token),
  transform: (token) => {
    const dark = transformHex(token.dark);
    return `light-dark(${token.$value}, ${dark})`;
  },
};
