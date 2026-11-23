import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Size } from "../../../types";

const componentSelector = ".sd3-search-field";

const sizes: Size[] = ["large", "medium", "small"];

test.describe("SearchField", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-search-field--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--disabled",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("in-field should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--in-field",
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
          `/iframe.html?viewMode=story&id=sd3-search-field--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--default",
      );
      await page.locator(`${componentSelector} [type="search"]`).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--default",
      );
      await page.locator(`${componentSelector} [type="search"]`).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-value screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--default",
      );
      const input = page.locator(`${componentSelector} [type="search"]`);
      await input.fill("Sikt");
      await input.blur();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--disabled",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("in-field screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-search-field--in-field",
      );
      await expect(page.locator(".sd3-field")).toHaveScreenshot();
    });
  });
});
