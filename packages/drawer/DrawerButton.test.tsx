import { render, screen } from "@testing-library/react";
import React from "react";

import { axe } from "jest-axe";
import { DrawerButton } from "./DrawerButton";

describe("DrawerButton,", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerButton label={"Label"} icon={<span>⚙️</span>} />
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <DrawerButton
          data-testid="test"
          icon={<span data-testid="iconElement">⚙️</span>}
          label={"label"}
          secondaryLabel={"secondaryLabel"}
        />
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByTestId("iconElement")).toBeInTheDocument();
      expect(screen.getByText("label")).toBeInTheDocument();
      expect(screen.getByText("secondaryLabel")).toBeInTheDocument();
    });
  });
});
