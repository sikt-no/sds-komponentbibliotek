import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Badge", () => {
  const componentSelector = ".sds-badge";
  const variants = ["primary", "success", "critical", "warning", "info"];
  const visibilities = ["strong", "subtle"];

  test.describe("a11y", () => {
    variants.map((variant) => {
      visibilities.map((visibility) => {
        test(`${variant} with visibility ${visibility} should be accessible`, async ({
          page,
        }) => {
          await page.goto(
            `/iframe.html?viewMode=story&id=components-badge--default&args=variant:${variant};visibility:${visibility}`,
          );

          await page.locator(componentSelector).waitFor();

          const accessibilityScanResults = await new AxeBuilder({ page })
            .include(componentSelector)
            .analyze();

          expect(accessibilityScanResults.violations).toEqual([]);
        });
      });
    });

    test("icon left badge should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-badge--icon-left",
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
        test(`${variant} with visibility ${visibility} should have screenshot`, async ({
          page,
        }) => {
          await page.goto(
            `/iframe.html?viewMode=story&id=components-badge--default&args=variant:${variant};visibility:${visibility}`,
          );

          await expect(page.locator(componentSelector)).toHaveScreenshot();
        });
      });
    });

    test("icon left badge should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-badge--icon-left",
      );

      await expect(page.locator(componentSelector)).toHaveScreenshot();
    });
  });
});
