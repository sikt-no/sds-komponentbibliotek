import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { RadioFieldset } from "./RadioFieldset";
import { RadioInput } from "./RadioInput";

describe("RadioGroup", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <RadioFieldset legend="Foo">
          <RadioInput label="Radio 1" value="1" />
          <RadioInput label="Radio 2" value="2" />
          <RadioInput label="Radio 3" value="3" />
        </RadioFieldset>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("radio group should render", async () => {
      render(
        <RadioFieldset legend="Foo" data-testid="test">
          <RadioInput label="Radio 1" value="1" />
          <RadioInput label="Radio 2" value="2" />
          <RadioInput label="Radio 3" value="3" />
        </RadioFieldset>
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-radio-fieldset");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("selected radio button should be checked", async () => {
      render(
        <RadioFieldset legend="Foo" value="2" onChange={jest.fn()}>
          <RadioInput label="Radio 1" value="1" />
          <RadioInput label="Radio 2" value="2" />
          <RadioInput label="Radio 3" value="3" />
        </RadioFieldset>
      );

      expect(screen.getByLabelText("Radio 1")).not.toBeChecked();
      expect(screen.getByLabelText("Radio 2")).toBeChecked();
      expect(screen.getByLabelText("Radio 3")).not.toBeChecked();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <RadioFieldset
          legend="Foo"
          onChange={(e) => changeHandler(e.target.value)}
        >
          <RadioInput label="Radio 1" value="1" />
          <RadioInput label="Radio 2" value="2" />
          <RadioInput label="Radio 3" value="3" />
        </RadioFieldset>
      );

      await user.click(screen.getByText("Radio 2"));

      expect(changeHandler).toHaveBeenCalledWith("2");
    });

    it("should have class name", async () => {
      render(
        <RadioFieldset
          legend="Foo"
          data-testid="test"
          className="test-class-name"
        >
          <RadioInput label="Radio 1" value="1" />
          <RadioInput label="Radio 2" value="2" />
          <RadioInput label="Radio 3" value="3" />
        </RadioFieldset>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-radio-fieldset test-class-name"
      );
    });

    it("should render help text", async () => {
      render(
        <RadioFieldset legend="Foo" helpText="Help message">
          <RadioInput label="Radio 1" value="1" />
        </RadioFieldset>
      );

      expect(screen.getByText("Help message")).toBeInTheDocument();
    });

    it("should show error message and mark with aria-invalid", async () => {
      render(
        <RadioFieldset
          legend="Foo"
          data-testid="test"
          errorText="Error message"
        >
          <RadioInput label="Radio 1" value="1" />
          <RadioInput label="Radio 2" value="2" />
          <RadioInput label="Radio 3" value="3" />
        </RadioFieldset>
      );

      expect(screen.getByText("Error message")).toBeInTheDocument();
      const element = screen.getByRole("group");
      expect(element).toBeInTheDocument();
      expect(element).toBeInvalid();
    });
  });
});
