import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Inline } from "./Inline";

describe("inline", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Inline
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          heading="Heading"
          text="Text"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
        />
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Inline
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          heading="Heading"
          text="Text"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-inline sds-content-block-inline--horizontal"
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "#");
    });

    it("should have a class name", () => {
      render(
        <Inline
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          heading="Heading"
          text="Text"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
          className="test-class-name"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-inline sds-content-block-inline--horizontal"
      );
    });
    it("should have classname according to props", () => {
      render(
        <Inline
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          heading="Heading"
          text="Text"
          padding="medium"
          type="vertical"
          linkTarget="#"
          altText="This is an image"
          className="test-class-name"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-inline sds-content-block-inline--vertical"
      );
    });
  });
});
