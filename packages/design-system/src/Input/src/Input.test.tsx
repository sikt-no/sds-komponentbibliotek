import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import type { Size } from "../../../types";
import { Field } from "../../Field";
import { Input } from "./Input";

const sizes: Size[] = ["large", "medium", "small"];

describe("Input", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`should be accessible at size="${size}"`, async () => {
        const { container } = render(
          <Input size={size} aria-label="Fornavn" />,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(<Input aria-label="Fornavn" disabled />);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when readOnly", async () => {
      const { container } = render(
        <Input aria-label="Fornavn" readOnly defaultValue="Ada" />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render an <input> with the root class", () => {
      render(<Input aria-label="Fornavn" />);
      const input = screen.getByRole("textbox", { name: "Fornavn" });
      expect(input.tagName).toBe("INPUT");
      expect(input).toHaveClass("sd3-input");
    });

    it("should merge className with the root class", () => {
      render(<Input aria-label="Fornavn" className="custom" />);
      expect(screen.getByRole("textbox")).toHaveClass("sd3-input custom");
    });

    describe("type", () => {
      it("should default type to 'text'", () => {
        render(<Input aria-label="Fornavn" />);
        expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
      });

      it("should forward type to the native attribute", () => {
        render(
          <Input aria-label="Passord" type="password" data-testid="input" />,
        );
        expect(screen.getByTestId("input")).toHaveAttribute("type", "password");
      });
    });

    describe("size", () => {
      it("should default data-size to 'medium'", () => {
        render(<Input aria-label="Fornavn" />);
        expect(screen.getByRole("textbox")).toHaveAttribute(
          "data-size",
          "medium",
        );
      });

      sizes.forEach((size) => {
        it(`should set data-size="${size}"`, () => {
          render(<Input aria-label="Fornavn" size={size} />);
          expect(screen.getByRole("textbox")).toHaveAttribute(
            "data-size",
            size,
          );
        });
      });
    });
  });

  describe("inside Field", () => {
    it("should inherit id from Field", () => {
      render(
        <Field id="org">
          <Field.Label>Organization</Field.Label>
          <Input />
        </Field>,
      );
      expect(
        screen.getByRole("textbox", { name: "Organization" }),
      ).toHaveAttribute("id", "org");
    });

    it("should inherit size from Field", () => {
      render(
        <Field size="large">
          <Field.Label>Organization</Field.Label>
          <Input />
        </Field>,
      );
      expect(
        screen.getByRole("textbox", { name: "Organization" }),
      ).toHaveAttribute("data-size", "large");
    });

    it("should inherit disabled from Field", () => {
      render(
        <Field disabled>
          <Field.Label>Organization</Field.Label>
          <Input />
        </Field>,
      );
      expect(
        screen.getByRole("textbox", { name: "Organization" }),
      ).toBeDisabled();
    });

    it("should inherit readOnly from Field", () => {
      render(
        <Field readOnly>
          <Field.Label>Organization</Field.Label>
          <Input defaultValue="Sikt" />
        </Field>,
      );
      expect(
        screen.getByRole("textbox", { name: "Organization" }),
      ).toHaveAttribute("readonly");
    });

    it("should inherit aria-describedby, aria-errormessage and aria-invalid wiring from Field", () => {
      render(
        <Field id="org">
          <Field.Label>Organization</Field.Label>
          <Field.Description>The legal name.</Field.Description>
          <Input />
          <Field.ValidationMessage>Required.</Field.ValidationMessage>
        </Field>,
      );
      const input = screen.getByRole("textbox", { name: "Organization" });
      expect(input).toHaveAttribute("aria-describedby", "org-description");
      expect(input).toHaveAttribute("aria-errormessage", "org-validation");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("should let explicit props override Field context", () => {
      render(
        <Field id="org" size="large" disabled>
          <Field.Label>Organization</Field.Label>
          <Input
            id="override"
            size="small"
            disabled={false}
            aria-label="Override"
          />
        </Field>,
      );
      const input = screen.getByRole("textbox", { name: "Override" });
      expect(input).toHaveAttribute("id", "override");
      expect(input).toHaveAttribute("data-size", "small");
      expect(input).not.toBeDisabled();
    });
  });
});
