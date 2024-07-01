const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    support: {
      info: {
        strong: {
          value: { ..._color.blue["50"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.blue["50"].value, a: "0.25" },
          type: "color",
        },
      },
      success: {
        strong: {
          value: { ..._color.green["25"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.green["25"].value, a: "0.25" },
          type: "color",
        },
      },
      warning: {
        default: {
          value: { ..._color.yellow["50"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.yellow["50"].value, a: "0.25" },
          type: "color",
        },
      },
      critical: {
        strong: {
          value: { ..._color.red["40"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.red["40"].value, a: "0.25" },
          type: "color",
        },
      },
    },
  },
};
