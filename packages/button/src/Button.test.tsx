import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Button, ButtonVariant } from "./Button";

const variants: ButtonVariant[] = [
  "strong",
  "subtle",
  "transparent",
  "critical",
  "neutral",
  "neutral-transparent",
];

describe("Button", () => {
  describe("a11y", () => {
    variants.map((variant) => {
      it(`${variant} should be accessible`, async () => {
        const { container } = render(<Button variant={variant}>Foo</Button>);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    variants.map((variant) => {
      it(`${variant} should render`, async () => {
        render(
          <Button variant={variant} data-testid={variant}>
            {variant}
          </Button>,
        );

        expect(screen.getByTestId(variant)).toHaveClass(
          `sds-button sds-button--${variant}`,
        );
        expect(screen.getByTestId(variant)).toHaveAttribute("type", "button");
        expect(screen.getByText(variant)).toBeInTheDocument();
      });
    });

    it("calls click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(<Button onClick={clickHandler}>Foo</Button>);

      await user.click(screen.getByText("Foo"));

      expect(clickHandler).toHaveBeenCalled();
    });

    it("should have class name", async () => {
      render(
        <Button data-testid="test" className="test-class-name">
          Foo
        </Button>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button test-class-name",
      );
    });

    it("should have size modifier class name", async () => {
      render(
        <Button data-testid="test" size="small">
          Foo
        </Button>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button sds-button--small",
      );
    });

    it("should have left icon element", async () => {
      render(
        <Button data-testid="test" icon="icon" iconVariant="left">
          Foo
        </Button>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have right icon element", async () => {
      render(
        <Button data-testid="test" icon="icon" iconVariant="right">
          Foo
        </Button>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have icon element", async () => {
      render(
        <Button data-testid="test" icon="icon" iconVariant="only">
          Foo
        </Button>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByTestId("test")).toHaveAccessibleName("Foo");
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });

    it("should have type", async () => {
      render(
        <Button data-testid="test" type="submit">
          Foo
        </Button>,
      );

      expect(screen.getByTestId("test")).toHaveAttribute("type", "submit");
    });
  });
});
