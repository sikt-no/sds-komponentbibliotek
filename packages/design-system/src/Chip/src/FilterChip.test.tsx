import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { FilterChip } from "./FilterChip";

const sizes = ["standard", "compact"] as const;
const pressedStates = [false, true] as const;

describe("FilterChip", () => {
  describe("a11y", () => {
    pressedStates.forEach((pressed) => {
      it(`pressed=${pressed} should be accessible`, async () => {
        const { container } = render(
          <FilterChip pressed={pressed}>Oslo</FilterChip>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    it("should render as a button with the sd3-chip class", () => {
      render(<FilterChip>Oslo</FilterChip>);
      expect(screen.getByRole("button", { name: "Oslo" })).toHaveClass(
        "sd3-chip",
      );
    });

    it("should default to type=button", () => {
      render(<FilterChip>Oslo</FilterChip>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("should merge className", () => {
      render(<FilterChip className="test-class-name">Oslo</FilterChip>);
      expect(screen.getByRole("button")).toHaveClass(
        "sd3-chip test-class-name",
      );
    });

    describe("size", () => {
      sizes.forEach((size) => {
        it(`should set data-size='${size}'`, () => {
          render(<FilterChip size={size}>Oslo</FilterChip>);
          expect(screen.getByRole("button")).toHaveAttribute("data-size", size);
        });
      });
    });

    describe("pressed", () => {
      it("should expose aria-pressed=false by default", () => {
        render(<FilterChip>Oslo</FilterChip>);
        expect(screen.getByRole("button")).toHaveAttribute(
          "aria-pressed",
          "false",
        );
      });

      it("should expose aria-pressed=true when pressed", () => {
        render(<FilterChip pressed>Oslo</FilterChip>);
        expect(screen.getByRole("button")).toHaveAttribute(
          "aria-pressed",
          "true",
        );
      });
    });

    it("should call onClick when activated", async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(<FilterChip onClick={onClick}>Oslo</FilterChip>);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
