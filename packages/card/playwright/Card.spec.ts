import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Card", () => {
  const componentSelector = ".sds-card";

  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-card--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-card--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
