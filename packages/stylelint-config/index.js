module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
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
      },
    ],
  },
};
