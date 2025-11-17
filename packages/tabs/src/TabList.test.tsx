import { render, screen } from "@testing-library/react";
import { TabList } from "./TabList";

describe("TabList", () => {
  describe("api", () => {
    it("should render with fallback when no context provider", async () => {
      render(<TabList aria-label="test-aria-label">Foo</TabList>);

      expect(screen.getByLabelText("test-aria-label")).toBeInTheDocument();
    });
  });
});
