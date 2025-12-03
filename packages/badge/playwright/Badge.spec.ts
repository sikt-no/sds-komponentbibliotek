import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Badge", () => {
  const componentSelector = ".sds-badge";

  test.describe("a11y", () => {
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
    test("should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-badge--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("should have screenshot without count", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-badge--without-count",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
