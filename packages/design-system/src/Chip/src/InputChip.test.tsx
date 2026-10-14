import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { InputChip } from "./InputChip";

const sizes = ["standard", "compact"] as const;

describe("InputChip", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<InputChip>Oslo</InputChip>);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render as a button with the sd3-chip class", () => {
      render(<InputChip>Oslo</InputChip>);
      expect(screen.getByRole("button", { name: "Oslo" })).toHaveClass(
        "sd3-chip",
      );
    });

    it("should default to type=button", () => {
      render(<InputChip>Oslo</InputChip>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("should merge className", () => {
      render(<InputChip className="test-class-name">Oslo</InputChip>);
      expect(screen.getByRole("button")).toHaveClass(
        "sd3-chip test-class-name",
      );
    });

    describe("size", () => {
      sizes.forEach((size) => {
        it(`should set data-size='${size}'`, () => {
          render(<InputChip size={size}>Oslo</InputChip>);
          expect(screen.getByRole("button")).toHaveAttribute("data-size", size);
        });
      });
    });

    it("should call onClick when activated", async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(<InputChip onClick={onClick}>Oslo</InputChip>);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
