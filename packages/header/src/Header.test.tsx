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
        <Header logoHref="#">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByRole("link", { name: "Sikt" })).toHaveClass(
        "sds-header__logo-link",
      );
      expect(screen.getByRole("link", { name: "Sikt" })).toBeInTheDocument();
    });

    it("should have text", async () => {
      render(
        <Header logoText="Bar">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByText("Bar")).toHaveClass("sds-logo__title");
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });
  });
});
