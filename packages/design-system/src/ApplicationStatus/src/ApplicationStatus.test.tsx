import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import {
  ApplicationStatus,
  type ApplicationStatusVariant,
} from "./ApplicationStatus";

const variants: ApplicationStatusVariant[] = [
  "info",
  "warning",
  "success",
  "critical",
  "neutral",
];

describe("ApplicationStatus", () => {
  describe("a11y", () => {
    variants.forEach((variant) => {
      it(`should be accessible with variant="${variant}"`, async () => {
        const { container } = render(
          <ApplicationStatus variant={variant}>
            <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
          </ApplicationStatus>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    it("should render the root class and variant", () => {
      render(
        <ApplicationStatus data-testid="test" variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
        </ApplicationStatus>,
      );
      const root = screen.getByTestId("test");
      expect(root).toHaveClass("sd3-application-status");
      expect(root).toHaveAttribute("data-variant", "info");
    });

    it("should default role to status", () => {
      render(
        <ApplicationStatus data-testid="test" variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
        </ApplicationStatus>,
      );
      expect(screen.getByTestId("test")).toHaveAttribute("role", "status");
    });

    it("should accept role=alert", () => {
      render(
        <ApplicationStatus data-testid="test" variant="critical" role="alert">
          <ApplicationStatus.Message>Feil</ApplicationStatus.Message>
        </ApplicationStatus>,
      );
      expect(screen.getByTestId("test")).toHaveAttribute("role", "alert");
    });

    it("should not render the dismiss button when ApplicationStatus.Dismiss is omitted", () => {
      render(
        <ApplicationStatus variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
        </ApplicationStatus>,
      );
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("should render the dismiss button when ApplicationStatus.Dismiss is provided", () => {
      render(
        <ApplicationStatus variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
          <ApplicationStatus.Dismiss label="Lukk melding" onClick={jest.fn()} />
        </ApplicationStatus>,
      );
      expect(
        screen.getByRole("button", { name: "Lukk melding" }),
      ).toBeInTheDocument();
    });

    it("should call onClick when the dismiss button is clicked", async () => {
      const onDismiss = jest.fn();
      const user = userEvent.setup();
      render(
        <ApplicationStatus variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
          <ApplicationStatus.Dismiss label="Lukk melding" onClick={onDismiss} />
        </ApplicationStatus>,
      );
      await user.click(screen.getByRole("button", { name: "Lukk melding" }));
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("should render the description panel when provided", () => {
      render(
        <ApplicationStatus variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
          <ApplicationStatus.Description>
            <p>Mer informasjon</p>
          </ApplicationStatus.Description>
        </ApplicationStatus>,
      );
      expect(screen.getByText("Mer informasjon")).toBeInTheDocument();
    });

    it("should not render the description panel when omitted", () => {
      const { container } = render(
        <ApplicationStatus variant="info">
          <ApplicationStatus.Message>Melding</ApplicationStatus.Message>
        </ApplicationStatus>,
      );
      expect(
        container.querySelector('[data-part="description"]'),
      ).not.toBeInTheDocument();
    });
  });
});
