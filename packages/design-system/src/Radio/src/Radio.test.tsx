import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Radio } from "./Radio";

describe("Radio", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Radio name="plan">Fri</Radio>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when checked", async () => {
      const { container } = render(
        <Radio name="plan" defaultChecked>
          Fri
        </Radio>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(
        <Radio name="plan" disabled>
          Fri
        </Radio>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when aria-invalid", async () => {
      const { container } = render(
        <Radio name="plan" aria-invalid="true">
          Fri
        </Radio>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <label> with the root class wrapping a type='radio' input", () => {
      render(<Radio name="plan">Fri</Radio>);
      const input = screen.getByRole("radio", { name: "Fri" });
      expect(input).toHaveAttribute("type", "radio");
      expect(input.parentElement?.tagName).toBe("LABEL");
      expect(input.parentElement).toHaveClass("sd3-radio");
    });

    it("should merge className onto the root label", () => {
      render(
        <Radio name="plan" className="custom">
          Fri
        </Radio>,
      );
      expect(
        screen.getByRole("radio", { name: "Fri" }).parentElement,
      ).toHaveClass("sd3-radio custom");
    });

    it("should forward native input attributes to the <input>", () => {
      render(
        <Radio name="plan" value="free" aria-describedby="help" required>
          Fri
        </Radio>,
      );
      const input = screen.getByRole("radio", { name: "Fri" });
      expect(input).toHaveAttribute("name", "plan");
      expect(input).toHaveAttribute("value", "free");
      expect(input).toHaveAttribute("aria-describedby", "help");
      expect(input).toBeRequired();
    });

    it("should render children as the accessible name via the wrapping label", () => {
      render(<Radio name="plan">Pro</Radio>);
      expect(screen.getByRole("radio", { name: "Pro" })).toBeInTheDocument();
    });
  });
});
