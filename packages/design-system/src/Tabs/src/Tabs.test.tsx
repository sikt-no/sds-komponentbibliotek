import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Tabs } from "./Tabs";

const renderTabs = (props: Partial<React.ComponentProps<typeof Tabs>> = {}) =>
  render(
    <Tabs defaultValue="a" {...props}>
      <Tabs.List aria-label="Innstillinger">
        <Tabs.Tab value="a">Konto</Tabs.Tab>
        <Tabs.Tab value="b">Varsler</Tabs.Tab>
        <Tabs.Tab value="c">Språk</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="a">Konto innhold</Tabs.Panel>
      <Tabs.Panel value="b">Varsler innhold</Tabs.Panel>
      <Tabs.Panel value="c">Språk innhold</Tabs.Panel>
    </Tabs>,
  );

describe("Tabs", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = renderTabs();
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with no initial selection", async () => {
      const { container } = render(
        <Tabs>
          <Tabs.List aria-label="Innstillinger">
            <Tabs.Tab value="a">A</Tabs.Tab>
            <Tabs.Tab value="b">B</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="a">A</Tabs.Panel>
          <Tabs.Panel value="b">B</Tabs.Panel>
        </Tabs>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("renders the root with the sd3-tabs class", () => {
      renderTabs({ "data-testid": "tabs" });
      expect(screen.getByTestId("tabs")).toHaveClass("sd3-tabs");
    });

    it("merges className", () => {
      renderTabs({ "data-testid": "tabs", className: "custom" });
      expect(screen.getByTestId("tabs")).toHaveClass("sd3-tabs custom");
    });

    it("renders the tablist with the provided aria-label", () => {
      renderTabs();
      expect(
        screen.getByRole("tablist", { name: "Innstillinger" }),
      ).toBeInTheDocument();
    });

    describe("selection", () => {
      it("marks the default-selected tab with aria-selected", () => {
        renderTabs();
        const konto = screen.getByRole("tab", { name: "Konto" });
        const varsler = screen.getByRole("tab", { name: "Varsler" });
        expect(konto).toHaveAttribute("aria-selected", "true");
        expect(varsler).toHaveAttribute("aria-selected", "false");
      });

      it("wires aria-controls / aria-labelledby between tab and panel", () => {
        renderTabs();
        const konto = screen.getByRole("tab", { name: "Konto" });
        const panel = screen.getByRole("tabpanel");
        expect(konto.getAttribute("aria-controls")).toBe(panel.id);
        expect(panel.getAttribute("aria-labelledby")).toBe(konto.id);
      });

      it("hides inactive panels", () => {
        renderTabs();
        expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
      });

      it("sets roving tabindex: only the selected tab is 0", () => {
        renderTabs();
        expect(screen.getByRole("tab", { name: "Konto" })).toHaveAttribute(
          "tabindex",
          "0",
        );
        expect(screen.getByRole("tab", { name: "Varsler" })).toHaveAttribute(
          "tabindex",
          "-1",
        );
      });

      it("with an unknown defaultValue, the first tab is tabbable", () => {
        render(
          <Tabs defaultValue="nope">
            <Tabs.List aria-label="t">
              <Tabs.Tab value="a">A</Tabs.Tab>
              <Tabs.Tab value="b">B</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="a">A</Tabs.Panel>
            <Tabs.Panel value="b">B</Tabs.Panel>
          </Tabs>,
        );
        expect(screen.getByRole("tab", { name: "A" })).toHaveAttribute(
          "tabindex",
          "0",
        );
        expect(screen.getByRole("tab", { name: "B" })).toHaveAttribute(
          "tabindex",
          "-1",
        );
      });

      it("with no selection, the first tab is tabbable", () => {
        render(
          <Tabs>
            <Tabs.List aria-label="t">
              <Tabs.Tab value="a">A</Tabs.Tab>
              <Tabs.Tab value="b">B</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="a">A</Tabs.Panel>
            <Tabs.Panel value="b">B</Tabs.Panel>
          </Tabs>,
        );
        expect(screen.getByRole("tab", { name: "A" })).toHaveAttribute(
          "tabindex",
          "0",
        );
        expect(screen.getByRole("tab", { name: "B" })).toHaveAttribute(
          "tabindex",
          "-1",
        );
      });
    });

    describe("controlled", () => {
      it("respects controlled value and calls onValueChange", async () => {
        const user = userEvent.setup();
        const onValueChange = jest.fn();
        const { rerender } = render(
          <Tabs value="a" onValueChange={onValueChange}>
            <Tabs.List aria-label="t">
              <Tabs.Tab value="a">A</Tabs.Tab>
              <Tabs.Tab value="b">B</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="a">A</Tabs.Panel>
            <Tabs.Panel value="b">B</Tabs.Panel>
          </Tabs>,
        );
        await user.click(screen.getByRole("tab", { name: "B" }));
        expect(onValueChange).toHaveBeenCalledWith("b");
        expect(screen.getByRole("tab", { name: "A" })).toHaveAttribute(
          "aria-selected",
          "true",
        );
        rerender(
          <Tabs value="b" onValueChange={onValueChange}>
            <Tabs.List aria-label="t">
              <Tabs.Tab value="a">A</Tabs.Tab>
              <Tabs.Tab value="b">B</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="a">A</Tabs.Panel>
            <Tabs.Panel value="b">B</Tabs.Panel>
          </Tabs>,
        );
        expect(screen.getByRole("tab", { name: "B" })).toHaveAttribute(
          "aria-selected",
          "true",
        );
      });
    });

    describe("keyboard", () => {
      it("ArrowRight moves focus (manual activation — selection stays)", async () => {
        const user = userEvent.setup();
        renderTabs();
        const konto = screen.getByRole("tab", { name: "Konto" });
        konto.focus();
        await user.keyboard("{ArrowRight}");
        expect(screen.getByRole("tab", { name: "Varsler" })).toHaveFocus();
        expect(konto).toHaveAttribute("aria-selected", "true");
      });

      it("ArrowRight wraps from last to first", async () => {
        const user = userEvent.setup();
        renderTabs({ defaultValue: "c" });
        screen.getByRole("tab", { name: "Språk" }).focus();
        await user.keyboard("{ArrowRight}");
        expect(screen.getByRole("tab", { name: "Konto" })).toHaveFocus();
      });

      it("ArrowLeft wraps from first to last", async () => {
        const user = userEvent.setup();
        renderTabs();
        screen.getByRole("tab", { name: "Konto" }).focus();
        await user.keyboard("{ArrowLeft}");
        expect(screen.getByRole("tab", { name: "Språk" })).toHaveFocus();
      });

      it("Home focuses the first tab", async () => {
        const user = userEvent.setup();
        renderTabs({ defaultValue: "c" });
        screen.getByRole("tab", { name: "Språk" }).focus();
        await user.keyboard("{Home}");
        expect(screen.getByRole("tab", { name: "Konto" })).toHaveFocus();
      });

      it("End focuses the last tab", async () => {
        const user = userEvent.setup();
        renderTabs();
        screen.getByRole("tab", { name: "Konto" }).focus();
        await user.keyboard("{End}");
        expect(screen.getByRole("tab", { name: "Språk" })).toHaveFocus();
      });

      it("activationMode='automatic' selects on arrow-key focus", async () => {
        const user = userEvent.setup();
        renderTabs({ activationMode: "automatic" });
        const konto = screen.getByRole("tab", { name: "Konto" });
        konto.focus();
        await user.keyboard("{ArrowRight}");
        const varsler = screen.getByRole("tab", { name: "Varsler" });
        expect(varsler).toHaveFocus();
        expect(varsler).toHaveAttribute("aria-selected", "true");
        expect(konto).toHaveAttribute("aria-selected", "false");
      });
    });

    describe("sub-components", () => {
      it("renders Tabs.Tab.Icon and Tabs.Tab.Slot with their data-parts", () => {
        render(
          <Tabs defaultValue="a">
            <Tabs.List aria-label="t">
              <Tabs.Tab value="a">
                <Tabs.Tab.Icon>
                  <svg data-testid="svg" />
                </Tabs.Tab.Icon>
                Konto
                <Tabs.Tab.Slot>
                  <span data-testid="badge">3</span>
                </Tabs.Tab.Slot>
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="a">x</Tabs.Panel>
          </Tabs>,
        );
        const tab = screen.getByRole("tab");
        expect(tab.querySelector('[data-part="icon"]')).toContainElement(
          screen.getByTestId("svg"),
        );
        expect(tab.querySelector('[data-part="slot"]')).toContainElement(
          screen.getByTestId("badge"),
        );
      });
    });
  });
});
