import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FormField } from "./FormField";

describe("FormField", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input">
          <input id="input" />
        </FormField>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input">
          <input id="input" />
        </FormField>,
      );

      expect(
        container.getElementsByClassName("sds-form-field")[0],
      ).toBeInTheDocument();
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input" className="test-class-name">
          <input id="input" />
        </FormField>,
      );

      expect(
        container.getElementsByClassName("sds-form-field test-class-name")[0],
      ).toBeInTheDocument();
    });

    it("should show error text", async () => {
      const { container } = render(
        <FormField label="Foo" htmlFor="input" errorText="Bar">
          <input id="input" />
        </FormField>,
      );

      expect(
        container.getElementsByClassName("sds-form-field--error")[0],
      ).toBeInTheDocument();

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form__help-text", {
        exact: false,
      });
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
        </FormField>,
      );

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form__help-text", {
        exact: false,
      });
    });

    it("should show both help and error text", async () => {
      render(
        <FormField label="Foo" htmlFor="input" errorText="Bar" helpText="Quz">
          <input id="input" />
        </FormField>,
      );

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form__help-text", {
        exact: false,
      });

      const helpEl = screen.queryByText("Quz");
      expect(helpEl).toBeInTheDocument();
      expect(helpEl).toHaveClass("sds-form__help-text", {
        exact: false,
      });
    });

    it("should support aria-labelledby", () => {
      const { container } = render(
        <FormField label={undefined} htmlFor="input">
          <input id="input" />
        </FormField>,
      );

      expect(
        container.getElementsByClassName("sds-form-field")[0],
      ).toBeInTheDocument();
    });
  });
});
