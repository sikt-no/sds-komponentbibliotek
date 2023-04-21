import "../../packages/core/index.pcss";
import "./style.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Core",
        ["Core", "Color", "Spacing", "Apperance", "Typography", "Heading", "*"],
        "*",
        "Utils",
        "Config",
      ],
    },
  },
};
