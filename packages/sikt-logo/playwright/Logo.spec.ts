import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Logo", () => {
  const componentSelector = ".sd3-sikt-logo";

  test.describe("a11y", () => {
    test("logo default should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-sikt-logo--default");

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("logo default should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-sikt-logo--default");

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("logo secondary should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-sikt-logo--default&args=variant:secondary",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("logo product should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-sikt-logo--product");

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
