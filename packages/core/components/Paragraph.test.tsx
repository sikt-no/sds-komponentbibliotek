import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Paragraph>Foo</Paragraph>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Paragraph>Foo</Paragraph>);

      expect(screen.getByText("Foo")).toHaveClass(
        "sds-typography-body sds-typography-body--regular",
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Paragraph
          variant="small"
          modifier="strong"
          className="test-class-name"
        >
          Foo
        </Paragraph>,
      );

      expect(screen.getByText("Foo")).toHaveClass(
        "sds-typography-body sds-typography-body--small sds-typography-body--strong test-class-name",
      );
    });

    it("should change element", async () => {
      render(<Paragraph as="span">Foo</Paragraph>);

      expect(screen.getByText("Foo").nodeName).toBe("SPAN");
    });
  });
});
