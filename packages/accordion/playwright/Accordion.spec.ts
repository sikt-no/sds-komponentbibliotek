import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accordion", () => {
  const componentSelector = ".sds-accordion";

  test.describe("a11y", () => {
    test("accordion should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-accordion--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("accordion expanded should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-accordion--default",
      );

      await page.locator(componentSelector).waitFor();

      await page.locator(componentSelector).getByRole("button").click();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("accordion should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-accordion--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("accordion expanded should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-accordion--default",
      );

      await page.locator(componentSelector).waitFor();

      await page.locator(componentSelector).getByRole("button").click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
