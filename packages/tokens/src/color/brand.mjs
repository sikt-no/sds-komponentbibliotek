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
          value: "#dbd2fe",
          dark: "#2a1b64",
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
          value: "#c2bfcb",
          dark: "#433a65",
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
          value: "#dcdcdc",
          dark: "#282145",
          type: "color",
        },
      },
    },
  },
};
