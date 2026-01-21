import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Combobox", () => {
  const componentSelector = ".sds-combobox";
  const inputSelector = ".sds-combobox__input";

  test.describe("a11y", () => {
    test("combobox should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--default",
      );

      await page.locator(componentSelector).waitFor();
      await page.locator(inputSelector).click();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .exclude(".sds-combobox__input") // TODO: remove when u-combobox doesn't fail axe-core
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("combobox multiple should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--multiple",
      );

      await page.locator(componentSelector).waitFor();
      await page.locator(inputSelector).click();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .exclude(".sds-combobox__input") // TODO: remove when u-combobox doesn't fail axe-core
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("combobox should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--default",
      );

      await page.locator(componentSelector).waitFor();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("combobox multiple should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-combobox--multiple",
      );

      await page.locator(componentSelector).waitFor();
      await page.locator(inputSelector).click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
      await expect(page.locator(".sds-combobox__datalist")).toHaveScreenshot();
    });
  });
});
