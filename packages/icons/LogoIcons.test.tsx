import React from "react";
import { render } from "@testing-library/react";
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
        const { container } = render(<Logo />);

        expect(container.querySelector("svg")).toHaveAttribute(
          "aria-hidden",
          "true"
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    logoIcons.map((logoIcon) => {
      it(`${logoIcon.name} has variant className`, async () => {
        const { component: Logo } = logoIcon;
        const { container } = render(<Logo />);

        expect(container.querySelector("svg")).toHaveClass(
          "sds-icon--color-white"
        );
      });

      it(`${logoIcon.name} has custom className`, async () => {
        const { component: Logo } = logoIcon;
        const { container } = render(
          <Logo color="black" className="test-class" />
        );

        expect(container.querySelector("svg")).toHaveClass(
          "sds-icon--color-black test-class"
        );
      });
    });
  });
});
