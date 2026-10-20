import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { FieldsetSize } from "../src/FieldsetContext";

const componentSelector = ".sd3-fieldset";

const sizes: FieldsetSize[] = ["medium", "large"];

test.describe("Fieldset", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-fieldset--default&args=size:${size}`,
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
        "/iframe.html?viewMode=story&id=sd3-fieldset--with-validation",
      );
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("disabled should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-fieldset--disabled");
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
          `/iframe.html?viewMode=story&id=sd3-fieldset--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("with-validation screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--with-validation",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("disabled screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-fieldset--disabled");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("legend-with-tag screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--legend-with-tag",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-checkboxes screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--with-checkboxes",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-radio-buttons screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--with-radio-buttons",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-fields screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--with-fields",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-date-fields screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--with-date-fields",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("horizontal-radios screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-fieldset--horizontal-radios",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
