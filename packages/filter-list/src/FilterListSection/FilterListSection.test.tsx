import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { FilterListItem } from "../FilterListItem/FilterListItem";
import { FilterListSection } from "./FilterListSection";

describe("FilterListSection", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FilterListSection label="Not expandable section">
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="hasGoodGrades"
            count={3}
          />
        </FilterListSection>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should not render as expandable", async () => {
      render(
        <FilterListSection label="Not expandable section">
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="hasGoodGrades"
            count={3}
          />
        </FilterListSection>,
      );

      expect(screen.getByText("Not expandable section")).toBeInTheDocument();
      expect(screen.getByText("Has good grades")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("should render as expandable", async () => {
      const user = userEvent.setup();
      let expandedState = true;

      const { container } = render(
        <FilterListSection
          label="Expandable section"
          expandable={{
            expanded: expandedState,
            onExpandToggle: (expanded) => {
              expandedState = expanded;
            },
          }}
          count={2}
        >
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="hasGoodGrades"
            count={1}
          />
        </FilterListSection>,
      );

      expect(screen.getByText("Expandable section")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(
        container.getElementsByClassName("sds-filter-list-section__header")[0],
      ).toHaveClass(
        "sds-filter-list-section__header sds-filter-list-section__header--expandable",
      );

      expect(expandedState).toBeTruthy();

      await user.click(screen.getByText("Expandable section"));

      expect(expandedState).toBeFalsy();
      expect(screen.getByText("Has good grades")).toBeInTheDocument();
    });
  });
});
