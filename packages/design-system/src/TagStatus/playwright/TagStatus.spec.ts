import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const variants = ["success", "info", "warning", "critical"] as const;
const visibilities = ["subtle", "strong"] as const;
const sizes = ["standard", "compact"] as const;

test.describe("TagStatus", () => {
  const componentSelector = ".sd3-tag-status";

  test.describe("a11y", () => {
    variants.forEach((variant) => {
      test(`variant=${variant} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-tagstatus--default&args=variant:${variant};children:Label`,
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
      visibilities.forEach((visibility) => {
        sizes.forEach((size) => {
          test(`variant=${variant} visibility=${visibility} size=${size} should have screenshot`, async ({
            page,
          }) => {
            await page.goto(
              `/iframe.html?viewMode=story&id=sd3-tagstatus--default&args=variant:${variant};visibility:${visibility};size:${size};children:Label`,
            );
            await expect(page.locator(componentSelector)).toHaveScreenshot();
          });
        });
      });
    });
  });
});
