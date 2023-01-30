module.exports = {
  extends: "./packages/stylelint-config",
  rules: {
    "selector-class-pattern": [
      "^sds-(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
      },
    ],
  },
};
