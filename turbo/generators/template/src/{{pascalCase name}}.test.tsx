import {render, screen} from "@testing-library/react";
import { axe } from "jest-axe";
import { {{pascalCase name}} } from "./{{pascalCase name}}";

describe("{{pascalCase name}}", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<{{pascalCase name}} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    /* tests goes here */
    it("should render", async () => {
      render(<{{pascalCase name}} data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sds-{{kebabCase name}}");
    });

    it("should have class name", async () => {
      render(
          <{{pascalCase name}} data-testid="test" className="test-class-name" />,
      );

      expect(screen.getByTestId("test")).toHaveClass(
          "sds-{{kebabCase name}} test-class-name",
      );
    });
  });
});
