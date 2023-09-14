const _base = require("./_color");
const _color = _base._color;

module.exports = {
  color: {
    support: {
      info: {
        strong: {
          value: { ..._color.blue["60"].value },
        },
        subtle: {
          value: { ..._color.blue["60"].value, a: "0.25" },
        },
      },
      success: {
        strong: {
          value: { ..._color.green["35"].value },
        },
        subtle: {
          value: { ..._color.green["35"].value, a: "0.25" },
        },
      },
      critical: {
        strong: {
          value: { ..._color.red["50"].value },
        },
        subtle: {
          value: { ..._color.red["50"].value, a: "0.5" },
        },
      },
    },
  },
};
