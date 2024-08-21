import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Details", () => {
  const componentSelector = ".sds-details";

  test.describe("a11y", () => {
    test("should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-details--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-details--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("open should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-details--default",
      );

      await page.locator(componentSelector).waitFor();

      // TODO: Playwright is missing DisclosureTriangleGrouped role
      await page.locator(`${componentSelector}__summary`).click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("accordion should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-details--accordion",
      );

      // eslint-disable-next-line testing-library/prefer-screen-queries
      await expect(page.getByTestId("test")).toHaveScreenshot();
    });
  });
});
