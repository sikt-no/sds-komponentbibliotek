import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Section, SectionProps } from "./Section";

const renderComponent = ({ className }: Partial<SectionProps>) =>
  render(
    <Section
      headingText="Header"
      className={className}
      callToAction={<>CTA</>}
      data-testid="test"
    >
      Children
    </Section>,
  );

describe("section", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderComponent({});

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      renderComponent({});

      expect(screen.getByTestId("test")).toHaveClass("sds-section");
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Children")).toBeInTheDocument();
      expect(screen.getByText("CTA")).toBeInTheDocument();
    });

    it("should have a class name", () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-section test-class-name",
      );
    });
  });
});
