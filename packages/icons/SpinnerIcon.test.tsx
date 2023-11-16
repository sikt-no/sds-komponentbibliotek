import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SpinnerIcon } from "./SpinnerIcon";

describe("SpinnerIcon", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<SpinnerIcon data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveAttribute("aria-hidden", "true");
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("has variant className", async () => {
      render(<SpinnerIcon data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sds-icon--spinner");
    });

    it("has custom className", async () => {
      render(<SpinnerIcon className="test-class" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("test-class");
    });
  });
});
