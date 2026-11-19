import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-dialog";

const openDialog = async (
  page: import("@playwright/test").Page,
  storyId: string,
) => {
  await page.goto(`/iframe.html?viewMode=story&id=${storyId}`);
  await page.getByRole("button").first().click();
  await page.locator(componentSelector).waitFor();
};

test.describe("Dialog", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await openDialog(page, "sd3-dialog--default");
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test("with close button should be accessible", async ({ page }) => {
      await openDialog(page, "sd3-dialog--with-close-button");
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("default screenshot", async ({ page }) => {
      await openDialog(page, "sd3-dialog--default");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with close button screenshot", async ({ page }) => {
      await openDialog(page, "sd3-dialog--with-close-button");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
