import type { StorybookConfig } from "@storybook/react-webpack5";
// TODO: remove globby when fixed https://github.com/storybookjs/storybook/pull/22110
import { globbySync } from "globby";

const config: StorybookConfig = {
  stories: globbySync(
    [
      "../**/*.stories.mdx",
      "../../packages/!(__example__)**/*.stories.mdx",
      "../../packages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    { cwd: "./.storybook" }
  ),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config?.module?.rules?.push({
      test: /\.pcss$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    config?.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
        {
          loader: "file-loader",
          options: {
            name: "static/media/[path][name].[ext]",
          },
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    return config;
  },
};

export default config;
