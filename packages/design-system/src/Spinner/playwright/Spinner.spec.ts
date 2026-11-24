import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Spinner", () => {
  const componentSelector = ".sd3-spinner";

  const stories = ["default", "sizing"] as const;

  test.describe("a11y", () => {
    stories.forEach((story) => {
      test(`${story} should be accessible`, async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=sd3-spinner--${story}`);
        await page.locator(componentSelector).first().waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
    stories.forEach((story) => {
      test(`${story} should have screenshot`, async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=sd3-spinner--${story}`);
        await page.locator(componentSelector).first().waitFor();
        await expect(
          page.locator(componentSelector).first(),
        ).toHaveScreenshot();
      });
    });
  });
});
