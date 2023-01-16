# `@sikt/prettier-config-horisont`

## Consume

```sh
npm i -s @sikt/prettier-config-horisont
```

### Config

`prettier.config.js`

```js
module.exports = "@sikt/prettier-config-horisont";
```

#### Extend

```js
module.exports = {
  ...require("packages/prettier-config"),
  // product custom rules
};
```
