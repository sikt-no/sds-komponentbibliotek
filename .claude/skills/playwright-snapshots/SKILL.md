---
name: playwright-snapshots
description: >
  Regenerate Playwright `-linux.png` snapshots for any component in
  sds-komponentbibliotek (SD3 or legacy sds-*) inside the Docker image CI uses.
  Use when the user wants to update snapshots or fix failing visual regression
  tests.
---

Only `-linux.png` is committed; macOS writes ignored `-darwin.png`. The image here is pinned to CI (`node:24.18.0`, from `.gitlab/ci/test.gitlab-ci.yml`) — a faster base like `mcr.microsoft.com/playwright:*-noble` produces pixel-different PNGs that fail CI comparison. Named volumes cache `node_modules`, npm, and the Playwright browser install across runs.

## Argument

One optional component reference, e.g. `/playwright-snapshots popover` or `/playwright-snapshots sds:popover`.

Resolve:

- **Bare name → SD3.** `popover` or `Popover` → `packages/design-system/src/Popover/`. Kebab input like `search-field` → `SearchField`.
- **`sds:` prefix → legacy.** `sds:popover` → `packages/popover/`. Legacy package names are already kebab; use as-is.
- **No arg → full suite** (both tracks).

Verify the resolved folder exists **and** contains a `playwright/` subfolder before running. If not, stop and ask. A bare name that only has a legacy match (e.g. `logo`) will not auto-fall-back — ask whether the user meant `sds:logo`.

## Downstream

Shared components (Spinner in Button's loading state, Icon everywhere) are rendered inside _other_ components' stories. When the target's pixels change, those downstream baselines flip too — missing them leaves CI red after an otherwise clean run.

Before the Docker run, grep for consumers and widen the Playwright path list. Scan matches — a grep for `Button` also hits `ButtonGroup` etc.; keep only lines that import or render the target.

**SD3 target** (stories import via the SD3 barrel):

```sh
grep -rln "\b<Component>\b" packages/design-system/src/ \
  --include="*.tsx" --include="*.ts" \
  --exclude-dir="<Component>" --exclude-dir="node_modules"
```

For each real hit, include `packages/design-system/src/<Other>/` if it has a `playwright/` subfolder.

**Legacy target** (packages import by npm name):

```sh
grep -rln '"@sikt/sds-<name>"' packages/ \
  --include="*.tsx" --include="*.ts" \
  --exclude-dir="node_modules" --exclude-dir="dist"
```

For each hit, include `packages/<other>/` if it has a `playwright/` subfolder.

Report the discovered consumer list before running. If it widens past ~5 packages, suggest the full suite instead (empty `<PATH>`).

Fragility is real: grep misses dynamic imports, re-exports through intermediates, and framework-level reaches. Treat the list as a floor, not a ceiling — CI is still the final word.

## Preflight — is Docker running?

```sh
docker info >/dev/null 2>&1
```

- Exit `0` → continue.
- Non-zero → stop and ask the user to start their Docker daemon; don't try to launch it yourself.

## Command

```sh
docker run --rm --network host \
  -v "$PWD":/work -w /work \
  -v sds-node-modules:/work/node_modules \
  -v sds-npm-cache:/root/.npm \
  -v sds-playwright-browsers:/root/.cache/ms-playwright \
  node:24.18.0 \
  bash -lc 'npm ci && npm run postinstall && npx playwright install --with-deps && CI=true npx playwright test <PATH> --update-snapshots=changed'
```

- `<PATH>` is a space-separated list of resolved folders (the target plus any downstream consumers), or empty for full suite.
- `npm run postinstall` is required because `.npmrc` has `ignore-scripts=true`.
- `--network host` lets the container reach the Storybook dev server started by `webServer` in `playwright.config.ts`.

## After the run

For each folder in `<PATH>` (or `packages/` on a full-suite run):

```sh
git status <folder>/playwright
git diff --stat <folder>/playwright
```

Summarise:

- Which `-linux.png` files were added, modified, or removed.
- Call out any unexpected test files that changed (spec edits, not just PNGs).

Do not commit. The user decides scope and message.

## Notes

- First run on a fresh machine is slow (image pull + `npm ci` into the volume + `playwright install --with-deps` populating the browser volume). Subsequent runs reuse all three and finish in ~test-duration + a few seconds.
- Volumes persist across runs; they survive `docker system prune` unless `--volumes` is passed. Delete with `docker volume rm sds-node-modules sds-npm-cache sds-playwright-browsers` if any drifts out of sync.
