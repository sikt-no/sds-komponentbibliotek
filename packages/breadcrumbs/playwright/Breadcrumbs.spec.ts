import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Breadcrumbs", () => {
  const componentSelector = ".sds-breadcrumbs";

  test.describe("a11y", () => {
    test("default breadcrumbs should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-breadcrumbs--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default breadcrumbs should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-breadcrumbs--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
