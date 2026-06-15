import type { Preview } from "@storybook/react-webpack5";
import "../../../packages/core/src/index.css";
import "../../../packages/logo/src/logo.css";
import "../../../packages/icons/src/icon.css";
import "../../../packages/input/src/input.css";
import "../../../packages/button/src/button.css";
import "../../../packages/button/src/button-link.css";
import "../../../packages/form/src/fieldset.css";
import "../../../packages/form/src/form-field.css";
import "../../../packages/checkbox/src/checkbox-input.css";
import "../../../packages/table/src/table.css";
import "../../../packages/list/src/list.css";
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
        rootElement.setAttribute("data-color-scheme", scheme.scheme as string);
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
    docs: {
      codePanel: true,
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
