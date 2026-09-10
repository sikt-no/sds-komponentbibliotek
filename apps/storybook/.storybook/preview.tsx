import type { Preview } from "@storybook/react-vite";
import "../../../packages/design-system/src/css/index.css";
import "../../../packages/core/src/index.css";
import "../../../packages/design-system/src/css/index.css";
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
import "../../../packages/design-system/src/css/index.css";
import "./style.css";

const preview: Preview = {
  globalTypes: {
    scheme: {
      name: "Scheme",
      description: "Select light or dark scheme",
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
    theme: {
      name: "Theme",
      description: "Select color theme",
      defaultValue: "",
      toolbar: {
        items: [
          { value: "", icon: "switchalt", title: "Color theme" },
          { value: "gray", icon: "playnext", title: "Sikt gray" },
          { value: "white", icon: "playnext", title: "Sikt white" },
          { value: "feide", icon: "playnext", title: "Feide" },
        ],
        dynamicTitle: true,
      },
    },
    space: {
      name: "Space",
      description: "Select space theme",
      defaultValue: "",
      toolbar: {
        items: [
          { value: "", icon: "grow", title: "Space theme" },
          { value: "compact", icon: "playnext", title: "Compact" },
          { value: "comfortable", icon: "playnext", title: "Comfortable" },
          { value: "spacious", icon: "playnext", title: "Spacious" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { scheme, theme, space } = context.globals;
      const rootElement = document.querySelector("html");

      if (rootElement !== null) {
        if (scheme !== "") {
          rootElement.setAttribute(
            "style",
            `color-scheme: only ${scheme as string}`,
          );
        } else {
          rootElement.setAttribute("style", `color-scheme: light dark`);
        }

        if (theme !== "") {
          rootElement.setAttribute("data-color-theme", theme as string);
        }

        if (space !== "") {
          rootElement.setAttribute("data-space-theme", space as string);
        }
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
          "SD3",
          [
            "Introduction",
            "Tokens",
            ["Readme", "Changelog", "Color", "Typography", "Size", "*"],
            "*",
            ["Readme", "Changelog"],
          ],
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
