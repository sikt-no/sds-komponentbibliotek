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
    "selector-class-pattern": [
      "^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
        message: "selector should be written in BEM format",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.module.css"],
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
};
