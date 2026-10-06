import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-textarea";

test.describe("Textarea", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--default");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--disabled");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("readOnly should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--read-only");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--default");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--default");
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--default");
      await page.locator(componentSelector).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--disabled");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("readonly screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--read-only");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("error screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-textarea--error");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
