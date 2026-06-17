---
status: "accepted"
date: 2024-09-30
decision-makers: Kristoffer & Vegar
---

# Tech Stack

## Context and Problem Statement

Sikt designsystem needs various technology for building, testing, maintaining and distribution.

## Decision Outcome

### JavaScript

- React **Do**
- Web Components **Maybe**  
  Vanilla, Lit, Stencil, Atomico?

### CSS

- PostCSS **Do**
- CSS
- SCSS

### Tokens

- Style Dictionary **Do**
- Figma API **Do/Maybe**  
  Sikt doesn't have high enough Figma tier.

### Testing

- Palywright **Do**
- Jest **Do**
- Vitest **Maybe**  
  No big gain from migrating.
- chromatic **Don't**  
  Cost and lockdown to Storybook. We have the same features with Playwright.

### Releases

- commit-and-tag-version **Do**  
  Forked Standard Version
- Release It
- changesets
- Standard Version **Don't**  
  Unmaintained.
- Sematic Release **Don't**  
  No CLI

### Packages

#### Bundler

- esbuild **Do**
- tsup **Do**  
  CSS support is better.
- Rollup **Don't**

#### Monorepo

- npm Workspaces **Do**
- Turborepo **Do**
- Nx **Maybe**  
  High cost.
- Lerna **Don't**

### Docs

- Storybook **Do**  
  Hopefully we can phase this out.
- Astro **Do**
- Zeroheight **Maybe**  
  Cost and work load.
- Gatsby **Don't**
  Unmaintained.
- 11ty **Don't**  
  Doesn't fullfill our needs with support for MDX and React.

#### CMS

- MDX **Do**
- Decap **Do**  
  Good support for MDX, Gitlab Auth and content in version control. Require Gitlab maintainer role to push/publish new content.
- Drupal
  Used by Sikt.
- Payload
- Sanity **Don't**  
  Costs and don't own our own data.
- Docusaurus **Don't**  
  Used by Sikt. Have too bad DevEx and UX.

### Security

- Renovate **Do**
- Trivy **Do**  
  In Sikt platform Platon.

## More Information

Originally copied from [FigJam](https://www.figma.com/board/reBWzdcmYLH60zMDEGqqi0/SDS-Techstack) (previously Miro) board where discussions and decisions were first made.
