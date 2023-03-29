import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Section, SectionProps } from "./Section";

const renderComponent = ({ className }: Partial<SectionProps>) =>
  render(
    <Section
      headingText="Header"
      linkLabel="Label"
      linkHref="www.internet.com"
      className={className}
      data-testid="test"
    />
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
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        "www.internet.com"
      );
    });

    it("should have a class name", () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-section test-class-name"
      );
    });
  });
});
