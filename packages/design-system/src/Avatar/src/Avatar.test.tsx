import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  describe("a11y", () => {
    it("should be accessible as placeholder", async () => {
      const { container } = render(<Avatar aria-label="Ada Lovelace" />);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with an image child", async () => {
      const { container } = render(
        <Avatar>
          <img src="/ada.jpg" alt="Ada Lovelace" />
        </Avatar>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with initials", async () => {
      const { container } = render(
        <Avatar initials="AL" aria-label="Ada Lovelace" />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render placeholder by default", () => {
      render(<Avatar aria-label="Ada" data-testid="test" />);
      const el = screen.getByTestId("test");
      expect(el).toHaveClass("sd3-avatar");
      expect(el).toHaveAttribute("data-variant", "placeholder");
      expect(el).toHaveAttribute("data-size", "medium");
      expect(el).toHaveAttribute("role", "img");
      expect(el).toHaveAttribute("aria-label", "Ada");
      expect(el.tagName).toBe("SPAN");
      expect(el.querySelector("svg")).not.toBeNull();
    });

    it("should merge className", () => {
      render(
        <Avatar
          aria-label="Ada"
          data-testid="test"
          className="test-class-name"
        />,
      );
      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-avatar test-class-name",
      );
    });

    it.each(["small", "medium", "large"] as const)(
      "should set data-size='%s'",
      (size) => {
        render(<Avatar aria-label="Ada" data-testid="test" size={size} />);
        expect(screen.getByTestId("test")).toHaveAttribute("data-size", size);
      },
    );

    describe("children (photo)", () => {
      it("should render the child image inside the frame", () => {
        render(
          <Avatar data-testid="test">
            <img src="/ada.jpg" alt="Ada Lovelace" />
          </Avatar>,
        );
        const el = screen.getByTestId("test");
        expect(el.tagName).toBe("SPAN");
        expect(el).toHaveAttribute("data-variant", "photo");
        expect(el).not.toHaveAttribute("role");
        const img = el.querySelector("img");
        expect(img).not.toBeNull();
        expect(img).toHaveAttribute("src", "/ada.jpg");
        expect(img).toHaveAttribute("alt", "Ada Lovelace");
      });

      it("should render arbitrary picture markup as children", () => {
        render(
          <Avatar data-testid="test">
            <picture>
              <source srcSet="/ada.webp" type="image/webp" />
              <img src="/ada.jpg" alt="Ada Lovelace" />
            </picture>
          </Avatar>,
        );
        expect(
          screen.getByTestId("test").querySelector("picture"),
        ).not.toBeNull();
      });

      it("should prefer children over initials when both are provided", () => {
        render(
          // @ts-expect-error initials + children is a type error; runtime
          // still defends against untyped/JS consumers by preferring children.
          <Avatar initials="AL" data-testid="test">
            <img src="/ada.jpg" alt="Ada" />
          </Avatar>,
        );
        const el = screen.getByTestId("test");
        expect(el).toHaveAttribute("data-variant", "photo");
        expect(el).not.toHaveTextContent("AL");
      });
    });

    describe("initials", () => {
      it("should render initials with role='img' and data-color", () => {
        render(
          <Avatar initials="AL" aria-label="Ada Lovelace" data-testid="test" />,
        );
        const el = screen.getByTestId("test");
        expect(el).toHaveAttribute("data-variant", "initials");
        expect(el).toHaveAttribute("role", "img");
        expect(el).toHaveAttribute("aria-label", "Ada Lovelace");
        expect(el).toHaveTextContent("AL");
      });

      it("should slice initials longer than 2 characters", () => {
        render(
          <Avatar
            initials="ABC"
            aria-label="Alpha Bravo Charlie"
            data-testid="test"
          />,
        );
        expect(screen.getByTestId("test")).toHaveTextContent("AB");
      });

      it("should slice by grapheme so multi-code-unit inputs stay intact", () => {
        // "🇳🇴" is one grapheme composed of two surrogate pairs (4 code units).
        // Naive .slice(0, 2) would emit a broken half-flag; Intl.Segmenter keeps it whole.
        render(
          <Avatar initials="🇳🇴A" aria-label="Norway" data-testid="test" />,
        );
        expect(screen.getByTestId("test")).toHaveTextContent("🇳🇴A");
      });

      it("should mark the visible initials as aria-hidden", () => {
        render(
          <Avatar initials="AL" aria-label="Ada Lovelace" data-testid="test" />,
        );
        const inner = screen
          .getByTestId("test")
          .querySelector("[aria-hidden='true']");
        expect(inner).not.toBeNull();
        expect(inner).toHaveTextContent("AL");
      });

      it("should honour an explicit color", () => {
        render(
          <Avatar
            initials="AL"
            color="5"
            aria-label="Ada Lovelace"
            data-testid="test"
          />,
        );
        expect(screen.getByTestId("test")).toHaveAttribute("data-color", "5");
      });

      it("should hash initials to a color when color is omitted", () => {
        render(
          <Avatar initials="AL" aria-label="Ada Lovelace" data-testid="test" />,
        );
        // "AL" → char codes 65 + 76 = 141, 141 % 8 = 5, +1 → "6"
        expect(screen.getByTestId("test")).toHaveAttribute("data-color", "6");
      });

      it("should produce a stable hash across renders", () => {
        const { rerender } = render(
          <Avatar initials="JD" aria-label="Jane Doe" data-testid="test" />,
        );
        const first = screen.getByTestId("test").getAttribute("data-color");
        expect(first).not.toBeNull();
        rerender(
          <Avatar initials="JD" aria-label="Jane Doe" data-testid="test" />,
        );
        expect(screen.getByTestId("test").getAttribute("data-color")).toBe(
          first,
        );
      });
    });

    describe("placeholder", () => {
      it("should render the internal icon", () => {
        render(<Avatar aria-label="Ada" data-testid="test" />);
        expect(screen.getByTestId("test").querySelector("svg")).not.toBeNull();
      });

      it("should fall back to placeholder when initials is an empty string", () => {
        render(<Avatar initials="" aria-label="Ada" data-testid="test" />);
        const el = screen.getByTestId("test");
        expect(el).toHaveAttribute("data-variant", "placeholder");
        expect(el.querySelector("svg")).not.toBeNull();
      });
    });
  });
});
