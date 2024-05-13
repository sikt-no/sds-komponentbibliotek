import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Combobox", () => {
  const componentSelector = ".sds-combobox";

  test.describe("a11y", () => {
    test("default combobox should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("combobox should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
