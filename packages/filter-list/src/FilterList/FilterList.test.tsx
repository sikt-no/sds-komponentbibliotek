import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { FilterListItem } from "../FilterListItem/FilterListItem";
import { FilterList } from "./FilterList";

describe("FilterList", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FilterList>
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="hasGoodGrades"
            count={3}
          />
        </FilterList>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
