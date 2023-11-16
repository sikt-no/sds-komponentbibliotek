import { render, screen } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import { DrawerButtonLink } from "./DrawerButtonLink";

describe("DrawerButtonLink,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerButtonLink href={"https://www.samordnaopptak.no"}>
          Lenketekst
        </DrawerButtonLink>
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <DrawerButtonLink
          href={"https://www.samordnaopptak.no"}
          data-testid="test"
          icon={<span data-testid="iconElement">⚙️</span>}
          secondaryLabel={"secondaryLabel"}
        >
          Lenketekst
        </DrawerButtonLink>
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByTestId("iconElement")).toBeInTheDocument();
      expect(screen.getByText("Lenketekst")).toBeInTheDocument();
      expect(screen.getByText("secondaryLabel")).toBeInTheDocument();
    });
  });
});
