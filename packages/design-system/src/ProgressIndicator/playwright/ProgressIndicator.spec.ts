import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-progress-indicator";

const sizes = ["compact", "standard", "expanded"] as const;
const directions = ["horizontal", "vertical"] as const;

test.describe("ProgressIndicator", () => {
  test.describe("a11y", () => {
    sizes.forEach((size) => {
      test(`size=${size} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-progressindicator--default&args=size:${size}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
    sizes.forEach((size) => {
      directions.forEach((direction) => {
        test(`all-statuses size=${size} direction=${direction} screenshot`, async ({
          page,
        }) => {
          await page.goto(
            `/iframe.html?viewMode=story&id=sd3-progressindicator--all-statuses&args=size:${size};direction:${direction}`,
          );
          await expect(page.locator(componentSelector)).toHaveScreenshot();
        });
      });
    });
  });
});
