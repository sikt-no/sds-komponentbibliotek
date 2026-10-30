import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { useState } from "react";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  describe("a11y", () => {
    it("should be accessible when unchecked", async () => {
      const { container } = render(<Toggle>Enable notifications</Toggle>);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible when checked", async () => {
      const { container } = render(
        <Toggle defaultChecked>Enable notifications</Toggle>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render a <label> with the root class wrapping a switch input", () => {
      render(<Toggle>Enable notifications</Toggle>);
      const input = screen.getByRole("switch", {
        name: "Enable notifications",
      });
      expect(input).toHaveAttribute("type", "checkbox");
      expect(input.parentElement?.tagName).toBe("LABEL");
      expect(input.parentElement).toHaveClass("sd3-toggle");
    });

    it("should merge className onto the root label", () => {
      render(<Toggle className="custom">Enable notifications</Toggle>);
      expect(
        screen.getByRole("switch", { name: "Enable notifications" })
          .parentElement,
      ).toHaveClass("sd3-toggle custom");
    });

    it("should forward native input attributes to the <input>", () => {
      render(
        <Toggle name="notifications" value="on" aria-describedby="help">
          Enable notifications
        </Toggle>,
      );
      const input = screen.getByRole("switch", {
        name: "Enable notifications",
      });
      expect(input).toHaveAttribute("name", "notifications");
      expect(input).toHaveAttribute("value", "on");
      expect(input).toHaveAttribute("aria-describedby", "help");
    });

    it("should respect defaultChecked for uncontrolled use", () => {
      render(<Toggle defaultChecked>Enable notifications</Toggle>);
      expect(
        screen.getByRole("switch", { name: "Enable notifications" }),
      ).toBeChecked();
    });

    it("should respect checked for controlled use", () => {
      render(
        <Toggle checked onChange={() => undefined}>
          Enable notifications
        </Toggle>,
      );
      expect(
        screen.getByRole("switch", { name: "Enable notifications" }),
      ).toBeChecked();
    });

    it("should render the label semantically before the input", () => {
      render(<Toggle>Enable notifications</Toggle>);
      const input = screen.getByRole("switch", {
        name: "Enable notifications",
      });
      expect(input.previousSibling?.textContent).toBe("Enable notifications");
    });

    it("should set data-label-position when provided", () => {
      render(<Toggle labelPosition="left">Enable notifications</Toggle>);
      expect(
        screen.getByRole("switch", { name: "Enable notifications" })
          .parentElement,
      ).toHaveAttribute("data-label-position", "left");
    });

    it("should call onChange on click", async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<Toggle onChange={onChange}>Enable notifications</Toggle>);
      await user.click(
        screen.getByRole("switch", { name: "Enable notifications" }),
      );
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("should render only the input when no children are provided", () => {
      render(<Toggle aria-label="Enable notifications" />);
      const input = screen.getByRole("switch", {
        name: "Enable notifications",
      });
      expect(input.tagName).toBe("INPUT");
      expect(input).toHaveClass("sd3-toggle");
      expect(input.parentElement?.tagName).not.toBe("LABEL");
    });

    it("should merge className onto the standalone input", () => {
      render(<Toggle aria-label="x" className="custom" />);
      expect(screen.getByRole("switch", { name: "x" })).toHaveClass(
        "sd3-toggle custom",
      );
    });

    it("should be accessible as a standalone switch", async () => {
      const { container } = render(
        <Toggle aria-label="Enable notifications" />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should flip when used as a controlled component", async () => {
      const user = userEvent.setup();
      const ControlledToggle = () => {
        const [on, setOn] = useState(false);
        return (
          <Toggle
            checked={on}
            onChange={(e) => {
              setOn(e.target.checked);
            }}
          >
            Enable notifications
          </Toggle>
        );
      };
      render(<ControlledToggle />);
      const input = screen.getByRole("switch", {
        name: "Enable notifications",
      });
      expect(input).not.toBeChecked();
      await user.click(input);
      expect(input).toBeChecked();
      await user.click(input);
      expect(input).not.toBeChecked();
    });
  });
});
