import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import type { PopoverPlacement } from "../src/Popover";

const componentSelector = ".sd3-popover";
const triggerSelector = "[popovertarget]";
const screenshotSelector = "#storybook-root";

const cardinals: PopoverPlacement[] = [
  "top-center",
  "right-center",
  "bottom-center",
  "left-center",
];
const corners: PopoverPlacement[] = [
  "top-start",
  "bottom-start",
  "left-start",
  "right-start",
];
const themes = ["white", "gray"] as const;

const openPopover = async (page: Page, url: string) => {
  await page.goto(url);
  await page.locator(triggerSelector).first().click();
  await page.locator(`${componentSelector}:popover-open`).waitFor();
};

const storyUrl = (
  story: string,
  args?: Record<string, string>,
  globals?: Record<string, string>,
) => {
  const base = `/iframe.html?viewMode=story&id=sd3-popover--${story}`;
  const argsParam = args
    ? `&args=${Object.entries(args)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")}`
    : "";
  const globalsParam = globals
    ? `&globals=${Object.entries(globals)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")}`
    : "";
  return `${base}${argsParam}${globalsParam}`;
};

test.describe("Popover", () => {
  test.describe("a11y", () => {
    test("default should be accessible", async ({ page }) => {
      await openPopover(page, storyUrl("default"));
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });

    themes.forEach((theme) => {
      test(`theme=${theme} should be accessible`, async ({ page }) => {
        await openPopover(page, storyUrl("default", undefined, { theme }));
        const results = await new AxeBuilder({ page })
          .include(componentSelector)
          .analyze();
        expect(results.violations).toEqual([]);
      });
    });

    test("delete-confirmation should be accessible", async ({ page }) => {
      await openPopover(page, storyUrl("delete-confirmation"));
      const results = await new AxeBuilder({ page })
        .include(componentSelector)
        .analyze();
      expect(results.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    cardinals.forEach((placement) => {
      test(`placement=${placement} screenshot`, async ({ page }) => {
        await openPopover(page, storyUrl("default", { placement }));
        await expect(page.locator(screenshotSelector)).toHaveScreenshot();
      });
    });

    corners.forEach((placement) => {
      test(`placement=${placement} screenshot`, async ({ page }) => {
        await openPopover(page, storyUrl("default", { placement }));
        await expect(page.locator(screenshotSelector)).toHaveScreenshot();
      });
    });

    themes.forEach((theme) => {
      test(`theme=${theme} screenshot`, async ({ page }) => {
        await openPopover(page, storyUrl("default", undefined, { theme }));
        await expect(page.locator(screenshotSelector)).toHaveScreenshot();
      });
    });
  });
});
