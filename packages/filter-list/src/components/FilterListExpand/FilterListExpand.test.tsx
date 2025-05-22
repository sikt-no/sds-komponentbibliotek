import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { FilterListExpand } from "./FilterListExpand";

describe("FilterListExpand", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FilterListExpand
          header="Expand header"
          ariaLabelExpandToggle="Expand header"
        >
          Content
        </FilterListExpand>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should not render content", async () => {
      const user = userEvent.setup();
      let openState = false;

      render(
        <FilterListExpand
          header="Expand header"
          ariaLabelExpandToggle="Expand toggle"
          initialExpanded={openState}
          onExpandToggle={(open) => {
            openState = open;
          }}
        >
          Content
        </FilterListExpand>,
      );

      expect(screen.getByText("Expand header")).toBeInTheDocument();
      expect(screen.queryByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--closed-no-anim",
      );

      expect(openState).toBeFalsy();
      await user.click(screen.getByLabelText("Expand toggle"));
      expect(openState).toBeTruthy();
      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--open",
      );
    });

    it("should render content", async () => {
      const user = userEvent.setup();
      let openState = true;

      render(
        <FilterListExpand
          header="Expand header"
          ariaLabelExpandToggle="Expand toggle"
          initialExpanded={openState}
          onExpandToggle={(open) => {
            openState = open;
          }}
        >
          Content
        </FilterListExpand>,
      );
      expect(screen.getByText("Expand header")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--open-no-anim",
      );
      expect(openState).toBeTruthy();
      await user.click(screen.getByLabelText("Expand toggle"));
      expect(openState).toBeFalsy();
      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--closed",
      );
    });

    it("should have clickable header", async () => {
      const user = userEvent.setup();
      let openState = false;

      const { container } = render(
        <FilterListExpand
          header="Expand header"
          clickableHeader
          onExpandToggle={(open) => {
            openState = open;
          }}
        >
          Content
        </FilterListExpand>,
      );

      expect(
        container.getElementsByClassName(
          "sds-filter-list-expand__header-clickable",
        ).length,
      ).toBe(1);
      expect(
        container.getElementsByClassName(
          "sds-filter-list-expand--icon-container",
        ).length,
      ).toBe(1);
      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--closed-no-anim",
      );

      expect(openState).toBeFalsy();
      await user.click(screen.getByText("Expand header"));
      expect(openState).toBeTruthy();

      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--open",
      );
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("should not have clickable header, button only", async () => {
      const user = userEvent.setup();
      let openState = false;

      const { container } = render(
        <FilterListExpand
          header="Expand header"
          ariaLabelExpandToggle="Expand toggle"
          onExpandToggle={(open) => {
            openState = open;
          }}
        >
          Content
        </FilterListExpand>,
      );

      expect(
        container.getElementsByClassName("sds-filter-list-expand__header")
          .length,
      ).toBe(1);
      expect(screen.getByLabelText("Expand toggle")).toBeInTheDocument();
      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--closed-no-anim",
      );
      expect(openState).toBeFalsy();
      await user.click(screen.getByLabelText("Expand toggle"));

      expect(openState).toBeTruthy();
      expect(screen.getByText("Content")).toHaveClass(
        "sds-filter-list-expand__content sds-filter-list-expand__content--open",
      );
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("should have clickable header by tab + keyboard", async () => {
      const user = userEvent.setup();
      let openState = false;

      render(
        <FilterListExpand
          header="Expand header"
          ariaLabelExpandToggle="Expand toggle"
          clickableHeader
          onExpandToggle={(open) => {
            openState = open;
          }}
        >
          Content
        </FilterListExpand>,
      );

      expect(openState).toBeFalsy();
      await user.keyboard("[Tab]");
      await user.keyboard("[Enter]");
      expect(openState).toBeTruthy();
    });

    it("should have clickable button in header by tab + button", async () => {
      const user = userEvent.setup();
      let openState = false;

      render(
        <FilterListExpand
          header="Expand header"
          ariaLabelExpandToggle="Expand header"
          onExpandToggle={(open) => {
            openState = open;
          }}
        >
          Content
        </FilterListExpand>,
      );

      expect(openState).toBeFalsy();
      await user.keyboard("[Tab]");
      await user.keyboard("[Enter]");
      expect(openState).toBeTruthy();
    });
  });
});
