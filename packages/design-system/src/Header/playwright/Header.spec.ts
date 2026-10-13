import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Header", () => {
  const componentSelector = ".sd3-header";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-header--default");

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("with menu should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-header--menu");

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-header--default");

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with product name should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-header--product-name",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with menu should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-header--menu");

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with menu open search should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-header--menu");

      await page.locator(componentSelector).waitFor();
      await page.getByRole("button", { name: "Søk" }).click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
