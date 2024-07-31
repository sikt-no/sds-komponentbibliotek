import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DrawerContent } from "./DrawerContent";

describe("DrawerContent,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerContent>
          <p>content</p>
        </DrawerContent>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
  describe("api", () => {
    it("should render", () => {
      render(
        <DrawerContent data-testid="test">
          <p>content</p>
        </DrawerContent>,
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-drawer-content");
    });
  });
});
