import { render, screen } from "@testing-library/react";
import { DrawerItemGroup } from "./DrawerItemGroup";
import { axe } from "jest-axe";
import { DrawerItem } from "./DrawerItem";

describe("DrawerItemGroup", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerItemGroup expanded>
          <DrawerItem>content</DrawerItem>
        </DrawerItemGroup>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <DrawerItemGroup expanded data-testid="test" heading="Group heading">
          <DrawerItem>content</DrawerItem>
        </DrawerItemGroup>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-drawer-item-group");
      expect(screen.getByText("content")).toHaveClass("sds-drawer-item");
    });
  });
});
