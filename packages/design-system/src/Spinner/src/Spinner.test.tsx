import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Spinner />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render an aria-hidden svg with sd3-spinner", () => {
      render(<Spinner data-testid="test" />);
      const el = screen.getByTestId("test");
      expect(el.tagName).toBe("svg");
      expect(el).toHaveClass("sd3-spinner");
      expect(el).toHaveAttribute("aria-hidden", "true");
    });

    it("should merge className alongside sds-icon from the underlying icon", () => {
      render(<Spinner data-testid="test" className="test-class-name" />);
      const el = screen.getByTestId("test");
      expect(el).toHaveClass("sds-icon");
      expect(el).toHaveClass("sd3-spinner");
      expect(el).toHaveClass("test-class-name");
    });
  });
});
