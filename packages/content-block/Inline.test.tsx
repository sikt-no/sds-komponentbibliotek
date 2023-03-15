import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Inline, InlineProps } from "./Inline";

const renderComponent = ({ className }: Partial<InlineProps>) =>
  render(
    <Inline
      imgSrc="https://picsum.photos/600/600"
      imgAlt="Image alt text"
      linkText="Link"
      linkHref="#"
      headingText="Heading"
      text="Text"
      data-testid="test"
      className={className}
    />
  );

describe("inline", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderComponent({});

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      renderComponent({});

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-inline"
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "#");
    });

    it("should have a class name", () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-inline test-class-name"
      );
    });
  });
});
