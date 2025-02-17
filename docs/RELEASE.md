# Release

<details>
  <summary>Table of Contents</summary>

- [Create release](#create-release)
- [Publish](#publish)

</details>

## Create release

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

ℹ️ _Tips:_

> - Test your package locally with [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) before you publish to registry
> - Test the effect of scripts with the flag `-- --dry-run`
> - For a package first release skip version bump with the flag `-- --first-release`

## Publish

Push tags:

```sh
git push --follow-tags
```

The following pipeline will create a release & publish the tagged package to npm.
