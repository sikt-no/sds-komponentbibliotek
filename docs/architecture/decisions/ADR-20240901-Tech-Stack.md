---
status: "accepted"
date: 2024-09-01
decision-makers: Kristoffer & Vegar N.
---

# Tech Stack

## Context and Problem Statement

Sikt designsystem needs various technology for building, testing, maintaining and distribution.

## Decision Outcome

### JavaScript

- ✅ React
- Web Components **consider**  
  Vanilla, Lit, Stencil, Atomico?

### CSS

- ✅ PostCSS
- CSS
- SCSS

### Tokens

- ✅ Style Dictionary
- ✅ Figma API  
  Sikt doesn't have high enough Figma tier.

### Testing

- ✅ Playwright
- ✅ Jest
- Vitest **consider**  
  No big gain from migrating.
- ❌ chromatic  
  Cost and lockdown to Storybook. We have the same features with Playwright.

### Releases

- ✅ commit-and-tag-version  
  Forked Standard Version
- Release It
- changesets
- ❌ Standard Version  
  Unmaintained.
- ❌ Sematic Release  
  No CLI

### Packages

#### Bundler

- ✅ esbuild
- ✅ tsup  
  CSS support is better.
- ❌ Rollup

#### Monorepo

- ✅ npm Workspaces
- ✅ Turborepo
- Nx **consider**  
  High cost.
- ❌ Lerna

### Docs

- ✅ Storybook  
  Hopefully we can phase this out.
- ✅ Astro
- Zeroheight **consider**  
  Cost and work load.
- ❌ Gatsby
  Unmaintained.
- ❌ 11ty  
  Doesn't fullfill our needs with support for MDX and React.

#### CMS

- ✅ MDX
- ✅ Decap  
  Good support for MDX, Gitlab Auth and content in version control. Require Gitlab maintainer role to push/publish new content.
- Drupal
  Used by Sikt.
- Payload
- ❌ Sanity  
  Costs and don't own our own data.
- ❌ Docusaurus  
  Used by Sikt. Have too bad DevEx and UX.

### Security

- ✅ Renovate
- ✅ Trivy  
  In Sikt platform Platon.

## More Information

Originally copied from [FigJam](https://www.figma.com/board/reBWzdcmYLH60zMDEGqqi0/SDS-Techstack) (previously Miro) board where discussions and decisions were first made.
