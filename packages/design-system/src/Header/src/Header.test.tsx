import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Header } from "./Header";

describe("Header", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Header>
          <Header.SkipLink href="#">Foo</Header.SkipLink>
          <Header.Content>
            <Header.LogoLink href="#">
              <Header.Logo />
            </Header.LogoLink>
          </Header.Content>
        </Header>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Header data-testid="test">
          <Header.SkipLink href="#">Foo</Header.SkipLink>
          <Header.Content>
            <Header.LogoLink href="#">
              <Header.Logo />
            </Header.LogoLink>
          </Header.Content>
        </Header>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sd3-header");
    });

    it("should have class name", async () => {
      render(
        <Header data-testid="test" className="test-class-name">
          <Header.SkipLink href="#">Foo</Header.SkipLink>
          <Header.Content>
            <Header.LogoLink href="#">
              <Header.Logo />
            </Header.LogoLink>
          </Header.Content>
        </Header>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-header test-class-name",
      );
    });

    it("should have product name", async () => {
      render(
        <Header data-testid="test" className="test-class-name">
          <Header.SkipLink href="#">Foo</Header.SkipLink>
          <Header.Content>
            <Header.LogoLink href="#">
              <Header.Logo productName="Bar" />
            </Header.LogoLink>
          </Header.Content>
        </Header>,
      );

      expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("should change component with asChild", async () => {
      render(
        <Header>
          <Header.SkipLink href="#">Foo</Header.SkipLink>
          <Header.Content>
            <Header.LogoLink href="#" data-testid="test" asChild>
              <h2>Bar</h2>
            </Header.LogoLink>
          </Header.Content>
        </Header>,
      );

      expect(screen.getByTestId("test")).toHaveRole("heading");
    });
  });
});
