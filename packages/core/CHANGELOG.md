# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [4.5.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.4.0...@sikt/sds-core@4.5.0) (2025-04-01)

### ⚠ Deprecations

- **typography:** deprecate
  - CSS classes:
    - `.sds-typography-body--*` replaced by `.sds-typography-body--*`
    - `.sds-typography-body--{emphasis,quote,strong,code}` replaced by `.sds-typography--*`
    - `.sds-typography-body-paragraph--color-*` replaced by `.sds-typography-color--*`
    - `.sds-typography-heading-*` replaced by `.sds-typography-*-headline-*`
    - `.sds-typography-heading-*` replaced by `.sds-typography-*-headline-*`
  - CSS custom properties
    - `--sds-base-size-relative-*` replaced by `--sds-typography-fontsize-*`
    - `--sds-typography-weight-*` replaced by `--sds-typography-fontweight-*`
    - `--sds-typography-body-fontsize-*` replaced by `--sds-typography-body-*-fontsize`
    - `--sds-typography-body-lineheight-*` replaced by `--sds-typography-body-*-lineheight`
    - `--sds-typography-heading-*` replaced by `--sds-typography-*-headline-*`

### Features

- remove view-transitions when prefers reduced motion ([afc7624](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/afc76248cd235ebad6f93a90b1b3e17399339883))
- **typography:** add headline classes & deprecate old heading classes & variables ([47d0e93](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/47d0e934934e13504f2e75daa67ba9deb00562ab))
- **typography:** add headline props to heading component ([349451e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/349451e303e7f4154b9169bfe211dd774d58f4d8))
- **typography:** add new body classes & deprecate old ([404f52c](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/404f52c442f2f35283fddf0d2a769154a8dec85d))
- **typography:** add new typography props to paragraph component ([07a5a4e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/07a5a4e87a6efd68800e1f8da8856a87a90bee3a))
- **typography:** deprecated size relative custom properties ([297d0a5](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/297d0a5dff3a26d9cfac879c5024313952cf1ea9))

### Bug Fixes

- **blockquote:** set quote marks to english ([d386370](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/d38637032f745d58d0b13395eef5ef878accfb60))

## [4.4.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.3.0...@sikt/sds-core@4.4.0) (2025-03-11)

### Features

- allow for css interpolate-size ([54ad01e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/54ad01ea6ee4d5ecb969a776b0af7b02c2d3db54))

## [4.3.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.2.1...@sikt/sds-core@4.3.0) (2025-02-26)

### Features

- **link:** add prop for navigation type link ([8e8241f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/8e8241fc3eb8dc3791ffec691ad9cfc478ddc3c9))

## [4.2.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.2.0...@sikt/sds-core@4.2.1) (2025-02-24)

### Bug Fixes

- **deps:** update @sikt/sds-tokens@3.0.0 ([6a55271](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/6a55271fb807bdad62e888f919c22fd7faf5a5bb))

## [4.2.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.1.1...@sikt/sds-core@4.2.0) (2024-12-12)

### Features

- change dark color scheme to opt in ([29890c0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/29890c01847d19283ec218b463ddf152ee0f144e))

## [4.1.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.1.0...@sikt/sds-core@4.1.1) (2024-11-19)

### Bug Fixes

- **deps:** peer deps react@19.0.0 ([17352e2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/17352e291153f79c66a9de317ca42820159aee8a))

## [4.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@4.0.0...@sikt/sds-core@4.1.0) (2024-10-17)

### Features

- **tokens:** change transparent values to solid ([a8a2248](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/a8a224821227f37bfd9b94cfbb15ab1f27ab3470))

## [4.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@3.1.0...@sikt/sds-core@4.0.0) (2024-10-08)

### ⚠ BREAKING CHANGES

- **abbreviation:** remove component & styling due to wcag 1.4.13 dismissible

### Features

- **figure:** add className prop ([e433693](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e4336938cd8dcc8830050ef8e0859ce360ec0367))
- **paragraph:** color prop from tokens ([fdf651b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/fdf651b3bf1a2405769ce83b1086dc6bf5e78d42))

### Bug Fixes

- **abbreviation:** remove component & styling due to wcag 1.4.13 dismissible ([2a9ff85](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/2a9ff852669d40a42616289b594bf595040f3f0d))
- **deps:** change peer deps clsx to ^2.1.0 ([9eb76f1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/9eb76f1207a2ec8d19fda646c9bc26d5922b1839))
- **deps:** update @sikt/sds-tokens@2.0.1 ([662b57d](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/662b57dfe114b6947780eb8bf5fc2e6e77de1c68))

## [3.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@3.0.2...@sikt/sds-core@3.1.0) (2024-08-25)

### Features

- **tokens:** update to new color tokens ([4dff38e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/4dff38ea4a19c1b39c734c59e575b26d03d2d3e5))

### Bug Fixes

- **deps:** update @sikt/sds-tokens@2.0.0 ([65f082e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/65f082eb7a9285360dceec655687260731e2c14b))
- package json exports ([b62fed7](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b62fed7bfa459c618c016f39c960dffda037155f))

### [3.0.2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@3.0.1...@sikt/sds-core@3.0.2) (2023-12-18)

### Bug Fixes

- **core:** typography link icon size adjustment ([7b16829](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/7b16829dd3106d6ffffdfcd18837578820cb7553))
- **link:** size & white space wrap ([258d119](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/258d1197755c4fed78eae1d20350b77b84c1529c))

### [3.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@3.0.0...@sikt/sds-core@3.0.1) (2023-11-02)

### Bug Fixes

- **link:** min-width/height on icons to make sure they are big enough when line breaks ([1bbead2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/1bbead2570c476c7aae18fab43f1ab3f673d4115))

