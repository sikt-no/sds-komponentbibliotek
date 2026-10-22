import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { RadioCard } from "./RadioCard";

describe("RadioCard", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<RadioCard name="plan">Label</RadioCard>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with HelpText", async () => {
      const { container } = render(
        <RadioCard name="plan">
          Label
          <RadioCard.HelpText>Alltid gratis</RadioCard.HelpText>
        </RadioCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(
        <RadioCard name="plan" disabled>
          Label
        </RadioCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when aria-invalid", async () => {
      const { container } = render(
        <RadioCard name="plan" aria-invalid="true">
          Label
        </RadioCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <label> with the root class wrapping a type='radio' input", () => {
      render(<RadioCard name="plan">Label</RadioCard>);
      const input = screen.getByRole("radio", { name: /Label/ });
      expect(input).toHaveAttribute("type", "radio");
      expect(input.parentElement?.tagName).toBe("LABEL");
      expect(input.parentElement).toHaveClass("sd3-radio-card");
    });

    it("should merge className onto the root label", () => {
      render(
        <RadioCard name="plan" className="custom">
          Label
        </RadioCard>,
      );
      expect(
        screen.getByRole("radio", { name: /Label/ }).parentElement,
      ).toHaveClass("sd3-radio-card custom");
    });

    it("should forward native input attributes to the <input>", () => {
      render(
        <RadioCard name="plan" value="free" required>
          Label
        </RadioCard>,
      );
      const input = screen.getByRole("radio", { name: /Label/ });
      expect(input).toHaveAttribute("name", "plan");
      expect(input).toHaveAttribute("value", "free");
      expect(input).toBeRequired();
    });
  });

  describe("HelpText", () => {
    it("should not set aria-describedby when HelpText is absent", () => {
      render(<RadioCard name="plan">Label</RadioCard>);
      expect(screen.getByRole("radio", { name: /Label/ })).not.toHaveAttribute(
        "aria-describedby",
      );
    });
  });
});
