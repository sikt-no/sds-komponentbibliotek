import { Fieldset } from "@sikt/sds-form";
import { RadioFieldset } from "@sikt/sds-radio";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { FilterListItem } from "./FilterListItem";

describe("FilterListItem", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FilterListItem
          type="checkbox"
          label="Has good grades"
          value="hasGoodGrades"
          onChange={(event) => {
            console.log(event.target.value);
          }}
          count={3}
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should handle change with checkbox", async () => {
      const user = userEvent.setup();
      let value = "false";

      render(
        <Fieldset>
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="true"
            onChange={(event) => {
              value = event.target.value;
            }}
            count={3}
          />
        </Fieldset>,
      );

      expect(screen.getByText("Has good grades")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
      expect(value).toBe("false");
      await user.click(screen.getByTestId("filter-list-item-input"));
      expect(value).toBe("true");
    });

    it("should handle change with radio", async () => {
      const user = userEvent.setup();
      let value = "sweden";

      render(
        <RadioFieldset
          onChange={(event) => {
            value = event.target.value;
          }}
        >
          <FilterListItem
            type="radio"
            label="Norway"
            value="norway"
            count={0}
          />
        </RadioFieldset>,
      );

      expect(screen.getByText("Norway")).toBeInTheDocument();
      expect(screen.getByText("0")).toBeInTheDocument();
      expect(value).toBe("sweden");
      await user.click(screen.getByTestId("filter-list-item-input"));
      expect(value).toBe("norway");
    });
  });
});
