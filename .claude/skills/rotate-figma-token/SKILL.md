---
name: rotate-figma-token
description: >
  Rotate the FIGMA_TOKEN secret used by sds-komponentbibliotek CI. Use when
  the user shares a CI log showing `figma connect publish` failing with a
  403 / "Token expired" auth error, or asks to rotate / renew the Figma
  token.
---

# Rotate FIGMA_TOKEN

The `figma connect publish` step in `.gitlab-ci.yml` reads `FIGMA_TOKEN`
from Sikt's Vault. Figma Personal Access Tokens expire on the rotation
you set at creation (90 days by convention here), and the CI job fails
with `Failed to fetch node info (403): 403 Token expired` when stale.

Manual process. Walk the user through one step at a time, wait for
confirmation before moving on.

## 1. Start EduVPN (if off-site)

Vault is only reachable from Sikt's network. Skip if on the office LAN.

## 2. Generate a new Figma Personal Access Token

https://www.figma.com/settings → Security → Personal access tokens → Generate new token

- **Name**: `GitLab CI – Code Connect publish` — says where it's used and what it does. Figma's own "Expires" column handles the date.
- **Expiration**: 90 days.
- **Scopes**:
  - `File content: Read` — publish fetches each referenced node to validate the mapping.
  - `Code Connect: Write` — for the upload step.

Figma only shows the token once. The user must copy it before closing the dialog.

## 3. Verify the token locally with a dry-run

Catching a scope mistake here is cheaper than finding out from the next
CI run. Have the user export the token in their own shell so it never
flows through tool calls:

```sh
read -s FIGMA_TOKEN && export FIGMA_TOKEN   # input hidden
```

Then run the dry-run from this session — it picks up `FIGMA_TOKEN` from
the env:

```sh
npx figma connect publish --dry-run --exit-on-unreadable-files
```

Exit 0 means both scopes work and the token is good. A 403 means the
scopes are wrong or the token was pasted incorrectly — back to step 2.
Do not proceed to Vault until the dry-run passes.

## 4. Write FIGMA_TOKEN into Vault

https://vault.sikt.no:8200/ui/vault/secrets-engines/secret/kv/gitlab%2Fdesignsystem%2Fsds-komponentbibliotek/details

Select new version → paste into `FIGMA_TOKEN` → Save. Vault should show
a new version number after saving.

## 5. Re-run the failing pipeline

Retry the failed job in GitLab. The `figma connect publish` step should
now pass. If it still 403s, the Vault value wasn't saved on the right
key — open the secret again and confirm `FIGMA_TOKEN` holds the new
value.
