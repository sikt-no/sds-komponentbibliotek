import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Abbreviation } from "./Abbreviation";

describe("Abbreviation", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Abbreviation title="Bar">Foo</Abbreviation>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Abbreviation title="Bar" data-testid="test">
          Foo
        </Abbreviation>
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-typography-abbr");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Abbreviation
          title="Bar"
          className="test-class-name"
          data-testid="test"
        >
          Foo
        </Abbreviation>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-typography-abbr test-class-name"
      );
    });
  });
});
