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
    /* tests goes here */
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
  });
});
