import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FormField } from "./FormField";

describe("FormField", () => {
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
      const { container } = render(
        <FormField label="Foo" htmlFor="input">
          <input id="input" />
        </FormField>
      );

      expect(
        container.getElementsByClassName("sds-form-field")[0]
      ).toBeInTheDocument();
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input" className="test-class-name">
          <input id="input" />
        </FormField>
      );

      expect(
        container.getElementsByClassName("sds-form-field test-class-name")[0]
      ).toBeInTheDocument();
    });

    it("should show error text", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input" errorText="Bar">
          <input id="input" />
        </FormField>
      );

      expect(
        container.getElementsByClassName("sds-form-field--error")[0]
      ).toBeInTheDocument();

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
