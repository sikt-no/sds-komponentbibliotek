import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("ApplicationStatus", () => {
  const componentSelector = ".sd3-application-status";

  const stories = [
    "info",
    "warning",
    "success",
    "critical",
    "neutral",
    "with-description",
    "with-dismiss",
  ] as const;

  test.describe("a11y", () => {
    stories.forEach((story) => {
      test(`${story} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-application-status--${story}`,
        );
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
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-application-status--${story}`,
        );
        await page.locator(componentSelector).first().waitFor();
        await expect(page.locator("#storybook-root")).toHaveScreenshot();
      });
    });
  });
});
