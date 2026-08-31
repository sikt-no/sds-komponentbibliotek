import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { Features } from "lightningcss";

const __dirname = dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV === "development";
const excludeSd3 = isDev ? "" : "!(design-*)";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../stories/**/*.mdx",
    `../../../packages/${excludeSd3}**/stories/**/*.mdx`,
    `../../../packages/${excludeSd3}**/stories/*.stories.@(js|jsx|ts|tsx)`,
  ],
  staticDirs: ["../static"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: resolve(__dirname, "../../../tsconfig.json"),
      exclude: ["**/icons/build/**", "**/.storybook/**"],
      include: [resolve(__dirname, "../../../packages/**/*.tsx")],
      // Without this, docgen returns bare type names ("ButtonSize | undefined") which
      // Storybook maps to type "other", causing mapArgsToTypes to drop URL args like
      // args=size:small. With true, docgen produces enum values, Storybook's parseLiteral
      // strips the TS string-literal quotes, and URL args pass validation correctly.
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  addons: [
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@whitespace/storybook-addon-html",
    "@storybook/addon-mcp",
  ],
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    type PluginOption = NonNullable<typeof config.plugins>[number];
    const { default: svgr } = await import("vite-plugin-svgr");
    config.plugins = [
      svgr({ include: "**/*.svg" }),
      ...(config.plugins ?? []),
    ].filter((p): p is PluginOption => p != null);
    config.css = {
      lightningcss: {
        exclude: Features.LightDark,
      },
    };
    return config;
  },
  features: {
    componentsManifest: true,
  },
};

export default config;
