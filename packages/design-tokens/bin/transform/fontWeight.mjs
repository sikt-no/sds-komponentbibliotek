import { isFontWeight } from "../filters.mjs";

const fontWeights = {
  Bold: 700,
  Semibold: 600,
  Regular: 400,
};

/**
 * Custom Transform: Font Weight
 * Changes token string value to numeric value.
 */
export const fontWeightTransform = {
  name: "transform/font/weight",
  type: "value",
  transitive: true,
  filter: (token) => isFontWeight(token),
  transform: (token) => {
    for (const mode of Object.values(token.$extensions?.modes ?? {})) {
      mode.$value = fontWeights[mode.$value];
    }
    return fontWeights[token.$value];
  },
};
