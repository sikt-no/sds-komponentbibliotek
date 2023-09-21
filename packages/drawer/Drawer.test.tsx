import { render, screen } from "@testing-library/react";
import React from "react";
import { Drawer } from "./Drawer";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

describe("Drawer,", () => {
  let mockFunction: jest.Mock;

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Drawer expanded onOverlayClick={mockFunction} />
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api ", () => {
    it("drawer should render", () => {
      render(
        <Drawer
          expanded={false}
          data-testid="test"
          onOverlayClick={mockFunction}
        />
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should collapse the drawer on Escape key press", async () => {
      const user = userEvent.setup();

      render(
        <Drawer
          onOverlayClick={mockFunction}
          expanded={false}
          data-testid="test"
        />
      );
      const drawerElement = screen.getByTestId("test");
      await user.keyboard("{Escape}");

      expect(drawerElement).not.toHaveClass("sds-drawer--expanded");
    });

    it("expanded drawer should render overlay", () => {
      render(
        <Drawer onOverlayClick={mockFunction} expanded data-testid="test" />
      );

      const overlayDiv = screen
        .queryByTestId("test")
        ?.querySelector(".sds-drawer__overlay");

      expect(overlayDiv).toBeInTheDocument();
    });

    it("collapsed drawer should not render overlay", () => {
      render(
        <Drawer
          onOverlayClick={mockFunction}
          expanded={false}
          data-testid="test"
        />
      );
      const overlayDiv = screen
        .queryByTestId("test")
        ?.querySelector(".sds-drawer__overlay--visible");

      expect(overlayDiv).not.toBeInTheDocument();
    });

    it("should render wrapper element with correct class name", () => {
      render(
        <Drawer
          onOverlayClick={mockFunction}
          expanded
          data-testid="test"
        ></Drawer>
      );

      const wrapperDiv = screen
        .queryByTestId("test")
        ?.querySelector(".sds-drawer__wrapper--expanded");

      expect(wrapperDiv).toBeInTheDocument();
    });

    it("should render wrapper element with correct class name", () => {
      render(
        <Drawer
          onOverlayClick={mockFunction}
          expanded={false}
          data-testid="test"
        ></Drawer>
      );

      const wrapperDiv = screen
        .queryByTestId("test")
        ?.querySelector(".sds-drawer__wrapper");

      expect(wrapperDiv).toBeInTheDocument();
    });

    it("should call handleOverlayClick when clicking on the overlay", async () => {
      const user = userEvent.setup();
      render(
        <Drawer onOverlayClick={mockFunction} expanded data-testid="test" />
      );

      const overlayDiv = screen
        .queryByTestId("test")
        ?.querySelector(".sds-drawer__overlay");
      if (overlayDiv) {
        await user.click(overlayDiv);
      }

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
