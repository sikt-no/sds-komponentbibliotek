import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Footer } from "./Footer";

describe("Footer", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Footer>Foo</Footer>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Footer data-testid="test">Foo</Footer>);

      expect(screen.getByTestId("test")).toHaveClass("sds-footer");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Footer className="test-class-name" data-testid="test">
          Foo
        </Footer>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-footer test-class-name"
      );
    });

    it("should have link", async () => {
      render(<Footer>Foo</Footer>);

      expect(
        screen.getByRole("link", {
          name: "Sikt Kunnskapssektorens tjenesteleverandør",
        })
      ).toHaveClass("sds-footer__logo-link");
      expect(
        screen.getByRole("link", {
          name: "Sikt Kunnskapssektorens tjenesteleverandør",
        })
      ).toBeInTheDocument();
    });

    it("should not have link", async () => {
      render(<Footer logoHref="">Foo</Footer>);

      expect(
        screen.queryByRole("link", {
          name: "Sikt Kunnskapssektorens tjenesteleverandør",
        })
      ).not.toBeInTheDocument();
    });
  });
});
