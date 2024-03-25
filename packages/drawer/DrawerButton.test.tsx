import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DrawerButton } from "./DrawerButton";

describe("DrawerButton,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerButton icon="icon">Label</DrawerButton>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <DrawerButton
          data-testid="test"
          icon="icon"
          secondaryLabel="secondaryLabel"
        >
          Label
        </DrawerButton>,
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("icon")).toHaveClass("sds-drawer-button__icon");
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByText("secondaryLabel")).toBeInTheDocument();
    });
  });
});
