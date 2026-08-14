/** @type {import('stylelint').Config} */
export default {
  extends: "./packages/stylelint-config/index",
  rules: {},
  overrides: [
    {
      /* INFO: SDS BEM style */
      files: ["packages/**/*.css"],
      rules: {
        "selector-class-pattern": [
          "^sds-(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$",
          {
            resolveNestedSelectors: true,
          },
        ],
        "no-descending-specificity": null,
      },
    },
    {
      /* INFO: SD3 @scope style */
      files: [
        "packages/design-system/**/*.css",
        "packages/design-tokens/**/*.css",
      ],
      rules: {
        "selector-class-pattern": "",
      },
    },
    {
      files: ["**/*.module.css", "**/stories/*.css"],
      rules: {
        "selector-class-pattern": "",
      },
    },
  ],
  ignoreFiles: ["turbo/generators/template/**/*"],
};
