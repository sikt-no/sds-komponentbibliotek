import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const stories = [
  { id: "sd3-details--standard", label: "standard-closed" },
  { id: "sd3-details--standard&args=open:!true", label: "standard-open" },
  { id: "sd3-details--compact", label: "compact-closed" },
  { id: "sd3-details--compact&args=open:!true", label: "compact-open" },
  { id: "sd3-details--accordion", label: "accordion" },
] as const;

test.describe("Details", () => {
  const componentSelector = ".sd3-details";

  test.describe("a11y", () => {
    stories.forEach(({ id, label }) => {
      test(`${label} should be accessible`, async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=${id}`);
        await page.locator(componentSelector).first().waitFor();
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });
  });

  test.describe("visual", () => {
    stories.forEach(({ id, label }) => {
      test(`${label} should have screenshot`, async ({ page }) => {
        await page.goto(`/iframe.html?viewMode=story&id=${id}`);
        await page.locator(componentSelector).first().waitFor();
        await expect(page.locator("body")).toHaveScreenshot(`${label}.png`);
      });
    });
  });
});
