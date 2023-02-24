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
  TextInput,
} from "./Input";

const inputTypes = [
  { name: "email", component: EmailInput },
  { name: "number", component: NumberInput },
  { name: "password", component: PasswordInput },
  { name: "search", component: SearchInput },
  { name: "tel", component: TelInput },
  { name: "text", component: TextInput },
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
        render(<Input label={name} data-testid={name} />);

        expect(screen.getByTestId(name)).toHaveClass(
          `sds-input sds-input--${name}`
        );
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(<TextInput label="Foo" onChange={(val) => changeHandler(val)} />);

      await user.type(screen.getByText("Foo"), "text");

      expect(changeHandler).toHaveBeenCalledWith("t");
      expect(changeHandler).toHaveBeenCalledWith("text");
    });

    it("should have class name", async () => {
      render(
        <TextInput label="Foo" data-testid="test" className="test-class-name" />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-input test-class-name"
      );
    });

    it("should have left icon element", async () => {
      render(
        <TextInput
          label="Foo"
          data-testid="test"
          icon="icon"
          iconPosition="start"
        />
      );

      expect(screen.getByText("icon")).toHaveClass(
        "sds-input__icon",
        "sds-input__icon--start"
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have right icon element", async () => {
      render(
        <TextInput
          label="Foo"
          data-testid="test"
          icon="icon"
          iconPosition="end"
        />
      );

      expect(screen.getByText("icon")).toHaveClass(
        "sds-input__icon",
        "sds-input__icon--end"
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });
  });
});
