import { act, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { InputDatepicker } from "./InputDatepicker";
import userEvent from "@testing-library/user-event";

describe("DatePicker", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<InputDatepicker label="Foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<InputDatepicker label="Foo" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-input sds-input-datepicker",
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should show error text", async () => {
      render(
        <InputDatepicker
          label="test-label"
          errorText="Error"
          data-testid="test"
        />,
      );
      const errorEl = screen.getByText("Error");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toBeVisible();
    });

    it("should show help text", async () => {
      render(
        <InputDatepicker
          label="test-label"
          helpText="Help"
          data-testid="test"
        />,
      );
      const helpElement = screen.getByText("Help");
      expect(helpElement).toBeInTheDocument();
      expect(helpElement).toBeVisible();
    });

    it("should have a calendar", async () => {
      const user = userEvent.setup();

      const { container } = render(
        <InputDatepicker label="Foo" data-testid="test" />,
      );

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();

      const calendarButton = screen.getByRole("button");
      await act(async () => {
        await user.click(calendarButton);
      });

      expect(screen.getByTestId("test-calendar")).toBeInTheDocument();

      const calendarDateCells = container.getElementsByClassName(
        "sds-input-datepicker__calendar-cell",
      );
      const calendarDateCell = Array.from(calendarDateCells).filter(
        (element) => element.getAttribute("aria-disabled") !== "true",
      )[0];

      await act(async () => {
        await user.click(calendarDateCell);
      });

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();
    });
  });
});
