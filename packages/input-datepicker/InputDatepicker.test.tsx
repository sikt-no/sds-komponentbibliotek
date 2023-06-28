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
        "sds-input sds-input-datepicker"
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should show error text", async () => {
      render(
        <InputDatepicker
          label="test-label"
          errorText="Error"
          data-testid="test"
        />
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
        />
      );
      const helpElement = screen.getByText("Help");
      expect(helpElement).toBeInTheDocument();
      expect(helpElement).toBeVisible();
    });

    it("should have a calendar", async () => {
      const user = userEvent.setup();

      const { container } = render(
        <InputDatepicker label="Foo" data-testid="test" />
      );

      const calendarButton = screen.getByRole("button");
      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();

      await act(async () => {
        await user.click(calendarButton);
      });

      expect(screen.getByTestId("test-calendar")).toBeInTheDocument();

      const calendarDateCell = container.getElementsByClassName(
        "sds-input-datepicker__calendar-cell"
      )[0];
      await act(async () => {
        await user.click(calendarDateCell);
      });

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();
    });
  });
});
