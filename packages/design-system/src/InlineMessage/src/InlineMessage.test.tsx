import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { InlineMessage, InlineMessageVariant } from "./InlineMessage";

const variants: readonly InlineMessageVariant[] = [
  "critical",
  "warning",
  "success",
  "info",
];

describe("InlineMessage", () => {
  describe("a11y", () => {
    it.each(variants)(
      "should be accessible for variant=%s",
      async (variant) => {
        const { container } = render(
          <InlineMessage variant={variant}>Message</InlineMessage>,
        );
        expect(await axe(container)).toHaveNoViolations();
      },
    );
  });

  describe("api", () => {
    it("should render the root class and default variant", () => {
      render(<InlineMessage data-testid="message">Message</InlineMessage>);
      const root = screen.getByTestId("message");
      expect(root).toHaveClass("sd3-inline-message");
      expect(root).toHaveAttribute("data-variant", "critical");
    });

    it("should merge a consumer className", () => {
      render(
        <InlineMessage data-testid="message" className="test-class-name">
          Message
        </InlineMessage>,
      );
      expect(screen.getByTestId("message")).toHaveClass(
        "sd3-inline-message test-class-name",
      );
    });

    describe("variant", () => {
      it.each(variants)("should set data-variant='%s'", (variant) => {
        render(
          <InlineMessage data-testid="message" variant={variant}>
            Message
          </InlineMessage>,
        );
        expect(screen.getByTestId("message")).toHaveAttribute(
          "data-variant",
          variant,
        );
      });
    });
  });
});
