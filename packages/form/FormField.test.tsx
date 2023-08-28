import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FormField } from "./FormField";

describe("Input", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input">
          <input id="input" />
        </FormField>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <FormField label="Foo" htmlFor="input" data-testid="test">
          <input id="input" />
        </FormField>
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-form-field");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <FormField
          label="Foo"
          htmlFor="input"
          data-testid="test"
          className="test-class-name"
        >
          <input id="input" />
        </FormField>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-field test-class-name"
      );
    });

    it("should show error text", async () => {
      render(
        <FormField
          label="Foo"
          htmlFor="input"
          data-testid="test"
          errorText="Bar"
        >
          <input id="input" />
        </FormField>
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-form-field--error");

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form-field__help-text");
    });

    it("should show help text", async () => {
      render(
        <FormField
          label="Foo"
          htmlFor="input"
          data-testid="test"
          helpText="Bar"
        >
          <input id="input" />
        </FormField>
      );

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form-field__help-text");
    });
  });
});
