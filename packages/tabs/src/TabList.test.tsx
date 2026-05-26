import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { Tabs } from "./Tabs";
import { useTabOverflow } from "./useTabOverflow";

jest.mock("./useTabOverflow");

const mockUseTabOverflow = useTabOverflow as jest.Mock;

beforeEach(() => {
  mockUseTabOverflow.mockReturnValue({
    containerRef: { current: null },
    cutIndex: Infinity,
  });
});

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

  describe("overflow", () => {
    let togglePopoverMock: jest.Mock;

    beforeEach(() => {
      togglePopoverMock = jest.fn();
      HTMLElement.prototype.togglePopover = togglePopoverMock;
    });

    it("renders overflow tabs in popover when cutIndex < tabCount", () => {
      mockUseTabOverflow.mockReturnValue({
        containerRef: { current: null },
        cutIndex: 1,
      });

      render(
        <Tabs>
          <TabList aria-label="tabs">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
        </Tabs>,
      );

      expect(screen.getAllByRole("tab").length).toBeGreaterThan(3);
    });

    it("calls handleTogglePopover when an overflow tab is clicked", async () => {
      const user = userEvent.setup();
      mockUseTabOverflow.mockReturnValue({
        containerRef: { current: null },
        cutIndex: 1,
      });

      render(
        <Tabs>
          <TabList aria-label="tabs">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
        </Tabs>,
      );

      const overflowTabs = screen.getAllByRole("tab");
      await user.click(overflowTabs[overflowTabs.length - 1]);

      expect(togglePopoverMock).toHaveBeenCalled();
    });
  });
});
