import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Footer } from "./Footer";

describe("Footer", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Footer>
          <Footer.Link href="#">
            <Footer.Logo />
          </Footer.Link>
        </Footer>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Footer data-testid="test">
          <Footer.Link href="#">
            <Footer.Logo />
          </Footer.Link>
        </Footer>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sd3-footer");
    });

    it("should have class name", async () => {
      render(
        <Footer data-testid="test" className="test-class-name">
          <Footer.Link href="#">
            <Footer.Logo />
          </Footer.Link>
        </Footer>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-footer test-class-name",
      );
    });

    it("should change component with asChild", async () => {
      render(
        <Footer>
          <Footer.Link href="#" data-testid="test" asChild>
            <h2>Foo</h2>
          </Footer.Link>
        </Footer>,
      );

      expect(screen.getByTestId("test")).toHaveRole("heading");
    });
  });
});
