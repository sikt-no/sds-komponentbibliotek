import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSelector = ".sd3-chip[data-chip='filter']";

const sizes = ["standard", "compact"] as const;
const pressedStates = [false, true] as const;

test.describe("FilterChip", () => {
  test.describe("a11y", () => {
    pressedStates.forEach((pressed) => {
      test(`pressed=${pressed} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-chip-filterchip--default&args=pressed:!${pressed}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
    sizes.forEach((size) => {
      test(`size=${size} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-chip-filterchip--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    pressedStates.forEach((pressed) => {
      test(`pressed=${pressed} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-chip-filterchip--default&args=pressed:!${pressed}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("hover screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-chip-filterchip--default",
      );
      await page.locator(componentSelector).hover();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-chip-filterchip--default",
      );
      await page.locator(componentSelector).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
