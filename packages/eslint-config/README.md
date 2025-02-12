# `@sikt/eslint-config-sds`

The config includes a strict but sensible set of ESLint rules, including the following plugins:

- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [typescript-eslint](https://typescript-eslint.io/linting/configs#recommended-configurations)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

The TypeScript ESLint plugin has typechecking enabled with both strict and stylistic rulesets.

## Consume

```sh
npm i -D @sikt/eslint-config-sds
```

### Extend

In `eslint.config.mjs`:

```js
import sdsConfig from "@sikt/eslint-config-sds";

export default [
  ...sdsConfig,
  // ...other configs
];
```

If `typescript-eslint` is unable to find the right `tsconfig.json`, you [may also need to configure `tsconfigRootDir`](https://typescript-eslint.io/getting-started/typed-linting/).

```js
{
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
},
```

You may get a warning if you are linting files that are not covered by your `tsconfig.json` file. You can solve this by including them in the TypeScript config, excluding the files from linting or by conditionally disabling typechecking by extending from `tseslint.configs.disableTypeChecked` [by using overrides](https://typescript-eslint.io/linting/configs#disable-type-checked).
