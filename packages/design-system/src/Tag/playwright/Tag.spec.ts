import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const colors = [
  "brand",
  "neutral",
  "category-1",
  "category-2",
  "category-3",
  "category-4",
  "category-5",
  "category-6",
  "category-7",
] as const;

const visibilities = ["subtle", "strong"] as const;
const sizes = ["standard", "compact"] as const;

test.describe("Tag", () => {
  const componentSelector = ".sd3-tag";

  test.describe("a11y", () => {
    colors.forEach((color) => {
      test(`color=${color} should be accessible`, async ({ page }) => {
        await page.goto(
          `/iframe.html?viewMode=story&id=sd3-tag--default&args=color:${color};children:Label`,
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
    colors.forEach((color) => {
      visibilities.forEach((visibility) => {
        sizes.forEach((size) => {
          test(`color=${color} visibility=${visibility} size=${size} should have screenshot`, async ({
            page,
          }) => {
            await page.goto(
              `/iframe.html?viewMode=story&id=sd3-tag--default&args=color:${color};visibility:${visibility};size:${size};children:Label`,
            );
            await expect(page.locator(componentSelector)).toHaveScreenshot();
          });
        });
      });
    });
  });
});
