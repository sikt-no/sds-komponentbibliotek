import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { PrimaryLogo, SecondaryLogo } from "./Logo";

const logoTypes = [
  { name: "primary", component: PrimaryLogo },
  { name: "secondary", component: SecondaryLogo },
];

describe("Logo", () => {
  describe("a11y", () => {
    logoTypes.map((logoType) => {
      it(`${logoType.name} should be accessible`, async () => {
        const { component: Logo } = logoType;
        const { container } = render(<Logo />);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    logoTypes.map((logoType) => {
      it(`${logoType.name} should render`, async () => {
        const { name, component: Logo } = logoType;
        render(<Logo data-testid={name} />);

        expect(screen.getByTestId(name)).toHaveClass(
          `horisont-logo horisont-logo--${name}`
        );
      });
    });

    it("should have class name", async () => {
      render(<PrimaryLogo data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "horisont-logo test-class-name"
      );
    });

    it("should not render subtitle", async () => {
      render(<PrimaryLogo data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveTextContent("Sikt");
      expect(screen.getByTestId("test")).not.toHaveTextContent(
        "Kunnskapssektorens tjenesteleverandør"
      );
    });

    it("should have render correct text without lang", async () => {
      render(<SecondaryLogo data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveTextContent(
        "SiktKunnskapssektorens tjenesteleverandør"
      );
    });

    it("should have render correct text with lang 'en'", async () => {
      render(<SecondaryLogo data-testid="test" lang="en" />);

      expect(screen.getByTestId("test")).toHaveTextContent(
        "SiktNorwegian Agency for Shared Services in Education and Research"
      );
    });
  });
});
