import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import {
  EmailInput,
  NumberInput,
  PasswordInput,
  SearchInput,
  TelInput,
  TextArea,
  TextInput,
} from "./Input";

const inputTypes = [
  { name: "email", component: EmailInput },
  { name: "number", component: NumberInput },
  { name: "password", component: PasswordInput },
  { name: "search", component: SearchInput },
  { name: "tel", component: TelInput },
  { name: "text", component: TextInput },
  { name: "textarea", component: TextArea },
];

describe("Input", () => {
  describe("a11y", () => {
    inputTypes.map((inputType) => {
      it(`${inputType.name} should be accessible`, async () => {
        const { component: Input } = inputType;
        const { container } = render(<Input label="Foo" />);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    inputTypes.map((inputType) => {
      it(`${inputType.name} should render`, async () => {
        const { name, component: Input } = inputType;
        render(<Input label={name} data-testid="test" />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <TextInput label="Foo" onChange={(e, val) => changeHandler(val)} />,
      );

      await user.type(screen.getByText("Foo"), "text");

      expect(changeHandler).toHaveBeenCalledWith("t");
      expect(changeHandler).toHaveBeenCalledWith("text");
    });

    it("should have class name", async () => {
      const { container } = render(
        <TextInput label="Foo" className="test-class-name" />,
      );

      expect(
        container.getElementsByClassName("sds-input test-class-name")[0],
      ).toBeInTheDocument();
    });

    it("should show error text", async () => {
      const { container } = render(
        <TextInput label="Foo" data-testid="test" errorText="Bar" />,
      );

      expect(screen.getByTestId("test")).toHaveAttribute("aria-invalid");
      expect(screen.getByTestId("test")).toHaveAttribute("aria-errormessage");
      expect(screen.getByTestId("test")).toHaveAttribute("aria-describedby");

      expect(
        container.getElementsByClassName("sds-input--error")[0],
      ).toBeInTheDocument();

      expect(screen.getByRole("textbox")).toBeInvalid();

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form-field__help-text");
    });

    it("should show help text", async () => {
      render(<TextInput label="Foo" data-testid="test" helpText="Bar" />);

      expect(screen.getByTestId("test")).toHaveAttribute("aria-describedby");

      expect(screen.getByRole("textbox")).not.toBeInvalid();

      const helpEl = screen.getByText("Bar");
      expect(helpEl).toBeInTheDocument();
      expect(helpEl).toHaveClass("sds-form-field__help-text");
    });

    it("should have icon element", async () => {
      render(<TextInput label="Foo" icon="icon" />);

      expect(screen.getByText("icon")).toBeInTheDocument();
    });

    it("should have action element", async () => {
      render(
        <SearchInput
          label="Foo"
          data-testid="test"
          actionProps={{ label: "action" }}
        />,
      );

      expect(screen.getByLabelText("action")).toBeInTheDocument();
    });
  });
});

describe("TextArea", () => {
  describe("api", () => {
    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <TextArea
          label="Foo"
          rows={2}
          onChange={(e, val) => changeHandler(val)}
        />,
      );

      await user.type(screen.getByText("Foo"), "text");

      expect(changeHandler).toHaveBeenCalledWith("t");
      expect(changeHandler).toHaveBeenCalledWith("text");
    });

    it("should show error text", async () => {
      const { container } = render(
        <TextArea label="Foo" data-testid="test" errorText="Bar" />,
      );

      expect(screen.getByTestId("test")).toHaveAttribute("aria-invalid");
      expect(screen.getByTestId("test")).toHaveAttribute("aria-errormessage");
      expect(screen.getByTestId("test")).toHaveAttribute("aria-describedby");

      expect(
        container.getElementsByClassName("sds-input--error")[0],
      ).toBeInTheDocument();

      expect(screen.getByRole("textbox")).toBeInvalid();

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form-field__help-text");
    });
  });
});
