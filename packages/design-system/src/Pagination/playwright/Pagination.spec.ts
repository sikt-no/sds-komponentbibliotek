import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { PaginationSize } from "../src/PaginationContext";

const componentSelector = ".sd3-pagination";

const sizes: PaginationSize[] = ["standard", "compact"];

test.describe("Pagination", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-pagination--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("single-page should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-pagination--default&args=count:1",
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
          `/iframe.html?viewMode=story&id=sd3-pagination--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("single-page screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-pagination--default&args=count:1",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus-visible on current page screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-pagination--default");
      await page.locator('[aria-current="page"]').focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
