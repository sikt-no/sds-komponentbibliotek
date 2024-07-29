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
            value: { ..._color.purple["65"].value, a: "0.25" },
            dark: { ..._color.purple["70"].value, a: "0.25" },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["65"].value, a: "0.5" },
            dark: { ..._color.purple["70"].value, a: "0.5" },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["65"].value, a: "0.75" },
            dark: { ..._color.purple["70"].value, a: "0.75" },
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
            value: { ..._color.purple["65"].value, a: "0.1" },
            dark: { ..._color.purple["70"].value, a: "0.25" },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["65"].value, a: "0.25" },
            dark: { ..._color.purple["70"].value, a: "0.5" },
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
            value: { ..._color.neutral["45"].value, a: "0.25" },
            dark: { ..._color.neutral["50"].value, a: "0.25" },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["45"].value, a: "0.5" },
            dark: { ..._color.neutral["50"].value, a: "0.5" },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["45"].value, a: "0.75" },
            dark: { ..._color.neutral["50"].value, a: "0.75" },
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
            value: { ..._color.neutral["45"].value, a: "0.1" },
            dark: { ..._color.neutral["50"].value, a: "0.25" },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["45"].value, a: "0.25" },
            dark: { ..._color.neutral["50"].value, a: "0.5" },
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
