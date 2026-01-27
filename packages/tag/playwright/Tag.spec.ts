import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Tag", () => {
  const componentSelector = ".sds-tag";
  const variants = [
    "brand",
    "neutral",
    "success",
    "info",
    "warning",
    "critical",
  ];
  const visibilities = ["strong", "subtle"];
  const categories = ["1", "2", "3", "4", "5", "6", "7", "8"];

  test.describe("a11y", () => {
    variants.map((variant) => {
      visibilities.map((visibility) => {
        test(`status ${variant} with visibility ${visibility} should be accessible`, async ({
          page,
        }) => {
          await page.goto(
            `/iframe.html?viewMode=story&id=components-tag-status--default&args=variant:${variant};visibility:${visibility}`,
          );

          await page.locator(componentSelector).waitFor();

          const accessibilityScanResults = await new AxeBuilder({ page })
            .include(componentSelector)
            .analyze();

          expect(accessibilityScanResults.violations).toEqual([]);
        });
      });
    });

    categories.map((category) => {
      test(`category ${category} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=components-tag-category--default&args=category:${category}`,
        );

        await page.locator(componentSelector).waitFor();

        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });

    test("status with icon left should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tag-status--icon-left",
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
      visibilities.map((visibility) => {
        test(`status ${variant} with visibility ${visibility} should have screenshot`, async ({
          page,
        }) => {
          await page.goto(
            `/iframe.html?viewMode=story&id=components-tag-status--default&args=variant:${variant};visibility:${visibility}`,
          );

          await expect(page.locator(componentSelector)).toHaveScreenshot();
        });
      });
    });

    categories.map((category) => {
      test(`category ${category} should have screenshot`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=components-tag-category--default&args=category:${category}`,
        );

        await expect(page.locator(componentSelector)).toHaveScreenshot();
      });
    });

    test("status with icon left should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-tag-status--icon-left",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
