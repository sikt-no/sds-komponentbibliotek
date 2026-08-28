/**
 * Custom Transform: Number
 * Changes token number value to px value.
 */
export const numberPxTransform = {
  name: "transform/number/px",
  type: "value",
  transitive: true,
  filter: (token) => token.$type === "number",
  transform: (token) => {
    for (const mode of Object.values(token.$extensions?.modes ?? {})) {
      mode.$value = `${mode.$value}px`;
    }
    return `${token.$value}px`;
  },
};
