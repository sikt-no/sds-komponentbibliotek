import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ProgressStepButton } from "./ProgressStepButton";

describe("ProgressStepButton", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <ProgressStepButton onClick={jest.fn()}>Foo</ProgressStepButton>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <ProgressStepButton onClick={jest.fn()} data-testid="test">
          Foo
        </ProgressStepButton>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action",
      );
      expect(screen.getByText("1. Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <ProgressStepButton
          onClick={jest.fn()}
          className="test-class-name"
          data-testid="test"
        >
          Foo
        </ProgressStepButton>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action test-class-name",
      );
    });
  });
});
