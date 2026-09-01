import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Label } from "./Label";

describe("Label", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Label />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Label data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sd3-typography");
    });

    it("should have class name", async () => {
      render(<Label data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-typography test-class-name",
      );
      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-variant",
        "label",
      );
      expect(screen.getByTestId("test")).not.toHaveAttribute("data-size");
    });

    it("should change component with asChild", async () => {
      render(
        <Label asChild>
          <h2>Foo</h2>
        </Label>,
      );

      expect(
        screen.getByRole("heading", { level: 2, name: "Foo" }),
      ).toBeInTheDocument();
    });
  });
});
