/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "media-feature-name-disallowed-list": [
      "^max-width",
      {
        message: "Use min-width for a mobile-first approach",
      },
    ],
    "selector-max-type": 0,
  },
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
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: [
              "export",
              "import",
              "global",
              "local",
              "external",
            ],
          },
        ],
        "selector-type-no-unknown": [
          true,
          {
            ignoreTypes: ["from"],
          },
        ],
        "property-no-unknown": [
          true,
          {
            ignoreProperties: ["composes", "compose-with"],
            ignoreSelectors: [":export", /^:import/],
          },
        ],
        "at-rule-no-unknown": [
          true,
          {
            ignoreAtRules: ["value"],
          },
        ],
        "function-no-unknown": [
          true,
          {
            ignoreFunctions: ["global"],
          },
        ],
      },
    },
  ],
  ignoreFiles: ["turbo/generators/template/**/*"],
};
