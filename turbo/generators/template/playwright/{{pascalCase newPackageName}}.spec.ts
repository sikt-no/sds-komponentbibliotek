import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("{{pascalCase newPackageName}}", () => {
  const componentSelector = ".sds-{{kebabCase newPackageName}}";

  test.describe("a11y", () => {
    /* tests goes here */
  });

  test.describe("visual", () => {
    /* tests goes here */
  });
});
