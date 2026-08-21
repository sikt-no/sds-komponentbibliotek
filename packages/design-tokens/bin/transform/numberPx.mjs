/**
 * Custom Transform: Number
 * Changes token number value to px value.
 */
export const numberPxTransform = {
  name: "transform/number/px",
  type: "value",
  transitive: true,
  filter: (token) => token.$type === "number",
  transform: (token) => `${token.$value}px`,
};
