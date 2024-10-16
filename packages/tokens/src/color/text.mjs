import { _color } from "./_color.mjs";

export default {
  color: {
    text: {
      primary: {
        value: { ..._color.purple["10"].value },
        dark: { ..._color.neutral["100"].value },
        type: "color",
      },
      on_strong: {
        value: { ..._color.neutral["100"].value },
        dark: { ..._color.purple["10"].value },
        type: "color",
      },
      secondary: {
        value: "#484165",
        dark: "#c2bfcc",
        type: "color",
      },
      critical: {
        value: { ..._color.red["35"].value },
        dark: { ..._color.red["50"].value },
        type: "color",
      },
    },
  },
};
