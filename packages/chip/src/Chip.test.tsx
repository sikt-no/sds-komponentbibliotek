import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ChipToggle, ChipButton } from "./Chip";

describe("Chip", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ChipToggle>Foo</ChipToggle>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <ChipToggle checked data-testid="test">
          Foo
        </ChipToggle>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-chip");
      expect(screen.getByTestId("test")).toHaveAttribute(
        "aria-pressed",
        "true",
      );
    });

    it("should have class name", async () => {
      render(
        <ChipToggle data-testid="test" className="test-class-name">
          Foo
        </ChipToggle>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-chip test-class-name",
      );
    });

    it("should render as non-toggle", async () => {
      render(<ChipButton data-testid="test">Foo</ChipButton>);

      expect(screen.getByTestId("test")).toHaveClass("sds-chip");
      expect(screen.getByTestId("test")).not.toHaveAttribute("aria-pressed");
    });
  });
});
