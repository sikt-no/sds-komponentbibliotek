const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    brand: {
      primary: {
        strong: {
          value: { ..._color.purple["70"].value },
        },
        subtle: {
          value: { ..._color.purple["70"].value, a: "0.25" },
        },
      },
      accent: {
        strong: {
          value: { ..._color.purple["95"].value },
        },
        subtle: {
          value: { ..._color.purple["95"].value, a: "0.25" },
        },
      },
      neutral: {
        strong: {
          value: { ..._color.neutral["50"].value },
        },
        subtle: {
          value: { ..._color.neutral["50"].value, a: "0.25" },
        },
      },
    },
  },
};