## [3.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@2.2.0...@sikt/sds-core@3.0.0) (2023-10-28)

### ⚠ BREAKING CHANGES

- rename componentType & componentSize props to variant & size for consistency
- **tokens:** add new tokens to core package
- **tokens:** new token system

#### Migration

Partial upgrade to latest packages can be done by installing & using the new `@sikt/sds-tokens@1.0.0` & `@sikt/sds-core@3.0.0` while saving the old core tokens (which you will find in `@sikt/sds-core/dist/tokens/`) in you application.

Example:

```css
:root {
  --sds-border-size-thin: 1px;
  --sds-border-size-regular: 2px;
  ...;
}

:root,
[data-color-scheme="light"],
[data-color-scheme="light"]:root {
  --sds-color-theme: #0b0132;
  --sds-color-background-default: #fff;
  ...;
}

@media (prefers-color-scheme: light) {
  :root {
    --sds-color-theme: #0b0132;
    --sds-color-background-default: #fff;
    ...;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --sds-color-theme: #0b0132;
    --sds-color-background-default: #000;
    ...;
  }
}
```

### Features

- rename componentType & componentSize props to variant & size for consistency ([e598ec8](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e598ec84d3351f2ecdaa679bdddbf947a9949f13))
- **tokens:** add new tokens to core package ([0d302a8](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/0d302a83aee39358f2e42f1daf35dba52f056f81))
- **tokens:** new token system ([435f71e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/435f71e14552f5fd2aae12807ebb43b0b268acfa))

## [2.2.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@2.1.0...@sikt/sds-core@2.2.0) (2023-08-15)

### Features

- **core:** add tiny and huge padding tokens ([edd0508](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/edd0508665f38037e5048abb9da1ff88ab66bac6))
- **tokens:** add z-index tokens ([520c415](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/520c4156c4f220f802943a54630220f0a55197e0))

### Bug Fixes

- **core:** fix icon positioning on link in firefox ([88c44bf](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/88c44bf211622ba3ee55302ac8a74a1cdb1a3761))

## [2.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@2.0.0...@sikt/sds-core@2.1.0) (2023-06-15)

### Features

- **core:** implement design for Abbreviation ([6eae219](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/6eae219b1b6909f5bc21be6c52ecabbadf40d140))

## [2.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@1.0.1...@sikt/sds-core@2.0.0) (2023-05-09)

### ⚠ BREAKING CHANGES

- **core:** add forwardref to Link

### Features

- **core:** add forwardref to Link ([e066d3f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e066d3fbba8517d57500e629dc7448141ecbf401))
- **heading:** add dynamic heading ([5c41533](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/5c41533f2a8211bed35a3fd245b51e2ef99eeb7b)), closes [#98](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/98)

### Bug Fixes

- **heading:** heading xlarge line height ([7ca3199](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/7ca319918785bc9d1d14289e50b41afc06eff3bd))

### [1.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@1.0.0...@sikt/sds-core@1.0.1) (2023-04-28)

### Bug Fixes

- validate element before cloning ([d108acf](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/d108acf790e8a932fb668469788976b3627d3ab4)), closes [#94](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/94)

## [1.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@0.3.0...@sikt/sds-core@1.0.0) (2023-04-11)

### Features

- **core:** add html attributes to figure component type ([f923b05](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/f923b051bd4c59228c45e7d8b3d5d626a905d97b))
- **core:** add outline css variable ([fb445ba](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/fb445baa1f3b54092b3ce3e8060a92ad373488cd))
- **core:** add paragraph component ([edb8ffd](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/edb8ffdf88437801c84410d3f92254c6c047a3a4)), closes [#84](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/84)
- **core:** add theme color token ([06498b2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/06498b207c89572697880da7727fdd15c0bb76da))
- **core:** add tokens for grid width ([4687c12](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/4687c12e2b05673e062e552c4f4685c09348ad6d))
- **core:** change typography link icon margin ([e1a2f9e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e1a2f9e910b78b61af909fe3450a77cc56c19bab))

## [0.3.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@0.2.0...@sikt/sds-core@0.3.0) (2023-03-06)

### ⚠ BREAKING CHANGES

- change token system

### Features

- change token system ([479483a](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/479483a9f7d8b21cd4fb2ecdb26d362c30c0b32e)), closes [#16](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/16)
- **core:** add heading component ([bbcc5ff](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/bbcc5ffeb867a428859b6b954a1b37a36d7cb980))
- **core:** add link component ([c1a5846](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/c1a5846303b592b7a125205a2e4ead72b4eb5247))
- **core:** add screen reader only component ([0f861b4](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/0f861b4964a676c4d6b4f5ffa452daeebf074534))
- **core:** link style from designer ([469b591](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/469b591d3b9ea6c9e8f4afa921f44d4e1f5374ef))

### Bug Fixes

- **core:** link component external prop ([639a52e](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/639a52e2475d9765d09845ec3fe30f23702f7192))
- update deps ([2b611c9](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/2b611c9c6ec159128563c42b2445110b884c5d1f))

## [0.2.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-core@0.1.0...@sikt/sds-core@0.2.0) (2023-02-09)

### ⚠ BREAKING CHANGES

- change tokens

### Features

- change tokens ([0df603c](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/0df603c5dcfcb3f22f1492c03e1260e1abc8999a))
- **core:** add figure styles ([74eecf4](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/74eecf41e292d830be0363de14720a3eb4e27a7a))
- **core:** add link styles ([3ea842a](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/3ea842a3a1744f5a47849c275cd00b635e07c738))

### Bug Fixes

- **core:** typography caption size ([ec5cbe0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/ec5cbe0e3a5bd7808d3270444975f204492fd16e))

## 0.1.0 (2023-02-01)
