import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../stories/**/*.mdx",
    "../../../packages/*/stories/**/*.mdx",
    "../../../packages/*/stories/*.stories.@(js|jsx|ts|tsx)",
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
    const { default: svgr } = await import("vite-plugin-svgr");
    // TODO: Logo.tsx uses the CRA-style `{ ReactComponent }` named import.
    // Scoping to **/Logo.svg is a workaround — the real fix is to migrate
    // Logo.tsx to the Vite import syntax (`import LogoSvg from "../Logo.svg?react"`)
    // and drop this plugin override entirely.
    config.plugins = [
      svgr({
        include: "**/Logo.svg",
        svgrOptions: { exportType: "named", namedExport: "ReactComponent" },
      }),
      ...(config.plugins ?? []),
    ];
    return config;
  },
  features: {
    componentsManifest: true,
  },
};

export default config;
