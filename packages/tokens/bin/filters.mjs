export const filter = (token) => !token.attributes?.category?.startsWith("_");
export const colorFilter = (token) =>
  token.attributes?.category === "color" || token.type === "color";
