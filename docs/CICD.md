# CI/CD

The [Gitlab CI/CD pipeline](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/-/pipelines) is [configured as code](.gitlab-ci.yml).

<details>
  <summary>Table of Contents</summary>

- [Variables](#variables)
- [Secrets](#secrets)

</details>

## Variables

| Name                     | Type                | Stored                                                                                   | Description                                                                                                                                                    | How to update                                                                                                                       | Renew  | Owner  |
| :----------------------- | :------------------ | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :----- | :----- |
| designsystem-renovatebot | Gitlab Access Token | [Gitlab](https://gitlab.sikt.no/platon/renovate/instances/designsystem/-/settings/ci_cd) | Used by the Renovate bot to update dependencies on a [scheduled pipeline](https://gitlab.sikt.no/platon/renovate/instances/designsystem/-/pipeline_schedules). | Add [Gitlab Access Token](https://gitlab.sikt.no/groups/designsystem/-/settings/access_tokens) with scope _api_ & role _Maintainer_ | yearly | Gitlab |
| slack-webhook-private    | Slack Webhook URL   | [Gitlab](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/-/settings/ci_cd)    | Used by the [pipeline](.gitlab-ci.yml) job `vuln-schedule-report` to post failed vulnerability scan results to #designsystem-internal-maintainers on Slack.    | [Slack API](https://api.slack.com/apps/A060DV95L0L/incoming-webhooks)                                                               | never  | Slack  |
| slack-webhook-public     | Slack Webhook URL   | [Gitlab](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/-/settings/ci_cd)    | Used by the [pipeline](.gitlab-ci.yml) job `release-report` to succeeded releases to #designsystem on Slack.                                                   | [Slack API](https://api.slack.com/apps/A060DV95L0L/incoming-webhooks)                                                               | never  | Slack  |

## Secrets

Secrets are stored in [Vault](https://platon.sikt.no/tjenester/vault/).

| Name        | Type                | Stored                                                                                   | Description                                                                                                                                       | How to update                                                                                                                       | Renew  | Owner                                             |
| :---------- | :------------------ | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- | :----- | :------------------------------------------------ |
| ci-token    | Gitlab Access Token | [Vault](https://vault.sikt.no:8200/ui/vault/secrets/secret/kv/list/gitlab/designsystem/) | Used by the [pipeline](.gitlab-ci.yml) manual job `test-e2e-update-snapshots` to commit updates of Playwright visual snapshots to the repository. | Add [Gitlab Access Token](https://gitlab.sikt.no/groups/designsystem/-/settings/access_tokens) with scope _api_ & role _Maintainer_ | yearly | Gitlab                                            |
| npm-token   | NPM Access Token    | [Vault](https://vault.sikt.no:8200/ui/vault/secrets/secret/kv/list/gitlab/designsystem/) | Used by the [pipeline](.gitlab-ci.yml) job `publish-npm` to publish new released packages to npm.                                                 | Add a Granular Access Token with _Read and write_ permission & scope _@sikt_                                                        | yearly | [Andreas](https://gitlab.sikt.no/andreas.solberg) |
| figma-token | Figma API Token     | [Vault](https://vault.sikt.no:8200/ui/vault/secrets/secret/kv/list/gitlab/designsystem/) | Used by the [pipeline](.gitlab-ci.yml) job `publish-figma` to publish Figma Code Connect components to Figma.                                     | Go to Figma > User > Settings > Security > Personal access token > Code Connect: _Write_                                            | never  | [Kristoffer](https://gitlab.sikt.no/krnor)        |
