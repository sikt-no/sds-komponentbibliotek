import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ButtonLink } from "./ButtonLink";

describe("ButtonLink", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ButtonLink href="#">Foo</ButtonLink>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <ButtonLink href="#" data-testid="test">
          Foo
        </ButtonLink>
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-button-link");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <ButtonLink href="#" className="test-class-name" data-testid="test">
          Foo
        </ButtonLink>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button-link test-class-name"
      );
    });

    it("should have left icon element", async () => {
      render(
        <ButtonLink data-testid="test" icon="icon" iconType="left">
          Foo
        </ButtonLink>
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have right icon element", async () => {
      render(
        <ButtonLink data-testid="test" icon="icon" iconType="right">
          Foo
        </ButtonLink>
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have icon element", async () => {
      render(
        <ButtonLink data-testid="test" icon="icon" iconType="only">
          Foo
        </ButtonLink>
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByTestId("test")).toHaveAccessibleName("Foo");
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });
  });
});
