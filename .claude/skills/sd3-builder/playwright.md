# Playwright e2e — `playwright/<PascalCase>.spec.ts`

Reference: `packages/design-system/src/Button/playwright/Button.spec.ts`. Open it before writing.

**Scope.** Playwright covers appearance and real-browser behaviour — visual snapshots, focus-ring rendering, hover, colour-contrast via axe-in-browser. Jest covers the contract (props → `data-*`, handlers, sub-component detection). Don't duplicate: no `data-variant="strong"` assertion here (Jest has it); no visual-diff assertion in Jest. See the "Jest vs Playwright — no overlap" section in `SKILL.md`.

## Rules

- **Slice, not cartesian.** All variants at default size/theme. All sizes at default variant/theme. All themes at default variant/size. Plus focus-visible / hover-if-layout-shifting at default. That's `N_variants + N_sizes + N_themes + N_states` screenshots — not `N_variants × N_sizes × N_themes`.
- Axe per variant and per theme at default size. **Not** per size — text sizing does not change accessibility.
- Composition stories (icon-left, icon-only, …) get **one** screenshot each at default.
- One dimension per loop. Never nest `variants.forEach → sizes.forEach` — cartesian anti-pattern.
- Story URL id: `sd3-<kebab>--<story-name-kebabed>`. Args syntax: `&args=k1:v1;k2:v2`.
- Specific-combination test only with a one-line `// Explicit: <reason>` comment (e.g. `small+secondary has distinct border collapse`). Do not re-open the matrix.
- **Don't run `playwright test` or generate baselines locally.** macOS baselines don't match CI Linux. CI regenerates them per `CONTRIBUTING.md`.
- No intro/section comments that paraphrase the tests below — test IDs speak for themselves.

## Shape

```ts
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { <PascalCase>Size, <PascalCase>Theme, <PascalCase>Variant } from "../src/<PascalCase>";

const componentSelector = ".sd3-<kebab>";
const variants: <PascalCase>Variant[] = [...];
const sizes:    <PascalCase>Size[]    = [...];
const themes:   <PascalCase>Theme[]   = [...];

test.describe("<PascalCase>", () => {
  test.describe("a11y", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should be accessible`, async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=sd3-<kebab>--default&args=variant:${variant}`);
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page }).include(componentSelector).analyze();
        expect(results.violations).toEqual([]);
      });
    });
    themes.forEach((theme) => { /* same shape, args=theme:${theme} */ });
    // NOT: forEach size
  });

  test.describe("visual", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} screenshot`, async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=sd3-<kebab>--default&args=variant:${variant}`);
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });
    sizes.forEach((size) => { /* same shape */ });
    themes.forEach((theme) => { /* same shape */ });

    // Composition stories: one shot each.
    test("icon-left screenshot", async ({ page }) => { /* … */ });

    // Interaction: one shot at default.
    test("focus-visible screenshot", async ({ page }) => { /* … .focus() then screenshot */ });
  });
});
```
