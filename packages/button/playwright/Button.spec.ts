import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { ButtonVariant } from "../src/Button";

test.describe("Button", () => {
  const componentSelector = ".sds-button";
  const variants: ButtonVariant[] = [
    "strong",
    "subtle",
    "transparent",
    "critical",
    "neutral",
    "neutral-transparent",
  ];

  test.describe("a11y", () => {
    variants.map((variant) => {
      test(`${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=components-button-button--default&args=variant:${variant}`,
        );

        await page.locator(componentSelector).waitFor();

        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });

    test("small should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--default&args=size:small",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("icon-right should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--icon-right",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("icon-left should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--icon-left",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("icon-only should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--icon-only",
      );

      await page.locator(componentSelector).waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    variants.map((variant) => {
      test(`${variant} should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=components-button-button--default&args=variant:${variant}`,
        );

        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("small should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--default&args=size:small",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("icon-right should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--icon-right",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("icon-left should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--icon-left",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("icon-only should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--icon-only",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("with-notification should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-button-button--with-notification",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
