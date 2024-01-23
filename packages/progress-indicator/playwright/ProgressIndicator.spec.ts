import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Progress indicator", () => {
  const componentSelector = ".sds-progress-indicator";

  test.describe("a11y", () => {
    test("progress indicator should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("progress indicator with hidden numbers should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--hide-numbers",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("progress indicator with hidden labels should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--hide-labels",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("progress indicator should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("progress indicator with hidden numbers should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--hide-numbers",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("progress indicator with hidden labels should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-progressindicator--hide-labels",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
