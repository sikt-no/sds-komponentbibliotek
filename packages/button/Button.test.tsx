import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { PrimaryButton, SecondaryButton } from "./Button";

const buttonTypes = [
  { name: "primary", component: PrimaryButton },
  { name: "secondary", component: SecondaryButton },
];

describe("Button", () => {
  describe("a11y", () => {
    buttonTypes.map((buttonType) => {
      it(`${buttonType.name} should be accessible`, async () => {
        const { component: Button } = buttonType;
        const { container } = render(<Button>Foo</Button>);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    buttonTypes.map((buttonType) => {
      it(`${buttonType.name} should render`, async () => {
        const { name, component: Button } = buttonType;
        render(<Button>{name}</Button>);

        expect(screen.getByText(name)).toHaveClass(
          `horisont-button horisont-button--${name}`
        );
      });
    });

    it("calls click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(<PrimaryButton onClick={clickHandler}>Foo</PrimaryButton>);

      await user.click(screen.getByText("Foo"));

      expect(clickHandler).toHaveBeenCalled();
    });

    it("should have class name", async () => {
      render(<PrimaryButton className="test-class-name">Foo</PrimaryButton>);

      expect(screen.getByText("Foo")).toHaveClass(
        "horisont-button test-class-name"
      );
    });
  });
});
