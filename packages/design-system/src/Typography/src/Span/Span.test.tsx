import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Span } from "./Span";

describe("Span", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Span />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Span data-testid="test" />);

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
        <Span asChild>
          <h2>Foo</h2>
        </Span>,
      );

      expect(
        screen.getByRole("heading", { level: 2, name: "Foo" }),
      ).toBeInTheDocument();
    });
  });
});
