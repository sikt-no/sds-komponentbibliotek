import { ArchiveIcon } from "@sikt/sds-icons";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { FilterListIconLabel } from "./FilterListIconLabel";

describe("FilterListIconLabel", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <FilterListIconLabel
          icon={<ArchiveIcon />}
          label="Label to go with icon"
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
