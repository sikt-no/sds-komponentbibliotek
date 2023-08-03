import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { XLogo, LinkedInLogo } from "./ThirdPartyIcons";

describe("XLogo", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<XLogo color="black" />);

      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("has variant className", async () => {
      const { container } = render(<XLogo color="black" />);

      expect(container.querySelector("svg")).toHaveClass(
        "sds-icon__custom--black"
      );
    });

    it("has custom className", async () => {
      const { container } = render(
        <XLogo color="black" className="test-class" />
      );

      expect(container.querySelector("svg")).toHaveClass("test-class");
    });
  });
});

describe("LinkedinLogo", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<LinkedInLogo color="black" />);

      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("has variant className", async () => {
      const { container } = render(<LinkedInLogo color="black" />);

      expect(container.querySelector("svg")).toHaveClass(
        "sds-icon__custom--black"
      );
    });

    it("has custom className", async () => {
      const { container } = render(
        <LinkedInLogo color="black" className="test-class" />
      );

      expect(container.querySelector("svg")).toHaveClass("test-class");
    });
  });
});
