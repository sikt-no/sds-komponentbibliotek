---
status: "accepted"
date: 2026-01-01
decision-makers: Kristoffer & Vegard S.
---

# Tech Stack

## Context and Problem Statement

Sikt designsystem needs various technology for building, testing, maintaining and distribution.

## Decision Outcome

### JavaScript

- ✅ React
- ❌ Web Components  
  React now fully supports Web Components. However building and maintaining these are still a overhead for Sikt when most teams/products are on React. Building Web Components will probably not mean more teams will start to use Sikt designsystem.

### CSS

- CDN **consider**  
  CDN with bundled and versioned CSS from SDS for use in non-React projects. Should be distributed from static.sikt.no
- ❌ @scope  
  No extra value changing from BEM. When building new @scope is the right choise.

### Tokens

- Terrazzo **consider**  
  DTCG support. Supports Figma API. Supports Tailwind CSS v4.
- ❌ sugarcube  
  DTCG support. Has tokens, utilities, theming and components. A valid alternative to Style Dictionary. Is opinionated and utility first. Doesn't support `light-dark()` or Tailwind Config.

### Releases

- changesets **consider**

### Packages

- ✅ tsdown
- No bundling **consider**
- ❌ pnpm  
  Astro requires shamefully-hoist. Component docs (stories and md) are located in packages directory which don't work with silos.

### Docs

- ✅ JSDoc
  JSDoc will both help developers with hints when using Sikt designsystem and add documentation close to code and exposed in Storybook props.
- ✅ Figma Code Connect  
  Wait for 3.0 overhauled design. This will give Agents correct components from sketches. Will have to be written manyaly since we don't have Github.
- ✅ Claude Plugin
- Storybook MCP **consider**  
  Only support dev server.
- Figma MCP **consider**
- Decap **consider**  
  Not prioritized since we have so few editors.

## More Information

Originally copied from [FigJam](https://www.figma.com/board/reBWzdcmYLH60zMDEGqqi0/SDS-Techstack) (previously Miro) board where discussions and decisions were first made.
