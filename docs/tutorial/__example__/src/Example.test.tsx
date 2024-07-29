import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Example } from "./Example";

describe("Example", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Example />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    /* tests goes here */
  });
});
