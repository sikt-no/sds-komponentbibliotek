import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("InputFile", () => {
  const componentSelector = "[data-testid='sds-input-file']";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-inputfile--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("with error text should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-inputfile--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-inputfile--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with error should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-inputfile--with-error",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
