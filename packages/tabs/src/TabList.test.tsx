import { render, screen } from "@testing-library/react";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { Tabs } from "./Tabs";

describe("TabList", () => {
  describe("api", () => {
    it("should render with fallback when no context provider", async () => {
      render(<TabList aria-label="test-aria-label">Foo</TabList>);

      expect(screen.getByLabelText("test-aria-label")).toBeInTheDocument();
    });

    it("should preserve Tab className when passed", async () => {
      render(
        <Tabs>
          <TabList aria-label="test-aria-label">
            <Tab className="custom-class">Tab 1</Tab>
            <Tab className="another-custom-class">Tab 2</Tab>
          </TabList>
        </Tabs>,
      );

      const tab1 = screen.getByRole("tab", { name: "Tab 1" });
      const tab2 = screen.getByRole("tab", { name: "Tab 2" });

      expect(tab1).toHaveClass("custom-class");
      expect(tab2).toHaveClass("another-custom-class");
    });
  });
});
