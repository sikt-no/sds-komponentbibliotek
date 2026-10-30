import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Size } from "../../../types";

const componentSelector = ".sd3-toggle-group";

const sizes: Size[] = ["small", "medium", "large"];

test.describe("ToggleGroup", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-toggle-group--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("with-icons should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-toggle-group--with-icons",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("icon-only should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-toggle-group--icon-only",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    sizes.forEach((size) => {
      test(`size=${size} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-toggle-group--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("with-icons screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-toggle-group--with-icons",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("icon-only screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-toggle-group--icon-only",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled-group screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-toggle-group--default&args=disabled:true",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-toggle-group--default",
      );
      await page.locator('[role="radio"][aria-checked="true"]').focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
