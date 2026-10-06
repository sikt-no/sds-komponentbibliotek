import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Field } from "../../Field";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Textarea aria-label="Kommentar" />);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(
        <Textarea aria-label="Kommentar" disabled />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when readOnly", async () => {
      const { container } = render(
        <Textarea aria-label="Kommentar" readOnly defaultValue="Ada" />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <textarea> with the root class", () => {
      render(<Textarea aria-label="Kommentar" />);
      const textarea = screen.getByRole("textbox", { name: "Kommentar" });
      expect(textarea.tagName).toBe("TEXTAREA");
      expect(textarea).toHaveClass("sd3-textarea");
    });

    it("should merge className with the root class", () => {
      render(<Textarea aria-label="Kommentar" className="custom" />);
      expect(screen.getByRole("textbox")).toHaveClass("sd3-textarea custom");
    });
  });

  describe("inside Field", () => {
    it("should inherit id from Field", () => {
      render(
        <Field id="comment">
          <Field.Label>Kommentar</Field.Label>
          <Textarea />
        </Field>,
      );
      expect(
        screen.getByRole("textbox", { name: "Kommentar" }),
      ).toHaveAttribute("id", "comment");
    });

    it("should inherit disabled from Field", () => {
      render(
        <Field disabled>
          <Field.Label>Kommentar</Field.Label>
          <Textarea />
        </Field>,
      );
      expect(screen.getByRole("textbox", { name: "Kommentar" })).toBeDisabled();
    });

    it("should inherit readOnly from Field", () => {
      render(
        <Field readOnly>
          <Field.Label>Kommentar</Field.Label>
          <Textarea defaultValue="Hei" />
        </Field>,
      );
      expect(
        screen.getByRole("textbox", { name: "Kommentar" }),
      ).toHaveAttribute("readonly");
    });

    it("should let explicit props override Field context", () => {
      render(
        <Field id="comment" disabled>
          <Field.Label>Kommentar</Field.Label>
          <Textarea id="override" disabled={false} aria-label="Override" />
        </Field>,
      );
      const textarea = screen.getByRole("textbox", { name: "Override" });
      expect(textarea).toHaveAttribute("id", "override");
      expect(textarea).not.toBeDisabled();
    });
  });
});
