import React from "react";
import type { Preview } from "@storybook/react";
import "../../packages/core/index.pcss";
import "../../packages/icons/icon.pcss";
import "../../packages/button/button.pcss";
import "../../packages/button/button-link.pcss";
import "./style.css";

const preview: Preview = {
  globalTypes: {
    scheme: {
      name: "Scheme",
      description: "Select light or dark theme",
      defaultValue: "",
      toolbar: {
        items: [
          { value: "", icon: "mirror", title: "Color scheme" },
          { value: "light", icon: "circlehollow", title: "Light mode" },
          { value: "dark", icon: "circle", title: "Dark mode" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const scheme = context.globals;
      const rootElement = document.querySelector("html");

      if (rootElement !== null) {
        rootElement.setAttribute("data-color-scheme", scheme.scheme);
      }

      return <Story />;
    },
  ],
  parameters: {
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
          [
            "Readme",
            "Color",
            "Spacing",
            "Apperance",
            "Typography",
            "Heading",
            "*",
          ],
          "*",
          ["*", ["Readme", "Changelog"]],
          "Utils",
          "Config",
        ],
      },
    },
  },
};

export default preview;
