# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [4.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@3.1.2...@sikt/sds-input@4.0.0) (2024-09-23)

### ⚠ BREAKING CHANGES

- allow one of label or aria-labelledby for input components

### Features

- allow one of label or aria-labelledby for input components ([edcfefb](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/edcfefbda41a4781ea5fbda0f24e7743c1d165e2))

### Bug Fixes

- **deps:** change peer deps clsx to ^2.1.0 ([9eb76f1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/9eb76f1207a2ec8d19fda646c9bc26d5922b1839))
- **deps:** update @sikt/sds-form@3.0.0 ([6859894](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/68598941f873ffede6a5d18936279da5b98e5af2))
- **input:** add aria describedby when help or error text is set ([4993647](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/4993647cdb4031c6ac90a828463783e1542521ab))

## [3.1.2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@3.1.1...@sikt/sds-input@3.1.2) (2024-05-30)

### Bug Fixes

- package json exports ([b62fed7](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b62fed7bfa459c618c016f39c960dffda037155f))

## [3.1.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@3.1.0...@sikt/sds-input@3.1.1) (2024-05-07)

### Bug Fixes

- **deps:** update @sikt/sds-core to ^3.0.2 ([a55b4c2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/a55b4c2f0bad4dfe80b26c0f7102622b4257d8b2))
- **deps:** update @sikt/sds-tokens to ^1.0.1 ([3618147](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/3618147fbc51048b8f63484b63cd2fa6e76cbbf4))
- **input:** add type to buttons used by search input ([af01756](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/af017566c9059f00434a5b88d996f854d3505329))

## [3.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@3.0.2...@sikt/sds-input@3.1.0) (2024-04-15)

### Features

- **input:** add clear button to search input component ([7730f0f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/7730f0f48a0ea264374d80b56ddb0c36e24fcf11))

### Bug Fixes

- **deps:** update sds-icons ([8a3e1ae](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/8a3e1ae229148b84f603089337b8a8f54d23fe39))

### [3.0.2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@3.0.1...@sikt/sds-input@3.0.2) (2024-04-01)

### Bug Fixes

- allow props on input components to be ReactNode where possible ([68d2500](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/68d2500c5a6d97c72e119829169dffa278b0b2a3))
- **deps:** update dependency @phosphor-icons/core to ^2.1.1 ([025e50b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/025e50bac95008ae70302789fec62529e6884b52))
- **deps:** update sds-form ([795b9d7](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/795b9d7b46639c019c336f8c9e4a3a58e748fdc5))

### [3.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@3.0.0...@sikt/sds-input@3.0.1) (2023-11-10)

### Bug Fixes

- add disabled style ([1006f0b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/1006f0be57ecf1e31e0cef40a0c5f8675d224b65))
- **input-button:** change icon size ([86e90ef](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/86e90efbab6d56ac61f650c85d08a5cc49844b6f)), closes [#142](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/142)

## [3.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@2.0.0...@sikt/sds-input@3.0.0) (2023-10-28)

### ⚠ BREAKING CHANGES

- move ...props to input element
- rename componentType & componentSize props to variant & size for consistency
- **tokens:** add new tokens to input package
- **form:** add fieldset, form-field, label & help-text components

### Features

- **form:** add fieldset, form-field, label & help-text components ([b2c2cc5](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b2c2cc5f6b4d264b3f4c517912e35d4021d1eadb))
- move ...props to input element ([5164a6b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/5164a6b136a03d8978f8139fdb29e1f000e1d878))
- rename componentType & componentSize props to variant & size for consistency ([e598ec8](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e598ec84d3351f2ecdaa679bdddbf947a9949f13))
- **tokens:** add new tokens to input package ([410cb6d](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/410cb6d8e4e8c816061a035c255e87ffd7ec5bd6))

### Bug Fixes

- **input-action:** correct input element height ([4a41a53](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/4a41a53bc190ff01cd3da300a1a887750999d0cd))

## [2.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@1.0.1...@sikt/sds-input@2.0.0) (2023-07-05)

### ⚠ BREAKING CHANGES

- implement action button for input field
- add forwardRef to input components

### Features

- add forwardRef to input components ([e45c950](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e45c950944d15eac649b6f0755b95be99077b2c1))
- implement action button for input field ([1eb9fa1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/1eb9fa19a889294ac9f43b1af421085522a5d69b))
- **textarea:** add textarea type to input component ([20c4610](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/20c46101cb997d3916b7c3648430ecdd030ed37b))

### [1.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-input@1.0.0...@sikt/sds-input@1.0.1) (2023-04-29)

## 1.0.0 (2023-04-17)

### Features

- **input:** add input component ([245120d](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/245120d726b2d6d13df9cb16aa8d4a1a3543fb81))
- **input:** update to new icons ([03c50db](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/03c50dbffb46345ecd37772c47d06aad4ae8d7db))

### Bug Fixes

- **deps:** update sds-core to version 1 ([0e6e326](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/0e6e3260dd1bd7cbfcfa35b708ffe921ac0bceef))
- **input:** aria-errormessage only on aria-invalid ([e9810bc](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e9810bc768aee59682d472071f508f7ece62e38d))
- **input:** change input padding ([34a7d21](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/34a7d217c30005524b50473be7d2ac36f322ceac))
