import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Popover", () => {
  const componentSelector = ".sds-popover";

  test.describe("a11y", () => {
    test("popover should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-popover--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("popover should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-popover--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("popover target should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-popover--default",
      );

      await page.locator(componentSelector).waitFor();

      await page.locator(componentSelector).click();

      await expect(
        page.locator(`${componentSelector}__target`),
      ).toHaveScreenshot();
    });
  });
});
