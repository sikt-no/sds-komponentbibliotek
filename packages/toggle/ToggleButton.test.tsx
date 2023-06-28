import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ToggleButton } from "./ToggleButton";

describe("Toggle Switch", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ToggleButton label="Foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it(`toggle should render`, async () => {
      render(<ToggleButton data-testid="test" label="Foo" />);

      expect(screen.getByTestId("test")).toHaveClass("sds-toggle-button");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <ToggleButton onChange={(val) => changeHandler(val)} label="Foo" />
      );

      const label = screen.getByLabelText("Foo");
      await user.click(label);

      expect(changeHandler).toHaveBeenCalled();
    });

    it("should not be checked", async () => {
      render(<ToggleButton label="Foo" />);

      expect(screen.getByLabelText("Foo")).not.toBeChecked();
    });

    it("should be checked", async () => {
      render(<ToggleButton checked label="Foo" />);

      expect(screen.getByLabelText("Foo")).toBeChecked();
    });
  });
});
