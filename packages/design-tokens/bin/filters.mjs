export const isHiddenFromPublishing = (token) =>
  !token.$extensions?.["com.figma.hiddenFromPublishing"];

export const isColor = (token) =>
  token.$type === "color" ||
  /* INFO: Hack to solve Figma missing DTCG types */ token.attributes
    .category === "color";

export const isFontWeight = (token) =>
  token.$type === "fontWeight" ||
  /* INFO: Hack to solve Figma missing DTCG types */ (token.attributes
    .category === "typography" &&
    token.attributes.type === "weight");
