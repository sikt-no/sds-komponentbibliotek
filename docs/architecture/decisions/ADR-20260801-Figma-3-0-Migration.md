---
status: "proposed"
date: 2026-08-01
decision-makers: Kristoffer & Vegard S.
---

# Figma 3.0

## Context and Problem Statement

A new design overhaul of Figma that breaks almost everything from tokens to components, naming to APIs, requires a decision of how the code implementation should be executed. This is also an opportunity to make breaking technical changes since it already is a breaking change for the product teams. But we also need to carefully think about how the migration from 2.0 to 3.0 will affect the product teams.

## Decision Outcome

- ✅ **Change from multi package to single package**. This has been the trend among design systems for the past years since this moves maintenance complexity and cost from the design system team to the product teams. We as a tiny design system need to follow in the paths of giants and see the clear benefit for us as a team.
- ✅ **Drop React 18 support**. React 19 is now 1 1/2 years old and product teams should have been, or be, upgrading since a long time ago. No one has objected after the question was raised on Slack and in Office hours.
- ✅ **Align prop APIs**, names and values, by having centralized types for variant, size, etc
- ✅ **Replace BEM** CSS class names with [@scope](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope). This will remove a complicated naming methodology and make it easier to use our styling without our components.
- ✅ **Help with migration** by making SDS and SDS 3.0 work side-by-side
  - Work in the same repository. This ensures smooth maintenance of 2.0 at the same time as we develop 3.0.
  - Change prefix preventing package and CSS conflicts. This means old and new tokens and packages can work in the same page or app.
  - Build bridge components. Mapping old component props to the equivalent in the new components.
  - Build codemods or Agent skills that helps migrate to new packages
- Consider drop PostCSS. Most of the features we need are now native in CSS. Exceptions autoprefix and custom media.
- ❌ Do not use Atomic/Attribute Based CSS. This is a pattern trying to solve issues with Utility CSS enormous class attribute, this doesn't affect us.

## More Information

[Figma 3.0 tokens](https://www.figma.com/design/T3UXXg2tQndIgtZhMmMf6c/SDS-Tokens)  
[Figma 3.0 components](https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter)  
[Figma 2.0 tokens & components](https://www.figma.com/design/RMhyuuEhXZ4vbKVrLQr4t4/Komponentbibliotek-2.0.0--%E2%9A%A0-Blir-ikke-lenger-oppdatert-)
