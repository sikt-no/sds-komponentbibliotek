import { _color } from "./_color.mjs";

export default {
  color: {
    brand: {
      primary: {
        strong: {
          value: { ..._color.purple["65"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.purple["65"].value, a: "0.25" },
          type: "color",
        },
      },
      accent: {
        strong: {
          value: { ..._color.purple["10"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.purple["10"].value, a: "0.25" },
          type: "color",
        },
      },
      neutral: {
        strong: {
          value: { ..._color.neutral["45"].value },
          type: "color",
        },
        subtle: {
          value: { ..._color.neutral["45"].value, a: "0.25" },
          type: "color",
        },
      },
    },
  },
};
