const _base = {
  purple: {
    value: { h: "252", s: "95" },
  },
  neutral: {
    value: { h: "0", s: "0" },
  },
  green: {
    value: { h: "160", s: "83" },
  },
  red: {
    value: { h: "327", s: "100" },
  },
  yellow: {
    value: { h: "44", s: "100" },
  },
  blue: {
    value: { h: "217", s: "100" },
  },
};

export const _color = {};
Object.keys(_base).forEach((colorValue) => {
  const variants = {};
  const colorBaseValue = _base[colorValue].value;
  [...Array(21).keys()].forEach((variantsValue) => {
    const l = variantsValue * 5;
    variants[l] = {
      value: { ...colorBaseValue, l },
    };
  });
  _color[colorValue] = {
    ...variants,
  };
});
