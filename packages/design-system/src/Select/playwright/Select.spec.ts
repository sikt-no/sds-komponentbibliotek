import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Size } from "../../../types";

const componentSelector = ".sd3-select";

const sizes: Size[] = ["large", "medium", "small"];

test.describe("Select", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-select--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-select--disabled");
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
          `/iframe.html?viewMode=story&id=sd3-select--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-select--default");
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-select--default");
      await page.locator("select").focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-select--disabled");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("error screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-select--error");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
