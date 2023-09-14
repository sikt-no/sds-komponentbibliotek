const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    interaction: {
      primary: {
        strong: {
          default: {
            value: { ..._color.purple["65"].value },
          },
          highlight: {
            value: { ..._color.purple["60"].value },
          },
          pressed: {
            value: { ..._color.purple["55"].value },
          },
        },
        subtle: {
          default: {
            value: { ..._color.purple["65"].value, a: "0.25" },
          },
          highlight: {
            value: { ..._color.purple["65"].value, a: "0.5" },
          },
          pressed: {
            value: { ..._color.purple["65"].value, a: "0.75" },
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
          },
          highlight: {
            value: { ..._color.purple["65"].value, a: "0.1" },
          },
          pressed: {
            value: { ..._color.purple["65"].value, a: "0.25" },
          },
        },
      },
      neutral: {
        strong: {
          default: {
            value: { ..._color.neutral["45"].value },
          },
          highlight: {
            value: { ..._color.neutral["40"].value },
          },
          pressed: {
            value: { ..._color.neutral["35"].value },
          },
        },
        subtle: {
          default: {
            value: { ..._color.neutral["45"].value, a: "0.25" },
          },
          highlight: {
            value: { ..._color.neutral["45"].value, a: "0.5" },
          },
          pressed: {
            value: { ..._color.neutral["45"].value, a: "0.75" },
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
          },
          highlight: {
            value: { ..._color.neutral["45"].value, a: "0.1" },
          },
          pressed: {
            value: { ..._color.neutral["45"].value, a: "0.25" },
          },
        },
      },
      danger: {
        strong: {
          default: {
            value: { ..._color.red["40"].value },
          },
          highlight: {
            value: { ..._color.red["35"].value },
          },
          pressed: {
            value: { ..._color.red["30"].value },
          },
        },
      },
    },
  },
};
