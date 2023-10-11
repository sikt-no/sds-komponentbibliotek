import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import {
  StrongButton,
  SubtleButton,
  TransparentButton,
  CriticalButton,
} from "./Button";

const buttonTypes = [
  { name: "strong", component: StrongButton },
  { name: "subtle", component: SubtleButton },
  { name: "transparent", component: TransparentButton },
  { name: "critical", component: CriticalButton },
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
          `sds-button sds-button--${name}`
        );
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("calls click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(<SubtleButton onClick={clickHandler}>Foo</SubtleButton>);

      await user.click(screen.getByText("Foo"));

      expect(clickHandler).toHaveBeenCalled();
    });

    it("should have class name", async () => {
      render(
        <SubtleButton data-testid="test" className="test-class-name">
          Foo
        </SubtleButton>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button test-class-name"
      );
    });

    it("should have size modifier class name", async () => {
      render(
        <SubtleButton data-testid="test" buttonSize="small">
          Foo
        </SubtleButton>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button sds-button--small"
      );
    });

    it("should have left icon element", async () => {
      render(
        <SubtleButton data-testid="test" icon="icon" iconType="left">
          Foo
        </SubtleButton>
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have right icon element", async () => {
      render(
        <SubtleButton data-testid="test" icon="icon" iconType="right">
          Foo
        </SubtleButton>
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have icon element", async () => {
      render(
        <SubtleButton data-testid="test" icon="icon" iconType="only">
          Foo
        </SubtleButton>
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByTestId("test")).toHaveAccessibleName("Foo");
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });
  });
});
