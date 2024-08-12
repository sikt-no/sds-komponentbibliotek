import type { Preview } from "@storybook/react";
import "../../../packages/core/src/index.pcss";
import "../../../packages/logo/src/logo.pcss";
import "../../../packages/icons/src/icon.pcss";
import "../../../packages/input/src/input.pcss";
import "../../../packages/button/src/button.pcss";
import "../../../packages/button/src/button-link.pcss";
import "../../../packages/form/src/fieldset.pcss";
import "../../../packages/form/src/form-field.pcss";
import "../../../packages/checkbox/src/checkbox-input.pcss";
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
