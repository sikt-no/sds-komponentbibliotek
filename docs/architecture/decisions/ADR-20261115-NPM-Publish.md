---
status: "proposed"
date: 2026-11-15
decision-makers: Kristoffer & Vegard S.
---

# NPM Publish

## Context and Problem Statement

As from January 2027 npmjs.org will [no longer accept 2FA-bypass tokens](https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/#2fa-bypass-tokens-will-no-longer-publish-directly) for publishing packages.

## Considered Options

- [Trusted publishing](https://docs.npmjs.com/trusted-publishers) which can't be done from self-hosted Gitlab
- [Staged publishing](https://docs.npmjs.com/staged-publishing)
- Manual publishing from local developer machine
- Gitlab registry

## Decision Outcome

Staged publishing is the decided outcome. It is the least bad option.

Trusted publishing could have been done from our mirrored repository on Github but this requires having pipelines running on two different service providers.

Manual publishing was never a real option since it's fully manual and non-transparent.

Gitlab package registry would have been a good option if not for Sikt using a 3rd party for building for example sikt.no which should require usage of Sikt designsystem.

### Consequences

This will mean the [release pipeline](../../../.gitlab/ci/release.gitlab-ci.yml) will only stage a package for publishing on npmjs.org. And it will require a manual 2FA approval step from maintainers on npmjs.org.
