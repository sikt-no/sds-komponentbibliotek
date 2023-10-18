import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Logo, LogoVariant } from "./Logo";

const variants: LogoVariant[] = ["primary", "secondary"];

describe("Logo", () => {
  describe("a11y", () => {
    variants.map((variant) => {
      it(`${variant} should be accessible`, async () => {
        const { container } = render(<Logo variant={variant} />);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    variants.map((variant) => {
      it(`${variant} should render`, async () => {
        render(<Logo variant={variant} data-testid={variant} />);

        expect(screen.getByTestId(variant)).toHaveClass(
          `sds-logo sds-logo--${variant}`
        );
      });
    });

    it("should have class name", async () => {
      render(<Logo data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-logo test-class-name"
      );
    });

    it("should not render subtitle", async () => {
      render(<Logo data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveTextContent("Sikt");
      expect(screen.getByTestId("test")).not.toHaveTextContent(
        "Kunnskapssektorens tjenesteleverandør"
      );
    });

    it("should have render correct text without lang", async () => {
      render(<Logo variant="secondary" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveTextContent(
        "SiktKunnskapssektorens tjenesteleverandør"
      );
    });

    it("should have render correct text with lang 'en'", async () => {
      render(<Logo variant="secondary" data-testid="test" lang="en" />);

      expect(screen.getByTestId("test")).toHaveTextContent(
        "SiktNorwegian Agency for Shared Services in Education and Research"
      );
    });
  });
});
