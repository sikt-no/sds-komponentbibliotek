import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

const variants = ["brand", "neutral", "critical", "warning", "info", "success"];
const sizes = ["large", "medium", "small"];

test.describe("Badge", () => {
  const componentSelector = ".sd3-badge";

  test.describe("a11y", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-badge--default&args=variant:${variant}`,
        );
        await page.locator(componentSelector).waitFor();

        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });

    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-badge--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();

        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-badge--default&args=variant:${variant}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    sizes.forEach((size) => {
      test(`size=${size} should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-badge--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    variants.forEach((variant) => {
      test(`variant=${variant} isDot should have screenshot`, async ({
        page,
      }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-badge--is-dot&args=variant:${variant}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    sizes.forEach((size) => {
      test(`size=${size} isDot should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-badge--is-dot&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });
  });
});
