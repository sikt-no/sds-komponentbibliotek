import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Tag, TagColor } from "./Tag";

const colors: readonly TagColor[] = [
  "brand",
  "neutral",
  "category-1",
  "category-2",
  "category-3",
  "category-4",
  "category-5",
  "category-6",
  "category-7",
];

describe("Tag", () => {
  describe("a11y", () => {
    it("should be accessible in the default configuration", async () => {
      const { container } = render(<Tag>Label</Tag>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it.each(colors)("should be accessible for color=%s", async (color) => {
      const { container } = render(<Tag color={color}>Label</Tag>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with an icon", async () => {
      const { container } = render(
        <Tag>
          <Tag.Icon>
            <svg data-testid="icon" />
          </Tag.Icon>
          Label
        </Tag>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render the root class and defaults", () => {
      render(<Tag data-testid="tag">Label</Tag>);
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("sd3-tag");
      expect(tag).toHaveAttribute("data-color", "neutral");
      expect(tag).toHaveAttribute("data-visibility", "subtle");
      expect(tag).toHaveAttribute("data-size", "standard");
    });

    it("should merge a consumer className", () => {
      render(
        <Tag data-testid="tag" className="test-class-name">
          Label
        </Tag>,
      );
      expect(screen.getByTestId("tag")).toHaveClass("sd3-tag test-class-name");
    });

    it.each(colors)("should set data-color='%s'", (color) => {
      render(
        <Tag data-testid="tag" color={color}>
          Label
        </Tag>,
      );
      expect(screen.getByTestId("tag")).toHaveAttribute("data-color", color);
    });

    it("should set data-visibility='strong'", () => {
      render(
        <Tag data-testid="tag" visibility="strong">
          Label
        </Tag>,
      );
      expect(screen.getByTestId("tag")).toHaveAttribute(
        "data-visibility",
        "strong",
      );
    });

    it("should set data-size='compact'", () => {
      render(
        <Tag data-testid="tag" size="compact">
          Label
        </Tag>,
      );
      expect(screen.getByTestId("tag")).toHaveAttribute("data-size", "compact");
    });

    it("should render a composed Tag.Icon as a direct child of the tag", () => {
      const { container } = render(
        <Tag>
          <Tag.Icon>
            <svg data-testid="icon" />
          </Tag.Icon>
          Label
        </Tag>,
      );
      const iconSlot = container.querySelector(".sd3-tag > [data-part='icon']");
      expect(iconSlot).not.toBeNull();
      expect(iconSlot).toHaveAttribute("aria-hidden", "true");
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
  });
});
