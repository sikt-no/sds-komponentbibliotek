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

      expect(screen.getByTestId("test")).toHaveClass("sds-badge");
    });

    it("should have class name", async () => {
      render(<Badge data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-badge test-class-name",
      );
    });

    it("should have count", async () => {
      render(<Badge count={100} />);

      expect(screen.getByText("100")).toBeInTheDocument();
    });

    it("should have max count", async () => {
      render(<Badge count={100} maxCount={99} />);

      expect(screen.getByText("99+")).toBeInTheDocument();
    });
  });
});
