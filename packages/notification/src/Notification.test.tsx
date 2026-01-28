import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Notification } from "./Notification";

describe("Notification", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Notification />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Notification data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sds-notification");
    });

    it("should have class name", async () => {
      render(<Notification data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-notification test-class-name",
      );
    });

    it("should have count", async () => {
      render(<Notification count={100} />);

      expect(screen.getByText("100")).toBeInTheDocument();
    });

    it("should have max count", async () => {
      render(<Notification count={100} maxCount={99} />);

      expect(screen.getByText("99+")).toBeInTheDocument();
    });
  });
});
