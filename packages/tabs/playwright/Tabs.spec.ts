import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Tabs", () => {
  const componentSelector = ".sds-tabs";

  test.describe("a11y", () => {
    test("default tabs should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tabs--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("tabs with icon should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tabs--with-icon",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("tabs with tag should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tabs--with-tag",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("tabs should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tabs--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("tabs with icon should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tabs--with-icon",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("tabs with tag should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tabs--with-tag",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
