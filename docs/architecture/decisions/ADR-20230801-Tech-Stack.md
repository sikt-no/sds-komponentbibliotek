---
status: "accepted"
date: 2023-08-01
decision-makers: Kristoffer
---

# Tech Stack

## Context and Problem Statement

Sikt designsystem needs various technology for building, testing, maintaining and distribution.

## Decision Outcome

### Testing

- ✅ Playwright

### Releases

- Standard Version **consider**  
  Unmaintained.
- Release It
- ❌ Sematic Release  
  No CLI.

### Packages

- esbuild **consider**  
  Didn't give faster build when all plugins where added.
- tsup **consider**  
  Only experimental support for CSS

### Docs

- Astro **consider**
- 11ty **consider**
- ❌ Gatsby **consider**

## More Information

Originally copied from [FigJam](https://www.figma.com/board/reBWzdcmYLH60zMDEGqqi0/SDS-Techstack) (previously Miro) board where discussions and decisions were first made.
