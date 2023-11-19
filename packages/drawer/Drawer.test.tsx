import { render, screen } from "@testing-library/react";
import React from "react";
import { Drawer } from "./Drawer";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

describe("Drawer,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Drawer expanded onOverlayClick={() => {}} />,
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
          onOverlayClick={() => {}}
        />,
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should collapse the drawer on Escape key press", async () => {
      const user = userEvent.setup();

      render(
        <Drawer
          onOverlayClick={() => {}}
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
        <Drawer onOverlayClick={() => {}} expanded data-testid="test" />,
      );

      expect(
        container.querySelector(".sds-drawer__overlay"),
      ).toBeInTheDocument();
    });

    it("should render wrapper element with correct class name when expanded", () => {
      render(
        <Drawer onOverlayClick={() => {}} expanded data-testid="test"></Drawer>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-drawer sds-drawer--expanded",
      );
    });

    it("should render wrapper element with correct class name when not expanded", () => {
      render(
        <Drawer
          onOverlayClick={() => {}}
          expanded={false}
          data-testid="test"
        ></Drawer>,
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

      const overlayDiv = container.querySelector(".sds-drawer__overlay");

      overlayDiv && (await user.click(overlayDiv));

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
