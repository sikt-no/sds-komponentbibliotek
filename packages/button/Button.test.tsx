import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Button";

const buttonTypes = [
  { name: "primary", component: PrimaryButton },
  { name: "secondary", component: SecondaryButton },
  { name: "tertiary", component: TertiaryButton },
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
        render(<Button data-testid={name}>{name}</Button>);

        expect(screen.getByTestId(name)).toHaveClass(
          `horisont-button horisont-button--${name}`
        );
        expect(screen.getByText(name)).toBeInTheDocument();
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
      render(
        <PrimaryButton data-testid="test" className="test-class-name">
          Foo
        </PrimaryButton>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "horisont-button test-class-name"
      );
    });

    it("should have left icon element", async () => {
      render(
        <PrimaryButton data-testid="test" icon="icon" iconType="left">
          Foo
        </PrimaryButton>
      );

      expect(screen.getByText("icon")).toHaveClass("horisont-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have right icon element", async () => {
      render(
        <PrimaryButton data-testid="test" icon="icon" iconType="right">
          Foo
        </PrimaryButton>
      );

      expect(screen.getByText("icon")).toHaveClass("horisont-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have icon element", async () => {
      render(
        <PrimaryButton data-testid="test" icon="icon">
          Foo
        </PrimaryButton>
      );

      expect(screen.getByText("icon")).toHaveClass("horisont-button__icon");
      expect(screen.getByText("icon")).toHaveAccessibleName("Foo");
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });
  });
});
