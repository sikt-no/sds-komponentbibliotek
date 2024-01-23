import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Logo", () => {
  test.describe("a11y", () => {
    test("logo default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-logo--default",
      );

      await page.locator(".sds-logo").waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-logo")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("logo default should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-logo--default",
      );

      await expect(page.locator(".sds-logo")).toHaveScreenshot();
    });
  });
});
