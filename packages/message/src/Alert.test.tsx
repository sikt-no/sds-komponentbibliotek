import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Alert, AlertVariant } from "./Message";

describe("Message Alert", () => {
  const variants: AlertVariant[] = ["success", "critical"];

  describe("a11y", () => {
    variants.map((variant) => {
      it(`${variant} should be accessible`, async () => {
        const { container } = render(
          <Alert variant={variant} callToAction="Bar">
            Foo
          </Alert>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    variants.map((variant) => {
      it(`${variant} should render`, async () => {
        render(
          <Alert variant={variant} callToAction="Bar">
            Foo
          </Alert>,
        );

        expect(screen.getByText("Foo")).toHaveClass("sds-message__message");
      });
    });

    it("should render container", async () => {
      render(<Alert data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveRole("alert");
      expect(screen.queryByText("Bar")).not.toBeInTheDocument();
    });

    it("should have class name", async () => {
      const { container } = render(
        <Alert className="test-class-name">Foo</Alert>,
      );

      expect(
        container.getElementsByClassName("sds-message test-class-name")[0],
      ).toBeInTheDocument();
    });
  });
});
