import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Heading";

const headingLevels = [
  { name: "h1", component: Heading1 },
  { name: "h2", component: Heading2 },
  { name: "h3", component: Heading3 },
  { name: "h4", component: Heading4 },
  { name: "h5", component: Heading5 },
  { name: "h6", component: Heading6 },
];

describe("Heading", () => {
  describe("a11y", () => {
    headingLevels.map((headingLevel) => {
      it(`${headingLevel.name} should be accessible`, async () => {
        const { component: Heading } = headingLevel;
        const { container } = render(
          <Heading headingType="medium">Foo</Heading>
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    headingLevels.map((headingLevel) => {
      it(`${headingLevel.name} should render`, async () => {
        const { name, component: Heading } = headingLevel;
        render(
          <Heading headingType="medium" isDynamic data-testid={name}>
            {name}
          </Heading>
        );

        expect(screen.getByTestId(name)).toHaveClass(
          "sds-typography-heading sds-typography-heading--medium sds-typography-heading--dynamic"
        );
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("should have class name", async () => {
      render(
        <Heading1
          headingType="medium"
          data-testid="test"
          className="test-class-name"
        >
          Foo
        </Heading1>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-typography-heading sds-typography-heading--medium test-class-name"
      );
    });
  });
});
