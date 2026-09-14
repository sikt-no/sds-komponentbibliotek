import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TagStatus, TagStatusVariant } from "./TagStatus";

const variants: readonly TagStatusVariant[] = [
  "success",
  "info",
  "warning",
  "critical",
];

describe("TagStatus", () => {
  describe("a11y", () => {
    it.each(variants)(
      "should be accessible for variant=%s",
      async (variant) => {
        const { container } = render(
          <TagStatus variant={variant}>Label</TagStatus>,
        );
        expect(await axe(container)).toHaveNoViolations();
      },
    );
  });

  describe("api", () => {
    it("should render the root class and defaults", () => {
      render(
        <TagStatus data-testid="tag" variant="info">
          Label
        </TagStatus>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("sd3-tag-status");
      expect(tag).toHaveAttribute("data-variant", "info");
      expect(tag).toHaveAttribute("data-visibility", "subtle");
      expect(tag).toHaveAttribute("data-size", "standard");
    });

    it("should merge a consumer className", () => {
      render(
        <TagStatus data-testid="tag" variant="info" className="test-class-name">
          Label
        </TagStatus>,
      );
      expect(screen.getByTestId("tag")).toHaveClass(
        "sd3-tag-status test-class-name",
      );
    });

    it.each(variants)("should set data-variant='%s'", (variant) => {
      render(
        <TagStatus data-testid="tag" variant={variant}>
          Label
        </TagStatus>,
      );
      expect(screen.getByTestId("tag")).toHaveAttribute(
        "data-variant",
        variant,
      );
    });

    it("should set data-visibility='strong'", () => {
      render(
        <TagStatus data-testid="tag" variant="info" visibility="strong">
          Label
        </TagStatus>,
      );
      expect(screen.getByTestId("tag")).toHaveAttribute(
        "data-visibility",
        "strong",
      );
    });

    it("should set data-size='compact'", () => {
      render(
        <TagStatus data-testid="tag" variant="info" size="compact">
          Label
        </TagStatus>,
      );
      expect(screen.getByTestId("tag")).toHaveAttribute("data-size", "compact");
    });
  });
});
