import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Button } from "./Button";

const variants = [
  "primary",
  "primary-subtle",
  "secondary",
  "tertiary",
] as const;
const themes = ["main", "neutral", "danger"] as const;
const sizes = ["large", "medium", "small"] as const;

describe("Button", () => {
  describe("a11y", () => {
    variants.forEach((variant) => {
      it(`should be accessible with variant="${variant}"`, async () => {
        const { container } = render(
          <Button variant={variant}>Trykk her</Button>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("should be accessible when icon-only with aria-label", async () => {
      const { container } = render(
        <Button iconOnly aria-label="Lukk">
          <Button.Icon>
            <svg data-testid="icon" />
          </Button.Icon>
        </Button>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(<Button disabled>Trykk her</Button>);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a native button with the root class", () => {
      render(<Button>Trykk her</Button>);
      const btn = screen.getByRole("button", { name: "Trykk her" });
      expect(btn.tagName).toBe("BUTTON");
      expect(btn).toHaveClass("sd3-button");
    });

    it("should default type to 'button'", () => {
      render(<Button>Trykk her</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("should allow overriding type", () => {
      render(<Button type="submit">Send</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("should merge className with the root class", () => {
      render(<Button className="custom">Trykk her</Button>);
      expect(screen.getByRole("button")).toHaveClass("sd3-button custom");
    });

    describe("variant", () => {
      it("should default data-variant to 'primary'", () => {
        render(<Button>Label</Button>);
        expect(screen.getByRole("button")).toHaveAttribute(
          "data-variant",
          "primary",
        );
      });

      variants.forEach((variant) => {
        it(`should set data-variant="${variant}"`, () => {
          render(<Button variant={variant}>Label</Button>);
          expect(screen.getByRole("button")).toHaveAttribute(
            "data-variant",
            variant,
          );
        });
      });
    });

    describe("theme", () => {
      it("should default data-button-theme to 'main'", () => {
        render(<Button>Label</Button>);
        expect(screen.getByRole("button")).toHaveAttribute(
          "data-button-theme",
          "main",
        );
      });

      themes.forEach((theme) => {
        it(`should set data-button-theme="${theme}"`, () => {
          render(<Button theme={theme}>Label</Button>);
          expect(screen.getByRole("button")).toHaveAttribute(
            "data-button-theme",
            theme,
          );
        });
      });
    });

    describe("size", () => {
      it("should default data-size to 'medium'", () => {
        render(<Button>Label</Button>);
        expect(screen.getByRole("button")).toHaveAttribute(
          "data-size",
          "medium",
        );
      });

      sizes.forEach((size) => {
        it(`should set data-size="${size}"`, () => {
          render(<Button size={size}>Label</Button>);
          expect(screen.getByRole("button")).toHaveAttribute("data-size", size);
        });
      });
    });

    it("should apply the native disabled attribute", () => {
      render(<Button disabled>Label</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("should not call onClick when disabled", async () => {
      const onClick = jest.fn();
      render(
        <Button disabled onClick={onClick}>
          Label
        </Button>,
      );
      await userEvent.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("should call onClick when clicked", async () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Label</Button>);
      await userEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("iconOnly", () => {
    it("sets data-icon-only when iconOnly is true", () => {
      render(
        <Button iconOnly aria-label="Lukk">
          <Button.Icon>
            <svg data-testid="icon" />
          </Button.Icon>
        </Button>,
      );
      expect(screen.getByRole("button")).toHaveAttribute("data-icon-only", "");
    });

    it("does not set data-icon-only by default", () => {
      render(<Button>Label</Button>);
      expect(screen.getByRole("button")).not.toHaveAttribute("data-icon-only");
    });

    it("does not forward iconOnly as a DOM attribute", () => {
      render(
        <Button iconOnly aria-label="Lukk">
          <Button.Icon>
            <svg data-testid="icon" />
          </Button.Icon>
        </Button>,
      );
      expect(screen.getByRole("button")).not.toHaveAttribute("icononly");
      expect(screen.getByRole("button")).not.toHaveAttribute("iconOnly");
    });
  });

  describe("slots", () => {
    it("Button.Icon renders content with data-part='icon' and aria-hidden", () => {
      render(
        <Button aria-label="Lukk">
          <Button.Icon>
            <svg data-testid="icon" />
          </Button.Icon>
        </Button>,
      );
      const icon = screen.getByTestId("icon").parentElement;
      expect(icon).toHaveAttribute("data-part", "icon");
      expect(icon).toHaveAttribute("aria-hidden", "true");
    });

    it("supports two icons around a text label (start and end)", () => {
      render(
        <Button>
          <Button.Icon>
            <svg data-testid="start" />
          </Button.Icon>
          Label
          <Button.Icon>
            <svg data-testid="end" />
          </Button.Icon>
        </Button>,
      );
      expect(screen.getByTestId("start")).toBeInTheDocument();
      expect(screen.getByTestId("end")).toBeInTheDocument();
    });
  });

  describe("asChild", () => {
    it("should render as the child element (anchor) with all attrs merged", () => {
      render(
        <Button asChild variant="secondary" size="small">
          <a href="/somewhere">Gå videre</a>
        </Button>,
      );
      const link = screen.getByRole("link", { name: "Gå videre" });
      expect(link.tagName).toBe("A");
      expect(link).toHaveClass("sd3-button");
      expect(link).toHaveAttribute("data-variant", "secondary");
      expect(link).toHaveAttribute("data-size", "small");
      expect(link).toHaveAttribute("href", "/somewhere");
      expect(link).not.toHaveAttribute("type");
    });

    it("propagates iconOnly onto the slotted element", () => {
      render(
        <Button asChild iconOnly aria-label="Lukk">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label -- aria-label is merged onto the anchor via Slot */}
          <a href="/close">
            <Button.Icon>
              <svg data-testid="icon" />
            </Button.Icon>
          </a>
        </Button>,
      );
      expect(screen.getByRole("link")).toHaveAttribute("data-icon-only", "");
    });
  });
});
