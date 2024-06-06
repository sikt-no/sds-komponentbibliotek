import type { Preview } from "@storybook/react";
import "../../packages/core/index.pcss";
import "../../packages/logo/logo.pcss";
import "../../packages/icons/icon.pcss";
import "../../packages/input/input.pcss";
import "../../packages/button/button.pcss";
import "../../packages/button/button-link.pcss";
import "../../packages/form/fieldset.pcss";
import "../../packages/form/form-field.pcss";
import "../../packages/checkbox/checkbox-input.pcss";
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
    actions: { argTypesRegex: "^on.*" },
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
          "Tokens",
          ["Readme", "Changelog", "Size", "Layout", "Color", "Typography", "*"],
          "Core",
          ["Readme", "Changelog", "Typography", "Grid", "*"],
          "*",
          ["*", ["Readme", "Changelog"]],
          "Utils",
          "Config",
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
