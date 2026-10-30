import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ToggleGroup } from "./ToggleGroup";

const sizes = ["small", "medium", "large"] as const;

const renderGroup = (
  props: Partial<React.ComponentProps<typeof ToggleGroup>> = {},
) =>
  render(
    <ToggleGroup aria-label="Vis" {...props}>
      <ToggleGroup.Item value="inbox">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="draft">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="sent">Sendt</ToggleGroup.Item>
    </ToggleGroup>,
  );

describe("ToggleGroup", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`should be accessible with size="${size}"`, async () => {
        const { container } = renderGroup({ size, defaultValue: "inbox" });
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("should be accessible with no initial selection", async () => {
      const { container } = renderGroup();
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when the whole group is disabled", async () => {
      const { container } = renderGroup({
        disabled: true,
        defaultValue: "inbox",
      });
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should accept aria-label on icon-only items", async () => {
      const { container } = render(
        <ToggleGroup aria-label="Vis">
          <ToggleGroup.Item value="save" aria-label="Lagre">
            <ToggleGroup.Item.Icon>
              <svg />
            </ToggleGroup.Item.Icon>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="archive" aria-label="Arkiver">
            <ToggleGroup.Item.Icon>
              <svg />
            </ToggleGroup.Item.Icon>
          </ToggleGroup.Item>
        </ToggleGroup>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a radiogroup with the root class", () => {
      renderGroup();
      const group = screen.getByRole("radiogroup", { name: "Vis" });
      expect(group).toHaveClass("sd3-toggle-group");
    });

    it("should merge className with the root class", () => {
      renderGroup({ className: "custom" });
      expect(screen.getByRole("radiogroup")).toHaveClass(
        "sd3-toggle-group custom",
      );
    });

    describe("size", () => {
      it("should default data-size to 'medium'", () => {
        renderGroup();
        expect(screen.getByRole("radiogroup")).toHaveAttribute(
          "data-size",
          "medium",
        );
      });

      sizes.forEach((size) => {
        it(`should set data-size="${size}" and cascade to items`, () => {
          renderGroup({ size });
          expect(screen.getByRole("radiogroup")).toHaveAttribute(
            "data-size",
            size,
          );
          screen.getAllByRole("radio").forEach((item) => {
            expect(item).toHaveAttribute("data-size", size);
          });
        });
      });
    });

    describe("selection", () => {
      it("should render each item as a radio with aria-checked reflecting selection", () => {
        renderGroup({ defaultValue: "draft" });
        const items = screen.getAllByRole("radio");
        expect(items).toHaveLength(3);
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveAttribute(
          "aria-checked",
          "false",
        );
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveAttribute(
          "aria-checked",
          "true",
        );
      });

      it("should apply primary variant to the checked item and tertiary to others", () => {
        renderGroup({ defaultValue: "draft" });
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveAttribute(
          "data-variant",
          "tertiary",
        );
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveAttribute(
          "data-variant",
          "primary",
        );
      });

      it("should roving-tabindex to the checked item (0) and -1 on the rest", () => {
        renderGroup({ defaultValue: "draft" });
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveAttribute(
          "tabindex",
          "-1",
        );
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveAttribute(
          "tabindex",
          "0",
        );
      });

      it("should place the tab stop on the first enabled item when nothing is selected", () => {
        render(
          <ToggleGroup aria-label="Vis">
            <ToggleGroup.Item value="inbox" disabled>
              Innboks
            </ToggleGroup.Item>
            <ToggleGroup.Item value="draft">Utkast</ToggleGroup.Item>
            <ToggleGroup.Item value="sent">Sendt</ToggleGroup.Item>
          </ToggleGroup>,
        );
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveAttribute(
          "tabindex",
          "0",
        );
        expect(screen.getByRole("radio", { name: "Sendt" })).toHaveAttribute(
          "tabindex",
          "-1",
        );
      });

      it("should update selection on click in uncontrolled mode", async () => {
        const onChange = jest.fn();
        renderGroup({ defaultValue: "inbox", onChange });
        await userEvent.click(screen.getByRole("radio", { name: "Utkast" }));
        expect(onChange).toHaveBeenCalledWith("draft");
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveAttribute(
          "aria-checked",
          "true",
        );
      });

      it("should not mutate selection when controlled", async () => {
        const onChange = jest.fn();
        renderGroup({ value: "inbox", onChange });
        await userEvent.click(screen.getByRole("radio", { name: "Utkast" }));
        expect(onChange).toHaveBeenCalledWith("draft");
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveAttribute(
          "aria-checked",
          "true",
        );
      });
    });

    describe("keyboard", () => {
      it("should move focus with ArrowRight (wrapping) without changing selection", async () => {
        const user = userEvent.setup();
        renderGroup({ defaultValue: "inbox" });
        screen.getByRole("radio", { name: "Innboks" }).focus();
        await user.keyboard("{ArrowRight}");
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveFocus();
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveAttribute(
          "aria-checked",
          "true",
        );
        await user.keyboard("{ArrowRight}{ArrowRight}");
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveFocus();
      });

      it("should select the focused item on Enter", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();
        renderGroup({ defaultValue: "inbox", onChange });
        screen.getByRole("radio", { name: "Innboks" }).focus();
        await user.keyboard("{ArrowRight}{Enter}");
        expect(onChange).toHaveBeenCalledWith("draft");
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveAttribute(
          "aria-checked",
          "true",
        );
      });

      it("should move backward with ArrowLeft (wrapping)", async () => {
        const user = userEvent.setup();
        renderGroup({ defaultValue: "inbox" });
        screen.getByRole("radio", { name: "Innboks" }).focus();
        await user.keyboard("{ArrowLeft}");
        expect(screen.getByRole("radio", { name: "Sendt" })).toHaveFocus();
      });

      it("should treat ArrowDown/ArrowUp the same as ArrowRight/ArrowLeft", async () => {
        const user = userEvent.setup();
        renderGroup({ defaultValue: "inbox" });
        screen.getByRole("radio", { name: "Innboks" }).focus();
        await user.keyboard("{ArrowDown}");
        expect(screen.getByRole("radio", { name: "Utkast" })).toHaveFocus();
        await user.keyboard("{ArrowUp}");
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveFocus();
      });

      it("should wrap backward from the first item", async () => {
        const user = userEvent.setup();
        renderGroup({ defaultValue: "sent" });
        screen.getByRole("radio", { name: "Innboks" }).focus();
        await user.keyboard("{ArrowUp}");
        expect(screen.getByRole("radio", { name: "Sendt" })).toHaveFocus();
      });

      it("should jump to first/last with Home/End", async () => {
        const user = userEvent.setup();
        renderGroup({ defaultValue: "draft" });
        screen.getByRole("radio", { name: "Utkast" }).focus();
        await user.keyboard("{End}");
        expect(screen.getByRole("radio", { name: "Sendt" })).toHaveFocus();
        await user.keyboard("{Home}");
        expect(screen.getByRole("radio", { name: "Innboks" })).toHaveFocus();
      });

      it("should skip disabled items when navigating", async () => {
        const user = userEvent.setup();
        render(
          <ToggleGroup aria-label="Vis" defaultValue="inbox">
            <ToggleGroup.Item value="inbox">Innboks</ToggleGroup.Item>
            <ToggleGroup.Item value="draft" disabled>
              Utkast
            </ToggleGroup.Item>
            <ToggleGroup.Item value="sent">Sendt</ToggleGroup.Item>
          </ToggleGroup>,
        );
        screen.getByRole("radio", { name: "Innboks" }).focus();
        await user.keyboard("{ArrowRight}");
        expect(screen.getByRole("radio", { name: "Sendt" })).toHaveFocus();
      });
    });

    describe("disabled", () => {
      it("should disable every item when the group is disabled", () => {
        renderGroup({ disabled: true, defaultValue: "inbox" });
        screen.getAllByRole("radio").forEach((item) => {
          expect(item).toBeDisabled();
        });
      });

      it("should disable only one item when disabled on the item", () => {
        render(
          <ToggleGroup aria-label="Vis">
            <ToggleGroup.Item value="inbox">Innboks</ToggleGroup.Item>
            <ToggleGroup.Item value="draft" disabled>
              Utkast
            </ToggleGroup.Item>
          </ToggleGroup>,
        );
        expect(
          screen.getByRole("radio", { name: "Innboks" }),
        ).not.toBeDisabled();
        expect(screen.getByRole("radio", { name: "Utkast" })).toBeDisabled();
      });
    });
  });
});
