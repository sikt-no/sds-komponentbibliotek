module.exports = {
  extends: ["./packages/eslint-config"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js", "*.config.ts", "docs/tutorial/**"],
  rules: {},
  overrides: [
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
  ],
};
