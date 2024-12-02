import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MessageButton } from "./MessageButton";

describe("MessageButton", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<MessageButton>Foo</MessageButton>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<MessageButton data-testid="test">Foo</MessageButton>);

      expect(screen.getByTestId("test")).toHaveClass("sds-message-button");
    });
  });
});
