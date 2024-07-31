import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Footer", () => {
  const componentSelector = ".sds-footer";

  test.describe("a11y", () => {
    test("footer should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-footer--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("footer with content should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-footer--with-content",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("footer should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-footer--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("footer with content should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-footer--with-content",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
