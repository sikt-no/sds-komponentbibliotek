import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Checkbox>Godta vilkår</Checkbox>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when checked", async () => {
      const { container } = render(
        <Checkbox defaultChecked>Godta vilkår</Checkbox>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when indeterminate", async () => {
      const { container } = render(
        <Checkbox indeterminate>Godta vilkår</Checkbox>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(<Checkbox disabled>Godta vilkår</Checkbox>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when aria-invalid", async () => {
      const { container } = render(
        <Checkbox aria-invalid="true">Godta vilkår</Checkbox>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <label> with the root class wrapping a type='checkbox' input", () => {
      render(<Checkbox>Godta vilkår</Checkbox>);
      const input = screen.getByRole("checkbox", { name: "Godta vilkår" });
      expect(input).toHaveAttribute("type", "checkbox");
      expect(input.closest("label")).toHaveClass("sd3-checkbox");
    });

    it("should merge className onto the root label", () => {
      render(<Checkbox className="custom">Godta vilkår</Checkbox>);
      expect(
        screen.getByRole("checkbox", { name: "Godta vilkår" }).closest("label"),
      ).toHaveClass("sd3-checkbox custom");
    });

    it("should forward native input attributes to the <input>", () => {
      render(
        <Checkbox
          name="terms"
          value="accepted"
          aria-describedby="help"
          required
        >
          Godta vilkår
        </Checkbox>,
      );
      const input = screen.getByRole("checkbox", { name: "Godta vilkår" });
      expect(input).toHaveAttribute("name", "terms");
      expect(input).toHaveAttribute("value", "accepted");
      expect(input).toHaveAttribute("aria-describedby", "help");
      expect(input).toBeRequired();
    });

    it("should render children as the accessible name via the wrapping label", () => {
      render(<Checkbox>Nyhetsbrev</Checkbox>);
      expect(
        screen.getByRole("checkbox", { name: "Nyhetsbrev" }),
      ).toBeInTheDocument();
    });

    it("should set the DOM indeterminate property when `indeterminate` is true", () => {
      render(<Checkbox indeterminate>Delvis</Checkbox>);
      const input = screen.getByRole<HTMLInputElement>("checkbox", {
        name: "Delvis",
      });
      expect(input.indeterminate).toBe(true);
    });

    it("should clear the DOM indeterminate property when `indeterminate` is false", () => {
      const { rerender } = render(<Checkbox indeterminate>Delvis</Checkbox>);
      rerender(<Checkbox>Delvis</Checkbox>);
      const input = screen.getByRole<HTMLInputElement>("checkbox", {
        name: "Delvis",
      });
      expect(input.indeterminate).toBe(false);
    });
  });
});
