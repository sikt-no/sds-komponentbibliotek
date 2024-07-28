import { _color } from "./_color.mjs";

export default {
  color: {
    interaction: {
      primary: {
        strong: {
          default: {
            value: { ..._color.purple["70"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["75"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["80"].value },
            type: "color",
          },
        },
        subtle: {
          default: {
            value: { ..._color.purple["70"].value, a: "0.25" },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["70"].value, a: "0.5" },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["70"].value, a: "0.75" },
            type: "color",
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
            type: "color",
          },
          highlight: {
            value: { ..._color.purple["70"].value, a: "0.25" },
            type: "color",
          },
          pressed: {
            value: { ..._color.purple["70"].value, a: "0.5" },
            type: "color",
          },
        },
      },
      neutral: {
        strong: {
          default: {
            value: { ..._color.neutral["50"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["55"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["60"].value },
            type: "color",
          },
        },
        subtle: {
          default: {
            value: { ..._color.neutral["50"].value, a: "0.25" },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["50"].value, a: "0.5" },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["50"].value, a: "0.75" },
            type: "color",
          },
        },
        transparent: {
          default: {
            value: { ..._color.neutral["0"].value, a: "0" },
            type: "color",
          },
          highlight: {
            value: { ..._color.neutral["50"].value, a: "0.25" },
            type: "color",
          },
          pressed: {
            value: { ..._color.neutral["50"].value, a: "0.5" },
            type: "color",
          },
        },
      },
      danger: {
        strong: {
          default: {
            value: { ..._color.red["50"].value },
            type: "color",
          },
          highlight: {
            value: { ..._color.red["55"].value },
            type: "color",
          },
          pressed: {
            value: { ..._color.red["60"].value },
            type: "color",
          },
        },
      },
    },
  },
};
