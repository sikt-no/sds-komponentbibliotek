import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-tabs";

test.describe("Tabs", () => {
  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-tabs--default");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-tabs--default");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-icon-and-slot screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-tabs--with-icon-and-slot",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-tabs--default");
      await page.getByRole("tab").first().focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
