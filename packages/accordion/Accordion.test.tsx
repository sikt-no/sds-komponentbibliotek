import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  describe("a11y", () => {
    it("Accordion should be accessible", async () => {
      const { container } = render(
        <Accordion title="Accordion header">Foo</Accordion>
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should have class name", async () => {
      render(
        <Accordion
          data-testid="test"
          className="test-class-name"
          title="Accordion header"
        >
          Foo
        </Accordion>
      );
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-accordion test-class-name"
      );
    });

    it("renders the component with the given title and content", () => {
      const { getByText } = render(
        <Accordion title="Accordion header">Content</Accordion>
      );
      expect(getByText("Accordion header")).toBeInTheDocument();
      expect(getByText("Content")).toBeInTheDocument();
    });

    it("toggles the content when the accordion title is clicked", () => {
      const label = "Accordion header";
      const content = "Accordion Content";
      const { getByText } = render(
        <Accordion title={label}>{content}</Accordion>
      );
      const labelNode = getByText(label);

      fireEvent.click(labelNode);
      expect(getByText(content)).toBeVisible();

      fireEvent.click(labelNode);
      expect(getByText(content)).not.toBeVisible();
    });
  });
});
