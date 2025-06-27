import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: "@storybook/react-webpack5",
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  stories: [
    "../stories/**/*.mdx",
    "../../../packages/*/stories/**/*.mdx",
    "../../../packages/*/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../static"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  addons: [
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@whitespace/storybook-addon-html",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {},
              },
              {
                loader: "postcss-loader",
                options: { implementation: "postcss" },
              },
            ],
          },
        ],
      },
    },
    "@storybook/addon-webpack5-compiler-swc",
  ],
  core: {
    disableTelemetry: true,
  },
  webpackFinal: (config) => {
    config.module?.rules?.push({
      test: /\.pcss$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    config.module?.rules?.push({
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
