import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Typography", () => {
  const componentSelector = ".sd3-typography";

  test.describe("Link", () => {
    const componentIframeId = "sd3-typography-link--default";

    test.describe("a11y", () => {
      test("should be accessible", async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=${componentIframeId}`);

        await page.locator(componentSelector).waitFor();

        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });

    test.describe("visual", () => {
      test("should have screenshot", async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=${componentIframeId}`);

        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });
  });
});
