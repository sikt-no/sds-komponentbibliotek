import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { SizeDensity } from "../../../types";
import type { StatusMessageVariant } from "../src/StatusMessage";

const componentSelector = ".sd3-status-message";

const variants: StatusMessageVariant[] = [
  "success",
  "failure",
  "warning",
  "info",
  "neutral",
];
const sizes: SizeDensity[] = ["standard", "compact"];

test.describe("StatusMessage", () => {
  test.describe("a11y", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-statusmessage--default&args=variant:${variant}`,
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
    variants.forEach((variant) => {
      test(`variant=${variant} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-statusmessage--default&args=variant:${variant}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    sizes.forEach((size) => {
      test(`size=${size} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-statusmessage--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("description-only screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-statusmessage--description-only",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-links screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-statusmessage--with-links",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("error-summary screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-statusmessage--error-summary",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("alert screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-statusmessage--alert",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("guide-panel screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=sd3-statusmessage--guide-panel",
      );
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
