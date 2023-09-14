const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    layout: {
      page: {
        default: {
          value: { ..._color.purple["10"].value },
        },
        overlay: {
          value: { ..._color.neutral["100"].value, a: "0.25" },
        },
      },
      divider: {
        strong: {
          value: { ..._color.neutral["45"].value },
        },
        subtle: {
          value: { ..._color.neutral["45"].value, a: "0.5" },
        },
      },
      focus: {
        border: {
          value: { ..._color.blue["45"].value },
        },
      },
      background: {
        default: {
          value: { ..._color.purple["15"].value },
        },
        primary: {
          value: { ..._color.purple["25"].value },
        },
        neutral: {
          value: { ..._color.neutral["15"].value },
        },
        info: {
          value: { ..._color.blue["20"].value },
        },
        success: {
          value: { ..._color.green["10"].value },
        },
        warning: {
          value: { ..._color.yellow["15"].value },
        },
        critical: {
          value: { ..._color.red["20"].value },
        },
      },
    },
  },
};
