import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

const variants = ["default", "with-tag"].flatMap((story) =>
  ["standard", "compact"].map((size) => ({
    name: `${story} ${size}`,
    url: `/iframe.html?viewMode=story&id=sd3-navigationcard--${story}&args=size:${size}`,
  })),
);

test.describe("NavigationCard", () => {
  const componentSelector = ".sd3-navigation-card";

  test.describe("a11y", () => {
    for (const { name, url } of variants) {
      test(`${name} should be accessible`, async ({ page }) => {
        await page.goto(url);

        await page.locator(componentSelector).waitFor();

        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    }
  });

  test.describe("visual", () => {
    for (const { name, url } of variants) {
      test(`${name} should have screenshot`, async ({ page }) => {
        await page.goto(url);

        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    }
  });
});
