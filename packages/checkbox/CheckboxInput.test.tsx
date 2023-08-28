import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { CheckboxInput } from "./CheckboxInput";
import { axe } from "jest-axe";

describe("CheckboxInput,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<CheckboxInput label="Foo" value="foo" />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

describe("api", () => {
  const changeHandler = jest.fn();

  it("checked checkbox should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        data-testid="test"
        isChecked
        onChange={changeHandler}
      />
    );
    expect(screen.getByTestId("test")).toHaveClass("sds-checkbox__input");
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeChecked();
  });

  it("disabled checkbox should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        data-testid="test"
        isChecked={false}
        onChange={changeHandler}
        disabled={true}
      />
    );
    expect(screen.getByTestId("test")).toHaveClass("sds-checkbox__input");
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeDisabled();
  });

  it("checked checkbox with error should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        error={true}
        data-testid="test"
        isChecked
        onChange={changeHandler}
      />
    );

    expect(screen.getByTestId("test").parentElement).toHaveClass(
      "sds-checkbox sds-checkbox--error"
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("unchecked checkbox with error should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        error={true}
        data-testid="test"
        isChecked={false}
        onChange={changeHandler}
      />
    );

    expect(screen.getByTestId("test").parentElement).toHaveClass(
      "sds-checkbox--error"
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("should have class name", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        data-testid="test"
        className="test-class-name"
        isChecked
        onChange={changeHandler}
      />
    );

    expect(screen.getByTestId("test").parentElement).toHaveClass(
      "sds-checkbox test-class-name"
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("calls change handler", async () => {
    const user = userEvent.setup();

    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        onChange={(val) => changeHandler(val)}
      />
    );

    const checkbox = screen.getByText("Foo");
    await user.click(checkbox);

    expect(changeHandler).toHaveBeenCalled();
  });
});
