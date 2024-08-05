import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Popover } from "./Popover";

describe("Popover", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Popover target="Bar">Foo</Popover>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <Popover target="Bar" data-testid="test">
          Foo
        </Popover>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-popover");
      expect(screen.getByText("Foo")).toBeInTheDocument();
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("should have a class name", () => {
      render(
        <Popover target="Bar" data-testid="test" className="test-class-name">
          Foo
        </Popover>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-popover test-class-name",
      );
    });

    it("calls click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(
        <Popover target="Bar" onClick={clickHandler}>
          Foo
        </Popover>,
      );

      await user.click(screen.getByText("Foo"));

      expect(clickHandler).toHaveBeenCalled();
    });
  });
});
