import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { StatusIcon, type StatusIconVariant } from "./StatusIcon";

const variants: readonly StatusIconVariant[] = [
  "success",
  "critical",
  "warning",
  "info",
  "neutral",
];

describe("StatusIcon", () => {
  describe("a11y", () => {
    it.each(variants)(
      "should be accessible for variant=%s",
      async (variant) => {
        const { container } = render(<StatusIcon variant={variant} />);
        expect(await axe(container)).toHaveNoViolations();
      },
    );
  });

  describe("api", () => {
    it("should render the root class and defaults", () => {
      render(<StatusIcon data-testid="icon" variant="info" />);
      const icon = screen.getByTestId("icon");
      expect(icon).toHaveClass("sd3-status-icon");
      expect(icon).toHaveAttribute("data-variant", "info");
      expect(icon).toHaveAttribute("data-size", "standard");
      expect(icon.querySelector("svg")).not.toBeNull();
    });

    it("should merge a consumer className", () => {
      render(
        <StatusIcon
          data-testid="icon"
          variant="info"
          className="test-class-name"
        />,
      );
      expect(screen.getByTestId("icon")).toHaveClass(
        "sd3-status-icon test-class-name",
      );
    });

    it.each(variants)("should set data-variant='%s'", (variant) => {
      render(<StatusIcon data-testid="icon" variant={variant} />);
      expect(screen.getByTestId("icon")).toHaveAttribute(
        "data-variant",
        variant,
      );
    });

    it("should set data-size='compact'", () => {
      render(<StatusIcon data-testid="icon" variant="info" size="compact" />);
      expect(screen.getByTestId("icon")).toHaveAttribute(
        "data-size",
        "compact",
      );
    });

    it("should wrap the neutral glyph in a badge", () => {
      render(<StatusIcon data-testid="icon" variant="neutral" />);
      const icon = screen.getByTestId("icon");
      const badge = icon.querySelector('[data-part="badge"]');
      expect(badge).not.toBeNull();
      expect(badge?.querySelector('[data-part="glyph"]')).not.toBeNull();
    });

    it("should render non-neutral variants without the badge wrapper", () => {
      render(<StatusIcon data-testid="icon" variant="info" />);
      expect(
        screen.queryByTestId("icon")?.querySelector('[data-part="badge"]'),
      ).toBeNull();
    });
  });
});
