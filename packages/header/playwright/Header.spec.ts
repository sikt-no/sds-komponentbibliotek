import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Header", () => {
  const componentSelector = ".sds-header";

  test.describe("a11y", () => {
    test("default header should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("header with product name should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-product-name",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("header with slots should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-slots",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default header should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("header with product name should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-product-name",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("header with slots should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-slots",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
