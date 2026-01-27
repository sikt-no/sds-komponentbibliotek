import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TagStatus, TagCategory } from "./Tag";

describe("Tag", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<TagStatus>Foo</TagStatus>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<TagStatus data-testid="test">Foo</TagStatus>);

      expect(screen.getByTestId("test")).toHaveClass("sds-tag");
    });

    it("should have class name", async () => {
      render(
        <TagStatus data-testid="test" className="test-class-name">
          Foo
        </TagStatus>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-tag test-class-name");
    });

    it("should have category", async () => {
      render(
        <TagCategory data-testid="test" category="1">
          Foo
        </TagCategory>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-tag sds-tag--category-1",
      );
    });

    it("should have icon element", async () => {
      render(<TagStatus icon="icon">Foo</TagStatus>);

      expect(screen.getByText("icon")).toHaveClass("sds-tag__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });
  });
});
