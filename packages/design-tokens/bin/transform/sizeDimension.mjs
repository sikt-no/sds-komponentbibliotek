const getBasePxFontSize = (config) => config?.basePxFontSize || 16;

/**
 * Custom Transform: Dimension Rem (modes)
 * The built-in "size/pxToRem" transform rem-scales a token's own $value
 * for $type "dimension" tokens, but it can't reach into $extensions. This
 * mirrors the same math into $extensions.modes.
 */
export const sizeDimensionTransform = {
  name: "transform/size/dimension",
  type: "value",
  transitive: true,
  filter: (token) => token.$type === "dimension",
  transform: (token, config) => {
    const baseFont = getBasePxFontSize(config);
    for (const mode of Object.values(token.$extensions?.modes ?? {})) {
      mode.$value =
        mode.$value === 0 ? mode.$value : `${mode.$value / baseFont}rem`;
    }
    return token.$value;
  },
};
