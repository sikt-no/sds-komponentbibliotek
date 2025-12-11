import { parseDate } from "@internationalized/date";
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { InputDaterangepicker } from "./InputDaterangepicker";

describe("InputDaterangepicker", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<InputDaterangepicker label="Foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<InputDaterangepicker label="Foo" data-testid="test" />);

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-input sds-input-datepicker",
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
      expect(screen.queryByLabelText("Tøm datofelt")).not.toBeInTheDocument();
    });

    it("should show error text", async () => {
      render(
        <InputDaterangepicker
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
        <InputDaterangepicker
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

      render(<InputDaterangepicker label="Foo" data-testid="test" />);

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();

      const calendarButton = screen.getByRole("button");
      await user.click(calendarButton);

      expect(screen.getByTestId("test-calendar")).toBeInTheDocument();

      const calendarCell = screen.getAllByText("1", {
        selector: ".sds-input-datepicker__calendar-cell",
      })[0];

      await user.click(calendarCell);
      await user.click(calendarCell);

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();

      await act(async () => {
        calendarButton.focus();
      });
      await user.keyboard("[Enter]");

      expect(screen.getByTestId("test-calendar")).toBeInTheDocument();
    });

    it("should close calendar on keydown Escape", async () => {
      const user = userEvent.setup();
      render(<InputDaterangepicker label="Foo" data-testid="test" />);
      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();

      const calendarButton = screen.getByRole("button");
      await user.click(calendarButton);

      expect(screen.getByTestId("test-calendar")).toBeInTheDocument();

      await user.keyboard("[Escape]");

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();
    });

    it("should close calendar on outside click", async () => {
      const user = userEvent.setup();
      render(<InputDaterangepicker label="Foo" data-testid="test" />);
      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();

      const calendarButton = screen.getByRole("button");
      await user.click(calendarButton);

      expect(screen.getByTestId("test-calendar")).toBeInTheDocument();

      await user.click(document.body);

      expect(screen.queryByTestId("test-calendar")).not.toBeInTheDocument();
    });

    it("should support aria-labelledby", () => {
      render(
        <>
          <div id="label">Foo</div>
          <InputDaterangepicker aria-labelledby="label" />
        </>,
      );

      expect(screen.getByRole("group", { name: "Foo" })).toBeInTheDocument();
    });

    it("should render a clear button", async () => {
      const dateString = new Date().toISOString().substring(0, 10);
      render(
        <InputDaterangepicker
          label="Foo"
          value={{
            start: parseDate(dateString),
            end: parseDate(dateString),
          }}
          clearActionProps={{ onClick: jest.fn() }}
        />,
      );

      expect(screen.getByLabelText("Tøm datofelt")).toBeInTheDocument();
    });

    it("should call click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      const dateString = new Date().toISOString().substring(0, 10);
      render(
        <InputDaterangepicker
          label="Foo"
          value={{
            start: parseDate(dateString),
            end: parseDate(dateString),
          }}
          clearActionProps={{ "aria-label": "Bar", onClick: clickHandler }}
        />,
      );

      await user.click(screen.getByLabelText("Bar"));

      expect(clickHandler).toHaveBeenCalled();
      expect(
        screen.getByRole("spinbutton", { name: "dag, Startdato, Foo" }),
      ).toHaveFocus();
    });

    it("should call click handler on keydown Space", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      const dateString = new Date().toISOString().substring(0, 10);
      render(
        <InputDaterangepicker
          label="Foo"
          value={{
            start: parseDate(dateString),
            end: parseDate(dateString),
          }}
          clearActionProps={{ "aria-label": "Bar", onClick: clickHandler }}
        />,
      );

      await act(async () => {
        screen.getByLabelText("Bar").focus();
      });
      await user.keyboard("[Space]");

      expect(clickHandler).toHaveBeenCalled();
      expect(
        screen.getByRole("spinbutton", { name: "dag, Startdato, Foo" }),
      ).toHaveFocus();
    });

    it("should call click handler on keydown Enter", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      const dateString = new Date().toISOString().substring(0, 10);
      render(
        <InputDaterangepicker
          label="Foo"
          value={{
            start: parseDate(dateString),
            end: parseDate(dateString),
          }}
          clearActionProps={{ "aria-label": "Bar", onClick: clickHandler }}
        />,
      );

      await act(async () => {
        screen.getByLabelText("Bar").focus();
      });
      await user.keyboard("[Enter]");

      expect(clickHandler).toHaveBeenCalled();
      expect(
        screen.getByRole("spinbutton", { name: "dag, Startdato, Foo" }),
      ).toHaveFocus();
    });
  });
});
