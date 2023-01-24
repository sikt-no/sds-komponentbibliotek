# Contributing

## Code of conduct

Be nice! 🙂  
_"0.1 ratio smiles to text"_ -dev @Sikt

## Feedback

Please give us feedback  
Slack [#komponentbibliotek](https://sikt-no.slack.com/archives/C04K82KES0J)  
Gitlab [Issues](https://gitlab.sikt.no/designsystem/horisont/-/issues)

## Design

Figma [File](https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem)

## Develop

Gitlab [Project](https://gitlab.sikt.no/designsystem/horisont/)

### Architecture

#### Accessibility

[Accessibility](A11Y.md)

#### Stylesheets

Do not use element selectors for styling since these effect global styles and elements used may change  
Follow [BEM](https://getbem.com/naming/) (Block, Element, Modifier) naming convention for style scoping to a specific component  
Use a prefix on selector class names to avoid collision with others selectors

```css
.horistont-<package-name > {
  /* styles */
  &__<element > {
  }
  &--<modifier > {
  }
}
```

PostCSS is used to allow usage of future CSS specs, like [nesting modules](https://www.w3.org/TR/css-nesting-1/) & [custom media queries](https://www.w3.org/TR/mediaqueries-5/#custom-mq)

#### React

Write unit tests for component APIs & features to make it easier to make future changes

#### Output

Export as both CSS & React components to allow use of custom markup

#### Documentation

Document components & features near the code with markdown files. Also document interactive examples with [Storybook](https://storybook.js.org/docs/react/get-started/introduction)

### Setup

```sh
npm ci
npm run storybook
```

### Creating a new component

```sh
npm init -w ./packages/<package-name>
package name: @sikt/horisont-<package-name>
```

#### Tips

- Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link)

### Branch

Work on a feature branch named `<user>/<conventional-commit-type>-<package-name>-<issue-description>`

### Commit

Commit with messages following [Conventional Commits](https://www.conventionalcommits.org/) & corresponding to [SemVer](https://semver.org/)  
Keep the history clean with one single commit per feature  
**Note** Package versions will be bumped based on commit types and commit messages will end up in the changelog

#### Tips

- Usage of [commit types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
- Rebase commit history with [git-rebase](https://git-scm.com/docs/git-rebase)

### Merge request

Create a merge request & wait for a required code review before merging to `main`  
Review comments are closed by the reviewer & not the branch owner  
Rebase before merge so that your commits end up on top of the history

### Publish

Bump package versions & generate change log based on commit history with [Standard Version](https://github.com/conventional-changelog/standard-version)

```sh
npm run release --package=<package-name>
```

Push tags

```sh
git push --follow-tags origin main
```

Publish package to registry

```sh
npm publish --workspace=packages/<package-name> --access public
```

#### Tips

- Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) before you publish to registry
- Test the effect of scripts with the flag `-- --dry-run`
- For a package first release skip version bump with the flag `-- --first-release`
