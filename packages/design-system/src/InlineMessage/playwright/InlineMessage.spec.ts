import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const variants = ["critical", "warning", "success", "info"] as const;

test.describe("InlineMessage", () => {
  const componentSelector = ".sd3-inline-message";

  test.describe("a11y", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-inlinemessage--default&args=variant:${variant};children:Message`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-inlinemessage--default&args=variant:${variant};children:Message`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });
  });
});
