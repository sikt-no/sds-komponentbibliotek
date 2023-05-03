# `@sikt/prettier-config-sds`

## Consume

```sh
npm i -D @sikt/prettier-config-sds
```

### Extend

In `prettier.config.js`:

```js
module.exports = "@sikt/prettier-config-sds";
```

#### Custom rules

```js
module.exports = {
  ...require("@sikt/prettier-config-sds"),
  // custom rules
};
```
