const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    text: {
      primary: {
        value: { ..._color.purple["10"].value },
        type: "color",
      },
      on_strong: {
        value: { ..._color.neutral["100"].value },
        type: "color",
      },
      secondary: {
        value: { ..._color.purple["10"].value, a: "0.75" },
        type: "color",
      },
      critical: {
        value: { ..._color.red["35"].value },
        type: "color",
      },
    },
  },
};
