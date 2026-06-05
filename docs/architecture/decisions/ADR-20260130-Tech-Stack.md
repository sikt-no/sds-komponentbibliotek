---
status: "accepted"
date: 2026-01-30
decision-makers: Kristoffer & Vegard
---

# Tech Stack

## Context and Problem Statement

Sikt designsystem needs various technology for building, testing, maintaining and distribution.

## Decision Outcome

### JavaScript

- React **Do**
- Web Components **Maybe/Don't**  
  React now fully supports Web Components. However building and maintaining these are still a overhead for Sikt when most teams/products are on React. Building Web Components will probably not mean more teams will start to use Sikt designsystem.

### CSS

- CDN **Maybe**  
  CDN with bundled and versioned CSS from SDS for use in non-React projects. Should be distributed from static.sikt.no
- @scope **Maybe/Don't**  
  No extra value changing from BEM. When building new @scope is the right choise.

### Tokens

- Terrazzo **Maybe**
- sugarcube **Maybe**

### Releases

- changesets **Maybe**

### Packages

- pnpm **Don't**  
  Astro requires shamefully-hoist. Component docs (stories and md) are located in packages directory which don't work with silos.
- tsdown **Maybe**  
  Still not ready and creates empty artifacts.
- No bundling **Maybe**

### Docs

- JSDoc **Do**
  JSDoc will both help developers with hints when using Sikt designsystem and add documentation close to code and exposed in Storybook props.
- Figma Code Connect **Do**  
  Wait for 3.0 overhauled design. This will give Agents correct components from sketches. Will have to be written manyaly since we don't have Github.
- Claude Plugin **Do**
- Storybook MCP **Maybe**
  Only support dev server.
- Figma MCP **Maybe**
- Decap **Maybe**  
  Not prioritized since we have so few editors.

## More Information

Originally copied from [FigJam](https://www.figma.com/board/reBWzdcmYLH60zMDEGqqi0/SDS-Techstack) (previously Miro) board where discussions and decisions were first made.
