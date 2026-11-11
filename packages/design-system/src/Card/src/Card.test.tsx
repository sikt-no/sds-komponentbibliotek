import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Card, CardProps } from "./Card";

const orientations: CardProps["orientation"][] = ["vertical", "horizontal"];

describe("Card", () => {
  describe.each(orientations)("%s", (orientation) => {
    describe("a11y", () => {
      it("should be accessible", async () => {
        const { container } = render(
          <Card orientation={orientation}>
            <Card.Image>Image</Card.Image>
            <Card.Content>Content</Card.Content>
          </Card>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });

    describe("api", () => {
      it("should render", async () => {
        render(<Card data-testid="test" orientation={orientation} />);

        const card = screen.getByTestId("test");
        expect(card).toHaveClass("sd3-card");
        expect(card).toHaveAttribute("data-orientation", orientation);
      });

      it("should have class name", async () => {
        render(
          <Card
            data-testid="test"
            orientation={orientation}
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
      "data-orientation",
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
