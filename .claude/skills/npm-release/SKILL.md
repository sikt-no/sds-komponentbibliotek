---
name: npm-release
description: >
  Skill for releasing a new version of a package to npm in the sds-komponentbibliotek monorepo.
  Use when the user wants to release a package, bump a version, publish to npm, or create a release tag.
  Trigger words: "release", "publish", "bump version", "new version", "npm publish", "tag release".
---

# npm Release Skill

This monorepo uses [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) to bump versions, generate changelogs, and create git tags. Publishing to npm is handled by the CI/CD pipeline after tags are pushed.

Packages live under `/packages/<name>` and are published as `@sikt/sds-<name>`.

---

## Step-by-step release process

### 1. Verify you are on `main` and up to date

```sh
git checkout main
git pull
```

### 2. Confirm the package name

Packages are in `/packages/`. The release script takes the directory name (without the `sds-` prefix is fine — use the full name as listed in `ls packages/`).

To check the current version:

```sh
cat packages/<package-name>/package.json | grep '"version"'
```

### 3. Ensure the staging area is clean

Check for any staged files that don't belong in the release commit:

```sh
git diff --staged --name-only
```

If anything is staged that is not `package.json` or `CHANGELOG.md` for the package being released, **stop and warn the user**:

> "There are staged files that will be included in the release commit: [list them]. Please unstage them first with `git restore --staged <file>` before continuing."

Do not proceed until the staging area is empty (or contains only intentional release-related changes).

### 4. Dry run first — show the user what will happen

**Always run this before the real release:**

```sh
npm run release --package=<package-name> -- --dry-run
```

Show the user the full output, then perform a semver correctness check before asking for confirmation.

### 3a. Verify the semver bump is correct

Read the commits since the last release tag and compare them against the proposed version bump from the dry run:

```sh
git log $(git describe --tags --abbrev=0 --match "@sikt/sds-<package-name>*" 2>/dev/null)..HEAD --oneline
```

Then inspect the actual diff for breaking changes that may not be reflected in commit messages:

```sh
git diff $(git describe --tags --abbrev=0 --match "@sikt/sds-<package-name>*" 2>/dev/null)..HEAD -- packages/<package-name>/src/ packages/<package-name>/index.ts
```

Check the diff for:

- **Removed exports** from `index.ts` → requires **major**
- **Removed or renamed props** on a component interface → requires **major**
- **Changed prop types** in a breaking way (e.g. narrowing a type, changing a required prop) → requires **major**
- **Renamed components** → requires **major**
- **New optional props or new exports** → requires **minor** (but patch is also acceptable)
- **Bug fixes, style tweaks, internal refactors** → **patch**

If the proposed bump is too low for the changes found (e.g. dry run says patch but there is a removed prop), warn the user explicitly:

> "Warning: the dry run proposes a patch bump, but I found what looks like a breaking change ([describe it]). This should be a major version bump. You can force it by amending the relevant commit message to include `BREAKING CHANGE:` in the footer, or by running the release with `-- --release-as major`."

Only after confirming the bump level is correct, **stop and ask**: "Does this look correct? Shall I proceed with the actual release?"

Do not continue until the user explicitly confirms.

### 4. Run the actual release

Only after the user accepts the dry run output:

```sh
npm run release --package=<package-name>
```

This will:

- Bump the version in `package.json` based on conventional commits since the last release
- Update `CHANGELOG.md`
- Create a git commit: `chore(<package-name>): release <version>`
- Create a git tag: `@sikt/sds-<package-name>@<version>`

**Other useful flags:**

- `-- --first-release` — skip version bump (for a package's very first release)
- `-- --release-as major|minor|patch` — override the calculated bump level

### 5. (Optional) Edit the changelog before pushing

If the generated changelog needs tweaking, edit `packages/<package-name>/CHANGELOG.md`, then fix the tag to point at the new commit:

```sh
git tag -d @sikt/sds-<package-name>@<version>
git rebase -i HEAD~1
# (edit the commit in your editor if needed, then save)
git tag -a @sikt/sds-<package-name>@<version> -m "chore(<package-name>): release <version>"
```

### 6. Push with tags to trigger the pipeline — confirm first

Before pushing, show the user the tag and commit that will be pushed (`git log --oneline -1` and `git tag -l "@sikt/sds-<package-name>*" --sort=-version:refname | head -1`), then **stop and ask**: "Ready to push? This will trigger the CI pipeline and publish to npm."

Do not push until the user explicitly confirms.

```sh
git push --follow-tags
```

The CI/CD pipeline detects the new tag and:

- Creates a GitLab release
- Publishes the package to npm as `@sikt/sds-<package-name>`

### 7. Follow the pipeline and verify the release

After pushing, fetch the direct URL for the pipeline triggered by the release tag:

```sh
glab api "projects/:fullpath/pipelines" --field "ref=@sikt/sds-<package-name>@<version>" | jq -r '.[0].web_url'
```

If `jq` is unavailable, fall back to listing the most recent pipeline:

```sh
glab ci list --limit 1
```

Show the user the direct link:

> "The release pipeline is running. Follow it here: <pipeline-url>"

Then ask the user to confirm the release landed:

> "Once the pipeline finishes, please check that the release announcement has been posted in the **#designsystem-releases** Slack channel. Let me know if anything looks off."

---

## Version bump rules

Versions follow [SemVer](https://semver.org/) and are derived from conventional commit types:

| Commit type / footer                                                                | Version bump |
| ----------------------------------------------------------------------------------- | ------------ |
| `feat:`                                                                             | minor        |
| `fix:`, `perf:`, `refactor:`, `docs:`, `style:`, `test:`, `build:`, `ci:`, `chore:` | patch        |
| `BREAKING CHANGE:` footer or `feat!:` / `fix!:`                                     | major        |

---

## Checklist before releasing

- [ ] All changes are committed and merged to `main`
- [ ] Tests pass (`npm run test`)
- [ ] You are on `main` and have pulled latest changes
- [ ] The package builds cleanly (`npm run build -w packages/<package-name>`)
- [ ] Optionally: test locally with `npm link` before publishing

---

## Troubleshooting

**Wrong commits included in changelog:** The script uses git tags to determine what's new. If the previous release tag is missing or wrong, the changelog range will be off. Check with `git tag -l "@sikt/sds-<package-name>*"`.

**Tag points to the wrong commit:** Delete and recreate it:

```sh
git tag -d @sikt/sds-<package-name>@<version>
git tag -a @sikt/sds-<package-name>@<version> -m "chore(<package-name>): release <version>"
```

**Pipeline did not publish:** Check that the tag format exactly matches `@sikt/sds-<package-name>@<version>` — the pipeline triggers on this pattern.
