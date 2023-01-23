# `@sikt/prettier-config-sds`

## Consume

```sh
npm i -s @sikt/prettier-config-sds
```

### Config

`prettier.config.js`

```js
module.exports = "@sikt/prettier-config-sds";
```

#### Extend

```js
module.exports = {
  ...require("packages/prettier-config"),
  // product custom rules
};
```
