import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Fieldset } from "./Fieldset";

describe("Fieldset", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Fieldset legend="Foo">
          <label>
            Label
            <input />
          </label>
        </Fieldset>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("fieldset should render", async () => {
      render(
        <Fieldset legend="Foo" data-testid="test">
          <label>
            Label
            <input />
          </label>
        </Fieldset>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-form-fieldset");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Fieldset legend="Foo" data-testid="test" className="test-class-name">
          <label>
            Label
            <input />
          </label>
        </Fieldset>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-fieldset test-class-name"
      );
    });

    it("should show error message and mark with aria-invalid", async () => {
      render(
        <Fieldset legend="Foo" data-testid="test" errorText="Error message">
          <label>
            Label
            <input />
          </label>
        </Fieldset>
      );

      expect(screen.getByText("Error message")).toBeInTheDocument();
      const element = screen.getByRole("group");
      expect(element).toBeInTheDocument();
      expect(element).toBeInvalid();
    });
  });
});
