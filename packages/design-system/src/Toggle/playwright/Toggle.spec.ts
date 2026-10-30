import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-toggle";

test.describe("Toggle", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--default");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("checked should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--checked");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--default");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("checked screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--checked");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--default");
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("hover-checked screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--checked");
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("pressed screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--default");
      const target = page.locator(componentSelector);
      await target.hover();
      await page.mouse.down();
      await expect(target).toHaveScreenshot();
      await page.mouse.up();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-toggle--default");
      await page.locator(`${componentSelector} > input`).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
