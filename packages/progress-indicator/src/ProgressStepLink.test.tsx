import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ProgressStepLink } from "./ProgressStepLink";

describe("ProgressStepLink", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <ProgressStepLink href="#">Foo</ProgressStepLink>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <ProgressStepLink href="#" data-testid="test">
          Foo
        </ProgressStepLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action",
      );
      expect(screen.getByText("1. Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <ProgressStepLink
          href="#"
          className="test-class-name"
          data-testid="test"
        >
          Foo
        </ProgressStepLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-progress-indicator__step-details-content sds-progress-indicator__step-details-action test-class-name",
      );
    });

    it("should change component with asChild", async () => {
      render(
        <ProgressStepLink href="#" data-testid="test" asChild>
          <button>Foo</button>
        </ProgressStepLink>,
      );

      expect(screen.getByTestId("test")).toHaveRole("button");
      expect(screen.getByText("1. Foo")).toBeInTheDocument();
    });
  });
});
