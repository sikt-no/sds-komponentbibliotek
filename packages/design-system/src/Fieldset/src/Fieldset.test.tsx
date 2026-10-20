import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Fieldset } from "./Fieldset";
import { useFieldsetContext, type FieldsetSize } from "./FieldsetContext";

const sizes: FieldsetSize[] = ["medium", "large"];

const TestCheckbox = ({ label = "Option" }: { label?: string }) => (
  <label>
    <input type="checkbox" />
    {label}
  </label>
);

const UsesContext = () => {
  const { id } = useFieldsetContext();
  return <output data-testid="context-id">{id}</output>;
};

describe("Fieldset", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`size=${size} should be accessible`, async () => {
        const { container } = render(
          <Fieldset size={size}>
            <Fieldset.Legend>Velg kategori</Fieldset.Legend>
            <Fieldset.Description>Du kan velge flere</Fieldset.Description>
            <Fieldset.Content>
              <TestCheckbox label="A" />
              <TestCheckbox label="B" />
            </Fieldset.Content>
          </Fieldset>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("disabled should be accessible", async () => {
      const { container } = render(
        <Fieldset disabled>
          <Fieldset.Legend>Velg kategori</Fieldset.Legend>
          <Fieldset.Content>
            <TestCheckbox />
          </Fieldset.Content>
        </Fieldset>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("with ValidationMessage should be accessible", async () => {
      const { container } = render(
        <Fieldset>
          <Fieldset.Legend>Velg kategori</Fieldset.Legend>
          <Fieldset.Content>
            <TestCheckbox />
          </Fieldset.Content>
          <Fieldset.ValidationMessage>
            Du må velge minst én
          </Fieldset.ValidationMessage>
        </Fieldset>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render as a <fieldset> with sd3-fieldset class and merge caller className", () => {
      render(
        <Fieldset data-testid="fieldset" className="custom">
          <Fieldset.Legend>Legend</Fieldset.Legend>
          <Fieldset.Content>
            <TestCheckbox />
          </Fieldset.Content>
        </Fieldset>,
      );
      const el = screen.getByTestId("fieldset");
      expect(el.tagName).toBe("FIELDSET");
      expect(el).toHaveClass("sd3-fieldset custom");
    });

    describe("size", () => {
      it("should default to medium", () => {
        render(
          <Fieldset data-testid="fieldset">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        expect(screen.getByTestId("fieldset")).toHaveAttribute(
          "data-size",
          "medium",
        );
      });

      sizes.forEach((size) => {
        it(`should set data-size='${size}'`, () => {
          render(
            <Fieldset data-testid="fieldset" size={size}>
              <Fieldset.Legend>Legend</Fieldset.Legend>
              <Fieldset.Content>
                <TestCheckbox />
              </Fieldset.Content>
            </Fieldset>,
          );
          expect(screen.getByTestId("fieldset")).toHaveAttribute(
            "data-size",
            size,
          );
        });
      });
    });

    describe("disabled", () => {
      it("should set data-disabled and the native disabled attribute", () => {
        render(
          <Fieldset data-testid="fieldset" disabled>
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        const el = screen.getByTestId("fieldset");
        expect(el).toHaveAttribute("data-disabled");
        expect(el).toBeDisabled();
      });

      it("should omit data-disabled by default", () => {
        render(
          <Fieldset data-testid="fieldset">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        expect(screen.getByTestId("fieldset")).not.toHaveAttribute(
          "data-disabled",
        );
      });
    });

    describe("invalid", () => {
      it("should set aria-invalid and aria-errormessage when a ValidationMessage is present", () => {
        render(
          <Fieldset id="a" data-testid="fieldset">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
            <Fieldset.ValidationMessage>Feil</Fieldset.ValidationMessage>
          </Fieldset>,
        );
        const el = screen.getByTestId("fieldset");
        expect(el).toHaveAttribute("aria-invalid", "true");
        expect(el).toHaveAttribute("aria-errormessage", "a-validation");
      });

      it("should omit aria-invalid and aria-errormessage without a ValidationMessage", () => {
        render(
          <Fieldset data-testid="fieldset">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        const el = screen.getByTestId("fieldset");
        expect(el).not.toHaveAttribute("aria-invalid");
        expect(el).not.toHaveAttribute("aria-errormessage");
      });
    });

    describe("content", () => {
      it("should default to data-direction='vertical'", () => {
        render(
          <Fieldset>
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content data-testid="content">
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        expect(screen.getByTestId("content")).toHaveAttribute(
          "data-direction",
          "vertical",
        );
      });

      it("should set data-direction='horizontal' when direction=horizontal", () => {
        render(
          <Fieldset>
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content data-testid="content" direction="horizontal">
              <TestCheckbox />
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        expect(screen.getByTestId("content")).toHaveAttribute(
          "data-direction",
          "horizontal",
        );
      });
    });

    describe("wiring", () => {
      it("should set aria-describedby to description and aria-errormessage to validation", () => {
        render(
          <Fieldset id="a" data-testid="fieldset">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Description>Hjelp</Fieldset.Description>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
            <Fieldset.ValidationMessage>Feil</Fieldset.ValidationMessage>
          </Fieldset>,
        );
        expect(screen.getByTestId("fieldset")).toHaveAttribute(
          "aria-describedby",
          "a-description",
        );
        expect(screen.getByTestId("fieldset")).toHaveAttribute(
          "aria-errormessage",
          "a-validation",
        );
        expect(screen.getByText("Hjelp")).toHaveAttribute(
          "id",
          "a-description",
        );
        expect(screen.getByText("Feil")).toHaveAttribute("id", "a-validation");
      });

      it("should auto-generate a stable id when none is provided", () => {
        render(
          <Fieldset data-testid="fieldset">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Description>Hjelp</Fieldset.Description>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
          </Fieldset>,
        );
        const descriptionId =
          screen.getByText("Hjelp").getAttribute("id") ?? "";
        expect(descriptionId).toMatch(/-description$/);
        expect(screen.getByTestId("fieldset")).toHaveAttribute(
          "aria-describedby",
          descriptionId,
        );
      });

      it("should expose the generated id via useFieldsetContext", () => {
        render(
          <Fieldset id="form-group">
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <UsesContext />
          </Fieldset>,
        );
        expect(screen.getByTestId("context-id")).toHaveTextContent(
          "form-group",
        );
      });

      it("useFieldsetContext should throw outside of Fieldset", () => {
        const spy = jest.spyOn(console, "error").mockImplementation(() => {
          /* silence React's uncaught-error log */
        });
        expect(() => render(<UsesContext />)).toThrow(
          "useFieldsetContext must be called inside a <Fieldset>.",
        );
        spy.mockRestore();
      });
    });

    describe("ValidationMessage", () => {
      it("should expose role=alert so changes are announced", () => {
        render(
          <Fieldset>
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.Content>
              <TestCheckbox />
            </Fieldset.Content>
            <Fieldset.ValidationMessage>Feil</Fieldset.ValidationMessage>
          </Fieldset>,
        );
        expect(screen.getByRole("alert")).toHaveTextContent("Feil");
      });
    });
  });
});
