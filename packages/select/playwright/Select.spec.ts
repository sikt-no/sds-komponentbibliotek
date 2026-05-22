import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Select", () => {
  const componentSelector = ".sds-select";

  test.describe("a11y", () => {
    test("default select should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-select--default",
      );

      await page.locator(componentSelector).waitFor();
      await page.locator(componentSelector).click();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("select with help text should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-select--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("select with error should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-select--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default select should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-select--default",
      );

      await page.locator(componentSelector).waitFor();
      await page.locator(componentSelector).click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("select with help text should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-select--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("select with error should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-select--with-error",
      );

      await page.locator(componentSelector).waitFor();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
