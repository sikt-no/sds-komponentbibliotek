import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("List", () => {
  const componentSelector = ".sds-list";
  test.describe("a11y", () => {
    test("description list should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-list-description--list",
      );

      await page.locator(".sds-description-list").waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-description-list")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("ordered list nested should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-list-ordered--nested",
      );

      await page.locator(componentSelector).first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("unordered list nested should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-list-unordered--nested",
      );

      await page.locator(componentSelector).first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("description list should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-list-description--list",
      );

      await expect(page.locator(".sds-description-list")).toHaveScreenshot();
    });

    test("ordered list nested should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-list-ordered--nested",
      );

      await expect(page.locator(componentSelector).first()).toHaveScreenshot();
    });

    test("unordered list nested should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-list-unordered--nested",
      );

      await expect(page.locator(componentSelector).first()).toHaveScreenshot();
    });
  });
});
