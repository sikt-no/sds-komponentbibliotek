const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    text: {
      primary: {
        value: { ..._color.neutral["100"].value },
      },
      on_strong: {
        value: { ..._color.purple["10"].value },
      },
      secondary: {
        value: { ..._color.neutral["100"].value, a: "0.75" },
      },
      critical: {
        value: { ..._color.red["50"].value },
      },
    },
  },
};
