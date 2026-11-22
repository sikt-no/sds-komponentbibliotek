import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { Direction, VariantButton, Size, ThemeButton } from "../../../types";

const componentSelector = ".sd3-button";
const groupSelector = ".sd3-button-group";

const variants: VariantButton[] = [
  "primary",
  "primary-subtle",
  "secondary",
  "tertiary",
];
const themes: ThemeButton[] = ["main", "neutral", "critical"];
const sizes: Size[] = ["large", "medium", "small"];
const directions: Direction[] = ["horizontal", "vertical"];
const positions = ["left", "right", "split"] as const;

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

    directions.forEach((direction) => {
      test(`group direction=${direction} should be accessible`, async ({
        page,
      }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--with-button-group&args=direction:${direction}`,
        );
        await page.locator(groupSelector).waitFor();
        const results = await new AxeBuilder({ page })
          .include(groupSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
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

    directions.forEach((direction) => {
      test(`group direction=${direction} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--with-button-group&args=direction:${direction}`,
        );
        await expect(page.locator(groupSelector)).toHaveScreenshot();
      });
    });

    positions.forEach((position) => {
      test(`group position=${position} screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-button--with-button-group&args=position:${position}`,
        );
        await expect(page.locator(groupSelector)).toHaveScreenshot();
      });
    });
  });

  test.describe("color theme", () => {
    test("primary follows data-color-theme=feide", async ({ page }) => {
      await page.goto("/iframe.html?viewMode=story&id=sd3-button--default");
      await page.locator(componentSelector).waitFor();

      // Pin color-scheme to light so `light-dark()` resolves deterministically.
      await page.evaluate(() => {
        document.documentElement.style.colorScheme = "only light";
        document.documentElement.setAttribute("data-color-theme", "feide");
      });

      const backgroundColor = await page
        .locator(componentSelector)
        .evaluate((el) => getComputedStyle(el).backgroundColor);

      // Feide / interaction / primary / default (light) = #1f4698
      expect(backgroundColor).toBe("rgb(31, 70, 152)");
    });
  });
});
