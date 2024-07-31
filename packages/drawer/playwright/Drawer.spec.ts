import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Drawer", () => {
  const componentSelector = ".sds-drawer";

  test.describe("a11y", () => {
    test("drawer closed should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-drawer--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("drawer expanded should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-drawer--default",
      );

      await page.locator(componentSelector).waitFor();

      await page.locator(componentSelector).getByLabel("Åpne skuff").click();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("drawer closed should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-drawer--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("drawer expanded should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-drawer--default",
      );

      await page.locator(componentSelector).waitFor();

      await page.locator(componentSelector).getByLabel("Åpne skuff").click();

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
