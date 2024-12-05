import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Dialog", () => {
  const componentSelector = ".sds-dialog";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-dialog--default",
      );
      await page.locator(`${componentSelector}__trigger`).click();
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
        "/iframe.html?viewMode=story&id=components-dialog--default",
      );
      await page.locator(`${componentSelector}__trigger`).click();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
