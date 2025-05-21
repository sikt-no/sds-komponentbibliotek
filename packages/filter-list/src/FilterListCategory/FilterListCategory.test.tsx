import { ArchiveIcon } from "@sikt/sds-icons";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { FilterListItem } from "../FilterListItem/FilterListItem";
import { FilterListCategory } from "./FilterListCategory";

describe("FilterListCategory", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FilterListCategory
          label="Grade filters"
          icon={<ArchiveIcon />}
          indeterminate={false}
          checked={false}
          expanded={false}
          disabled
        >
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="hasGoodGrades"
            count={3}
          />
        </FilterListCategory>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should not render expanded content", async () => {
      const user = userEvent.setup();
      let expandedState = false;

      render(
        <FilterListCategory
          label="Grade filters"
          icon={<ArchiveIcon />}
          indeterminate={false}
          checked={false}
          expanded={expandedState}
          onExpandToggle={(expanded) => {
            expandedState = expanded;
          }}
          disabled
          count={1}
        >
          Content
        </FilterListCategory>,
      );

      expect(screen.getByText("Grade filters")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();

      /* TODO: should not need selector when fixed aria-label on expand/collapse FilterListExpand.tsx:90 */
      await user.click(
        screen.getByLabelText("Grade filters", { selector: "button" }),
      );

      expect(expandedState).toBeTruthy();
    });

    it("should render expanded content", async () => {
      const user = userEvent.setup();
      let expandedState = true;

      render(
        <FilterListCategory
          label="Grade filters"
          indeterminate={false}
          checked={false}
          expanded={expandedState}
          onExpandToggle={(expanded) => {
            expandedState = expanded;
          }}
          count={2}
        >
          Content
        </FilterListCategory>,
      );

      expect(screen.getByText("Grade filters")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
      expect(expandedState).toBeTruthy();

      /* TODO: should not need selector when fixed aria-label on expand/collapse FilterListExpand.tsx:90 */
      await user.click(
        screen.getByLabelText("Grade filters", { selector: "button" }),
      );

      expect(expandedState).toBeFalsy();
    });

    it("should toggle category", async () => {
      const user = userEvent.setup();
      let checked = false;

      render(
        <FilterListCategory
          label="Grade filters"
          onCategoryToggle={(check: boolean) => (checked = check)}
          checked={checked}
          indeterminate={false}
        >
          Content
        </FilterListCategory>,
      );

      expect(screen.getByText("Grade filters")).toBeInTheDocument();
      /* TODO: should not need selector when fixed aria-label on expand/collapse FilterListExpand.tsx:90 */
      await user.click(
        screen.getByLabelText("Grade filters", { selector: "input" }),
      );
      expect(checked).toBeTruthy();
    });
  });
});
