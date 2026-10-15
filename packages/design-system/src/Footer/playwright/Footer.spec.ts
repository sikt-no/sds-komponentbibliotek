import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  const componentSelector = ".sd3-footer";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-footer--default");

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-footer--default");

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
