import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Tab, TabProps } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { Tabs, TabsProps } from "./Tabs";

const renderComponent = ({
  className,
  icon,
  badge,
  defaultIndex,
  isSelectOnFocus,
  onChange,
}: Partial<TabsProps> & Partial<TabProps>) =>
  render(
    <Tabs
      data-testid="test"
      className={className}
      defaultIndex={defaultIndex}
      isSelectOnFocus={isSelectOnFocus}
      onChange={onChange}
    >
      <TabList aria-label="test-aria-label">
        <Tab icon={icon} badge={badge}>
          Tab 1
        </Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        NonValidElement
      </TabList>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </Tabs>,
  );

describe("Tabs", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderComponent({});

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      renderComponent({});

      ["Tab 1", "Tab 2", "Tab 3"].forEach((text) => {
        expect(screen.getByText(text)).toBeVisible();
      });

      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();
      expect(screen.queryByText("NonValidElement")).not.toBeInTheDocument();
    });

    it("should have class name", async () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-tabs test-class-name",
      );
    });

    it("should have icon element", async () => {
      renderComponent({ icon: "icon" });

      expect(screen.getByText("icon")).toHaveClass("sds-tabs__tab-icon");
    });

    it("should have badge element", async () => {
      renderComponent({ badge: <span>badge</span> });

      expect(screen.getByText("badge")).toBeInTheDocument();
    });

    it("shows tab set by defaultIndex", async () => {
      renderComponent({ defaultIndex: 2 });

      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();
    });

    it("changes tab on click", async () => {
      const user = userEvent.setup();
      renderComponent({});

      await user.click(screen.getByText("Tab 2"));

      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      renderComponent({ onChange: changeHandler });

      await user.click(screen.getByText("Tab 2"));

      expect(changeHandler).toHaveBeenCalled();
      expect(changeHandler).toHaveBeenCalledWith(1);
    });

    it("handles keyboard navigation", async () => {
      const user = userEvent.setup();
      renderComponent({});

      await user.tab();
      await user.keyboard("[ArrowRight]");

      expect(screen.getByText("Tab 2")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();

      await user.keyboard("[Space]");

      expect(screen.getByText("Tab 2")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();

      await user.keyboard("[ArrowLeft]");
      await user.keyboard("[Enter]");

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();

      await user.keyboard("[End]");

      expect(screen.getByText("Tab 3")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 3")).not.toBeVisible();

      await user.keyboard("[Enter]");
      await user.keyboard("[Home]");

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();
    });

    it("handles keyboard navigation when isSelectOnFocus is true", async () => {
      const user = userEvent.setup();
      renderComponent({ isSelectOnFocus: true });

      await user.tab();
      await user.keyboard("[ArrowRight]");

      expect(screen.getByText("Tab 2")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();

      await user.keyboard("[ArrowLeft]");

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();

      await user.keyboard("[End]");

      expect(screen.getByText("Tab 3")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();

      await user.keyboard("[Home]");

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 3")).not.toBeVisible();

      await user.keyboard("[ArrowLeft]");

      expect(screen.getByText("Tab 3")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();

      await user.keyboard("[ArrowRight]");

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 3")).not.toBeVisible();
    });
  });
});
