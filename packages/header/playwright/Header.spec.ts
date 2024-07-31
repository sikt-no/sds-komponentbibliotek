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

    test("header with link should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-link",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("header with text should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("header with collapsible menu should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-collapsible-menu",
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

    test("header with link should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-link",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("header with text should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-text",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("header with collapsible menu should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-header--with-collapsible-menu",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
