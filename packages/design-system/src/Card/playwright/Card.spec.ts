import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Card", () => {
  const componentSelector = ".sd3-card";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-card--with-image");

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-card--default");

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with image vertical should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-card--with-image&args=variant:vertical",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with image horizontal should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-card--with-image&args=variant:horizontal",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
