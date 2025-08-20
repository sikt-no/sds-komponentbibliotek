import sdsConfig from "./packages/prettier-config/index.mjs";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...sdsConfig,
};

export default config;
