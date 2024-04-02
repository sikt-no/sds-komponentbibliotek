import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
// TODO: remove globby when fixed https://github.com/storybookjs/storybook/pull/22110
import { globbySync } from "globby";

const config: StorybookConfig = {
  framework: getAbsolutePath("@storybook/react-webpack5"),
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  stories: globbySync(
    [
      "../**/stories/*.mdx",
      "../../packages/**/stories/**/*.mdx",
      "../../packages/**/stories/*.stories.@(js|jsx|ts|tsx)",
    ],
    { cwd: "./.storybook" },
  ),
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    // TODO: add again when issue is fixed https://github.com/whitespace-se/storybook-addon-html/issues/104
    // "@whitespace/storybook-addon-html",
    getAbsolutePath("@storybook/addon-styling-webpack"),
    {
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {},
              },
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
            ],
          },
        ],
      },
    },
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
