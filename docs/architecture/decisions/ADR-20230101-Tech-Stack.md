---
status: "accepted"
date: 2023-01-01
decision-makers: Kristoffer
---

# Tech Stack

## Context and Problem Statement

Sikt designsystem needs various technology for building, testing, maintaining and distribution.

## Decision Outcome

### JavaScript

- ✅ React  
  Most teams/developers at Sikt are on React.
- Vue
- Svelte
- ❌ Web Components  
  Wished by Sikt but without no knowhow in the teams and a failed MVP this is not a good strategy. Reevaluate in the future.
- ❌ Angular

### CSS

- ✅ PostCSS  
  Can easily be migrated to CSS when we know what CSS type is most common in Sikt. Supports future CSS today.
- ✅ CSS  
  Should distribute CSS with support for own templating so non-React teams can still use the CSS.
- SCSS
- Less
- CSS modules
- ❌ CSS-in-JS  
  Bad performance, tooling, etc. Do not work with vanilla CSS output.
- ❌ Utility  
  Wished by Sikt but strongly advised against. Add speed in the start, lowers speed in the long run.
- ❌ Framework  
  Gives tight dependency to 3rd party library. Other design systems have had problems based on going for this strategy.

### Tokens

- ✅ Style Dictionary
- ❌ Theo

### Testing

- ✅ Jest
- Playwright
- Cypress

### Packages

#### Bundler

- ✅ Rollup
- Turbopack
- ❌ Webpack

#### Manager

- ✅ npm
- Yarn
- pnpm

#### Monorepo

- ✅ npm Workspaces  
  Fullfills basic needs. Use for MVP. Reevaluate in the future.
- Lerna
- Turborepo

#### Registry

- ✅ npmjs.org
- Artifactory
- Gitlab

### Docs

- ✅ Storybook  
  Wished by Sikt. Meets requriements for a developer sandbox but doesn't work as full documentation. Requries downgraded npm version. Look for alternatives.
- ✅ Markdown  
  Documentation close to code and can be distributed with published packages.
- Styleguidist

### Security

- ✅ Renovate  
  Doesn't work with npm Workspaces but they are working on a fix.
- Trivy
- Snyk
- socket.dev
- ❌ Dependabot  
  Can't group dependencies which will cause extra work.

## More Information

Originally copied from [FigJam](https://www.figma.com/board/reBWzdcmYLH60zMDEGqqi0/SDS-Techstack) (previously Miro) board where discussions and decisions were first made.
