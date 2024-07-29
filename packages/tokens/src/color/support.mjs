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
          value: { ..._color.blue["50"].value, a: "0.25" },
          dark: { ..._color.blue["60"].value, a: "0.25" },
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
          value: { ..._color.green["25"].value, a: "0.25" },
          dark: { ..._color.green["35"].value, a: "0.25" },
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
          value: { ..._color.yellow["50"].value, a: "0.25" },
          dark: { ..._color.yellow["50"].value, a: "0.25" },
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
          value: { ..._color.red["40"].value, a: "0.25" },
          dark: { ..._color.red["50"].value, a: "0.5" },
          type: "color",
        },
      },
    },
  },
};
