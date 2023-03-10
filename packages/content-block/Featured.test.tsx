import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Featured } from "./Featured";

describe("Featured", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Featured
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          overline="overline"
          heading="Heading"
          text="Text"
          imgPosition="first"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
          data-testid="test"
        />
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      render(
        <Featured
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          overline="overline"
          heading="Heading"
          text="Text"
          imgPosition="first"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--horizontal sds-content-block-featured--left"
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "#");
    });

    it("should have a class name", () => {
      render(
        <Featured
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          overline="overline"
          heading="Heading"
          text="Text"
          imgPosition="first"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
          className="test-class-name"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--horizontal sds-content-block-featured--left test-class-name"
      );
    });

    it("should have classname according to imgPosition prop", () => {
      render(
        <Featured
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          overline="overline"
          heading="Heading"
          text="Text"
          imgPosition="last"
          padding="large"
          type="horizontal"
          linkTarget="#"
          altText="This is an image"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--horizontal sds-content-block-featured--right"
      );
    });

    it("should have classname according to imgPosition and type prop", () => {
      render(
        <Featured
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          overline="overline"
          heading="Heading"
          text="Text"
          imgPosition="first"
          padding="large"
          type="vertical"
          linkTarget="#"
          altText="This is an image"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--vertical sds-content-block-featured--top"
      );
    });

    it("should have classname according to imgPosition and type prop", () => {
      render(
        <Featured
          imgSrc="https://picsum.photos/600/600"
          buttonLabel="Label"
          overline="overline"
          heading="Heading"
          text="Text"
          imgPosition="last"
          padding="large"
          type="vertical"
          linkTarget="#"
          altText="This is an image"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--vertical sds-content-block-featured--bottom"
      );
    });
  });
});
