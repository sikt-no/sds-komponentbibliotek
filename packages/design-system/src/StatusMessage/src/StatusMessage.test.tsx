import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { StatusMessage, type StatusMessageVariant } from "./StatusMessage";

const variants: StatusMessageVariant[] = [
  "success",
  "failure",
  "warning",
  "info",
  "neutral",
];
const sizes = ["standard", "compact"] as const;

describe("StatusMessage", () => {
  describe("a11y", () => {
    variants.forEach((variant) => {
      it(`should be accessible with variant="${variant}"`, async () => {
        const { container } = render(
          <StatusMessage variant={variant}>
            <StatusMessage.Title>Melding</StatusMessage.Title>
            <StatusMessage.Description>
              Innhold i meldingen.
            </StatusMessage.Description>
          </StatusMessage>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    it("should render with the root class", () => {
      render(
        <StatusMessage data-testid="test">
          <StatusMessage.Description>Hei</StatusMessage.Description>
        </StatusMessage>,
      );
      expect(screen.getByTestId("test")).toHaveClass("sd3-status-message");
    });

    it("should merge className", () => {
      render(
        <StatusMessage data-testid="test" className="extra">
          <StatusMessage.Description>Hei</StatusMessage.Description>
        </StatusMessage>,
      );
      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-status-message extra",
      );
    });

    it("should default variant to info and size to standard", () => {
      render(
        <StatusMessage data-testid="test">
          <StatusMessage.Description>Hei</StatusMessage.Description>
        </StatusMessage>,
      );
      const root = screen.getByTestId("test");
      expect(root).toHaveAttribute("data-variant", "info");
      expect(root).toHaveAttribute("data-size", "standard");
    });

    describe("variant", () => {
      variants.forEach((variant) => {
        it(`should set data-variant="${variant}"`, () => {
          render(
            <StatusMessage data-testid="test" variant={variant}>
              <StatusMessage.Description>Hei</StatusMessage.Description>
            </StatusMessage>,
          );
          expect(screen.getByTestId("test")).toHaveAttribute(
            "data-variant",
            variant,
          );
        });
      });
    });

    describe("size", () => {
      sizes.forEach((size) => {
        it(`should set data-size="${size}"`, () => {
          render(
            <StatusMessage data-testid="test" size={size}>
              <StatusMessage.Description>Hei</StatusMessage.Description>
            </StatusMessage>,
          );
          expect(screen.getByTestId("test")).toHaveAttribute("data-size", size);
        });
      });
    });

    describe("compound sub-components", () => {
      it("should render Title with data-part='title'", () => {
        render(
          <StatusMessage>
            <StatusMessage.Title>Overskrift</StatusMessage.Title>
          </StatusMessage>,
        );
        const title = screen.getByText("Overskrift");
        expect(title).toHaveAttribute("data-part", "title");
      });

      it("should render Description with data-part='description'", () => {
        render(
          <StatusMessage>
            <StatusMessage.Description>Beskrivelse</StatusMessage.Description>
          </StatusMessage>,
        );
        const description = screen.getByText("Beskrivelse");
        expect(description).toHaveAttribute("data-part", "description");
      });

      it("should render with only a Description (no Title)", () => {
        render(
          <StatusMessage data-testid="test">
            <StatusMessage.Description>
              Beskrivelse uten tittel
            </StatusMessage.Description>
          </StatusMessage>,
        );
        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByText("Beskrivelse uten tittel")).toHaveAttribute(
          "data-part",
          "description",
        );
      });

      it("should render Body with data-part='body'", () => {
        render(
          <StatusMessage>
            <StatusMessage.Body>
              <a href="/x">Handling</a>
            </StatusMessage.Body>
          </StatusMessage>,
        );
        expect(
          screen.getByRole("link", { name: "Handling" }).parentElement,
        ).toHaveAttribute("data-part", "body");
      });
    });

    it("should forward role and aria-live from consumer", () => {
      render(
        <StatusMessage
          data-testid="test"
          variant="failure"
          role="alert"
          aria-live="assertive"
        >
          <StatusMessage.Description>Feil</StatusMessage.Description>
        </StatusMessage>,
      );
      const root = screen.getByTestId("test");
      expect(root).toHaveAttribute("role", "alert");
      expect(root).toHaveAttribute("aria-live", "assertive");
    });

    it("should not set role or aria-live by default", () => {
      render(
        <StatusMessage data-testid="test" variant="failure">
          <StatusMessage.Description>Feil</StatusMessage.Description>
        </StatusMessage>,
      );
      const root = screen.getByTestId("test");
      expect(root).not.toHaveAttribute("role");
      expect(root).not.toHaveAttribute("aria-live");
    });
  });
});
