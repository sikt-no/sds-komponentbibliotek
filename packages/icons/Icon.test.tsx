import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Icon } from "./";

describe("Icons", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Icon icon="arrow-right" />);

      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("has variant className", async () => {
      const { container } = render(<Icon icon="arrow-right" />);

      expect(container.querySelector("svg")).toHaveClass("sds-icon");
    });

    it("has custom className", async () => {
      const { container } = render(
        <Icon icon="arrow-right" className="test-class" />
      );

      expect(container.querySelector("svg")).toHaveClass("test-class");
    });
  });
});
