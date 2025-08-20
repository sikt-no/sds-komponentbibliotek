# `@sikt/prettier-config-sds`

## Consume

```sh
npm i -D @sikt/prettier-config-sds
```

### Extend

In `prettier.config.js`:

```js
export default "@sikt/prettier-config-sds";
```

#### Custom rules

```js
import sdsConfig from "@sikt/prettier-config-sds";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...sdsConfig,
  /* custom rules */
};

export default config;
```
