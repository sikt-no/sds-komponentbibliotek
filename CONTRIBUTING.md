# Contributing

<details>
  <summary>Table of Contents</summary>

- [Code of conduct](#code-of-conduct)
- [Feedback](#feedback)
- [Design](#design)
- [Development](#development)
  - [Architecture](#architecture)
  - [Setup](#setup)
    - [Windows](#windows)
  - [Change request](#change-request)
  - [Creating a new component](#creating-a-new-component)
  - [Workflow](#workflow)
    - [Release](#release)

</details>

## Code of conduct

Be nice! 😊  
_">0.1 ratio smileys to text"_ -developer @Sikt

## Feedback

Please give us feedback and submit feature requests. We are dependent on your help & are very friendly 🤗  
Slack: [#komponentbibliotek](https://sikt-no.slack.com/archives/C04K82KES0J)  
Gitlab: [Issues](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues)

## Design

[Figma File](https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem)
(for which you need to [order access](https://isikt.sharepoint.com/sites/it-stotte/SitePages/Trenger-du-lisenser-eller-tilganger-.aspx))

## Development

[Gitlab Project](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/)

### Architecture

#### Naming

- Sikt Design System's acronym, `sds`, is used as prefix for packages, classes and so on. It is used as a suffix for config packages since that is convention and a requirement for some configs.
- Sikt scope `@sikt` is used on packages to link them to our organization on NPM.
- Keep directory, style class selectors & stylesheets names kebab-case while component names PascalCase.

#### Monorepo

This is a monorepo built with [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces) where all directories in `/packages/*` are seperate packages with their own `package.json` & `README.md`.  
All commands should be able to run from the project root, for example dependency installs (`npm i -s @sikt/sds-core -w packages/button`) or package builds (`npm run build` / `npm run build -w packages/button`).

The reasoning behind multiple packages is rooted in micro architecture. This way, a single breaking change to one package won't affect consumers of other packages.

#### Documentation

Document components & features near the code with markdown files.  
Create interactive examples with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) stories.  
Connect components to Figma with [Figma Code Connect](https://github.com/figma/code-connect).

#### Accessibility

See [Accessibility](./docs/A11Y.md)

#### Stylesheets

- Do not use element selectors for styling since these affect global styles and elements used may change.
- Follow [BEM](https://getbem.com/naming/) (Block, Element, Modifier) naming convention for style scoping to a specific component.
- Use a `sds` prefix on selector class names to avoid collision with other selectors.
- Use a `sds` prefix on global variables and avoid it on local variables to differentiate.

Example:

```css
--sds-<variable-name>: value;

.sds-<package-name > {
  --<package-name>-<variable-name>: value;

  /* styling */
  &__<element > {
  }
  &--<modifier > {
  }
}
```

PostCSS is used to allow usage of future CSS specs, like [nesting modules](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme) & [custom media queries](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media#readme). New plugins can be added when needed.

#### React

Write unit tests for component APIs & features to make it easier to make future changes and build trust with consumers. Currently we have an [80% coverage rule](./jest.config.js). Make sure to test the important things!

Write visual regression tests for components with [Playwright](https://playwright.dev/).

#### Build

Export components as both CSS & React components, with [tsup](https://tsup.egoist.dev/), to allow use of both custom markup & React.  
Build all packages with `npm run build` from root.

#### CI/CD

[CI/CD](./docs/CICD.md)

### Setup

```sh
npm ci
npm run build
npm run dev
```

Storybook will run on http://localhost:6006 and Astro (designsystem.sikt.no) on http://localhost:4321

### Change request

Open an issue on Gitlab and/or talk to us. We are here to help!

### Creating a new component

See [Tutorial](./docs/tutorial/TUTORIAL.md) for a interactive tutorial on how to build your own component.  
See [Example](./docs/tutorial/__example__) component for base setup.

Initialize a package:

When asked, enter a package name without `sds-` prefix.

```sh
npm run init
```

If you have custom build needs, the build script and entry points may vary.  
Run `npm i` in root to hoist dependencies.  
Export the component from `index.ts` as this is the input for the [build](./tsup.config.mjs).  
Create a `README.md` for documentation both near code and for import in Storybook.  
Create a [Storybook](https://storybook.js.org/docs/react/get-started/introduction) story for live devtools of your component.

ℹ️ _Tip:_ Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link)

### Workflow

#### Branch

Work on a feature branch named `<gitlab-user>/<conventional-commit-type>-<package-name>-<issue-description>`.

#### Commit

Commit with messages following [Conventional Commits](https://www.conventionalcommits.org/) & corresponding to [SemVer](https://semver.org/).  
Keep the history clean with one single commit per feature.  
**Note** How you commit while working is not important as long as you clean up before creating a merge request.  
**Note** Package versions will be bumped based on commit types and commit messages will end up in the changelog.

ℹ️ _Tip:_ Usage of [commit types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

#### Test

Note that you will need to install browsers for use with Playwright and generating screenshots locally. You can install them by running the following command after having installed all dependencies:

```sh
npx playwright install
```

To generate local visual regression test screenshots before you begin working:

```sh
npm run test:e2e -- --update-snapshots
```

To test that nothing unexpected has change after done working:

```sh
npm run test:e2e
```

To generate baseline screenshot for the CI environment after you are done working run:

```sh
docker run --rm --network host -v ${PWD}:/work/ -w /work/ -it node:22 /bin/bash
npm install
npx playwright install --with-deps
CI=true npx playwright test --update-snapshots=changed
```

This can also be done in the CI pipeline with the manual job `test-e2e-update-snapshots`.

**Note** This should only be done when you add new components or you have made changes to existing ones and have verified everything is correct!

#### Merge request

Create a merge request & wait for a required code review before merging to `main`.  
Review comments should be closed by the reviewer & not the branch owner.  
Rebase before merge so that your commits end up on top of the history.  
**Note** Storybook is published to the URL `<review-environment>/storybook/`

ℹ️ _Tip:_ Rebase commit history with [git-rebase](https://git-scm.com/docs/git-rebase)

#### Release

[Release](./docs/RELEASE.md)
