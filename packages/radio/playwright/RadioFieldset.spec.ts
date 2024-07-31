import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("RadioFieldset", () => {
  const componentSelector = ".sds-form-fieldset";

  test.describe("a11y", () => {
    test("default radio fieldset should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-radio-radiofieldset--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("default radio fieldset with help text should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-radio-radiofieldset--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("default radio fieldset with error should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-radio-radiofieldset--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default radio fieldset should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-radio-radiofieldset--default",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("default radio fieldset with help text should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-radio-radiofieldset--with-help-text",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("default radio fieldset with error should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-radio-radiofieldset--with-error",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
