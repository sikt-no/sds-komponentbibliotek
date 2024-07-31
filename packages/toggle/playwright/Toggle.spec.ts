import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Toggle", () => {
  test.describe("a11y", () => {
    test("toggle button should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-togglebutton--default",
      );

      await page.locator(".sds-toggle-button").waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-button")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("toggle segment default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-togglesegment--default",
      );

      await page.locator(".sds-toggle-segment").first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-segment")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("toggle segment with fixed width should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-togglesegment--with-fixed-width",
      );

      await page.locator(".sds-toggle-segment").first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-segment")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("toggle switch default should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--default",
      );

      await page.locator(".sds-toggle-switch").first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-switch")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("toggle switch without icon should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--without-icon",
      );

      await page.locator(".sds-toggle-switch").first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-switch")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("toggle switch with label first should be accessible", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--with-label-first",
      );

      await page.locator(".sds-toggle-switch").first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-switch")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("toggle switch with error should be accessible", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--with-error",
      );

      await page.locator(".sds-toggle-switch").first().waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .include(".sds-toggle-switch")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe("visual", () => {
    test("toggle button should should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-togglebutton--default",
      );

      await expect(page.locator(".sds-toggle-button")).toHaveScreenshot();
    });

    test("toggle segment default should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-togglesegment--default",
      );

      await expect(page.locator(".sds-toggle-segment")).toHaveScreenshot();
    });

    test("toggle segment with fixed width should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-togglesegment--with-fixed-width",
      );

      await expect(page.locator(".sds-toggle-segment")).toHaveScreenshot();
    });

    test("toggle switch default should have screenshot", async ({ page }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--default",
      );

      await expect(page.locator(".sds-toggle-switch")).toHaveScreenshot();
    });

    test("toggle switch without icon should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--without-icon",
      );

      await expect(page.locator(".sds-toggle-switch")).toHaveScreenshot();
    });

    test("toggle switch with label first should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--with-label-first",
      );

      await expect(page.locator(".sds-toggle-switch")).toHaveScreenshot();
    });

    test("toggle switch with error should have screenshot", async ({
      page,
    }) => {
      await page.goto(
        "/iframe.html?viewMode=story&id=components-toggle-toggleswitch--with-error",
      );

      await expect(page.locator(".sds-toggle-switch")).toHaveScreenshot();
    });
  });
});
