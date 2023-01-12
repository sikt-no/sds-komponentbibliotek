import "../../packages/core/index.pcss";

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
        "GettingStarted",
        "Core",
        [
          "Core",
          "Color",
          "Spacing",
          "Logotype",
          "Iconography",
          "Typography",
          "Heading",
          "*",
        ],
        "*",
        ["Readme", "*"],
      ],
    },
  },
};
