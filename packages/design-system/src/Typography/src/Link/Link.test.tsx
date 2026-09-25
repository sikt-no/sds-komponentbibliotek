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
        </Link>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sd3-typography");
    });

    it("should have class name", async () => {
      render(<Link href="#" data-testid="test" className="test-class-name" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-typography test-class-name",
      );
      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-variant",
        "link",
      );
    });

    it("should change component with asChild", async () => {
      render(
        <Link href="#" asChild>
          <h2>Foo</h2>
        </Link>,
      );

      expect(
        screen.getByRole("heading", { level: 2, name: "Foo" }),
      ).toBeInTheDocument();
    });

    it("should have icon", async () => {
      render(
        <Link href="#">
          <>
            Foo<Link.Icon>icon</Link.Icon>
          </>
        </Link>,
      );

      expect(screen.getByText("icon")).toBeInTheDocument();
    });

    it("should have external modifier", async () => {
      render(
        <Link href="#" isExternal data-testid="test">
          Foo
        </Link>,
      );

      expect(screen.getByTestId("test")).toHaveAttribute("data-is", "external");
    });

    it("should have hide icon modifier", async () => {
      render(
        <Link href="#" hideIcon data-testid="test">
          Foo
        </Link>,
      );

      expect(screen.getByTestId("test")).toHaveAttribute(
        "data-is",
        "hide-icon",
      );
    });
  });
});
