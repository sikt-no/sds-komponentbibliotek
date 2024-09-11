import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Figure } from "./Figure";

describe("Figure", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Figure figCaption="foo">
          <img src="https://picsum.photos/400/300" alt="bar" />
        </Figure>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should have aspect ratio class modifier", async () => {
      render(
        <Figure figCaption="foo" aspectRatio="16x9">
          <img src="https://picsum.photos/400/300" alt="bar" />
        </Figure>,
      );

      expect(screen.getByRole("img")).toHaveClass(
        "sds-figure__figure--ratio-16x9",
      );
    });

    it("should have class name", async () => {
      render(
        <Figure data-testid="test" className="test-class-name">
          <img src="https://picsum.photos/400/300" alt="bar" />
        </Figure>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-figure test-class-name",
      );
    });
  });
});
