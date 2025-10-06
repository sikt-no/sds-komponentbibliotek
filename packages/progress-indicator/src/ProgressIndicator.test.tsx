import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import {
  ProgressIndicator,
  ProgressStep,
  ProgressStepButton,
  ProgressStepLink,
} from "../index";

describe("Progress indicator", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <ProgressIndicator currentIndex={1} heading="Second step">
          <ProgressStep>
            <ProgressStepButton onClick={jest.fn()}>
              First step
            </ProgressStepButton>
          </ProgressStep>
          <ProgressStep>
            <ProgressStepLink href="/">Second step</ProgressStepLink>
          </ProgressStep>
          <ProgressStep>Third step</ProgressStep>
        </ProgressIndicator>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      const { container } = render(
        <ProgressIndicator
          count={2}
          currentIndex={1}
          heading="Second step"
          data-testid="test"
        />,
      );

      const heading = container.querySelector(
        ".sds-progress-indicator__heading",
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-progress-indicator");
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.queryByText("1. First step")).not.toBeInTheDocument();
      expect(heading).toHaveTextContent("2.Second step");
      expect(heading).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <ProgressIndicator
          count={2}
          currentIndex={1}
          heading="Second step"
          data-testid="test"
          className="test-class-name"
        />,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-progress-indicator test-class-name",
      );
    });

    it("should mark step 1 as current", async () => {
      render(
        <ProgressIndicator currentIndex={0} heading="Second step">
          <ProgressStep>
            <ProgressStepButton onClick={jest.fn()}>
              First step
            </ProgressStepButton>
          </ProgressStep>
          <ProgressStep>
            <ProgressStepLink href="/">Second step</ProgressStepLink>
          </ProgressStep>
          <ProgressStep>Third step</ProgressStep>
        </ProgressIndicator>,
      );

      expect(screen.getByText("1. First step")).toHaveAttribute(
        "aria-current",
        "step",
      );
      expect(screen.getByText("2. Second step")).not.toHaveAttribute(
        "aria-current",
        "step",
      );
      expect(screen.getByText("3. Third step")).not.toHaveAttribute(
        "aria-current",
        "step",
      );
    });

    it("should mark step 2 as current", async () => {
      render(
        <ProgressIndicator currentIndex={1} heading="Second step">
          <ProgressStep>
            <ProgressStepButton onClick={jest.fn()}>
              First step
            </ProgressStepButton>
          </ProgressStep>
          <ProgressStep>
            <ProgressStepLink href="/">Second step</ProgressStepLink>
          </ProgressStep>
          <ProgressStep>Third step</ProgressStep>
        </ProgressIndicator>,
      );

      expect(screen.getByText("1. First step")).not.toHaveAttribute(
        "aria-current",
        "step",
      );
      expect(screen.getByText("2. Second step")).toHaveAttribute(
        "aria-current",
        "step",
      );
      expect(screen.getByText("3. Third step")).not.toHaveAttribute(
        "aria-current",
        "step",
      );
    });

    it("should mark step 3 as current", async () => {
      render(
        <ProgressIndicator currentIndex={2} heading="Second step">
          <ProgressStep>
            <ProgressStepButton onClick={jest.fn()}>
              First step
            </ProgressStepButton>
          </ProgressStep>
          <ProgressStep>
            <ProgressStepLink href="/">Second step</ProgressStepLink>
          </ProgressStep>
          <ProgressStep>Third step</ProgressStep>
        </ProgressIndicator>,
      );

      expect(screen.getByText("1. First step")).not.toHaveAttribute(
        "aria-current",
        "step",
      );
      expect(screen.getByText("2. Second step")).not.toHaveAttribute(
        "aria-current",
        "step",
      );
      expect(screen.getByText("3. Third step")).toHaveAttribute(
        "aria-current",
        "step",
      );
    });

    it("should render correct number of bars", async () => {
      const { container } = render(
        <ProgressIndicator
          count={2}
          currentIndex={1}
          heading="Second step"
          data-testid="test"
        />,
      );

      expect(
        container.getElementsByClassName(
          "sds-progress-indicator__step-bar-item",
        ),
      ).toHaveLength(2);
      expect(
        container.getElementsByClassName(
          "sds-progress-indicator__step-bar-item",
        )[1],
      ).toHaveClass("sds-progress-indicator__step-bar-item--current");
    });

    it("should render with actions", async () => {
      render(
        <ProgressIndicator currentIndex={1} heading="Second step">
          <ProgressStep>
            <ProgressStepButton onClick={jest.fn()}>
              First step
            </ProgressStepButton>
          </ProgressStep>
          <ProgressStep>
            <ProgressStepLink href="/">Second step</ProgressStepLink>
          </ProgressStep>
          <ProgressStep>Third step</ProgressStep>
        </ProgressIndicator>,
      );

      expect(screen.getByText("1. First step")).toHaveRole("button");
      expect(screen.getByText("2. Second step")).toHaveRole("link");
    });

    it("should render expandable", async () => {
      render(
        <ProgressIndicator
          currentIndex={1}
          heading="Second step"
          expandable
          data-testid="test"
        >
          <ProgressStep>
            <ProgressStepButton onClick={jest.fn()}>
              First step
            </ProgressStepButton>
          </ProgressStep>
          <ProgressStep>
            <ProgressStepLink href="/">Second step</ProgressStepLink>
          </ProgressStep>
          <ProgressStep>Third step</ProgressStep>
        </ProgressIndicator>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-progress-indicator sds-progress-indicator--expandable",
      );
      expect(screen.getByTestId("test")).toHaveRole("group");
      expect(screen.getByText("1. First step")).not.toBeVisible();
      expect(screen.getByText("2. Second step")).not.toBeVisible();
    });
  });
});
