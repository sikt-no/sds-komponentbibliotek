import js from "@eslint/js";

import restrictedGlobals from "confusing-browser-globals";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import jest from "eslint-plugin-jest";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintPluginImportX.flatConfigs.typescript,
  eslintConfigPrettier,
  {
    plugins: { "import-x": eslintPluginImportX },

    languageOptions: {
      globals: { ...globals.browser },

      ecmaVersion: 2024,

      parserOptions: { projectService: true },
    },

    settings: { react: { version: "detect" } },

    rules: {
      "no-restricted-globals": [
        "error",
        ...restrictedGlobals.map((global) => ({
          name: global,
          message:
            "This is a browser global. If you do intend to use the global, prefix it with `window.`.",
        })),
      ],

      "import-x/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "jsx-a11y/anchor-ambiguous-text": [
        "error",
        {
          words: [
            "lenke",
            "klikk",
            "klikk her",
            "les",
            "les mer",
            "les her",
            "les mer her",
            "se",
            "se mer",
            "se mer her",
            "her",
            "mer",
          ],
        },
      ],

      "jsx-a11y/control-has-associated-label": "error",
      "react/jsx-no-useless-fragment": "warn",
      "react/hook-use-state": "error",
      "react/jsx-boolean-value": ["error", "never"],

      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never", propElementValues: "always" },
      ],

      "react/jsx-fragments": ["error", "syntax"],
      "react/no-array-index-key": "warn",
      "react/no-danger": "warn",
      "react/self-closing-comp": "error",

      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],
    },
  },
  // Jest and Testing Library configs need to be separate so ESLint can merge them. Otherwise they would conflict.
  {
    files: [
      "**/jest.*.[jt]s?(x)",
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    ...jest.configs["flat/recommended"],
  },
  {
    files: [
      "**/jest.*.[jt]s?(x)",
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    ...testingLibrary.configs["flat/react"],
  },
]);
