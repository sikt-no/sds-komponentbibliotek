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

const levels = [
  { name: "h1", component: Heading1 },
  { name: "h2", component: Heading2 },
  { name: "h3", component: Heading3 },
  { name: "h4", component: Heading4 },
  { name: "h5", component: Heading5 },
  { name: "h6", component: Heading6 },
];

describe("Heading", () => {
  describe("a11y", () => {
    levels.map((level) => {
      it(`${level.name} should be accessible`, async () => {
        const { component: Heading } = level;
        const { container } = render(<Heading variant="medium">Foo</Heading>);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    levels.map((level) => {
      it(`${level.name} should render`, async () => {
        const { name, component: Heading } = level;
        render(
          <Heading variant="medium" data-testid={name}>
            {name}
          </Heading>,
        );

        expect(screen.getByTestId(name)).toHaveClass(
          "sds-typography-heading sds-typography-heading--medium",
        );
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("should have class name", async () => {
      render(
        <Heading1
          variant="medium"
          data-testid="test"
          className="test-class-name"
        >
          Foo
        </Heading1>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-typography-heading sds-typography-heading--medium test-class-name",
      );
    });
  });
});
