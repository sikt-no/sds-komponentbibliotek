import type { Preview } from "@storybook/react-vite";
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
          rootElement.removeAttribute("style");
        }

        if (theme !== "") {
          rootElement.setAttribute("data-color-theme", theme as string);
        } else {
          rootElement.removeAttribute("data-color-theme");
        }

        if (space !== "") {
          rootElement.setAttribute("data-space-theme", space as string);
        } else {
          rootElement.removeAttribute("data-space-theme");
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
            "Design Tokens",
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
