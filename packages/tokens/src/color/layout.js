const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    layout: {
      page: {
        default: {
          value: { ..._color.neutral["95"].value },
        },
        overlay: {
          value: { ..._color.neutral["0"].value, a: "0.25" },
        },
      },
      divider: {
        strong: {
          value: { ..._color.neutral["45"].value },
        },
        subtle: {
          value: { ..._color.neutral["45"].value, a: "0.25" },
        },
      },
      focus: {
        border: {
          value: { ..._color.blue["50"].value },
        },
      },
      background: {
        default: {
          value: { ..._color.neutral["100"].value },
        },
        primary: {
          value: { ..._color.purple["95"].value },
        },
        neutral: {
          value: { ..._color.neutral["90"].value },
        },
        info: {
          value: { ..._color.blue["90"].value },
        },
        success: {
          value: { ..._color.green["95"].value },
        },
        warning: {
          value: { ..._color.yellow["90"].value },
        },
        critical: {
          value: { ..._color.red["90"].value },
        },
      },
    },
  },
};
