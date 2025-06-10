import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Combobox", () => {
  const componentSelector = ".sds-combobox";

  test.describe("a11y", () => {
    test("combobox should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("combobox with help text should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("combobox with error should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--with-error",
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

    test("combobox with help text should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--with-help-text",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("combobox with error should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--with-error",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
