import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ApplicationStatus, ApplicationStatusVariant } from "./Message";

describe("Message ApplicationStatus", () => {
  const variants: ApplicationStatusVariant[] = ["info", "warning"];

  describe("a11y", () => {
    variants.map((variant) => {
      it(`${variant} should be accessible`, async () => {
        const { container } = render(
          <ApplicationStatus variant={variant} callToAction="Bar">
            Foo
          </ApplicationStatus>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    variants.map((variant) => {
      it(`${variant} should render`, async () => {
        render(
          <ApplicationStatus variant={variant} callToAction="Bar">
            Foo
          </ApplicationStatus>,
        );

        expect(screen.getByText("Foo")).toHaveClass("sds-message__message");
      });
    });

    it("should render container", async () => {
      render(<ApplicationStatus callToAction="Bar" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveRole("status");
      expect(screen.queryByText("Bar")).not.toBeInTheDocument();
    });

    it("should have class name", async () => {
      const { container } = render(
        <ApplicationStatus className="test-class-name" callToAction="Bar">
          Foo
        </ApplicationStatus>,
      );

      expect(
        container.getElementsByClassName("sds-message test-class-name")[0],
      ).toBeInTheDocument();
    });
  });
});
