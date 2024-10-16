import { _color } from "./_color.mjs";

export default {
  color: {
    support: {
      info: {
        strong: {
          value: { ..._color.blue["50"].value },
          dark: { ..._color.blue["60"].value },
          type: "color",
        },
        subtle: {
          value: "#bfd7ff",
          dark: "#1f4198",
          type: "color",
        },
      },
      success: {
        strong: {
          value: { ..._color.green["25"].value },
          dark: { ..._color.green["35"].value },
          type: "color",
        },
        subtle: {
          value: "#c2dcd3",
          dark: "#0c2a42",
          type: "color",
        },
      },
      warning: {
        default: {
          value: { ..._color.yellow["50"].value },
          dark: { ..._color.yellow["50"].value },
          type: "color",
        },
        subtle: {
          value: "#ffeebf",
          dark: "#855e19",
          type: "color",
        },
      },
      critical: {
        strong: {
          value: { ..._color.red["40"].value },
          dark: { ..._color.red["50"].value },
          type: "color",
        },
        subtle: {
          value: "#f2bfdb",
          dark: "#85015f",
          type: "color",
        },
      },
    },
  },
};
