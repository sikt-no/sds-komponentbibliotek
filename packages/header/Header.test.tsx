import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Header } from "./Header";

describe("Header", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Header>Foo</Header>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Header data-testid="test">Foo</Header>);

      expect(screen.getByTestId("test")).toHaveClass("sds-header");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Header className="test-class-name" data-testid="test">
          Foo
        </Header>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-header test-class-name",
      );
    });

    it("should have link", async () => {
      render(<Header logoHref="#">Foo</Header>);

      expect(screen.getByRole("link", { name: "Sikt" })).toHaveClass(
        "sds-header__logo-link",
      );
      expect(screen.getByRole("link", { name: "Sikt" })).toBeInTheDocument();
    });

    it("should have text", async () => {
      render(<Header logoText="Bar">Foo</Header>);

      expect(screen.getByText("Bar")).toHaveClass("sds-header__logo-text");
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });
  });
});
