import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { InputActionButton } from "./InputActionButton";
import { MagnifyingGlassIcon } from "@sikt/sds-icons";

describe("InputActionButton", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <InputActionButton label="Foo" icon={<MagnifyingGlassIcon />} />
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <InputActionButton
          label="Foo"
          icon={<MagnifyingGlassIcon />}
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button--transparent sds-input-action"
      );
      expect(screen.getByTestId("test")).toHaveAccessibleName("Foo");
    });

    it("calls click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(
        <InputActionButton
          label="Foo"
          icon={<MagnifyingGlassIcon />}
          data-testid="test"
          onClick={clickHandler}
        />
      );

      await user.click(screen.getByTestId("test"));

      expect(clickHandler).toHaveBeenCalled();
    });

    it("should have class name", async () => {
      render(
        <InputActionButton
          label="Foo"
          icon={<MagnifyingGlassIcon />}
          data-testid="test"
          className="test-class-name"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-input-action test-class-name"
      );
    });

    it("renders error button", async () => {
      render(
        <InputActionButton
          label="Foo"
          icon={<MagnifyingGlassIcon />}
          data-testid="test"
          errorText="Bar"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button--critical sds-input-action"
      );
    });
  });
});
