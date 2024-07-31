import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Email Input Field", () => {
  const componentSelector = ".sds-input";

  test.describe("a11y", () => {
    test("default email input field should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-email--input",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("email input field with help text should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-email--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("email input field with error should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-email--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default email input field should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-email--input",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("email input field with help text should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-email--with-help-text",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("email input field with error should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-input-email--with-error",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
