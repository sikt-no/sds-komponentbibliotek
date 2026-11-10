import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Pagination } from "./Pagination";
import { type PaginationSize } from "./PaginationContext";

const sizes: PaginationSize[] = ["standard", "compact"];

describe("Pagination", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`size=${size} should be accessible`, async () => {
        const { container } = render(
          <Pagination
            aria-label="Paginering"
            size={size}
            count={10}
            currentIndex={2}
            onPageChange={jest.fn()}
          />,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("with disabled edges should be accessible", async () => {
      const { container } = render(
        <Pagination
          aria-label="Paginering"
          count={1}
          currentIndex={0}
          onPageChange={jest.fn()}
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("auto mode", () => {
    it("renders a nav with the given label and sd3-pagination class", () => {
      render(
        <Pagination
          aria-label="Paginering"
          count={5}
          currentIndex={0}
          onPageChange={jest.fn()}
        />,
      );
      expect(
        screen.getByRole("navigation", { name: "Paginering" }),
      ).toHaveClass("sd3-pagination");
    });

    it("merges className", () => {
      render(
        <Pagination
          aria-label="Paginering"
          className="test-class-name"
          count={5}
          currentIndex={0}
          onPageChange={jest.fn()}
        />,
      );
      expect(screen.getByRole("navigation")).toHaveClass(
        "sd3-pagination test-class-name",
      );
    });

    describe("size", () => {
      sizes.forEach((size) => {
        it(`sets data-size="${size}" on the nav`, () => {
          render(
            <Pagination
              aria-label="Paginering"
              size={size}
              count={5}
              currentIndex={0}
              onPageChange={jest.fn()}
            />,
          );
          expect(screen.getByRole("navigation")).toHaveAttribute(
            "data-size",
            size,
          );
        });
      });

      it("defaults to standard", () => {
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={0}
            onPageChange={jest.fn()}
          />,
        );
        expect(screen.getByRole("navigation")).toHaveAttribute(
          "data-size",
          "standard",
        );
      });
    });

    it("renders page buttons for every page under the limit", () => {
      render(
        <Pagination
          aria-label="Paginering"
          count={3}
          currentIndex={1}
          onPageChange={jest.fn()}
        />,
      );
      expect(screen.getByRole("button", { name: "1" })).toBeVisible();
      expect(screen.getByRole("button", { name: "2" })).toBeVisible();
      expect(screen.getByRole("button", { name: "3" })).toBeVisible();
    });

    it("sets aria-current='page' on the active page", () => {
      render(
        <Pagination
          aria-label="Paginering"
          count={5}
          currentIndex={2}
          onPageChange={jest.fn()}
        />,
      );
      expect(screen.getByRole("button", { name: "3" })).toHaveAttribute(
        "aria-current",
        "page",
      );
    });

    it("fires onPageChange with the clicked page index", async () => {
      const onPageChange = jest.fn();
      const user = userEvent.setup();
      render(
        <Pagination
          aria-label="Paginering"
          count={5}
          currentIndex={0}
          onPageChange={onPageChange}
        />,
      );
      await user.click(screen.getByRole("button", { name: "3" }));
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it("does not fire onPageChange when clicking the current page", async () => {
      const onPageChange = jest.fn();
      const user = userEvent.setup();
      render(
        <Pagination
          aria-label="Paginering"
          count={5}
          currentIndex={2}
          onPageChange={onPageChange}
        />,
      );
      await user.click(screen.getByRole("button", { name: "3" }));
      expect(onPageChange).not.toHaveBeenCalled();
    });

    describe("previous / next", () => {
      it("renders the default 'Forrige' and 'Neste' labels", () => {
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={2}
            onPageChange={jest.fn()}
          />,
        );
        expect(screen.getByRole("button", { name: "Forrige" })).toBeVisible();
        expect(screen.getByRole("button", { name: "Neste" })).toBeVisible();
      });

      it("accepts custom labels via i18n", () => {
        render(
          <Pagination
            aria-label="Pagination"
            count={5}
            currentIndex={2}
            onPageChange={jest.fn()}
            i18n={{ previousLabel: "Previous", nextLabel: "Next" }}
          />,
        );
        expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
        expect(screen.getByRole("button", { name: "Next" })).toBeVisible();
      });

      it("accepts a locale preset via i18n", () => {
        render(
          <Pagination
            aria-label="Pagination"
            count={3}
            currentIndex={0}
            onPageChange={jest.fn()}
            i18n="en"
          />,
        );
        expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
        expect(screen.getByRole("button", { name: "Next" })).toBeVisible();
      });

      it("disables previous on the first page", () => {
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={0}
            onPageChange={jest.fn()}
          />,
        );
        expect(screen.getByRole("button", { name: "Forrige" })).toHaveAttribute(
          "aria-disabled",
          "true",
        );
      });

      it("disables next on the last page", () => {
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={4}
            onPageChange={jest.fn()}
          />,
        );
        expect(screen.getByRole("button", { name: "Neste" })).toHaveAttribute(
          "aria-disabled",
          "true",
        );
      });

      it("calls onPageChange with currentIndex - 1 when previous is clicked", async () => {
        const onPageChange = jest.fn();
        const user = userEvent.setup();
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={2}
            onPageChange={onPageChange}
          />,
        );
        await user.click(screen.getByRole("button", { name: "Forrige" }));
        expect(onPageChange).toHaveBeenCalledWith(1);
      });

      it("calls onPageChange with currentIndex + 1 when next is clicked", async () => {
        const onPageChange = jest.fn();
        const user = userEvent.setup();
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={2}
            onPageChange={onPageChange}
          />,
        );
        await user.click(screen.getByRole("button", { name: "Neste" }));
        expect(onPageChange).toHaveBeenCalledWith(3);
      });

      it("does not fire onPageChange when a disabled edge is clicked", async () => {
        const onPageChange = jest.fn();
        const user = userEvent.setup();
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={0}
            onPageChange={onPageChange}
          />,
        );
        await user.click(screen.getByRole("button", { name: "Forrige" }));
        expect(onPageChange).not.toHaveBeenCalled();
      });

      it("does not fire onPageChange when disabled next is clicked", async () => {
        const onPageChange = jest.fn();
        const user = userEvent.setup();
        render(
          <Pagination
            aria-label="Paginering"
            count={5}
            currentIndex={4}
            onPageChange={onPageChange}
          />,
        );
        await user.click(screen.getByRole("button", { name: "Neste" }));
        expect(onPageChange).not.toHaveBeenCalled();
      });
    });

    it("renders an ellipsis when the range exceeds limit", () => {
      render(
        <Pagination
          aria-label="Paginering"
          count={10}
          currentIndex={0}
          onPageChange={jest.fn()}
          limit={5}
        />,
      );
      expect(screen.getByText("…")).toBeVisible();
    });
  });
});
