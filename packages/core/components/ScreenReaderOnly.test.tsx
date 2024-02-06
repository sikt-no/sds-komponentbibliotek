import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

describe("ScreenReaderOnly", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ScreenReaderOnly>Foo</ScreenReaderOnly>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<ScreenReaderOnly data-testid="test">Foo</ScreenReaderOnly>);

      expect(screen.getByTestId("test")).toHaveClass("sds-screen-reader-only");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <ScreenReaderOnly className="test-class-name" data-testid="test">
          Foo
        </ScreenReaderOnly>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-screen-reader-only test-class-name",
      );
    });

    it("should have focusable modifier", async () => {
      render(
        <ScreenReaderOnly isFocusable data-testid="test">
          Foo
        </ScreenReaderOnly>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-screen-reader-only sds-screen-reader-only--focusable",
      );
    });
  });
});
