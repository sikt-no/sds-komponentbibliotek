import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-checkbox-card";

test.describe("CheckboxCard", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--default",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("with help text should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--with-help-text",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("indeterminate should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--indeterminate",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--disabled",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("critical should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--critical",
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
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--default",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with help text screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--with-help-text",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("indeterminate screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--indeterminate",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--default",
      );
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("pressed screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--default",
      );
      const target = page.locator(componentSelector);
      await target.hover();
      await page.mouse.down();
      await expect(target).toHaveScreenshot();
      await page.mouse.up();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--default",
      );
      await page.locator(`${componentSelector} input`).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--disabled",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("critical screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-checkbox-checkboxcard--critical",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
