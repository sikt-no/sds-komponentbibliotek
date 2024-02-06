# `@sikt/eslint-config-sds`

The config includes a strict but sensible set of ESLint rules, including the following plugins:

- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/linting/configs#recommended-configurations)

The TypeScript ESLint plugin has typechecking enabled with both strict and stylistic rulesets.

## Consume

```sh
npm i -D @sikt/eslint-config-sds
```

### Extend

In `.eslintrc.js`:

```json
"eslintConfig": {
  "extends": ["@sikt/eslint-config-sds"]
}
```

If your `tsconfig.json` is not in the same folder as your ESLint configuration file, you may also need to configure that.

```json
{
  "parserOptions": {
    "project": ["./path/to/tsconfig.json"]
  }
}
```

If you are linting files that are not covered by your `tsconfig.json` file, you may get a warning. You can solve this by including them in the TypeScript config, excluding the files from linting or by conditionally disabling typechecking by extending from `plugin:@typescript-eslint/disable-type-checked` [by using overrides](https://typescript-eslint.io/linting/configs#disable-type-checked).
