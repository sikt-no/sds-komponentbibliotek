import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Section", () => {
  const componentSelector = ".sds-section";

  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-section--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("with call to action should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-section--with-call-to-action",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-section--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with call to action should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-section--with-call-to-action",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
