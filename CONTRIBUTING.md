# Contributing

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

## Code of conduct

Be nice! 😊  
_">0.1 ratio smileys to text"_ -developer @Sikt

## Feedback

Please give us feedback and submit feature requests.  
Slack: [#komponentbibliotek](https://sikt-no.slack.com/archives/C04K82KES0J)  
Gitlab: [Issues](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues)

## Design

[Figma File](https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem)

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

#### Accessibility

See [Accessibility](./docs/A11Y.md)

#### Stylesheets

- Do not use element selectors for styling since these affect global styles and elements used may change.
- Follow [BEM](https://getbem.com/naming/) (Block, Element, Modifier) naming convention for style scoping to a specific component.
- Use a `sds` prefix on selector class names to avoid collision with other selectors.
- Use a `sds` prefix on global variables and avoid it on local variables to differentiate.

Example:

```css
--sds-variable: value;

.sds-<package-name > {
  --package-name-variable: value;

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

### Setup

```sh
npm ci
npm run storybook
```

#### Windows

On Windows you might first need to install [windows-build-tools](https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/).

### Change request

Open an issue on Gitlab and/or talk to us. We are here to help!

### Creating a new component

See [Tutorial](./docs/tutorial/TUTORIAL.md) for a interactive tutorial on how to build your own component.  
See [Example](./docs/tutorial/__example__) component for base setup.

Initialize a package:

```sh
npm run init --package=<package-name>
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
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it node:20 /bin/bash
npm install
npx playwright install --with-deps
CI=true npx playwright test --update-snapshots
```

**Note** This should only be done when you add new components or you have made changes to existing ones and have verified everything is correct!

#### Merge request

Create a merge request & wait for a required code review before merging to `main`.  
Review comments are closed by the reviewer & not the branch owner.  
Rebase before merge so that your commits end up on top of the history.  
**Note** Storybook is published to URL `<review-environment>/komponenter/`

ℹ️ _Tip:_ Rebase commit history with [git-rebase](https://git-scm.com/docs/git-rebase)

#### Publish

Do this on the main branch.  
Bump package versions & generate change log based on commit history with [Commit and Tag Version](https://github.com/absolute-version/commit-and-tag-version):

```sh
npm run release --package=<package-name>
```

**Note** You can always edit the changelog and commit before pushing if need be. Just remember to delete the generated tag and create a new one since it will be pointing to the wrong commit hash. Example:

```sh
git tag -d @sikt/sds-<package-name>@<package-version>
git rebase -i HEAD~1
...
git tag -a @sikt/sds-<package-name>@<package-version> -m "chore(<package-name>): release <package-version>"
```

Push tags:

```sh
git push --follow-tags
```

The following pipeline will create a release & publish the tagged package to npm.

ℹ️ _Tips:_

> - Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) before you publish to registry
> - Test the effect of scripts with the flag `-- --dry-run`
> - For a package first release skip version bump with the flag `-- --first-release`
