import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Search Input Field", () => {
  const componentSelector = ".sds-input";

  test.describe("a11y", () => {
    test("default search input field should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-search--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("search input field with help text should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-search--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("search input field with error should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-search--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default search input field should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-search--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("search input field with clear button should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?ViewMode=story&id=components-input-search--with-clear-button",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("search input field with help text should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-search--with-help-text",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("search input field with error should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-search--with-error",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
