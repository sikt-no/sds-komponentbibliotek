import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-radio";

test.describe("Radio", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--default",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("checked should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--checked",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--disabled",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("critical should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--critical",
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
        "/iframe.html?viewMode=story&id=sd3-radio-radio--default",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--default",
      );
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("pressed screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--default",
      );
      const target = page.locator(componentSelector);
      await target.hover();
      await page.mouse.down();
      await expect(target).toHaveScreenshot();
      await page.mouse.up();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--default",
      );
      await page.locator(`${componentSelector} > input`).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--disabled",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled-checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--disabled-checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("critical screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--critical",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("critical-checked screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-radio-radio--critical-checked",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
