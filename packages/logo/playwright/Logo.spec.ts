import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Logo", () => {
  test.describe("a11y", () => {
    test("logo default should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sds-logo--default");

      await page.locator(".sds-logo").waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-logo")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("logo default should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sds-logo--default");

      await expect(page.locator(".sds-logo")).toHaveScreenshot();
    });

    test("logo secondary should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sds-logo--default&args=variant:secondary",
      );

      await expect(page.locator(".sds-logo")).toHaveScreenshot();
    });

    test("logo product should have screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sds-logo--product");

      await expect(page.locator(".sds-logo")).toHaveScreenshot();
    });
  });
});
