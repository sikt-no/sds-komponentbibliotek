import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import type { Size } from "../../../types";
import { Field } from "./Field";
import { useFieldContext } from "./FieldContext";

const TestInput = () => <input data-testid="input" {...useFieldContext()} />;

const sizes: Size[] = ["small", "medium", "large"];

describe("Field", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`size=${size} should be accessible`, async () => {
        const { container } = render(
          <Field size={size}>
            <Field.Label>Navn</Field.Label>
            <Field.Description>Oppgi fullt navn</Field.Description>
            <TestInput />
          </Field>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("disabled should be accessible", async () => {
      const { container } = render(
        <Field disabled>
          <Field.Label>Navn</Field.Label>
          <TestInput />
        </Field>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("readOnly should be accessible", async () => {
      const { container } = render(
        <Field readOnly>
          <Field.Label>Navn</Field.Label>
          <TestInput />
        </Field>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("with ValidationMessage should be accessible", async () => {
      const { container } = render(
        <Field>
          <Field.Label>Navn</Field.Label>
          <TestInput />
          <Field.ValidationMessage>Navn er påkrevd</Field.ValidationMessage>
        </Field>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render with sd3-field class and merge caller className", () => {
      render(
        <Field data-testid="field" className="custom">
          <Field.Label>Navn</Field.Label>
          <TestInput />
        </Field>,
      );
      expect(screen.getByTestId("field")).toHaveClass("sd3-field custom");
    });

    describe("size", () => {
      it("should default to medium", () => {
        render(
          <Field data-testid="field">
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        expect(screen.getByTestId("field")).toHaveAttribute(
          "data-size",
          "medium",
        );
      });

      sizes.forEach((size) => {
        it(`should set data-size='${size}'`, () => {
          render(
            <Field data-testid="field" size={size}>
              <Field.Label>Navn</Field.Label>
              <TestInput />
            </Field>,
          );
          expect(screen.getByTestId("field")).toHaveAttribute(
            "data-size",
            size,
          );
        });
      });
    });

    describe("disabled", () => {
      it("should set data-disabled and disable the input", () => {
        render(
          <Field data-testid="field" disabled>
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        expect(screen.getByTestId("field")).toHaveAttribute("data-disabled");
        expect(screen.getByTestId("input")).toBeDisabled();
      });

      it("should omit data-disabled by default", () => {
        render(
          <Field data-testid="field">
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        expect(screen.getByTestId("field")).not.toHaveAttribute(
          "data-disabled",
        );
        expect(screen.getByTestId("input")).not.toBeDisabled();
      });
    });

    describe("readOnly", () => {
      it("should set data-readonly, mark the input readonly, and add a lock icon inside the label", () => {
        render(
          <Field data-testid="field" readOnly>
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        expect(screen.getByTestId("field")).toHaveAttribute("data-readonly");
        expect(screen.getByTestId("input")).toHaveAttribute("readonly");
        expect(
          screen
            .getByText("Navn")
            .closest("label")
            ?.querySelector('[data-part="icon"]'),
        ).toBeInTheDocument();
      });

      it("should omit the lock icon by default", () => {
        render(
          <Field>
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        const label = screen.getByText("Navn").closest("label");
        expect(label).not.toBeNull();
        expect(label?.querySelector('[data-part="icon"]')).toBeNull();
      });
    });

    describe("invalid", () => {
      it("should set data-invalid and aria-invalid when a ValidationMessage is present", () => {
        render(
          <Field data-testid="field">
            <Field.Label>Navn</Field.Label>
            <TestInput />
            <Field.ValidationMessage>Feil</Field.ValidationMessage>
          </Field>,
        );
        expect(screen.getByTestId("field")).toHaveAttribute("data-invalid");
        expect(screen.getByTestId("input")).toHaveAttribute(
          "aria-invalid",
          "true",
        );
      });

      it("should omit data-invalid and aria-invalid without a ValidationMessage", () => {
        render(
          <Field data-testid="field">
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        expect(screen.getByTestId("field")).not.toHaveAttribute("data-invalid");
        expect(screen.getByTestId("input")).not.toHaveAttribute("aria-invalid");
      });
    });

    describe("wiring", () => {
      it("should generate an id and match it on label htmlFor + input id", () => {
        render(
          <Field>
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        const input = screen.getByTestId("input");
        expect(input.id).toBeTruthy();
        expect(
          screen.getByText("Navn").closest("label")?.getAttribute("for"),
        ).toBe(input.id);
      });

      it("should accept an external id", () => {
        render(
          <Field id="custom-id">
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        expect(screen.getByTestId("input")).toHaveAttribute("id", "custom-id");
      });

      it("should wire Description via aria-describedby and ValidationMessage via aria-errormessage", () => {
        render(
          <Field id="a">
            <Field.Label>Navn</Field.Label>
            <Field.Description>Oppgi fullt navn</Field.Description>
            <TestInput />
            <Field.ValidationMessage>Feil</Field.ValidationMessage>
          </Field>,
        );
        const input = screen.getByTestId("input");
        expect(input).toHaveAttribute("aria-describedby", "a-description");
        expect(input).toHaveAttribute("aria-errormessage", "a-validation");
        expect(screen.getByText("Oppgi fullt navn")).toHaveAttribute(
          "id",
          "a-description",
        );
      });

      it("should omit aria-describedby and aria-errormessage when neither part is present", () => {
        render(
          <Field>
            <Field.Label>Navn</Field.Label>
            <TestInput />
          </Field>,
        );
        const input = screen.getByTestId("input");
        expect(input).not.toHaveAttribute("aria-describedby");
        expect(input).not.toHaveAttribute("aria-errormessage");
      });

      it("useFieldContext should throw outside of Field", () => {
        const spy = jest.spyOn(console, "error").mockImplementation(() => {
          /* silence React's uncaught-error log */
        });
        expect(() => render(<TestInput />)).toThrow(
          "useFieldContext must be called inside a <Field>.",
        );
        spy.mockRestore();
      });
    });

    it("ValidationMessage should render as a polite live region, not role=alert", () => {
      render(
        <Field>
          <Field.Label>Navn</Field.Label>
          <TestInput />
          <Field.ValidationMessage>Feil</Field.ValidationMessage>
        </Field>,
      );
      expect(screen.getByText("Feil")).toHaveAttribute("aria-live", "polite");
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });
});
