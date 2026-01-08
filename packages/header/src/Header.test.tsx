import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Header } from "./Header";

describe("Header", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Header />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Header data-testid="test">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Header className="test-class-name" data-testid="test">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-header test-class-name",
      );
    });

    it("should have link", async () => {
      render(
        <Header logoLink={<a href="#bar">noop</a>}>
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByRole("link", { name: "Sikt" })).toBeInTheDocument();
    });

    it("should have logo text", async () => {
      render(
        <Header logoText="Bar">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByText("Bar")).toHaveClass("sds-logo__title");
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("should have slots", async () => {
      render(
        <Header
          applicationStatus={<div>Baz</div>}
          topSlot={<div>Gux</div>}
          leftSlot={<div>Left</div>}
          rightSlot={<div>Right</div>}
        >
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByText("Baz")).toBeInTheDocument();
      expect(screen.getByText("Gux")).toBeInTheDocument();
      expect(screen.getByText("Left")).toBeInTheDocument();
      expect(screen.getByText("Right")).toBeInTheDocument();
    });
  });
});
