import React, { ReactNode } from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

const renderComponent = ({
  className,
  icon,
  badge,
  defaultIndex,
  isSelectOnFocus,
}: {
  className?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  defaultIndex?: number;
  isSelectOnFocus?: boolean;
}) =>
  render(
    <Tabs
      data-testid="test"
      className={className}
      defaultIndex={defaultIndex}
      isSelectOnFocus={isSelectOnFocus}
    >
      <TabList aria-label="test-aria-label">
        <Tab icon={icon} badge={badge}>
          Tab 1
        </Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </Tabs>
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
    });

    it("should have class name", async () => {
      renderComponent({ className: "test-class-name" });

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-tabs test-class-name"
      );
    });

    it("should have icon element", async () => {
      renderComponent({ icon: "icon" });

      expect(screen.getByText("icon")).toHaveClass("sds-tabs__tab-icon");
    });

    it("should have badge element", async () => {
      renderComponent({ badge: "badge" });

      expect(screen.getByText("badge")).toHaveClass("sds-tabs__tab-badge");
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

      await act(async () => {
        await user.click(screen.getByText("Tab 2"));
      });

      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });

    it("handles keyboard navigation", async () => {
      const user = userEvent.setup();
      renderComponent({});

      await act(async () => {
        await user.tab();
        await user.keyboard("[ArrowRight]");
      });

      expect(screen.getByText("Tab 2")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();

      await act(async () => {
        await user.keyboard("[ArrowLeft]");
      });

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();

      await act(async () => {
        await user.keyboard("[End]");
      });

      expect(screen.getByText("Tab 3")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();

      await act(async () => {
        await user.keyboard("[Home]");
      });

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 3")).not.toBeVisible();

      await act(async () => {
        await user.keyboard("[ArrowLeft]");
      });

      expect(screen.getByText("Tab 3")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();

      await act(async () => {
        await user.keyboard("[ArrowRight]");
      });

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 3")).not.toBeVisible();
    });

    it("handles keyboard navigation when isSelectOnFocus is false", async () => {
      const user = userEvent.setup();
      renderComponent({ isSelectOnFocus: false });

      await act(async () => {
        await user.tab();
        await user.keyboard("[ArrowRight]");
      });

      expect(screen.getByText("Tab 2")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();

      await act(async () => {
        await user.keyboard("[Space]");
      });

      expect(screen.getByText("Tab 2")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();

      await act(async () => {
        await user.keyboard("[ArrowLeft]");
        await user.keyboard("[Enter]");
      });

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();

      await act(async () => {
        await user.keyboard("[End]");
      });

      expect(screen.getByText("Tab 3")).toHaveFocus();
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 3")).not.toBeVisible();

      await act(async () => {
        await user.keyboard("[Enter]");
        await user.keyboard("[Home]");
      });

      expect(screen.getByText("Tab 1")).toHaveFocus();
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 3")).toBeVisible();
    });
  });
});
