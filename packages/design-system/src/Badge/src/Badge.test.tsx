import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Badge } from "./Badge";

describe("Badge", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Badge />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Badge data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sd3-badge");
      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-variant",
        "brand",
      );
      expect(screen.getByTestId("test")).toHaveAttribute("data-size", "medium");
    });

    it("should have class name", async () => {
      render(<Badge data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-badge test-class-name",
      );
    });

    it.each([
      "brand",
      "neutral",
      "critical",
      "warning",
      "info",
      "success",
    ] as const)("should set data-variant='%s'", (variant) => {
      render(<Badge data-testid="test" variant={variant} />);
      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-variant",
        variant,
      );
    });

    it.each(["small", "medium", "large"] as const)(
      "should set data-size='%s'",
      (size) => {
        render(<Badge data-testid="test" size={size} />);
        expect(screen.getByTestId("test")).toHaveAttribute("data-size", size);
      },
    );

    it("should have number", async () => {
      render(<Badge>{100}</Badge>);

      expect(screen.getByText("100")).toBeInTheDocument();
      expect(screen.getByText("100")).toHaveAttribute("data-part", "number");
    });

    it("should have max number", async () => {
      render(<Badge maxNumber={99}>{100}</Badge>);

      expect(screen.getByText("99+")).toBeInTheDocument();
    });
  });
});
