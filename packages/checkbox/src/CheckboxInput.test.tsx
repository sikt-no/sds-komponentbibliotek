import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { createRef } from "react";
import { CheckboxInput } from "./CheckboxInput";

describe("CheckboxInput,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <CheckboxInput label="Foo" value="foo" onChange={jest.fn()} />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

describe("api", () => {
  it("checked checkbox should render", async () => {
    render(
      <CheckboxInput label="Foo" value="foo" checked onChange={jest.fn()} />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });

    expect(checkbox).toHaveClass("sds-checkbox__input");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it("disabled checkbox should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        checked={false}
        onChange={jest.fn()}
        disabled
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });

    expect(checkbox).toHaveClass("sds-checkbox__input");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeDisabled();
  });

  it("indeterminate checkbox should render", async () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <CheckboxInput
        ref={ref}
        label="Foo"
        value="foo"
        indeterminate
        onChange={jest.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });

    expect(checkbox).toHaveClass("sds-checkbox__input");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("aria-checked", "mixed");
    expect(ref.current?.indeterminate).toBeTruthy();
  });

  it("checked checkbox with error should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        error
        checked
        onChange={jest.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });

    expect(checkbox.parentElement).toHaveClass(
      "sds-checkbox sds-checkbox--error",
    );
    expect(checkbox).toBeInTheDocument();
  });

  it("unchecked checkbox with error should render", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        error
        checked={false}
        onChange={jest.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });

    expect(checkbox.parentElement).toHaveClass("sds-checkbox--error");
    expect(checkbox).toBeInTheDocument();
  });

  it("should have class name", async () => {
    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        className="test-class-name"
        checked
        onChange={jest.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });

    expect(checkbox.parentElement).toHaveClass("sds-checkbox test-class-name");
    expect(checkbox).toBeInTheDocument();
  });

  it("calls change handler", async () => {
    const changeHandler = jest.fn();
    const user = userEvent.setup();

    render(
      <CheckboxInput
        label="Foo"
        value="foo"
        onChange={(val) => {
          changeHandler(val);
        }}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Foo" });
    await user.click(checkbox);

    expect(changeHandler).toHaveBeenCalled();
  });

  it("should support aria-label", () => {
    render(<CheckboxInput aria-label="Foo" onChange={jest.fn()} />);

    expect(screen.getByRole("checkbox", { name: "Foo" })).toBeInTheDocument();
  });

  it("should support aria-labelledby", () => {
    render(
      <>
        <div id="label">Foo</div>
        <CheckboxInput aria-labelledby="label" onChange={jest.fn()} />
      </>,
    );

    expect(screen.getByRole("checkbox", { name: "Foo" })).toBeInTheDocument();
  });
});
