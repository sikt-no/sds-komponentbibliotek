import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { CheckboxFieldset } from "./CheckboxFieldset";
import { CheckboxInput } from "./CheckboxInput";

describe("CheckboxFieldset", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <CheckboxFieldset legend="Foo">
          <CheckboxInput label="checkbox 1" />
          <CheckboxInput label="checkbox 2" />
          <CheckboxInput label="checkbox 3" />
        </CheckboxFieldset>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("checkbox fieldset should render", async () => {
      render(
        <CheckboxFieldset legend="Foo" data-testid="test">
          <CheckboxInput label="checkbox 1" />
          <CheckboxInput label="checkbox 2" />
          <CheckboxInput label="checkbox 3" />
        </CheckboxFieldset>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-checkbox-fieldset");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <CheckboxFieldset
          legend="Foo"
          data-testid="test"
          className="test-class-name"
        >
          <CheckboxInput label="checkbox 1" />
          <CheckboxInput label="checkbox 2" />
          <CheckboxInput label="checkbox 3" />
        </CheckboxFieldset>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-checkbox-fieldset test-class-name"
      );
    });

    it("should show error message and mark with aria-invalid", async () => {
      render(
        <CheckboxFieldset
          legend="Foo"
          data-testid="test"
          errorText="Error message"
        >
          <CheckboxInput label="checkbox 1" />
          <CheckboxInput label="checkbox 2" />
          <CheckboxInput label="checkbox 3" />
        </CheckboxFieldset>
      );

      expect(screen.getByText("Error message")).toBeInTheDocument();
      const element = screen.getByRole("group");
      expect(element).toBeInTheDocument();
      expect(element).toBeInvalid();
    });
  });
});
