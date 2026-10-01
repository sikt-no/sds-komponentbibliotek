import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Size } from "../../../types";

const componentSelector = ".sd3-field";

const sizes: Size[] = ["small", "medium", "large"];

test.describe("Field", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-field--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("with-validation should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-field--with-validation",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("read-only should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-field--read-only");
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
          `/iframe.html?viewMode=story&id=sd3-field--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("with-validation screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-field--with-validation",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("read-only screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-field--read-only");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-field--disabled");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
