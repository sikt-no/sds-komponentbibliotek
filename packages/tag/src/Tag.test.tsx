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
    [undefined, "brand", "neutral"].map((variant) => {
      it(`${variant} should render`, async () => {
        render(
          <TagStatus
            // @ts-expect-error This is a valid type
            variant={variant}
            icon="icon"
            data-testid="test"
          >
            Foo
          </TagStatus>,
        );

        expect(screen.getByTestId("test")).toHaveClass("sds-tag");
        expect(screen.getByText("icon")).toHaveClass("sds-tag__icon");
      });
    });

    ["info", "warning", "success", "critical"].map((variant) => {
      it(`${variant} should render`, async () => {
        render(
          <TagStatus
            // @ts-expect-error This is a valid type
            variant={variant}
            icon="icon"
            data-testid="test"
          >
            Foo
          </TagStatus>,
        );

        expect(screen.getByTestId("test")).toHaveClass("sds-tag");
        expect(screen.queryByText("icon")).not.toBeInTheDocument();
      });
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
  });
});
