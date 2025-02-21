import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sdsConfig from "./packages/eslint-config/index.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      "**/eslint.config.mjs",
      "**/*.config.ts",
      "docs/tutorial/**/*",
      "turbo/generators/**/*",
      "apps/gatsby",
      "packages/**/figma/*",
    ],
  },
  ...sdsConfig,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {},
  },
  {
    files: [
      "**/jest.*.[jt]s?(x)",
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
    ],

    rules: {
      "@typescript-eslint/require-await": "off",
      "testing-library/no-container": "off",
      "testing-library/no-node-access": "off",
    },
  },
  {
    files: ["**/*.figma.[jt]s?(x)"],

    rules: {
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-empty-function": "off",
    },
  },
];
