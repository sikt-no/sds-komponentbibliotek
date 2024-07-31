/* eslint-disable @typescript-eslint/no-var-requires */
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  plugins: ["import"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
    "import/order": [
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
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
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
  overrides: [
    {
      files: [
        "**/jest.*.[jt]s?(x)",
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
      ],
      plugins: ["jest", "testing-library"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
