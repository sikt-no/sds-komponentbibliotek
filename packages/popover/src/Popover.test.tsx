import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Popover, Tooltip } from "./Popover";

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

    it("should not have anchor class name", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      const { container } = render(
        <Popover target="Bar" onClick={clickHandler} anchor={false}>
          Foo
        </Popover>,
      );

      await user.click(screen.getByText("Foo"));

      expect(
        container.querySelector(".sds-popover__target--anchor"),
      ).not.toBeInTheDocument();
    });

    it("call click handler", async () => {
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

    it("does not call click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(<Popover target="Bar">Foo</Popover>);

      await user.click(screen.getByText("Foo"));

      expect(clickHandler).not.toHaveBeenCalled();
    });

    it("should be correct positioned", async () => {
      const user = userEvent.setup();

      render(<Popover target="Bar">Foo</Popover>);

      await user.click(screen.getByText("Foo"));

      expect(screen.getByText("Bar")).toBeInTheDocument();
      expect(screen.getByText("Bar")).toHaveClass(
        "sds-popover__target--anchor",
      );
    });

    it("should call show/hide popover on focus/blur for tooltip", () => {
      const showPopover = jest.fn();
      const hidePopover = jest.fn();
      HTMLElement.prototype.showPopover = showPopover;
      HTMLElement.prototype.hidePopover = hidePopover;

      render(
        <Tooltip target="Bar" data-testid="test">
          Foo
        </Tooltip>,
      );

      act(() => {
        screen.getByText("Foo").focus();
      });

      expect(showPopover).toHaveBeenCalled();

      act(() => {
        screen.getByText("Foo").blur();
      });

      expect(hidePopover).toHaveBeenCalled();
    });

    it("should not call show/hide popover on focus/blur", () => {
      const showPopover = jest.fn();
      const hidePopover = jest.fn();
      HTMLElement.prototype.showPopover = showPopover;
      HTMLElement.prototype.hidePopover = hidePopover;

      render(
        <Popover target="Bar" data-testid="test">
          Foo
        </Popover>,
      );

      act(() => {
        screen.getByText("Foo").focus();
      });

      expect(showPopover).not.toHaveBeenCalled();

      act(() => {
        screen.getByText("Foo").blur();
      });

      expect(hidePopover).not.toHaveBeenCalled();
    });

    it("should call show/hide popover on mouseenter/leave for tooltip", async () => {
      const user = userEvent.setup();

      const showPopover = jest.fn();
      const hidePopover = jest.fn();
      HTMLElement.prototype.showPopover = showPopover;
      HTMLElement.prototype.hidePopover = hidePopover;

      render(
        <Tooltip target="Bar" data-testid="test" anchor={false}>
          Foo
        </Tooltip>,
      );

      await user.hover(screen.getByText("Foo"));

      expect(showPopover).toHaveBeenCalled();

      await user.unhover(screen.getByText("Foo"));

      expect(hidePopover).toHaveBeenCalled();
    });

    it("should not call show/hide popover on mouseenter/leave", async () => {
      const user = userEvent.setup();

      const showPopover = jest.fn();
      const hidePopover = jest.fn();
      HTMLElement.prototype.showPopover = showPopover;
      HTMLElement.prototype.hidePopover = hidePopover;

      render(
        <Popover target="Bar" data-testid="test">
          Foo
        </Popover>,
      );

      await user.hover(screen.getByText("Foo"));

      expect(showPopover).not.toHaveBeenCalled();

      await user.unhover(screen.getByText("Foo"));

      expect(hidePopover).not.toHaveBeenCalled();
    });
  });
});
