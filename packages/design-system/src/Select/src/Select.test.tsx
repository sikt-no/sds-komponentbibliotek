import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import type { Size } from "../../../types";
import { Field } from "../../Field";
import { Select } from "./Select";

const sizes: Size[] = ["large", "medium", "small"];

const options = (
  <>
    <option value="">Velg et alternativ</option>
    <option value="no">Norge</option>
    <option value="se">Sverige</option>
  </>
);

describe("Select", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`should be accessible at size="${size}"`, async () => {
        const { container } = render(
          <Select size={size} aria-label="Land">
            {options}
          </Select>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(
        <Select aria-label="Land" disabled>
          {options}
        </Select>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <select> wrapped with the root class", () => {
      render(<Select aria-label="Land">{options}</Select>);
      const control = screen.getByRole("combobox", { name: "Land" });
      expect(control.tagName).toBe("SELECT");
      expect(control.parentElement).toHaveClass("sd3-select");
    });

    it("should merge className onto the root wrapper", () => {
      render(
        <Select aria-label="Land" className="custom">
          {options}
        </Select>,
      );
      expect(screen.getByRole("combobox").parentElement).toHaveClass(
        "sd3-select custom",
      );
    });

    describe("size", () => {
      it("should default data-size to 'medium'", () => {
        render(<Select aria-label="Land">{options}</Select>);
        expect(screen.getByRole("combobox").parentElement).toHaveAttribute(
          "data-size",
          "medium",
        );
      });

      sizes.forEach((size) => {
        it(`should set data-size="${size}"`, () => {
          render(
            <Select aria-label="Land" size={size}>
              {options}
            </Select>,
          );
          expect(screen.getByRole("combobox").parentElement).toHaveAttribute(
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
        <Field id="country">
          <Field.Label>Country</Field.Label>
          <Select>{options}</Select>
        </Field>,
      );
      expect(screen.getByRole("combobox", { name: "Country" })).toHaveAttribute(
        "id",
        "country",
      );
    });

    it("should inherit size from Field", () => {
      render(
        <Field size="large">
          <Field.Label>Country</Field.Label>
          <Select>{options}</Select>
        </Field>,
      );
      expect(
        screen.getByRole("combobox", { name: "Country" }).parentElement,
      ).toHaveAttribute("data-size", "large");
    });

    it("should inherit disabled from Field", () => {
      render(
        <Field disabled>
          <Field.Label>Country</Field.Label>
          <Select>{options}</Select>
        </Field>,
      );
      expect(screen.getByRole("combobox", { name: "Country" })).toBeDisabled();
    });

    it("should inherit readOnly as aria-readonly from Field", () => {
      render(
        <Field readOnly>
          <Field.Label>Country</Field.Label>
          <Select defaultValue="no">{options}</Select>
        </Field>,
      );
      expect(screen.getByRole("combobox", { name: "Country" })).toHaveAttribute(
        "aria-readonly",
        "true",
      );
    });

    it("should let explicit aria-readonly override Field readOnly", () => {
      render(
        <Field readOnly>
          <Field.Label>Country</Field.Label>
          <Select aria-readonly={false}>{options}</Select>
        </Field>,
      );
      expect(screen.getByRole("combobox", { name: "Country" })).toHaveAttribute(
        "aria-readonly",
        "false",
      );
    });

    it("should wire aria-invalid when Field has a validation message", () => {
      render(
        <Field>
          <Field.Label>Country</Field.Label>
          <Select>{options}</Select>
          <Field.ValidationMessage>Required</Field.ValidationMessage>
        </Field>,
      );
      expect(screen.getByRole("combobox", { name: "Country" })).toHaveAttribute(
        "aria-invalid",
        "true",
      );
    });

    it("should let explicit props override Field context", () => {
      render(
        <Field id="country" size="large" disabled>
          <Field.Label>Country</Field.Label>
          <Select
            id="override"
            size="small"
            disabled={false}
            aria-label="Override"
          >
            {options}
          </Select>
        </Field>,
      );
      const control = screen.getByRole("combobox", { name: "Override" });
      expect(control).toHaveAttribute("id", "override");
      expect(control.parentElement).toHaveAttribute("data-size", "small");
      expect(control).not.toBeDisabled();
    });
  });
});
