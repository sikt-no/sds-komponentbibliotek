import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Badge", () => {
  const componentSelector = ".sds-badge";

  test.describe("a11y", () => {
    /* tests goes here */
    test("should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-badge--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    /* tests goes here */
    test("should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-badge--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
