/** @type {import('stylelint').Config} */
export default {
  extends: "./packages/stylelint-config/index",
  rules: {
    "selector-class-pattern": [
      "^sds-(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
      },
    ],
    "no-descending-specificity": null,
  },
  overrides: [
    {
      files: ["**/*.module.css", "**/stories/*.css"],
      rules: {
        "selector-class-pattern": "",
      },
    },
  ],
  ignoreFiles: ["turbo/generators/template/**/*"],
};
