import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Checkbox", () => {
  const componentSelector = ".sds-form-fieldset";

  test.describe("a11y", () => {
    test("checkbox fieldset with legend should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-checkbox-checkboxfieldset--with-legend",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("checkbox fieldset with help text should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-checkbox-checkboxfieldset--with-help-text",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("checkbox fieldset with error should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-checkbox-checkboxfieldset--with-error",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("checkbox fieldset with legend should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-checkbox-checkboxfieldset--with-legend",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("checkbox fieldset with help text should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-checkbox-checkboxfieldset--with-help-text",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("checkbox fieldset with error should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-checkbox-checkboxfieldset--with-error",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
