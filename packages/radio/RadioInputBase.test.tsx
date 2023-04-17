import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { RadioInputBase } from "./RadioInputBase";

describe("Radio", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<RadioInputBase label="Foo" value="foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it(`radio button should render`, async () => {
      render(<RadioInputBase label="Foo" value="foo" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass("sds-radio");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <RadioInputBase
          label="Foo"
          value="foo"
          onChange={(val) => changeHandler(val)}
        />
      );

      const radio = screen.getByLabelText("Foo");
      await user.click(radio);

      expect(changeHandler).toHaveBeenCalled();
    });

    it("should have class name", async () => {
      render(
        <RadioInputBase
          label="Foo"
          value="foo"
          data-testid="test"
          className="test-class-name"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-radio test-class-name"
      );
    });

    it("should be checked", async () => {
      render(<RadioInputBase label="Foo" value="foo" checked />);

      expect(screen.getByLabelText("Foo")).toBeChecked();
    });

    it(`should render with error class`, async () => {
      render(
        <RadioInputBase label="Foo" value="foo" error data-testid="test" />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-radio",
        "sds-radio--error"
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });
  });
});
