import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("List", () => {
  const componentSelector = ".sd3-list";

  test.describe("a11y", () => {
    test("ordered should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-list-ordered--default",
      );

      await page.locator(componentSelector).first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("unordered should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-list-unordered--default",
      );

      await page.locator(componentSelector).first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("description should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-list-description--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("ordered should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-list-ordered--default",
      );

      await expect(page.locator(componentSelector).first()).toHaveScreenshot();
    });

    test("unordered should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-list-unordered--default",
      );

      await expect(page.locator(componentSelector).first()).toHaveScreenshot();
    });

    test("description should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-list-description--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
