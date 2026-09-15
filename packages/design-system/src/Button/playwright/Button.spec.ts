import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { ButtonSize, ButtonTheme, ButtonVariant } from "../src/Button";

const componentSelector = ".sd3-button";

const variants: ButtonVariant[] = [
  "primary",
  "primary-subtle",
  "secondary",
  "tertiary",
];
const themes: ButtonTheme[] = ["main", "neutral", "danger"];
const sizes: ButtonSize[] = ["large", "medium", "small"];

test.describe("Button", () => {
  test.describe("a11y", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--default&args=variant:${variant}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    themes.forEach((theme) => {
      test(`theme=${theme} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--default&args=theme:${theme}`,
        );
        await page.locator(componentSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("icon-only should be accessible", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-button--icon-only");
      await page.locator(componentSelector).waitFor();
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    // Slice pattern: each dimension against a fixed baseline of the others.
    // Avoids the variants × sizes × themes cartesian explosion.

    variants.forEach((variant) => {
      test(`variant=${variant} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--default&args=variant:${variant}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    sizes.forEach((size) => {
      test(`size=${size} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--default&args=size:${size}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    themes.forEach((theme) => {
      test(`theme=${theme} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--default&args=theme:${theme}`,
        );
        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("icon-left screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-button--icon-left");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("icon-right screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-button--icon-right");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("icon-only screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-button--icon-only");
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });

    test("focus-visible screenshot", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-button--default");
      await page.locator(componentSelector).focus();
      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
