import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Span } from "./Span";

describe("Span", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Span variant="helper" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Span variant="helper" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sd3-typography");
    });

    it("should have class name", async () => {
      render(
        <Span
          data-testid="test"
          variant="helper"
          className="test-class-name"
        />,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-typography test-class-name",
      );
      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-variant",
        "helper",
      );
    });

    it("should change component with asChild", async () => {
      render(
        <Span variant="helper" data-testid="test" asChild>
          <h2>Foo</h2>
        </Span>,
      );

      expect(screen.getByTestId("test")).toHaveRole("heading");
    });
  });
});
