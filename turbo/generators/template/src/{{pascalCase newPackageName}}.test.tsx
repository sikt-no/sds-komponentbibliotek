import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { {{pascalCase newPackageName}} } from "./{{pascalCase newPackageName}}";

describe("{{pascalCase newPackageName}}", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<{{pascalCase newPackageName}} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    /* tests goes here */
  });
});
