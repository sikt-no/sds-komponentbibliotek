import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-checkbox";

test.describe("Checkbox", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--default",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("checked should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--checked",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("indeterminate should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--indeterminate",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--disabled",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("critical should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--critical",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--default",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("indeterminate screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--indeterminate",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--default",
      );
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("pressed screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--default",
      );
      const target = page.locator(componentSelector);
      await target.hover();
      await page.mouse.down();
      await expect(target).toHaveScreenshot();
      await page.mouse.up();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--default",
      );
      await page.locator(`${componentSelector} input`).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--disabled",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled-checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--disabled-checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled-indeterminate screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--disabled-indeterminate",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("critical screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--critical",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("critical-checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkbox--critical-checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
