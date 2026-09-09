import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ComponentProps } from "react";
import { Details } from "./Details";

const renderBasic = (props: Partial<ComponentProps<typeof Details>> = {}) =>
  render(
    <Details data-testid="root" {...props}>
      <Details.Summary>Hvem kan registrere seg?</Details.Summary>
      <Details.Content>For å kunne bli registrert…</Details.Content>
    </Details>,
  );

describe("Details", () => {
  describe("a11y", () => {
    it("should be accessible when closed", async () => {
      const { container } = renderBasic();
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when open", async () => {
      const { container } = renderBasic({ open: true });
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible in compact size", async () => {
      const { container } = renderBasic({ size: "compact" });
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render as a <details> with the root class", () => {
      renderBasic();
      const root = screen.getByTestId("root");
      expect(root.tagName).toBe("DETAILS");
      expect(root).toHaveClass("sd3-details");
    });

    it("should default to data-size='standard'", () => {
      renderBasic();
      expect(screen.getByTestId("root")).toHaveAttribute(
        "data-size",
        "standard",
      );
    });

    it("should set data-size='compact' when size='compact'", () => {
      renderBasic({ size: "compact" });
      expect(screen.getByTestId("root")).toHaveAttribute(
        "data-size",
        "compact",
      );
    });

    it("should forward className", () => {
      renderBasic({ className: "test-class-name" });
      expect(screen.getByTestId("root")).toHaveClass(
        "sd3-details test-class-name",
      );
    });

    it("should forward the name attribute for accordion grouping", () => {
      renderBasic({ name: "faq" });
      expect(screen.getByTestId("root")).toHaveAttribute("name", "faq");
    });

    it("should render the summary as a <summary> element", () => {
      renderBasic();
      const label = screen.getByText("Hvem kan registrere seg?");
      expect(label.closest("summary")).not.toBeNull();
    });

    it("should render the content as a div with data-part='content'", () => {
      renderBasic({ open: true });
      const content = screen.getByText("For å kunne bli registrert…");
      const wrapper = content.closest("[data-part='content']");
      expect(wrapper).not.toBeNull();
      expect(wrapper?.tagName).toBe("DIV");
    });

    it("should render both expand/collapse icons inside the summary", () => {
      renderBasic();
      const summary = screen
        .getByText("Hvem kan registrere seg?")
        .closest("summary");
      expect(
        summary?.querySelector("[data-part='icon-closed']"),
      ).not.toBeNull();
      expect(summary?.querySelector("[data-part='icon-open']")).not.toBeNull();
    });

    it("should toggle open on summary click", async () => {
      const user = userEvent.setup();
      renderBasic();
      const root = screen.getByTestId("root");
      expect(root).not.toHaveAttribute("open");
      await user.click(screen.getByText("Hvem kan registrere seg?"));
      expect(root).toHaveAttribute("open");
    });
  });
});
