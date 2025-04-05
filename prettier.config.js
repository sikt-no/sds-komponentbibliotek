/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...require("./packages/prettier-config"),
};

module.exports = config;
