import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { SpinnerIcon } from "./SpinnerIcon";

describe("SpinnerIcon", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<SpinnerIcon />);

      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("has variant className", async () => {
      const { container } = render(<SpinnerIcon />);

      expect(container.querySelector("svg")).toHaveClass("sds-icon--spinner");
    });

    it("has custom className", async () => {
      const { container } = render(<SpinnerIcon className="test-class" />);

      expect(container.querySelector("svg")).toHaveClass("test-class");
    });
  });
});
