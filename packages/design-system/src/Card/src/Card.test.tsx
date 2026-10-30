import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Card, CardProps } from "./Card";

const variants: CardProps["variant"][] = ["vertical", "horizontal"];

describe("Card", () => {
  describe.each(variants)("%s", (variant) => {
    describe("a11y", () => {
      it("should be accessible", async () => {
        const { container } = render(
          <Card variant={variant}>
            <Card.Image>Image</Card.Image>
            <Card.Content>Content</Card.Content>
          </Card>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });

    describe("api", () => {
      it("should render", async () => {
        render(<Card data-testid="test" variant={variant} />);

        const card = screen.getByTestId("test");
        expect(card).toHaveClass("sd3-card");
        expect(card).toHaveAttribute("data-variant", variant);
      });

      it("should have class name", async () => {
        render(
          <Card
            data-testid="test"
            variant={variant}
            className="test-class-name"
          />,
        );

        expect(screen.getByTestId("test")).toHaveClass(
          "sd3-card test-class-name",
        );
      });
    });
  });

  it("should be vertical by default", async () => {
    render(<Card data-testid="test" />);

    expect(screen.getByTestId("test")).toHaveAttribute(
      "data-variant",
      "vertical",
    );
  });

  it("should render parts", async () => {
    render(
      <Card>
        <Card.Image data-testid="image" />
        <Card.Content data-testid="content" />
      </Card>,
    );

    expect(screen.getByTestId("image")).toHaveAttribute("data-part", "image");
    expect(screen.getByTestId("content")).toHaveAttribute(
      "data-part",
      "content",
    );
  });
});
