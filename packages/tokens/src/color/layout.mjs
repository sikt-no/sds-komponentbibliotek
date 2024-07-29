import { _color } from "./_color.mjs";

export default {
  color: {
    layout: {
      page: {
        default: {
          value: { ..._color.neutral["95"].value },
          dark: { ..._color.purple["10"].value },
          type: "color",
        },
        overlay: {
          value: { ..._color.neutral["0"].value, a: "0.25" },
          dark: { ..._color.neutral["100"].value, a: "0.25" },
          type: "color",
        },
      },
      divider: {
        strong: {
          value: { ..._color.neutral["45"].value },
          dark: { ..._color.neutral["45"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.neutral["45"].value, a: "0.25" },
          dark: { ..._color.neutral["45"].value, a: "0.5" },
          type: "color",
        },
      },
      focus: {
        border: {
          value: { ..._color.blue["50"].value },
          dark: { ..._color.blue["45"].value },
          type: "color",
        },
      },
      background: {
        default: {
          value: { ..._color.neutral["100"].value },
          dark: { ..._color.purple["15"].value },
          type: "color",
        },
        primary: {
          value: { ..._color.purple["95"].value },
          dark: { ..._color.purple["25"].value },
          type: "color",
        },
        neutral: {
          value: { ..._color.neutral["90"].value },
          dark: { ..._color.neutral["15"].value },
          type: "color",
        },
        info: {
          value: { ..._color.blue["90"].value },
          dark: { ..._color.blue["20"].value },
          type: "color",
        },
        success: {
          value: { ..._color.green["95"].value },
          dark: { ..._color.green["10"].value },
          type: "color",
        },
        warning: {
          value: { ..._color.yellow["90"].value },
          dark: { ..._color.yellow["15"].value },
          type: "color",
        },
        critical: {
          value: { ..._color.red["90"].value },
          dark: { ..._color.red["20"].value },
          type: "color",
        },
      },
    },
  },
};
