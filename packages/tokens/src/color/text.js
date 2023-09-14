const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    text: {
      primary: {
        value: { ..._color.purple["10"].value },
      },
      on_strong: {
        value: { ..._color.neutral["100"].value },
      },
      secondary: {
        value: { ..._color.purple["10"].value, a: "0.75" },
      },
      warning: {
        value: { ..._color.red["35"].value },
      },
    },
  },
};
