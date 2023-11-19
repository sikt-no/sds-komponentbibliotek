import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import { ProgressStep } from "./ProgressStep";

describe("Progress indicator", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <ProgressIndicator>
          <ProgressStep value={1} label="First step" status="complete" />
          <ProgressStep value={2} label="Second step" status="current" />
        </ProgressIndicator>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("Component functionality", () => {
    it("should mark the correct steps as selected when controlled by parent element", async () => {
      render(
        <ProgressIndicator>
          <ProgressStep
            data-testid="progress-step-1"
            value={1}
            label="First step"
            status="complete"
          />
          <ProgressStep
            data-testid="progress-step-2"
            value={2}
            label="Second step"
            status="current"
          />
          <ProgressStep
            data-testid="progress-step-3"
            value={3}
            label="Third step"
          />
        </ProgressIndicator>,
      );

      const step1 = screen.getByTestId("progress-step-1");
      const step2 = screen.getByTestId("progress-step-2");
      const step3 = screen.getByTestId("progress-step-3");
      expect(step1).toHaveClass("sds-progress-step--selected");
      expect(step1.getAttribute("aria-current")).toBe("false");
      expect(step2).toHaveClass("sds-progress-step--selected");
      expect(step2.getAttribute("aria-current")).toBe("step");
      expect(step3).not.toHaveClass("sds-progress-step--selected");
      expect(step3.getAttribute("aria-current")).toBe("false");
    });

    it("should mark the correct steps as selected when controlled manually", async () => {
      render(
        <ProgressIndicator>
          <ProgressStep
            data-testid="progress-step-1"
            status="incomplete"
            value={1}
            label="First step"
          />
          <ProgressStep
            data-testid="progress-step-2"
            value={2}
            label="Second step"
          />
          <ProgressStep
            data-testid="progress-step-3"
            status="current"
            value={3}
            label="Third step"
          />
        </ProgressIndicator>,
      );

      const step1 = screen.getByTestId("progress-step-1");
      const step2 = screen.getByTestId("progress-step-2");
      const step3 = screen.getByTestId("progress-step-3");
      expect(step1).not.toHaveClass("sds-progress-step--selected");
      expect(step1.getAttribute("aria-current")).toBe("false");
      expect(step2).not.toHaveClass("sds-progress-step--selected");
      expect(step1.getAttribute("aria-current")).toBe("false");
      expect(step3).toHaveClass("sds-progress-step--selected");
      expect(step3.getAttribute("aria-current")).toBe("step");
    });
  });
});
