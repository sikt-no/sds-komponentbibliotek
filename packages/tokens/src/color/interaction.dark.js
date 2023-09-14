const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    interaction: {
      primary: {
        strong: {
          default: {
            value: { ..._color.purple["70"].value },
          },
          highlight: {
            value: { ..._color.purple["75"].value },
          },
          pressed: {
            value: { ..._color.purple["80"].value },
          },
        },
        subtle: {
          default: {
            value: { ..._color.purple["70"].value, a: "0.25" },
          },
          highlight: {
            value: { ..._color.purple["70"].value, a: "0.5" },
          },
          pressed: {
            value: { ..._color.purple["70"].value, a: "0.75" },
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
          },
          highlight: {
            value: { ..._color.purple["70"].value, a: "0.25" },
          },
          pressed: {
            value: { ..._color.purple["70"].value, a: "0.5" },
          },
        },
      },
      neutral: {
        strong: {
          default: {
            value: { ..._color.neutral["50"].value },
          },
          highlight: {
            value: { ..._color.neutral["55"].value },
          },
          pressed: {
            value: { ..._color.neutral["60"].value },
          },
        },
        subtle: {
          default: {
            value: { ..._color.neutral["50"].value, a: "0.25" },
          },
          highlight: {
            value: { ..._color.neutral["50"].value, a: "0.5" },
          },
          pressed: {
            value: { ..._color.neutral["50"].value, a: "0.75" },
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
          },
          highlight: {
            value: { ..._color.neutral["50"].value, a: "0.25" },
          },
          pressed: {
            value: { ..._color.neutral["50"].value, a: "0.5" },
          },
        },
      },
      danger: {
        strong: {
          default: {
            value: { ..._color.red["50"].value },
          },
          highlight: {
            value: { ..._color.red["55"].value },
          },
          pressed: {
            value: { ..._color.red["60"].value },
          },
        },
      },
    },
  },
};
