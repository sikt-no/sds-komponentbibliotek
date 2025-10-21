import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ErrorSummary } from "./Message";

describe("Message ErrorSummary", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ErrorSummary>Foo</ErrorSummary>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<ErrorSummary>Foo</ErrorSummary>);

      expect(screen.getByText("Foo")).toHaveClass("sds-message__message");
    });
  });

  it("should render container", async () => {
    render(<ErrorSummary data-testid="test">Foo</ErrorSummary>);

    expect(screen.getByTestId("test")).toHaveAttribute("tabindex", "-1");
    expect(screen.getByTestId("test").parentElement).toHaveAttribute(
      "aria-live",
      "polite",
    );
  });

  it("should have class name", async () => {
    const { container } = render(
      <ErrorSummary className="test-class-name">Foo</ErrorSummary>,
    );

    expect(
      container.getElementsByClassName("sds-message test-class-name")[0],
    ).toBeInTheDocument();
  });
});
