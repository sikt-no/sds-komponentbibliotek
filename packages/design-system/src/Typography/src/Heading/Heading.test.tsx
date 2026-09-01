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

describe("Heading", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Heading1>Foo</Heading1>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Heading1 data-testid="test">Foo</Heading1>);

      expect(screen.getByTestId("test")).toHaveClass("sd3-typography");
      expect(
        screen.getByRole("heading", { level: 1, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should have h2 role", async () => {
      render(<Heading2>Foo</Heading2>);

      expect(
        screen.getByRole("heading", { level: 2, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should have h3 role", async () => {
      render(<Heading3>Foo</Heading3>);

      expect(
        screen.getByRole("heading", { level: 3, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should have h4 role", async () => {
      render(<Heading4>Foo</Heading4>);

      expect(
        screen.getByRole("heading", { level: 4, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should have h5 role", async () => {
      render(<Heading5>Foo</Heading5>);

      expect(
        screen.getByRole("heading", { level: 5, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should have h6 role", async () => {
      render(<Heading6>Foo</Heading6>);

      expect(
        screen.getByRole("heading", { level: 6, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should change component with asChild", async () => {
      render(
        <Heading1 data-testid="test" asChild>
          <h2>Foo</h2>
        </Heading1>,
      );

      expect(
        screen.getByRole("heading", { level: 2, name: "Foo" }),
      ).toBeInTheDocument();
    });
  });
});
