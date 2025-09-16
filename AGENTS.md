# Agents

Guidelines for coding agents.

## Context

- [README.md](./README.md) contains basic usage and links to other documentation.
- [CONTRIBUTING.md](./CONTRIBUTING.md) contains architecture, code style, workflow, contribution guidelines, new component creation, versioning and package release.

## Project structure

- `/app`: Directory for web apps
  - `/astro`: Astro web app designsystem.sikt.no
  - `/storybook`: Storybook web app designsystem.sikt.no/storybook
- `/docs`: Documentation
- `/jest`: Jest unit test setup directory
- `/packages`: Directory for packages
  - `/tokens`: Design tokens package
  - `/core`: Core package containing reset & base CSS + base components
  - `/hooks`: React hooks package
  - `/*-config`: Config packages
  - `/*`: Component packages
- `/turbo`: Plop generator template for new component packages
- `/types`: TypeScript types
- `/.gitlab`: GitLab config files
- `/.husky`: Git hooks

## Component structure

```
packages/component/
├── playwright/
└── Component.spec.ts
├── src/
├── Component.tsx
├── Component.test.tsx
└── component.pcss
├── stories/
└── Component.stories.tsx
└── index.ts
```

## Setup

- `npm ci` Install dependencies
- `npm run build` Build packages
- `npm run dev` Run web apps

## Commands

### Development

- `npm run dev` Run Astro & Storybook web apps
- `npm run dev:astro` Run Astro web app on http://localhost:4321
- `npm run dev:storybook` Run Storybook web app on http://localhost:6006
- `npm run format` Run code formatter (Prettier)
- `npm run init` Generate new component package

### Build

- `npm run build` Build packages
- `npm run build:astro` Build Astro web app
- `npm run build:storybook` Build Storybook web app

### Linting

- `npm run lint` Lint TypeScript & CSS
- `npm run lint:ts` Lint TypeScript
- `npm run lint:css` Lint CSS

### Testing

- `npm run test` Run unit tests: API & accessibility (Jest)
- `npm run test:unit -- -- packages/component/**/*.test.tsx` Run single component unit test suite
- `npm run test:e2e` Run end-to-end tests: visual regression & accessibility (Playwright)
