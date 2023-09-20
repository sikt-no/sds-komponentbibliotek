import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Link } from "./Link";

describe("Link", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Link href="#">Foo</Link>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Link href="#" data-testid="test">
          Foo
        </Link>
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-typography-link");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Link href="#" className="test-class-name" data-testid="test">
          Foo
        </Link>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-typography-link test-class-name"
      );
    });

    it("should have external modifier", async () => {
      render(
        <Link href="#" isExternal data-testid="test">
          Foo
        </Link>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-typography-link sds-typography-link--external"
      );
    });

    it("should have no icon modifier", async () => {
      render(
        <Link href="#" noIcon data-testid="test">
          Foo
        </Link>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-typography-link sds-typography-link--no-icon"
      );
    });
  });
});
