import { _color } from "./_color.mjs";

export default {
  color: {
    interaction: {
      primary: {
        strong: {
          default: {
            value: { ..._color.purple["65"].value },
            dark: { ..._color.purple["70"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["60"].value },
            dark: { ..._color.purple["75"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["55"].value },
            dark: { ..._color.purple["80"].value },
            type: "color",
          },
        },
        subtle: {
          default: {
            value: "#dbd2fe",
            dark: "#2a1b64",
            type: "color",
          },
          highlight: {
            value: "#b9a8fc",
            dark: "#493597",
            type: "color",
          },
          pressed: {
            value: "#967dfc",
            dark: "#6850c9",
            type: "color",
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
            dark: { ..._color.neutral["0"].value, a: "0" },
            type: "color",
          },
          highlight: {
            value: "#f0edfe",
            dark: "#2a1b64",
            type: "color",
          },
          pressed: {
            value: "#dbd2fe",
            dark: "#493597",
            type: "color",
          },
        },
      },
      neutral: {
        strong: {
          default: {
            value: { ..._color.neutral["45"].value },
            dark: { ..._color.neutral["50"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["40"].value },
            dark: { ..._color.neutral["55"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["35"].value },
            dark: { ..._color.neutral["60"].value },
            type: "color",
          },
        },
        subtle: {
          default: {
            value: "#dcdcdc",
            dark: "#282145",
            type: "color",
          },
          highlight: {
            value: "#b8b8b8",
            dark: "#454059",
            type: "color",
          },
          pressed: {
            value: "#969696",
            dark: "#62606c",
            type: "color",
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
            dark: { ..._color.neutral["0"].value, a: "0" },
            type: "color",
          },
          highlight: {
            value: "#f0f0f0",
            dark: "#282145",
            type: "color",
          },
          pressed: {
            value: "#dcdcdc",
            dark: "#454059",
            type: "color",
          },
        },
      },
      danger: {
        strong: {
          default: {
            value: { ..._color.red["40"].value },
            dark: { ..._color.red["50"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.red["35"].value },
            dark: { ..._color.red["55"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.red["30"].value },
            dark: { ..._color.red["60"].value },
            type: "color",
          },
        },
      },
    },
  },
};
