import { test } from "@playwright/test";

test.describe("Button", () => {
  //const componentSelector = ".sd3-button";

  test.describe("a11y", () => {
    test("should be accessible", async () => {
      /*
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-button--default",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
       */
    });
  });

  test.describe("visual", () => {
    test("should have screenshot", async () => {
      /*
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-button--default",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
      */
    });
  });
});
