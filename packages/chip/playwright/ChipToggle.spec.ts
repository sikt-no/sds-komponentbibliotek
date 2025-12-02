import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("ChipToggle", () => {
  const componentSelector = ".sds-chip";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-chip-toggle--default",
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
        "/iframe.html?viewMode=story&id=components-chip-toggle--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("should have toggled screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-chip-toggle--default",
      );

      await page.locator(componentSelector).waitFor();
      await page.locator(componentSelector).click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
