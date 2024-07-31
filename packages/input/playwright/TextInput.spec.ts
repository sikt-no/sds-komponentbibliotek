import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Text Input Field", () => {
  const componentSelector = ".sds-input";

  test.describe("a11y", () => {
    test("default text input field should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-text--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("text input field with help text should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-text--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("text input field with error should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-text--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default text input field should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-text--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("text input field with help text should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-text--with-help-text",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("text input field with error should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-text--with-error",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
