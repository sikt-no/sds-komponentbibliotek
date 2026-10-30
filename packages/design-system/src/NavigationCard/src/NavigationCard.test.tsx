import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { NavigationCard, NavigationCardProps } from "./NavigationCard";

const sizes: NavigationCardProps["size"][] = ["standard", "compact"];

describe("NavigationCard", () => {
  describe.each(sizes)("%s", (size) => {
    describe("a11y", () => {
      it("should be accessible", async () => {
        const { container } = render(
          <NavigationCard href="#" size={size}>
            <NavigationCard.Icon>Icon</NavigationCard.Icon>
            <NavigationCard.Content>
              <NavigationCard.Heading>Heading</NavigationCard.Heading>
              <NavigationCard.Body>Body</NavigationCard.Body>
            </NavigationCard.Content>
          </NavigationCard>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });

    describe("api", () => {
      it("should render", async () => {
        render(<NavigationCard data-testid="test" size={size} />);

        const card = screen.getByTestId("test");
        expect(card).toHaveClass("sd3-navigation-card");
        expect(card).toHaveAttribute("data-size", size);
      });

      it("should have class name", async () => {
        render(
          <NavigationCard
            data-testid="test"
            size={size}
            className="test-class-name"
          />,
        );

        expect(screen.getByTestId("test")).toHaveClass(
          "sd3-navigation-card test-class-name",
        );
      });
    });
  });

  it("should render as link with standard size by default", async () => {
    render(<NavigationCard href="#">Link</NavigationCard>);

    const link = screen.getByRole("link", { name: "Link" });
    expect(link).toHaveAttribute("data-size", "standard");
  });

  it("should render as child element", async () => {
    render(
      <NavigationCard asChild>
        <button type="button">Button</button>
      </NavigationCard>,
    );

    expect(screen.getByRole("button", { name: "Button" })).toHaveClass(
      "sd3-navigation-card",
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("should render parts", async () => {
    render(
      <NavigationCard>
        <NavigationCard.Icon data-testid="icon" />
        <NavigationCard.Content data-testid="content">
          <NavigationCard.Heading data-testid="heading">
            Heading
          </NavigationCard.Heading>
          <NavigationCard.Body data-testid="body">Body</NavigationCard.Body>
        </NavigationCard.Content>
      </NavigationCard>,
    );

    expect(screen.getByTestId("icon")).toHaveAttribute("data-part", "icon");
    expect(screen.getByTestId("content")).toHaveAttribute(
      "data-part",
      "content",
    );

    const heading = screen.getByTestId("heading");
    expect(heading.tagName).toBe("P");
    expect(heading).toHaveAttribute("data-part", "heading");

    expect(screen.getByTestId("body")).toHaveClass("sd3-typography");
  });
});
