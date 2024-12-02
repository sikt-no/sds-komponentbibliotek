import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MessageButtonLink } from "./MessageButtonLink";

describe("MessageButtonLink", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<MessageButtonLink>Foo</MessageButtonLink>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<MessageButtonLink data-testid="test">Foo</MessageButtonLink>);

      expect(screen.getByTestId("test")).toHaveClass("sds-message-button");
    });
  });
});
