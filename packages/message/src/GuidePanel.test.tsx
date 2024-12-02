import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { GuidePanel, GuidePanelVariant } from "./Message";

describe("Message GuidePanel", () => {
  const variants: GuidePanelVariant[] = ["info", "warning"];

  describe("a11y", () => {
    variants.map((variant) => {
      it(`${variant} should be accessible`, async () => {
        const { container } = render(
          <GuidePanel variant={variant}>Foo</GuidePanel>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    variants.map((variant) => {
      it(`${variant} should render`, async () => {
        render(<GuidePanel variant={variant}>Foo</GuidePanel>);

        expect(screen.getByText("Foo")).toHaveClass("sds-message__message");
      });
    });

    it("should have class name", async () => {
      const { container } = render(
        <GuidePanel className="test-class-name">Foo</GuidePanel>,
      );

      expect(
        container.getElementsByClassName("sds-message test-class-name")[0],
      ).toBeInTheDocument();
    });
  });
});
