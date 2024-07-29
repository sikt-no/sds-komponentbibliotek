import { _color } from "./_color.mjs";

export default {
  color: {
    brand: {
      primary: {
        strong: {
          value: { ..._color.purple["65"].value },
          dark: { ..._color.purple["70"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.purple["65"].value, a: "0.25" },
          dark: { ..._color.purple["70"].value, a: "0.25" },
          type: "color",
        },
      },
      accent: {
        strong: {
          value: { ..._color.purple["10"].value },
          dark: { ..._color.purple["95"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.purple["10"].value, a: "0.25" },
          dark: { ..._color.purple["95"].value, a: "0.25" },
          type: "color",
        },
      },
      neutral: {
        strong: {
          value: { ..._color.neutral["45"].value },
          dark: { ..._color.neutral["50"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.neutral["45"].value, a: "0.25" },
          dark: { ..._color.neutral["50"].value, a: "0.25" },
          type: "color",
        },
      },
    },
  },
};
