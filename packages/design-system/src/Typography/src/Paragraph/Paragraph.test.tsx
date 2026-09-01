import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Paragraph />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Paragraph data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sd3-typography");
    });

    it("should have class name", async () => {
      render(<Paragraph data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-typography test-class-name",
      );
      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-variant",
        "body",
      );
      expect(screen.getByTestId("test")).toHaveAttribute("data-size", "md");
    });

    it("should change component with asChild", async () => {
      render(
        <Paragraph asChild>
          <h2>Foo</h2>
        </Paragraph>,
      );

      expect(
        screen.getByRole("heading", { level: 2, name: "Foo" }),
      ).toBeInTheDocument();
    });
  });
});
