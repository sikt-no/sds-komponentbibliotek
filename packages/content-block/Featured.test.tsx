import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Featured, FeaturedProps } from "./Featured";

const renderComponent = ({ className, imgPosition }: Partial<FeaturedProps>) =>
  render(
    <Featured
      imgSrc="https://picsum.photos/600/600"
      imgAlt="Image alt text"
      linkText="Link"
      linkHref="#"
      overlineText="Overline"
      headingText="Heading"
      text="Text"
      imgPosition={imgPosition}
      data-testid="test"
      className={className}
    />
  );

describe("Featured", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderComponent({});

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      renderComponent({});

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--image-first"
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "#");
    });

    it("should have a class name", () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--image-first test-class-name"
      );
    });

    it("should have classname according to imgPosition", () => {
      renderComponent({ imgPosition: "last" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-content-block-featured sds-content-block-featured--image-last"
      );
    });
  });
});
