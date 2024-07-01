const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    layout: {
      page: {
        default: {
          value: { ..._color.neutral["95"].value },
          type: "color",
        },
        overlay: {
          value: { ..._color.neutral["0"].value, a: "0.25" },
          type: "color",
        },
      },
      divider: {
        strong: {
          value: { ..._color.neutral["45"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.neutral["45"].value, a: "0.25" },
          type: "color",
        },
      },
      focus: {
        border: {
          value: { ..._color.blue["50"].value },
          type: "color",
        },
      },
      background: {
        default: {
          value: { ..._color.neutral["100"].value },
          type: "color",
        },
        primary: {
          value: { ..._color.purple["95"].value },
          type: "color",
        },
        neutral: {
          value: { ..._color.neutral["90"].value },
          type: "color",
        },
        info: {
          value: { ..._color.blue["90"].value },
          type: "color",
        },
        success: {
          value: { ..._color.green["95"].value },
          type: "color",
        },
        warning: {
          value: { ..._color.yellow["90"].value },
          type: "color",
        },
        critical: {
          value: { ..._color.red["90"].value },
          type: "color",
        },
      },
    },
  },
};
