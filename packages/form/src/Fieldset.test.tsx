import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
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
        </Fieldset>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("fieldset should render", async () => {
      render(
        <Fieldset legend="Foo">
          <label>
            Label
            <input />
          </label>
        </Fieldset>,
      );
      expect(screen.getByRole("group")).toHaveClass("sds-form-fieldset");
      expect(screen.getByRole("group")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Fieldset legend="Foo" className="test-class-name">
          <label>
            Label
            <input />
          </label>
        </Fieldset>,
      );

      expect(screen.getByRole("group")).toHaveClass(
        "sds-form-fieldset test-class-name",
      );
    });

    it("should show error message and mark with aria-invalid", async () => {
      render(
        <Fieldset legend="Foo" errorText="Error message">
          <label>
            Label
            <input />
          </label>
        </Fieldset>,
      );

      expect(screen.getByText("Error message")).toBeInTheDocument();
      const element = screen.getByRole("group");
      expect(element).toBeInTheDocument();
      expect(element).toBeInvalid();
    });
  });

  it("should show help text", async () => {
    render(
      <Fieldset legend="Foo" helpText="Help message">
        <label>
          Label
          <input />
        </label>
      </Fieldset>,
    );

    expect(screen.getByText("Help message")).toBeInTheDocument();
  });

  it("should support aria-labelledby", () => {
    render(
      <>
        <div id="label">Foo</div>
        <Fieldset aria-labelledby="label">
          <label>
            Label
            <input />
          </label>
        </Fieldset>
        ,
      </>,
    );

    expect(screen.getByRole("group", { name: "Foo" })).toBeInTheDocument();
  });
});
