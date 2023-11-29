import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { XLogo, LinkedInLogo } from "./LogoIcons";

const logoIcons = [
  { name: "x-logo", component: XLogo },
  { name: "linked-in-logo", component: LinkedInLogo },
];

describe("LogoIcons", () => {
  describe("a11y", () => {
    logoIcons.map((logoIcon) => {
      it(`${logoIcon.name} should be accessible`, async () => {
        const { component: Logo } = logoIcon;
        const { container } = render(<Logo data-testid="test" />);

        expect(screen.getByTestId("test")).toHaveAttribute(
          "aria-hidden",
          "true",
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    logoIcons.map((logoIcon) => {
      it(`${logoIcon.name} has variant className`, async () => {
        const { component: Logo } = logoIcon;
        render(<Logo data-testid="test" />);

        expect(screen.getByTestId("test")).toHaveClass(
          "sds-icon sds-icon-logo",
        );
      });

      it(`${logoIcon.name} has custom className`, async () => {
        const { component: Logo } = logoIcon;
        render(
          <Logo color="black" className="test-class" data-testid="test" />,
        );

        expect(screen.getByTestId("test")).toHaveClass(
          "sds-icon-logo sds-icon-logo--color-black test-class",
        );
      });
    });
  });
});
