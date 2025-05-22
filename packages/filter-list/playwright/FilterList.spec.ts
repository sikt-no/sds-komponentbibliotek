import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("FilterList", () => {
  const componentSelector = ".sds-filter-list";

  test.describe("a11y", () => {
    test("FilterList should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--item-with-checkbox",
      );
      await page.locator(componentSelector).waitFor();
      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("FilterListItem should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--item-with-radio",
      );
      await page.locator(componentSelector).waitFor();
      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("FilterListSection should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--section-example",
      );
      await page.locator(componentSelector).waitFor();
      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("FilterListCategory should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--category-example",
      );
      await page.locator(componentSelector).waitFor();
      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("FilterListIcon should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--icon-example",
      );
      await page.locator(componentSelector).waitFor();
      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("FilterList should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--item-with-checkbox",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("FilterListItem should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--item-with-radio",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("FilterListSection should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--section-example",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("FilterListCategory should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--category-example",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("FilterListIcon should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-filterlist--icon-example",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
