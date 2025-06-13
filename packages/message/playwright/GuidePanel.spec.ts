import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Message GuidePanel", () => {
  const componentSelector = ".sds-message";
  const variants = ["info", "warning"];

  test.describe("a11y", () => {
    variants.map((variant) => {
      test(`${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=components-message-guide-panel--guide-panel&args=variant:${variant}`,
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
    variants.map((variant) => {
      test(`${variant} should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=components-message-guide-panel--guide-panel&args=variant:${variant}`,
        );

        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });
  });
});
