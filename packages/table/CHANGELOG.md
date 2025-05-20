# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-table@2.0.2...@sikt/sds-table@2.1.0) (2025-05-20)

### Features

- **table:** update with new typography ([601bf39](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/601bf395cc09b18b83a8679b5f80ad167ab1ee60))

### Bug Fixes

- **deps:** update @sikt/sds-core ([f1f7023](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/f1f7023a7e77980ef15993b0bdac76bff254b651))
- **table:** fix caption placement on mobile ([32404d9](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/32404d9243966264a0423cf1cd1dd2484ab43b67))

## [2.0.2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-table@2.0.1...@sikt/sds-table@2.0.2) (2024-11-20)

### Bug Fixes

- **deps:** change peer deps clsx to ^2.1.0 ([9eb76f1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/9eb76f1207a2ec8d19fda646c9bc26d5922b1839))
- **deps:** correct deps on @sikt/sds-tokens ([b47f8a4](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b47f8a4d27e99dcc731036ccf2b7b58a27d88da6))
- **deps:** peer deps react@19.0.0 ([17352e2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/17352e291153f79c66a9de317ca42820159aee8a))
- **deps:** update @sikt/sds-core@4.1.1 & @sikt/sds-icons@2.0.2 ([09e97cf](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/09e97cfe35780cc239ae2b7f55f4e793ec72e479))
- package json exports ([b62fed7](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b62fed7bfa459c618c016f39c960dffda037155f))

### [2.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-table@2.0.0...@sikt/sds-table@2.0.1) (2023-11-10)

### Bug Fixes

- **table-cell:** add required prop to type for cell heading on mobile ([62b7865](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/62b786519dff7984d745f679b05e9a0416878d1d))

## [2.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-table@1.0.2...@sikt/sds-table@2.0.0) (2023-10-28)

### ⚠ BREAKING CHANGES

- **table:** add mobile design
  - TableCell now requries `data-th` to have visible column header on mobile
- **tokens:** add new tokens to table package
  - Remove InlineTable component
  - Remove prop footerText
  - Alter prop hideCaption to showCaption, default is false

### Features

- **table:** add mobile design ([caa8759](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/caa87594c4029a96abad840e932589a9fa735738)), closes [#134](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/134)
- **tokens:** add new tokens to table package ([cdd1dd5](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/cdd1dd523e8c4c907349052fa5543d4d04ffd84f))

### [1.0.2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-table@1.0.1...@sikt/sds-table@1.0.2) (2023-07-04)

### Bug Fixes

- **table:** responsive styling ([2c6a03f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/2c6a03fabb933fb627807f3f25f8d6b91419fdd1))

### [1.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-table@1.0.0...@sikt/sds-table@1.0.1) (2023-05-25)

## 1.0.0 (2023-04-29)

### Features

- **table:** add table component ([f1d209b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/f1d209bdabbfdae97ed857c8e2c70b85a833a69c))
