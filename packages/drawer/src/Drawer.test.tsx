import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Drawer } from "./Drawer";

describe("Drawer,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Drawer expanded onOverlayClick={jest.fn()} />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("drawer should render", () => {
      render(
        <Drawer
          expanded={false}
          data-testid="test"
          onOverlayClick={jest.fn()}
        />,
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should collapse the drawer on Escape key press", async () => {
      const user = userEvent.setup();

      render(
        <Drawer
          onOverlayClick={jest.fn()}
          expanded={false}
          data-testid="test"
        />,
      );
      const drawerElement = screen.getByTestId("test");
      await user.keyboard("{Escape}");

      expect(drawerElement).not.toHaveClass("sds-drawer--expanded");
    });

    it("expanded drawer should render overlay", () => {
      const { container } = render(
        <Drawer onOverlayClick={jest.fn()} expanded data-testid="test" />,
      );

      expect(
        container.querySelector(".sds-drawer__overlay"),
      ).toBeInTheDocument();
    });

    it("should render wrapper element with correct class name when expanded", () => {
      render(<Drawer onOverlayClick={jest.fn()} expanded data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-drawer sds-drawer--expanded",
      );
    });

    it("should render wrapper element with correct class name when not expanded", () => {
      render(
        <Drawer
          onOverlayClick={jest.fn()}
          expanded={false}
          data-testid="test"
        />,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-drawer");
      expect(screen.getByTestId("test")).not.toHaveClass(
        "sds-drawer--expanded",
      );
    });

    it("should call handleOverlayClick when clicking on the overlay", async () => {
      const user = userEvent.setup();
      const mockFunction = jest.fn();
      const { container } = render(
        <Drawer onOverlayClick={mockFunction} expanded data-testid="test" />,
      );

      const overlay = container.querySelector(".sds-drawer__overlay");

      overlay && (await user.click(overlay));

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
