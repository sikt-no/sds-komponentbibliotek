import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Progress Indicator", () => {
  const componentSelector = ".sds-progress-indicator";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("expandable should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--expandable",
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
        "/iframe.html?viewMode=story&id=components-progressindicator--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("without details should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("expandable should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--expandable",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("expandable open should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--expandable",
      );

      await page.locator(componentSelector).waitFor();

      // TODO: Playwright is missing DisclosureTriangleGrouped role
      await page.locator(`${componentSelector}__summary`).click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
