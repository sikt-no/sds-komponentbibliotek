import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { CheckboxCard } from "./CheckboxCard";

describe("CheckboxCard", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<CheckboxCard>Label</CheckboxCard>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with HelpText", async () => {
      const { container } = render(
        <CheckboxCard>
          Label
          <CheckboxCard.HelpText>Alltid gratis</CheckboxCard.HelpText>
        </CheckboxCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when checked", async () => {
      const { container } = render(
        <CheckboxCard defaultChecked>Label</CheckboxCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when indeterminate", async () => {
      const { container } = render(
        <CheckboxCard indeterminate>Label</CheckboxCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(<CheckboxCard disabled>Label</CheckboxCard>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when aria-invalid", async () => {
      const { container } = render(
        <CheckboxCard aria-invalid="true">Label</CheckboxCard>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <label> with the root class wrapping a type='checkbox' input", () => {
      render(<CheckboxCard>Label</CheckboxCard>);
      const input = screen.getByRole("checkbox", { name: /Label/ });
      expect(input).toHaveAttribute("type", "checkbox");
      expect(input.closest("label")).toHaveClass("sd3-checkbox-card");
    });

    it("should merge className onto the root label", () => {
      render(<CheckboxCard className="custom">Label</CheckboxCard>);
      expect(
        screen.getByRole("checkbox", { name: /Label/ }).closest("label"),
      ).toHaveClass("sd3-checkbox-card custom");
    });

    it("should forward native input attributes to the <input>", () => {
      render(
        <CheckboxCard name="terms" value="accepted" required>
          Label
        </CheckboxCard>,
      );
      const input = screen.getByRole("checkbox", { name: /Label/ });
      expect(input).toHaveAttribute("name", "terms");
      expect(input).toHaveAttribute("value", "accepted");
      expect(input).toBeRequired();
    });

    it("should set the DOM indeterminate property when `indeterminate` is true", () => {
      render(<CheckboxCard indeterminate>Label</CheckboxCard>);
      const input = screen.getByRole<HTMLInputElement>("checkbox", {
        name: /Label/,
      });
      expect(input.indeterminate).toBe(true);
    });

    it("should clear the DOM indeterminate property when `indeterminate` is false", () => {
      const { rerender } = render(
        <CheckboxCard indeterminate>Label</CheckboxCard>,
      );
      rerender(<CheckboxCard>Label</CheckboxCard>);
      const input = screen.getByRole<HTMLInputElement>("checkbox", {
        name: /Label/,
      });
      expect(input.indeterminate).toBe(false);
    });
  });
});
