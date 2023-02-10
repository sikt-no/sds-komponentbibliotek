# Contributing

## Code of conduct

Be nice! 🙂  
_">0.1 ratio smileys to text"_ -developer @Sikt

## Feedback

Please give us feedback.  
Slack: [#komponentbibliotek](https://sikt-no.slack.com/archives/C04K82KES0J)  
Gitlab: [Issues](https://gitlab.sikt.no/designsystem/komponentbibliotek/-/issues)

## Design

[Figma File](https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem)

## Development

[Gitlab Project](https://gitlab.sikt.no/designsystem/komponentbibliotek/)

### Architecture

#### Naming

Sikt Design System acronym `sds` is used as prefix for packages, classes and so on. It used as a suffix for config packages since that is convention and a requirement for some configs.  
Sikt scope `@sikt` is used on packages to link them to our organization on NPM.

#### Monorepo

This is a monorepo where all directories in `/packages/*` are seperate packages with their own `package.json` & `README.md`.  
The reasoning behind multiple packages is that a breaking change to one package won't affect consumers of other packages.

#### Documentation

Document components & features near the code with markdown files.  
Create interactive examples with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) stories.

#### Accessibility

[Accessibility](./docs/A11Y.md)

#### Stylesheets

Do not use element selectors for styling since these effect global styles and elements used may change.  
Follow [BEM](https://getbem.com/naming/) (Block, Element, Modifier) naming convention for style scoping to a specific component.  
Use a prefix `sds` on selector class names to avoid collision with others selectors:

```css
.sds-<package-name > {
  /* styles */
  &__<element > {
  }
  &--<modifier > {
  }
}
```

PostCSS is used to allow usage of future CSS specs, like [nesting modules](https://www.w3.org/TR/css-nesting-1/) & [custom media queries](https://www.w3.org/TR/mediaqueries-5/#custom-mq).

#### React

Write unit tests for component APIs & features to make it easier to make future changes.  
_TODO: Screenshot testing with Playwright._

#### Build

Export components as both CSS & React components, with [Rollup](https://rollupjs.org/), to allow use of both custom markup & React.  
Build all packages with `npm run build` from root.

### Setup

```sh
npm ci
npm run storybook
```

### Creating a new component

Init package:

```sh
npm init -w ./packages/<package-name>
```

Change input:

```sh
package name: @sikt/sds-<package-name>
entry point: dist/index.js
license: UNLICENSED
```

Add build script to package `package.json`:

```json
"scripts": {
  "build": "rollup -c ../../rollup.config.mjs"
}
```

If you have custom build need this script may vary.  
Export component from `index.ts`.  
Create a `README.md` for documentation.  
Create a [Storybook](https://storybook.js.org/docs/react/get-started/introduction) story for live devtools of your component.

#### Tips

- Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link)

### Branch

Work on a feature branch named `<gitlab-user>/<conventional-commit-type>-<package-name>-<issue-description>`.

### Commit

Commit with messages following [Conventional Commits](https://www.conventionalcommits.org/) & corresponding to [SemVer](https://semver.org/).  
Keep the history clean with one single commit per feature.  
**Note** How you commit while working is not important as long as you clean up before creating a merge request.  
**Note** Package versions will be bumped based on commit types and commit messages will end up in the changelog.

#### Tips

- Usage of [commit types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

### Merge request

Create a merge request & wait for a required code review before merging to `main`.  
Review comments are closed by the reviewer & not the branch owner.  
Rebase before merge so that your commits end up on top of the history.

#### Tips

- Rebase commit history with [git-rebase](https://git-scm.com/docs/git-rebase)

### Publish

Create a release branch `<gitlab-user>/release-<package-name>-<version>`.  
Bump package versions & generate change log based on commit history with [Standard Version](https://github.com/conventional-changelog/standard-version):

```sh
npm run release --package=<package-name>
```

**Note** You can always edit the changelog and commit before pushing if need be.  
Push tags:

```sh
git push --follow-tags
```

Open a merge request. When approved and merged publish package to registry:  
_TODO: Add publish step to CI-pipeline._

```sh
npm publish --workspace=packages/<package-name> --access public
```

#### Tips

- Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) before you publish to registry
- Test the effect of scripts with the flag `-- --dry-run`
- For a package first release skip version bump with the flag `-- --first-release`
