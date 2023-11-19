import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { HelpText } from "./HelpText";

describe("HelpText", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<HelpText>Foo</HelpText>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("help text should render", async () => {
      render(<HelpText data-testid="test">Foo</HelpText>);
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-field__help-text",
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <HelpText data-testid="test" className="test-class-name">
          Foo
        </HelpText>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-field__help-text test-class-name",
      );
    });

    it("should have error class when error", async () => {
      render(
        <HelpText error data-testid="test">
          Error
        </HelpText>,
      );

      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-field__help-text--error",
      );
    });
  });
});
