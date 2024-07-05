import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Card, CardProps } from "./Card";

const renderComponent = ({ className, image }: Partial<CardProps>) =>
  render(
    <Card
      image={image}
      overlineText="Overline"
      headingText="Heading"
      leadText="Lead"
      data-testid="test"
      className={className}
      callToAction={<>CTA</>}
    >
      Children
    </Card>,
  );

describe("Card", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderComponent({});

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", () => {
      renderComponent({});

      expect(screen.getByTestId("test")).toHaveClass("sds-card");
      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Children")).toBeInTheDocument();
      expect(screen.getByText("CTA")).toBeInTheDocument();
    });

    it("should have a class name", () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-card test-class-name",
      );
    });

    it("should render image when alt text", () => {
      renderComponent({ image: <img src="/path/to/image" alt="Foo" /> });

      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("should not render image when missing alt text", () => {
      renderComponent({});

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
  });
});
