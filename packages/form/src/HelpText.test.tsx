import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { HelpText } from "./HelpText";

describe("HelpText", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<HelpText>Foo</HelpText>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("help text should render", async () => {
      render(<HelpText data-testid="test">Foo</HelpText>);
      expect(screen.getByTestId("test")).toHaveClass("sds-form__help-text", {
        exact: false,
      });
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <HelpText data-testid="test" className="test-class-name">
          Foo
        </HelpText>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form__help-text test-class-name",
        { exact: false },
      );
    });

    it("should have error class when error", async () => {
      render(
        <HelpText error data-testid="test">
          Error
        </HelpText>,
      );

      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-form__help-text sds-form__help-text--error",
        { exact: false },
      );
    });
  });
});
