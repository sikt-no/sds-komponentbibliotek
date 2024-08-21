import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Details } from "./Details";

describe("Details", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Details summary="Foo">Bar</Details>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Details summary="Foo" data-testid="test">
          Bar
        </Details>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-details");
    });

    it("should have class name", async () => {
      render(
        <Details summary="Foo" data-testid="test" className="test-class-name">
          Bar
        </Details>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-details test-class-name",
      );
    });
  });
});
