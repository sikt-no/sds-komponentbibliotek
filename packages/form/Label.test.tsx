import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Label } from "./Label";

describe("Label", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Label text="Foo" htmlFor="id">
          <input id="id" />
        </Label>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("label should render", async () => {
      render(
        <Label text="Foo" htmlFor="id" data-testid="test">
          <input id="id" />
        </Label>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-form-field__label");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Label
          text="Foo"
          htmlFor="id"
          data-testid="test"
          className="test-class-name"
        >
          <input id="id" />
        </Label>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-field__label test-class-name"
      );
    });

    it("should have label content", async () => {
      render(
        <Label text="Foo" error htmlFor="id" data-testid="test">
          <input id="id" />
        </Label>
      );

      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have error class when error", async () => {
      render(
        <Label text="Foo" error htmlFor="id" data-testid="test">
          <input id="id" />
        </Label>
      );

      expect(screen.getByText("Foo")).toBeInTheDocument();
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form-field__label--error"
      );
    });
  });
});
