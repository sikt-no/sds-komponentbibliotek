import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DrawerButtonLink } from "./DrawerButtonLink";

describe("DrawerButtonLink,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerButtonLink href="https://www.samordnaopptak.no" icon="icon">
          Lenketekst
        </DrawerButtonLink>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <DrawerButtonLink
          href="https://www.samordnaopptak.no"
          data-testid="test"
          icon="icon"
          secondaryLabel="secondaryLabel"
        >
          Lenketekst
        </DrawerButtonLink>,
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("icon")).toHaveClass("sds-drawer-button__icon");
      expect(screen.getByText("Lenketekst")).toBeInTheDocument();
      expect(screen.getByText("secondaryLabel")).toBeInTheDocument();
    });
  });
});
