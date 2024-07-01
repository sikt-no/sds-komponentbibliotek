const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    interaction: {
      primary: {
        strong: {
          default: {
            value: { ..._color.purple["65"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["60"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["55"].value },
            type: "color",
          },
        },
        subtle: {
          default: {
            value: { ..._color.purple["65"].value, a: "0.25" },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["65"].value, a: "0.5" },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["65"].value, a: "0.75" },
            type: "color",
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["65"].value, a: "0.1" },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["65"].value, a: "0.25" },
            type: "color",
          },
        },
      },
      neutral: {
        strong: {
          default: {
            value: { ..._color.neutral["45"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["40"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["35"].value },
            type: "color",
          },
        },
        subtle: {
          default: {
            value: { ..._color.neutral["45"].value, a: "0.25" },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["45"].value, a: "0.5" },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["45"].value, a: "0.75" },
            type: "color",
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["45"].value, a: "0.1" },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["45"].value, a: "0.25" },
            type: "color",
          },
        },
      },
      danger: {
        strong: {
          default: {
            value: { ..._color.red["40"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.red["35"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.red["30"].value },
            type: "color",
          },
        },
      },
    },
  },
};
